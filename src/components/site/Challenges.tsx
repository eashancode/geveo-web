const items = [
  { t: "Scaling under pressure", d: "Systems that worked yesterday struggling to meet today's volume, regions and SLAs." },
  { t: "Operational inefficiency", d: "Manual processes, siloed tools and brittle integrations slowing teams down." },
  { t: "Disconnected systems", d: "Disparate platforms, fragmented data and rising integration debt across the business." },
  { t: "Security & compliance", d: "Rising regulatory expectations and threat surface across cloud and digital channels." },
  { t: "Customer experience gaps", d: "Outdated digital experiences that no longer match customer or employee expectations." },
  { t: "Transformation execution", d: "Strategy on paper but stalled delivery — programmes that need outcome-driven engineering." },
];

export function Challenges() {
  return (
    <section className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">Why teams partner with us</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.02em] text-balance">
            We understand the real problems behind every digital initiative.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div
              key={i.t}
              className="rounded-2xl border border-border bg-background p-8 card-hover hover:border-[#53ad6f]/40"
            >
              <div className="h-1 w-10 rounded-full bg-[#53ad6f]" />
              <h3 className="mt-5 font-display text-2xl tracking-[-0.01em]">{i.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground text-pretty">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
