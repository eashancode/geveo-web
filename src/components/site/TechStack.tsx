import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import {
  SiAmazonaws,
  SiDocker,
  SiDotnet,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiMicrosoftazure,
} from "react-icons/si";

const groups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    label: "Backend",
    items: [".NET", "Java", "Node.js", "Python"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    label: "AI & ML",
    items: ["OpenAI", "LangChain", "Vector DBs", "RAG"],
  },
  {
    label: "Design & Product",
    items: ["Figma", "Design Systems", "UX Research", "Prototyping"],
  },
];



export function TechStack() {
  return (
    <section className="relative py-24 md:py-32 bg-surface border-y border-border overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 -left-24 h-[480px] w-[480px] rounded-full blur-3xl glow-orb-1"
          style={{ background: "radial-gradient(circle, rgba(83,173,111,0.16), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-24 h-[520px] w-[520px] rounded-full blur-3xl glow-orb-2"
          style={{ background: "radial-gradient(circle, rgba(56,140,220,0.14), transparent 70%)" }}
        />
        <div className="absolute inset-0 blueprint-bg opacity-[0.10] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow">Technology</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.02em] text-balance">
              Technologies That Power Innovation
            </h2>
            <p className="mt-6 text-muted-foreground text-pretty max-w-md">
              Leveraging modern platforms, frameworks, and emerging technologies
              to deliver scalable digital solutions chosen for fit, not fashion.
            </p>

            <div className="mt-8 space-y-4">
              {groups.map((g) => (
                <div key={g.label} className="flex items-start gap-6">
                  <div className="w-28 shrink-0 pt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-[#53ad6f]">
                    {g.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <span
                        key={i}
                        className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-sm hover:border-[#53ad6f] hover:text-[#53ad6f] transition-colors"
                      >
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <TechEcosystem />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Floating Tech Logo Ecosystem ───────────── */

type LogoNode = {
  slug: string;
  name: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  icon: IconType;
  color: string;
  /** depth: 1 = far/small/blurred, 2 = mid, 3 = near/sharp */
  depth: 1 | 2 | 3;
};

// Curated, layered layout — three depth planes for cinematic parallax
const nodes: LogoNode[] = [
  // Far layer — small, soft, slow
  { slug: "figma",       name: "Figma",      icon: SiFigma,         color: "#F24E1E", x: 8,  y: 14, size: 26, delay: 0.2, duration: 11, depth: 1 },
  { slug: "tailwindcss", name: "Tailwind",   icon: SiTailwindcss,  color: "#06B6D4", x: 92, y: 18, size: 24, delay: 1.0, duration: 12, depth: 1 },
  { slug: "github",      name: "GitHub",     icon: SiGithub,        color: "#181717", x: 10, y: 86, size: 26, delay: 2.4, duration: 11, depth: 1 },
  { slug: "firebase",    name: "Firebase",   icon: SiFirebase,      color: "#FFCA28", x: 90, y: 88, size: 24, delay: 1.6, duration: 12, depth: 1 },
  { slug: "redis",       name: "Redis",      icon: SiRedis,         color: "#DC382D", x: 6,  y: 50, size: 24, delay: 3.0, duration: 13, depth: 1 },
  { slug: "mongodb",     name: "MongoDB",    icon: SiMongodb,       color: "#47A248", x: 94, y: 52, size: 26, delay: 2.2, duration: 12, depth: 1 },
  { slug: "langchain",   name: "LangChain",  icon: SiOpenai,        color: "#11A37E", x: 50, y: 4,  size: 24, delay: 1.8, duration: 13, depth: 1 },

  // Mid layer
  { slug: "typescript",      name: "TypeScript", icon: SiTypescript,     color: "#3178C6", x: 24, y: 30, size: 34, delay: 0,   duration: 9,  depth: 2 },
  { slug: "nextdotjs",       name: "Next.js",    icon: SiNextdotjs,     color: "#000000", x: 76, y: 28, size: 36, delay: 1.4, duration: 9,  depth: 2 },
  { slug: "postgresql",      name: "PostgreSQL", icon: SiPostgresql,    color: "#336791", x: 20, y: 70, size: 34, delay: 2.0, duration: 10, depth: 2 },
  { slug: "docker",          name: "Docker",     icon: SiDocker,         color: "#2496ED", x: 80, y: 72, size: 36, delay: 0.8, duration: 9.5, depth: 2 },
  { slug: "python",          name: "Python",     icon: SiPython,         color: "#3776AB", x: 50, y: 92, size: 34, delay: 2.6, duration: 10, depth: 2 },
  { slug: "openai",          name: "OpenAI",     icon: SiOpenai,         color: "#000000", x: 32, y: 14, size: 32, delay: 0.6, duration: 11, depth: 2 },
  { slug: "microsoftazure",  name: "Azure",      icon: SiMicrosoftazure, color: "#0078D4", x: 68, y: 16, size: 32, delay: 1.2, duration: 11, depth: 2 },
  { slug: "openjdk",         name: "Java",       icon: SiJavascript,     color: "#F7DF1E", x: 30, y: 86, size: 32, delay: 2.8, duration: 10, depth: 2 },
  { slug: "dotnet",          name: ".NET",       icon: SiDotnet,         color: "#512BD4", x: 70, y: 88, size: 32, delay: 1.0, duration: 10, depth: 2 },

  // Near layer — larger, sharper, faster drift
  { slug: "react",             name: "React",      icon: SiReact,          color: "#61DAFB", x: 36, y: 48, size: 52, delay: 0,   duration: 7, depth: 3 },
  { slug: "amazonwebservices", name: "AWS",        icon: SiAmazonaws,      color: "#FF9900", x: 64, y: 50, size: 52, delay: 1.2, duration: 7.5, depth: 3 },
  { slug: "nodedotjs",         name: "Node.js",    icon: SiNodedotjs,      color: "#339933", x: 50, y: 32, size: 46, delay: 2.0, duration: 8, depth: 3 },
  { slug: "kubernetes",        name: "Kubernetes", icon: SiKubernetes,      color: "#326CE5", x: 50, y: 68, size: 46, delay: 0.4, duration: 8, depth: 3 },
];

function TechEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax — different planes move at different intensities
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      tx = px;
      ty = py;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--mx", tx.toFixed(3));
          el.style.setProperty("--my", ty.toFixed(3));
          raf = 0;
        });
      }
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full max-w-xl mx-auto"
      style={{ ["--mx" as never]: 0, ["--my" as never]: 0 }}
    >
      <div className="absolute inset-0 rounded-3xl border border-border bg-gradient-to-br from-surface-elevated via-background to-surface-elevated shadow-elev overflow-hidden">
        {/* Cinematic layered glow gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 30%, rgba(83,173,111,0.18), transparent 65%), radial-gradient(50% 45% at 75% 75%, rgba(83,173,111,0.12), transparent 70%), radial-gradient(40% 40% at 50% 50%, rgba(83,173,111,0.08), transparent 75%)",
          }}
        />
        <div className="absolute inset-0 blueprint-bg opacity-30 [mask-image:radial-gradient(circle_at_center,black_25%,transparent_80%)] pointer-events-none" />

        {/* Soft drifting blur orbs for depth */}
        <span
          className="glow-orb-1 pointer-events-none absolute -left-16 top-1/3 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(83,173,111,0.22), transparent 70%)" }}
        />
        <span
          className="glow-orb-2 pointer-events-none absolute -right-12 bottom-0 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(83,173,111,0.14), transparent 70%)" }}
        />

        {/* Edge lighting */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -40px 80px -40px rgba(83,173,111,0.22), inset 0 0 0 1px rgba(83,173,111,0.04)",
          }}
        />

        {/* Header chrome */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground z-10">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#53ad6f] pulse-dot" />
            Technology Ecosystem
          </div>
          <span>geveo://stack</span>
        </div>

        {/* Floating logos — three depth planes */}
        <div className="absolute inset-0">
          {nodes.map((n) => (
            <FloatingLogo key={n.slug} node={n} />
          ))}
        </div>

        {/* Center vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 55%, rgba(255,255,255,0.55) 100%)",
          }}
        />

        {/* Footer chrome */}
        <div className="absolute left-3 right-3 bottom-3 rounded-lg border border-border bg-background/70 backdrop-blur px-3 py-2 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground z-10">
          <span>{nodes.length} technologies · live ecosystem</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#53ad6f] pulse-dot" />
            connected
          </span>
        </div>
      </div>
    </div>
  );
}

function FloatingLogo({ node }: { node: LogoNode }) {
  // Depth-driven styling
  const depthStyles = {
    1: { opacity: 0.32, blur: "blur(0.6px)", parallax: 6, baseOpacity: "30" },
    2: { opacity: 0.55, blur: "blur(0px)",   parallax: 14, baseOpacity: "55" },
    3: { opacity: 0.82, blur: "blur(0px)",   parallax: 26, baseOpacity: "82" },
  }[node.depth];

  const Icon = node.icon;

  return (
    <div
      className="tech-logo group absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        animationDelay: `${node.delay}s`,
        animationDuration: `${node.duration}s`,
        // Mouse parallax — deeper layers shift more
        transform: `translate(calc(-50% + (var(--mx) * ${depthStyles.parallax}px)), calc(-50% + (var(--my) * ${depthStyles.parallax}px)))`,
        filter: depthStyles.blur,
        zIndex: node.depth,
      }}
      title={node.name}
    >
      <div
        className="relative grid place-items-center rounded-2xl border border-border/60 bg-background/50 backdrop-blur-md shadow-soft transition-all duration-500 group-hover:scale-110 group-hover:border-[#53ad6f]/70 group-hover:shadow-[0_12px_36px_-10px_rgba(83,173,111,0.6)] group-hover:bg-background/90"
        style={{ width: node.size + 16, height: node.size + 16 }}
      >
        <Icon
          className="transition-all duration-500"
          style={{
            width: node.size * 0.6,
            height: node.size * 0.6,
            opacity: depthStyles.opacity,
            color: node.color,
          }}
          aria-label={node.name}
          title={node.name}
        />
        <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] tracking-[0.16em] uppercase text-[#53ad6f] opacity-0 group-hover:opacity-100 transition-opacity">
          {node.name}
        </span>
      </div>
    </div>
  );
}
