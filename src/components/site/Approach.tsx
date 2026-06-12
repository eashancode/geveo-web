const principles = [
  { n: "01", t: "Partnership over transactions", d: "We invest in long-term relationships. Most of our clients have worked with us for 5+ years." },
  { n: "02", t: "Strategy-first thinking", d: "Every line of code is connected to a business outcome agreed, measurable and visible." },
  { n: "03", t: "Agile, disciplined delivery", d: "Iterative execution with the rigour of senior engineering predictable cadence, transparent progress." },
  { n: "04", t: "Engineered to scale", d: "We design platforms that grow gracefully observable, secure and ready for what's next." },
];

const phases = [
  { n: "01", t: "Discover", d: "Understand your business, users and constraints." },
  { n: "02", t: "Strategy", d: "Shape the roadmap, architecture and delivery model." },
  { n: "03", t: "Design & Build", d: "Validate experience, then ship with senior engineers." },
  { n: "04", t: "Scale", d: "Production-grade rollout with observability from day one." },
  { n: "05", t: "Optimise", d: "Continuous improvement against the outcomes that matter." },
];

export function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Our approach</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.02em] text-balance">
              Engineered partnerships.
              <br />
              <span className="text-muted-foreground">Real outcomes.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md text-pretty">
              We don't just deliver projects we become an extension of your
              team. Our approach blends strategic clarity, modern engineering
              and a genuine commitment to the outcomes you care about.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {principles.map((p) => (
              <div key={p.t} className="relative rounded-2xl border border-border bg-card p-6 card-hover overflow-hidden">
                <span className="absolute -right-2 -top-4 font-display font-semibold text-[64px] leading-none text-[#53ad6f]/10 select-none">
                  {p.n}
                </span>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[#53ad6f]">
                    <span className="h-1 w-6 bg-[#53ad6f] rounded-full" />
                    {p.n}
                  </div>
                  <h3 className="mt-3 font-display text-lg">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Process — Stripe / Linear style step flow */}
        <div className="mt-28">
          <div className="text-center">
            <div className="font-mono text-[11px] tracking-[0.32em] uppercase text-foreground/40">
              Our Delivery Process
            </div>
            <div className="mt-4 flex items-center justify-center gap-3" aria-hidden="true">
              <span className="h-px w-16 bg-foreground/15" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#53ad6f]" />
              <span className="h-px w-16 bg-foreground/15" />
            </div>
            <p className="mt-5 mx-auto max-w-xl text-muted-foreground text-pretty">
              A clear, proven path from idea to impact structured, transparent
              and built around the outcomes you care about.
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute left-0 right-0 top-[34px] px-[6%]">
              <div className="relative h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent">
                <svg viewBox="0 0 1000 2" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                  <line x1="0" x2="1000" y1="1" y2="1" stroke="#53ad6f" strokeOpacity=".7" strokeWidth="1" className="flow-dash" />
                </svg>
              </div>
            </div>

            <ol className="grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-x-6">
              {phases.map((p, i) => (
                <li
                  key={p.n}
                  className="group relative text-center lg:text-left step-in"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {/* Node */}
                  <div className="relative mx-auto lg:mx-0 flex h-[68px] w-[68px] items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-[#53ad6f]/0 group-hover:bg-[#53ad6f]/10 transition-colors duration-300" />
                    <span className="relative grid h-3.5 w-3.5 place-items-center rounded-full bg-[#53ad6f] shadow-green transition-transform duration-300 group-hover:scale-125">
                      <span className="absolute inset-0 rounded-full bg-[#53ad6f]/30 pulse-dot" />
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="font-mono text-[11px] tracking-[0.24em] text-foreground/40 group-hover:text-[#53ad6f] transition-colors">
                      STEP {p.n}
                    </div>
                    <h3 className="mt-2 font-display text-xl md:text-[22px] tracking-[-0.01em] text-foreground/85 group-hover:text-foreground transition-colors">
                      {p.t}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground text-pretty max-w-xs mx-auto lg:mx-0">
                      {p.d}
                    </p>
                  </div>

                  {/* Subtle large numeral behind */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-4 right-2 lg:right-auto lg:left-0 font-display text-[88px] leading-none font-semibold text-foreground/[0.04] select-none"
                  >
                    {p.n}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
