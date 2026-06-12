import { useEffect, useRef } from "react";

type ParticleType = "dot" | "line" | "accent";
type LayerKey = "background" | "middle" | "foreground";

interface Particle {
  id: number;
  layer: LayerKey;
  type: ParticleType;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  color: string;
  length?: number;
  angle?: number;
  rotationSpeed?: number;
  accentShape?: number;
  parallaxFactor: number;
  driftPhase: number;
}

const palette = ["#53AD6F", "#428B59", "#326B67", "#3BA8E5", "#61D4C8"];

const layerConfig: Record<LayerKey, { count: number; sizeRange: [number, number]; speedRange: [number, number]; alphaRange: [number, number]; depth: number }> = {
  background: { count: 22, sizeRange: [2, 3], speedRange: [8, 12], alphaRange: [0.1, 0.16], depth: 0.28 },
  middle: { count: 18, sizeRange: [3, 4.5], speedRange: [12, 18], alphaRange: [0.14, 0.24], depth: 0.52 },
  foreground: { count: 14, sizeRange: [4.5, 6], speedRange: [16, 22], alphaRange: [0.2, 0.36], depth: 0.78 },
};

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

const randomColor = () => palette[Math.floor(Math.random() * palette.length)];

const hexToRgb = (hex: string) => {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(sanitized, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

const colorWithAlpha = (hex: string, alpha: number) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const createExclusion = (width: number, height: number) => ({
  x: 0,
  y: height * 0.12,
  width: width * 0.45,
  height: height * 0.76,
});

const pointInExclusion = (x: number, y: number, exclusion: { x: number; y: number; width: number; height: number }) =>
  x >= exclusion.x && x <= exclusion.x + exclusion.width && y >= exclusion.y && y <= exclusion.y + exclusion.height;

const selectStartPosition = (width: number, height: number, exclusion: ReturnType<typeof createExclusion>) => {
  const edge = Math.random();
  const margin = 18;
  let x: number;
  let y: number;

  if (edge < 0.45) {
    x = randomBetween(width * 0.55, width - margin);
    y = randomBetween(margin, height - margin);
  } else if (edge < 0.7) {
    x = randomBetween(margin, width - margin);
    y = randomBetween(margin, height * 0.18);
  } else if (edge < 0.85) {
    x = randomBetween(margin, width * 0.22);
    y = randomBetween(margin, height * 0.22);
  } else {
    x = randomBetween(width * 0.68, width - margin);
    y = randomBetween(height * 0.08, height - margin);
  }

  if (pointInExclusion(x, y, exclusion)) {
    x = Math.max(x, exclusion.x + exclusion.width + randomBetween(30, 56));
  }

  return { x, y };
};

const createParticle = (id: number, width: number, height: number, layer: LayerKey, exclusion: ReturnType<typeof createExclusion>): Particle => {
  const config = layerConfig[layer];
  const typeRoll = Math.random();
  const type: ParticleType = typeRoll < 0.55 ? "dot" : typeRoll < 0.9 ? "line" : "accent";
  const color = randomColor();
  const size = randomBetween(config.sizeRange[0], config.sizeRange[1]);
  const angle = type === "line" ? randomBetween(-Math.PI / 6, Math.PI / 6) : 0;
  const length = type === "line" ? randomBetween(20, 80) : undefined;
  const position = selectStartPosition(width, height, exclusion);
  const speed = randomBetween(config.speedRange[0], config.speedRange[1]);
  const direction = randomBetween(0, Math.PI * 2);

  return {
    id,
    layer,
    type,
    x: position.x,
    y: position.y,
    vx: Math.cos(direction) * speed,
    vy: Math.sin(direction) * speed,
    size,
    baseAlpha: randomBetween(config.alphaRange[0], config.alphaRange[1]),
    alpha: randomBetween(config.alphaRange[0], config.alphaRange[1]),
    color,
    length,
    angle,
    rotationSpeed: type === "line" ? randomBetween(0.01, 0.03) : undefined,
    accentShape: type === "accent" ? (Math.random() < 0.5 ? 0 : 1) : undefined,
    parallaxFactor: config.depth,
    driftPhase: Math.random() * Math.PI * 2,
  };
};

const createParticleField = (width: number, height: number, exclusion: ReturnType<typeof createExclusion>) => {
  const particles: Particle[] = [];
  let id = 0;
  (Object.keys(layerConfig) as LayerKey[]).forEach((layer) => {
    const config = layerConfig[layer];
    for (let i = 0; i < config.count; i += 1) {
      particles.push(createParticle(id++, width, height, layer, exclusion));
    }
  });
  return particles;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const lerp = (start: number, end: number, amount: number) => start + (end - start) * amount;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);
      const exclusion = createExclusion(rect.width, rect.height);
      particlesRef.current = createParticleField(rect.width, rect.height, exclusion);
      drawFrame(0, rect.width, rect.height, exclusion, true);
    };

    const onPointerMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
      mouseRef.current.targetX = clamp(x * 2, -1, 1);
      mouseRef.current.targetY = clamp(y * 2, -1, 1);
    };

    const onPointerLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    const drawFrame = (
      timestamp: number,
      width: number,
      height: number,
      exclusion: ReturnType<typeof createExclusion>,
      initial = false,
    ) => {
      const delta = initial ? 0 : Math.min((timestamp - lastTimeRef.current) / 1000, 0.032);
      lastTimeRef.current = timestamp || performance.now();
      const parallaxX = lerp(mouseRef.current.x, mouseRef.current.targetX * 10, 0.08);
      const parallaxY = lerp(mouseRef.current.y, mouseRef.current.targetY * 10, 0.08);
      mouseRef.current.x = parallaxX;
      mouseRef.current.y = parallaxY;

      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach((particle) => {
        const speedScale = particle.layer === "background" ? 0.14 : particle.layer === "middle" ? 0.22 : 0.32;
        particle.x += particle.vx * delta * speedScale;
        particle.y += particle.vy * delta * speedScale;

        if (particle.type === "line" && typeof particle.rotationSpeed === "number") {
          particle.angle = (particle.angle ?? 0) + particle.rotationSpeed * delta;
        }

        particle.alpha = particle.baseAlpha * (0.72 + Math.sin((timestamp + particle.driftPhase) * 0.0018) * 0.18);

        const margin = 30;
        if (particle.x < -margin) particle.x = width + margin;
        if (particle.x > width + margin) particle.x = -margin;
        if (particle.y < -margin) particle.y = height + margin;
        if (particle.y > height + margin) particle.y = -margin;

        if (pointInExclusion(particle.x, particle.y, exclusion)) {
          particle.x = Math.max(particle.x, exclusion.x + exclusion.width + randomBetween(30, 56));
        }

        const drawX = particle.x + particle.parallaxFactor * parallaxX;
        const drawY = particle.y + particle.parallaxFactor * parallaxY;
        const alpha = clamp(particle.alpha, 0.1, 0.4);

        ctx.globalAlpha = alpha;
        ctx.strokeStyle = colorWithAlpha(particle.color, alpha);
        ctx.fillStyle = colorWithAlpha(particle.color, alpha * 1.35);

        if (particle.type === "dot") {
          ctx.beginPath();
          ctx.arc(drawX, drawY, particle.size * 0.95, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === "line" && particle.length) {
          ctx.lineWidth = Math.max(1, particle.size * 0.36);
          ctx.beginPath();
          const dx = Math.cos(particle.angle ?? 0) * particle.length;
          const dy = Math.sin(particle.angle ?? 0) * particle.length;
          ctx.moveTo(drawX - dx * 0.5, drawY - dy * 0.5);
          ctx.lineTo(drawX + dx * 0.5, drawY + dy * 0.5);
          ctx.stroke();
        } else if (particle.type === "accent") {
          const accentSize = particle.size * 1.5;
          ctx.save();
          ctx.translate(drawX, drawY);
          ctx.rotate((particle.angle ?? 0) * 0.4);
          ctx.fillRect(-accentSize * 0.45, -accentSize * 0.12, accentSize * 0.9, accentSize * 0.24);
          ctx.restore();
        }
      });

      if (!prefersReducedMotion) {
        animationFrameRef.current = window.requestAnimationFrame((next) => drawFrame(next, width, height, exclusion));
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      const rect = wrapper.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const exclusion = createExclusion(rect.width, rect.height);
      particlesRef.current = createParticleField(rect.width, rect.height, exclusion);
      drawFrame(performance.now(), rect.width, rect.height, exclusion, true);
    });

    resizeObserver.observe(wrapper);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseleave", onPointerLeave);
    if (!prefersReducedMotion) {
      animationFrameRef.current = window.requestAnimationFrame((timestamp) => {
        const rect = wrapper.getBoundingClientRect();
        drawFrame(timestamp, rect.width, rect.height, createExclusion(rect.width, rect.height), true);
      });
    }

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseleave", onPointerLeave);
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={wrapperRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
    </div>
  );
}
