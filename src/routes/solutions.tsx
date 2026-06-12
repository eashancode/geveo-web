import { createFileRoute, Link } from "@tanstack/react-router";
import {
  RefreshCcw, Layers, Smartphone, Users, Wallet, Truck, Building2,
  Cloud, Sparkles, ArrowRight, ArrowUpRight, Globe, CheckCircle2,
  Briefcase, GraduationCap, HeartPulse, Factory, ShoppingBag, Landmark,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

type Solution = {
  slug: string;
  title: string;
  short: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  challenges: string[];
  approach: string;
  benefits: string[];
  tech: string[];
  relatedCategories: Array<"Web3" | "SaaS" | "AI" | "Enterprise" | "Mobile">;
};

const SOLUTIONS: Solution[] = [
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    short: "Modernize legacy systems and reimagine operating models for a digital-first future.",
    Icon: RefreshCcw,
    challenges: ["Aging core systems", "Fragmented data", "Slow time-to-market"],
    approach: "Assess, prioritize and execute incremental modernization with measurable outcomes at every stage.",
    benefits: ["Faster delivery cycles", "Lower operating cost", "Better customer experience"],
    tech: ["Microservices", "Kubernetes", "Event streaming", "API platforms"],
    relatedCategories: ["Enterprise", "SaaS"],
  },
  {
    slug: "enterprise-applications",
    title: "Enterprise Applications",
    short: "Mission-critical platforms engineered for scale, security and longevity.",
    Icon: Layers,
    challenges: ["Complex workflows", "Compliance burden", "Integration sprawl"],
    approach: "Co-design end-to-end platforms with clean architecture, observability and quality engineering baked in.",
    benefits: ["Operational efficiency", "Audit readiness", "Predictable scale"],
    tech: [".NET", "Java", "PostgreSQL", "Azure", "AWS"],
    relatedCategories: ["Enterprise", "SaaS"],
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    short: "Native and cross-platform apps with the polish enterprises and consumers expect.",
    Icon: Smartphone,
    challenges: ["Cross-platform parity", "Offline-first needs", "App store compliance"],
    approach: "Design-led product engineering with shared architecture and platform-specific finesse.",
    benefits: ["Higher engagement", "Faster releases", "Lower total cost"],
    tech: ["React Native", "Swift", "Kotlin", "Firebase"],
    relatedCategories: ["Mobile", "SaaS"],
  },
  {
    slug: "crm-solutions",
    title: "CRM Solutions",
    short: "Customer platforms that unify sales, service and marketing data into a single source of truth.",
    Icon: Users,
    challenges: ["Disconnected pipelines", "Manual handoffs", "Low data quality"],
    approach: "Implement and extend modern CRMs with automation, integrations and tailored experiences.",
    benefits: ["Stronger pipeline visibility", "Higher win-rates", "Better retention"],
    tech: ["Salesforce", "HubSpot", "Dynamics 365", "Zoho"],
    relatedCategories: ["Enterprise", "SaaS"],
  },
  {
    slug: "fintech-solutions",
    title: "FinTech Solutions",
    short: "Secure financial platforms — payments, lending, wealth and regulatory tech.",
    Icon: Wallet,
    challenges: ["Regulatory complexity", "Real-time risk", "Trust & security"],
    approach: "Build with security-first architecture, strong observability and proven financial workflows.",
    benefits: ["Faster settlement", "Reduced fraud", "Regulator-ready audit trails"],
    tech: ["Java", "Node.js", "Kafka", "PostgreSQL", "AWS"],
    relatedCategories: ["Enterprise", "Web3"],
  },
  {
    slug: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    short: "Operational platforms for fleets, warehouses and last-mile delivery networks.",
    Icon: Truck,
    challenges: ["Route inefficiency", "Lack of visibility", "Multi-party coordination"],
    approach: "Combine workflow automation, GIS and analytics to optimize cost and service levels.",
    benefits: ["Lower cost-per-delivery", "Real-time visibility", "Higher throughput"],
    tech: ["Node.js", "GIS", "Microservices", "Kafka"],
    relatedCategories: ["SaaS", "Enterprise"],
  },
  {
    slug: "real-estate-platforms",
    title: "Real Estate Platforms",
    short: "Property, tenant and investment platforms for modern real estate businesses.",
    Icon: Building2,
    challenges: ["Manual property workflows", "Disjointed listings", "Investor reporting"],
    approach: "Engineer integrated platforms covering listings, leasing, operations and investor portals.",
    benefits: ["Faster transactions", "Better tenant experience", "Cleaner reporting"],
    tech: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    relatedCategories: ["SaaS", "Enterprise"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Resilient cloud foundations, automation and SRE practices for enterprise scale.",
    Icon: Cloud,
    challenges: ["Unreliable releases", "Cost overruns", "Security drift"],
    approach: "Establish landing zones, CI/CD, IaC and observability with platform-engineering rigour.",
    benefits: ["Higher reliability", "Faster, safer releases", "Predictable cost"],
    tech: ["AWS", "Azure", "Terraform", "Kubernetes", "Datadog"],
    relatedCategories: ["Enterprise", "SaaS"],
  },
  {
    slug: "web3-emerging-tech",
    title: "Web3 & Emerging Tech",
    short: "Decentralized applications, smart contracts and AI-augmented systems.",
    Icon: Sparkles,
    challenges: ["Protocol complexity", "Security stakes", "UX of decentralized apps"],
    approach: "End-to-end engineering from protocol design to production-grade UX, with audited code paths.",
    benefits: ["Verifiable trust", "New monetization", "Future-ready architecture"],
    tech: ["Solidity", "EVM", "The Graph", "LangChain", "OpenAI"],
    relatedCategories: ["Web3", "AI"],
  },
];

const INDUSTRIES = [
  { t: "Financial Services", Icon: Wallet },
  { t: "Retail", Icon: ShoppingBag },
  { t: "Logistics", Icon: Truck },
  { t: "Real Estate", Icon: Building2 },
  { t: "Healthcare", Icon: HeartPulse },
  { t: "Education", Icon: GraduationCap },
  { t: "Manufacturing", Icon: Factory },
  { t: "Public Sector", Icon: Landmark },
];

const ENGAGEMENTS = [
  { t: "Dedicated Teams", d: "Long-term, embedded engineering teams that operate as an extension of yours." },
  { t: "Staff Augmentation", d: "Senior specialists to plug capability gaps and accelerate delivery." },
  { t: "Product Development", d: "End-to-end product engineering, from discovery through launch and scale." },
  { t: "Technology Consulting", d: "Architecture, modernization and platform strategy from senior practitioners." },
  { t: "Digital Transformation Partnerships", d: "Multi-year programmes that re-platform and reshape operating models." },
];

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Digital Engineering & Transformation by Geveo" },
      { name: "description", content: "Custom software, enterprise applications, mobile, CRM, FinTech, logistics, cloud and Web3 solutions engineered by Geveo." },
      { property: "og:title", content: "Digital Solutions Designed Around Your Business Goals" },
      { property: "og:description", content: "Explore Geveo's solutions across enterprise software, AI, mobile, cloud and Web3 — engineered for measurable outcomes." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <SolHero />
        <SolutionsGrid />
        <SolutionDetails />
        <Industries />
        <EngagementModels />
        <RelatedCaseStudies />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function SolHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-20">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, #f5fbff 0%, #eef6ff 40%, #f7fbf9 100%)",
        }} />
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl glow-orb-1"
          style={{ background: "radial-gradient(circle, rgba(83,173,111,0.22), transparent 70%)" }} />
        <div className="absolute -top-10 right-[-100px] h-[420px] w-[420px] rounded-full blur-3xl glow-orb-2"
          style={{ background: "radial-gradient(circle, rgba(56,140,220,0.20), transparent 70%)" }} />
        <div className="absolute inset-0 blueprint-bg opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
      </div>
      <div className="container-x relative text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 backdrop-blur px-3 py-1 text-xs text-muted-foreground shadow-sm">
          <Sparkles className="h-3 w-3 text-primary" />
          Solutions · Capability · Outcomes
        </div>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[58px] leading-[1.05] tracking-[-0.03em] font-semibold text-balance max-w-4xl mx-auto">
          Digital Solutions Designed Around Your Business Goals
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
          Custom software, enterprise platforms, and digital transformation solutions 
          engineered by senior teams that ship outcomes, not just code.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium shadow-green hover:opacity-95 transition">
            Discuss Your Project
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
          <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-5 py-2 text-sm font-medium hover:border-border-strong transition">
            <Globe className="h-4 w-4 text-primary" /> View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

function SolutionsGrid() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">What we build</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-balance">
            Nine focused capabilities. One delivery partner.
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((s) => {
            const Icon = s.Icon;
            return (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border p-7 card-hover"
                style={{
                  background:
                    "linear-gradient(140deg, rgba(83,173,111,0.10) 0%, rgba(255,255,255,1) 55%, rgba(83,173,111,0.06) 100%)",
                }}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-white border border-primary/30 grid place-items-center shadow-soft transition-transform duration-500 group-hover:rotate-[-6deg]">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 font-display text-xl tracking-[-0.01em]">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">{s.short}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    Explore
                    <span className="transition-transform group-hover:translate-x-1 text-primary">→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SolutionDetails() {
  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="container-x space-y-20">
        {SOLUTIONS.map((s, i) => {
          const Icon = s.Icon;
          const reverse = i % 2 === 1;
          return (
            <article
              key={s.slug}
              id={s.slug}
              className="grid lg:grid-cols-12 gap-10 items-center scroll-mt-24"
            >
              <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                <div
                  className="relative aspect-[5/4] rounded-3xl border border-border overflow-hidden shadow-elev"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(83,173,111,0.16), rgba(255,255,255,1) 60%, rgba(56,140,220,0.12))",
                  }}
                >
                  <div className="absolute inset-0 blueprint-bg opacity-30" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="h-24 w-24 rounded-2xl bg-white border border-primary/30 grid place-items-center shadow-md">
                      <Icon className="h-10 w-10 text-primary" strokeWidth={1.6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary">
                  Solution · {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.02em] font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-pretty max-w-xl">{s.short}</p>

                <div className="mt-7 grid sm:grid-cols-2 gap-6">
                  <DetailBlock title="Business challenges solved" items={s.challenges} />
                  <DetailBlock title="Benefits" items={s.benefits} />
                </div>

                <div className="mt-6">
                  <div className="text-sm font-medium">Geveo approach</div>
                  <p className="mt-1.5 text-sm text-muted-foreground text-pretty max-w-xl">{s.approach}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <span key={t} className="rounded-full border border-primary/30 bg-white/70 px-2.5 py-1 text-[11px] text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    See related case studies <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-medium">{title}</div>
      <ul className="mt-2 space-y-1.5">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Industries() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow">Industries</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.02em]">
            Deep experience across regulated, complex industries.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {INDUSTRIES.map((i) => {
            const Icon = i.Icon;
            return (
              <div key={i.t} className="bg-background p-6 hover:bg-surface-elevated transition-colors">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                <div className="mt-3 font-display text-base">{i.t}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EngagementModels() {
  return (
    <section className="py-16 md:py-20 bg-surface border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow">Engagement models</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.02em]">
            Flexible ways to work with our teams.
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGAGEMENTS.map((e) => (
            <div key={e.t} className="rounded-2xl border border-border bg-background p-7 card-hover">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center">
                <Briefcase className="h-4 w-4 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="mt-4 font-display text-xl">{e.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedCaseStudies() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <div className="eyebrow">Related success stories</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.02em]">
              See how these solutions ship in the real world.
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              Explore products and platforms Geveo has engineered across FinTech, logistics,
              CRM, AI and Web3.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium shadow-green hover:opacity-95 transition group"
          >
            View All Case Studies
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(83,173,111,0.16) 0%, rgba(255,255,255,1) 60%, rgba(56,140,220,0.12) 100%)",
          }}
        >
          <div className="absolute inset-0 blueprint-bg opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl tracking-[-0.02em] font-semibold text-balance">
              Let's Build What's Next
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-pretty">
              Talk to our engineering leaders about your roadmap — and see how we can move
              it forward.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="/#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium shadow-green hover:opacity-95 transition">
                Start a Conversation
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-5 py-2 text-sm font-medium hover:border-border-strong transition">
                Explore Case Studies <ArrowUpRight className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
