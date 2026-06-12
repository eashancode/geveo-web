import {
  Cpu,
  Layers,
  Cloud,
  BrainCircuit,
  Smartphone,
  RefreshCcw,
} from "lucide-react";

const solutions = [
  {
    tag: "01",
    title: "Specialised Engineering",
    desc:
      "Deep technical work for emerging platforms from the Evernode core to XRPL Hooks and decentralised application engineering.",
    points: ["Evernode platform", "XRPL Hooks", "DApp engineering", "Smart contracts"],
    Icon: Cpu,
  },
  {
    tag: "02",
    title: "Enterprise Software Engineering",
    desc:
      "Mission-critical platforms designed, built and evolved alongside your business engineered to last and to scale.",
    points: ["Custom product builds", "Legacy modernisation", "API platforms", "Quality engineering"],
    Icon: Layers,
  },
  {
    tag: "03",
    title: "Cloud Engineering",
    desc:
      "Scalable cloud infrastructure and modernisation programmes designed for secure, resilient enterprise growth.",
    points: ["Cloud migration", "DevOps & SRE", "Automation", "AWS / Azure"],
    Icon: Cloud,
  },
  {
    tag: "04",
    title: "Data & AI Solutions",
    desc:
      "Practical AI, analytics and data platforms that turn information into measurable business outcomes.",
    points: ["ML & LLM integration", "Data platforms", "Analytics & BI", "Automation"],
    Icon: BrainCircuit,
  },
  {
    tag: "05",
    title: "Digital Products & Experiences",
    desc:
      "Human-centred web and mobile products with the design polish and engineering depth enterprises demand.",
    points: ["UX research & design", "Web & mobile apps", "Design systems", "Accessibility"],
    Icon: Smartphone,
  },
  {
    tag: "06",
    title: "Platform & Product Modernisation",
    desc:
      "Re-architect ageing systems into modular, observable platforms ready for the next decade of growth.",
    points: ["Architecture review", "Re-platforming", "Micro-services", "Observability"],
    Icon: RefreshCcw,
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow">Solutions</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] text-balance">
              Strategic engineering for outcomes that matter.
            </h2>
          </div>
          <p className="md:col-span-5 text-muted-foreground text-pretty">
            We work with leaders across industries to design and deliver
            software that drives real business value with the rigour of an
            enterprise team and the agility of a modern product studio.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => {
            const Icon = s.Icon;
            return (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border p-7 card-hover"
                style={{
                  background:
                    "linear-gradient(140deg, rgba(83,173,111,0.10) 0%, rgba(255,255,255,1) 55%, rgba(83,173,111,0.06) 100%)",
                }}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#53ad6f]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start justify-between">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl bg-white border border-[#53ad6f]/30 grid place-items-center shadow-soft transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105">
                      <Icon className="h-5 w-5 text-[#53ad6f] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.8} />
                    </div>
                    <span className="absolute -inset-1 rounded-2xl border border-[#53ad6f]/0 group-hover:border-[#53ad6f]/40 transition-colors duration-500" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#53ad6f]">{s.tag}</span>
                </div>

                <h3 className="mt-5 font-display text-xl md:text-2xl tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted-foreground text-pretty min-h-[60px]">
                  {s.desc}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-border bg-white/70 backdrop-blur px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Explore solution
                  <span className="transition-transform group-hover:translate-x-1 text-[#53ad6f]">→</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
