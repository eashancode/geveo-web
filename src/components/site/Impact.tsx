const cases = [
  {
    sector: "Financial Services",
    title: "Modernising core insurance operations",
    desc: "Faster underwriting, unified data, scalable platform.",
    stat: "3.2×",
    statLabel: "underwriting speed",
  },
  {
    sector: "Higher Education",
    title: "Digital experience platform at scale",
    desc: "Streamlined journeys for students, staff and researchers.",
    stat: "120k",
    statLabel: "monthly users",
  },
  {
    sector: "Enterprise SaaS",
    title: "Cloud-native product re-platform",
    desc: "Improved reliability, faster releases, lower run cost.",
    stat: "99.98%",
    statLabel: "platform uptime",
  },
  {
    sector: "Web 3.0",
    title: "Evernode core platform engineering",
    desc: "Building the foundations of a decentralised cloud.",
    stat: "L1",
    statLabel: "hooks · DApps",
  },
];

export function Impact() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow">Impact</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.02em] text-balance">
              Transformation, measured in outcomes.
            </h2>
          </div>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
            View all engagements <span className="text-primary">→</span>
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <article key={c.title} className="group relative rounded-2xl border border-border bg-card p-8 card-hover">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary">{c.sector}</span>
                <span className="font-mono text-[10px] text-muted-foreground">CASE</span>
              </div>
              <h3 className="mt-6 font-display text-2xl md:text-3xl tracking-[-0.01em] max-w-md">
                {c.title}
              </h3>
              <p className="mt-3 text-muted-foreground text-pretty max-w-md">{c.desc}</p>
              <div className="mt-8 pt-6 border-t border-border flex items-end justify-between">
                <div>
                  <div className="font-display text-4xl tracking-tight">{c.stat}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.statLabel}</div>
                </div>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
