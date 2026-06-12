// Reusable subtle engineering atmosphere visuals.
// SVG-only, no heavy libs. Designed to sit behind content.

export function NetworkLines({
  className = "",
  density = 14,
  seed = 1,
}: {
  className?: string;
  density?: number;
  seed?: number;
}) {
  // Deterministic pseudo-random for SSR stability
  const rand = (i: number) => {
    const x = Math.sin(i * 9301 + seed * 49297) * 233280;
    return x - Math.floor(x);
  };
  const nodes = Array.from({ length: density }).map((_, i) => ({
    x: rand(i + 1) * 1200,
    y: rand(i + 50) * 600,
  }));
  // connect nearest neighbours
  const links: { a: number; b: number; d: number }[] = [];
  nodes.forEach((n, i) => {
    nodes.forEach((m, j) => {
      if (j <= i) return;
      const d = Math.hypot(n.x - m.x, n.y - m.y);
      if (d < 260) links.push({ a: i, b: j, d });
    });
  });

  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nl-line" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.15 150)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.62 0.15 150)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="oklch(0.62 0.15 150)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {links.map((l, i) => {
        const a = nodes[l.a];
        const b = nodes[l.b];
        return (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="oklch(0.55 0.02 220)"
            strokeOpacity={0.18}
            strokeWidth={0.6}
          />
        );
      })}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={1.4} fill="oklch(0.45 0.02 220)" opacity={0.5} />
          {i % 4 === 0 && (
            <circle cx={n.x} cy={n.y} r={3} fill="oklch(0.62 0.15 150)" opacity={0.35}>
              <animate attributeName="opacity" values="0.1;0.55;0.1" dur={`${4 + (i % 5)}s`} repeatCount="indefinite" />
            </circle>
          )}
        </g>
      ))}
    </svg>
  );
}

// Animated infrastructure: layered horizontal lanes with packets traveling along.
export function DataLanes({ className = "" }: { className?: string }) {
  const lanes = [
    { y: 80, dur: "5s", delay: "0s" },
    { y: 160, dur: "7s", delay: "0.8s" },
    { y: 240, dur: "6s", delay: "1.6s" },
    { y: 320, dur: "8s", delay: "0.4s" },
    { y: 400, dur: "5.5s", delay: "2.2s" },
  ];
  return (
    <svg
      viewBox="0 0 800 480"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lane-packet" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.15 150)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.62 0.15 150)" stopOpacity="1" />
          <stop offset="100%" stopColor="oklch(0.62 0.15 150)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {lanes.map((l, i) => (
        <g key={i}>
          <line
            x1="0"
            x2="800"
            y1={l.y}
            y2={l.y}
            stroke="oklch(0.45 0.02 220)"
            strokeOpacity="0.18"
            strokeDasharray="2 6"
          />
          <rect x="-80" y={l.y - 1} width="80" height="2" fill="url(#lane-packet)">
            <animate
              attributeName="x"
              from="-80"
              to="800"
              dur={l.dur}
              begin={l.delay}
              repeatCount="indefinite"
            />
          </rect>
        </g>
      ))}
    </svg>
  );
}
