import { Link } from "@tanstack/react-router";
import { ShoppingBag, BarChart3, Truck, Wallet, ArrowUpRight, ArrowRight } from "lucide-react";

const studies = [
  {
    title: "Doing Good Rewards",
    industry: "eCommerce / Loyalty / Social Impact",
    overview:
      "A digital loyalty platform that connects shoppers, merchants and charities converting shopping rewards into charitable donations.",
    features: ["Loyalty rewards system", "Charity donation integration", "Merchant ecosystem", "Secure transactions"],
    impact: [
      { k: "$350K+", v: "Donated to charities" },
      { k: "Multi-party", v: "Scalable ecosystem" },
    ],
    tags: ["eCommerce", "Fintech Integration", "Cloud Platform"],
    Icon: ShoppingBag,
    featured: true,
  },
  {
    title: "Zen Ex Machina",
    industry: "Enterprise Agile & Consulting",
    overview:
      "A digital platform that assesses and improves enterprise agility through structured metrics, dashboards and transformation insights.",
    features: ["Agile maturity engine", "Real-time dashboards", "Enterprise reporting", "Mobile + web"],
    impact: [
      { k: "Data-driven", v: "Agile transformation" },
      { k: "↑", v: "Delivery efficiency" },
    ],
    tags: ["Enterprise SaaS", "Analytics", "UX Platforms"],
    Icon: BarChart3,
  },
  {
    title: "Last Mile Logistics Platform",
    industry: "Logistics / Supply Chain",
    overview:
      "An intelligent courier management system that selects the optimal delivery partner based on cost, speed and service requirements.",
    features: ["Courier comparison engine", "Automated allocation", "Tracking & delivery", "Microservices"],
    impact: [
      { k: "↓ Cost", v: "Logistics savings" },
      { k: "↑ Speed", v: "Delivery efficiency" },
    ],
    tags: ["Logistics Tech", "Cloud Microservices", "Optimization"],
    Icon: Truck,
  },
  {
    title: "Apex Salary Packaging",
    industry: "Fintech / HR Tech",
    overview:
      "A financial automation platform that manages salary packaging, payroll processing and employee benefit claims with secure financial workflows.",
    features: ["Payroll automation", "Tax compliance", "Benefit management", "Secure processing"],
    impact: [
      { k: "Automated", v: "Payroll workflows" },
      { k: "Compliant", v: "Tax & finance" },
    ],
    tags: ["Fintech", "Automation", "Enterprise Systems"],
    Icon: Wallet,
  },
];

export function CaseStudies() {
  const featured = studies[0];
  const rest = studies.slice(1);

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">Case studies</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.02em] text-balance">
            Proven impact through real-world solutions.
          </h2>
          <p className="mt-5 text-muted-foreground text-pretty">
            A glimpse into the platforms we've engineered with clients across
            fintech, logistics, enterprise SaaS and social impact.
          </p>
          <Link
            to="/case-studies"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            View all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured large card */}
        <FeaturedCard study={featured} />

        {/* Grid */}
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {rest.map((s) => (
            <SmallCard key={s.title} study={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ study }: { study: (typeof studies)[number] }) {
  const Icon = study.Icon;
  return (
    <Link
      to="/case-studies"
      className="group relative mt-14 block overflow-hidden rounded-3xl border border-border p-8 md:p-12 card-hover"
      style={{
        background:
          "linear-gradient(135deg, rgba(83,173,111,0.14) 0%, rgba(255,255,255,1) 60%, rgba(83,173,111,0.08) 100%)",
      }}
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#53ad6f]/15 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 blueprint-bg opacity-30 [mask-image:radial-gradient(circle_at_top_right,black_30%,transparent_70%)]" />

      <div className="relative grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-[#53ad6f]/30 px-3 py-1 font-mono text-[10px] tracking-[0.18em] uppercase text-[#53ad6f]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#53ad6f] pulse-dot" />
            Featured case · {study.industry}
          </div>
          <h3 className="mt-5 font-display text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em]">
            {study.title}
          </h3>
          <p className="mt-4 text-muted-foreground text-pretty max-w-xl">
            {study.overview}
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-2">
            {study.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#53ad6f]" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#53ad6f]/30 bg-white/70 px-3 py-1 text-[11px] text-[#53ad6f] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-border bg-white shadow-elev p-6">
            <div className="flex items-center justify-between">
              <div className="h-14 w-14 rounded-xl bg-[#53ad6f]/10 grid place-items-center">
                <Icon className="h-6 w-6 text-[#53ad6f]" strokeWidth={1.8} />
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#53ad6f] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-5">
              {study.impact.map((m) => (
                <div key={m.v}>
                  <div className="font-display text-3xl tracking-tight text-[#53ad6f] font-semibold">
                    {m.k}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-border font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
              case · 001 · live
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function SmallCard({ study }: { study: (typeof studies)[number] }) {
  const Icon = study.Icon;
  return (
    <Link
      to="/case-studies"
      className="group relative block overflow-hidden rounded-2xl border border-border p-7 card-hover"
      style={{
        background:
          "linear-gradient(140deg, rgba(83,173,111,0.08) 0%, rgba(255,255,255,1) 60%, rgba(83,173,111,0.05) 100%)",
      }}
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#53ad6f]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="h-11 w-11 rounded-xl bg-white border border-[#53ad6f]/30 grid place-items-center transition-transform duration-500 group-hover:-rotate-6">
            <Icon className="h-5 w-5 text-[#53ad6f]" strokeWidth={1.8} />
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-[#53ad6f] transition-colors" />
        </div>
        <div className="mt-5 font-mono text-[10px] tracking-[0.18em] uppercase text-[#53ad6f]">
          {study.industry}
        </div>
        <h3 className="mt-2 font-display text-xl tracking-[-0.01em]">{study.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground text-pretty">{study.overview}</p>

        <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-border">
          {study.impact.map((m) => (
            <div key={m.v}>
              <div className="font-display text-lg font-semibold text-[#53ad6f]">{m.k}</div>
              <div className="text-[11px] text-muted-foreground">{m.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.tags.map((t) => (
            <span key={t} className="text-[10px] font-mono tracking-[0.12em] uppercase text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
