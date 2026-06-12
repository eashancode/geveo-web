import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Activity, Link2, Plane, Car, Coins,
  Truck, Briefcase, Database, Users, LayoutDashboard, GraduationCap,
  Bot, BookOpen, Workflow, BarChart3, Search,
  ArrowUpRight, ArrowRight, Sparkles, Globe, Layers,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { TrustRecognition } from "@/components/site/TrustRecognition";

type Category = "Web3" | "SaaS" | "AI" | "Enterprise" | "Mobile";

type Project = {
  slug: string;
  name: string;
  category: string;
  categories: Category[];
  description: string;
  features: string[];
  tags: string[];
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  gradient: string;
  group: "featured" | "saas" | "ai";
  href?: string;
};

const PROJECTS: Project[] = [
  // Featured Web3 / dApp
  {
    slug: "zemlyai",
    name: "ZemlyAI",
    category: "AI Receptionist for Property Management",
    categories: ["AI", "Web3"],
    description: "AI receptionist built for Australian property managers—answers tenant and landlord calls 24/7, triages maintenance, and sends structured summaries to email or CRM.",
    features: ["24/7 call answering", "Maintenance triage", "Agency-specific policies", "Call summaries to email/CRM"],
    tags: ["AI", "Property Management", "Automation", "CRM"],
    Icon: Globe,
    gradient: "linear-gradient(135deg, rgba(56,140,220,0.14), rgba(255,255,255,1) 60%, rgba(83,173,111,0.10))",
    href: "https://zemly.ai/",
    group: "featured",
  },
  {
    slug: "medaivo",
    name: "MedAIvo",
    category: "AI + Healthcare + Web3",
    categories: ["AI", "Web3"],
    description: "AI-powered healthcare records and diagnostics platform anchored by on-chain verifiability for patient data integrity.",
    features: ["AI clinical assistant", "On-chain medical records", "Privacy-first access", "Provider dashboards"],
    tags: ["LLMs", "Solidity", "FHIR", "Next.js"],
    Icon: Activity,
    gradient: "linear-gradient(135deg, rgba(83,173,111,0.16), rgba(255,255,255,1) 60%, rgba(56,140,220,0.12))",
    href: "https://medaivo.everpower.io/",
    group: "featured",
  },
  {
    slug: "tracehub",
    name: "TraceHub",
    category: "Supply Chain & Blockchain",
    categories: ["Web3", "Enterprise"],
    description: "End-to-end supply chain traceability built on blockchain — verifiable provenance from origin to shelf.",
    features: ["Provenance tracking", "Smart contracts", "IoT integration", "Audit-ready reports"],
    tags: ["EVM", "Hyperledger", "Node.js", "React"],
    Icon: Link2,
    gradient: "linear-gradient(135deg, rgba(56,140,220,0.14), rgba(255,255,255,1) 60%, rgba(83,173,111,0.10))",
    href: "https://tracehub.everpower.io/",
    group: "featured",
  },
  {
    slug: "tripq",
    name: "TripQ",
    category: "Travel & Hospitality Platform",
    categories: ["SaaS", "Mobile"],
    description: "Modern travel booking and itinerary management platform connecting travelers, agents and hospitality partners.",
    features: ["Multi-vendor booking", "Itinerary builder", "Payments", "Mobile apps"],
    tags: ["React Native", "Stripe", "AWS", "Postgres"],
    Icon: Plane,
    gradient: "linear-gradient(135deg, rgba(220,180,80,0.14), rgba(255,255,255,1) 60%, rgba(83,173,111,0.10))",
    href: "https://tripq.everpower.io/",
    group: "featured",
  },
  {
    slug: "roadrush",
    name: "RoadRush",
    category: "Transportation Ecosystem",
    categories: ["SaaS", "Mobile"],
    description: "Connected ecosystem for ride operators, drivers and riders with real-time dispatch, telemetry and analytics.",
    features: ["Real-time dispatch", "Driver telemetry", "Surge pricing", "Operator console"],
    tags: ["Kotlin", "Swift", "Kafka", "Kubernetes"],
    Icon: Car,
    gradient: "linear-gradient(135deg, rgba(83,173,111,0.14), rgba(255,255,255,1) 60%, rgba(220,180,80,0.10))",
    group: "featured",
  },
  {
    slug: "evercred",
    name: "EverCred",
    category: "DeFi & Lending Platform",
    categories: ["Web3"],
    description: "Decentralized lending protocol with risk-adjusted yield, on-chain credit scoring and institutional-grade controls.",
    features: ["On-chain credit", "Yield vaults", "Liquidation engine", "Governance"],
    tags: ["Solidity", "Ethers", "The Graph", "React"],
    Icon: Coins,
    gradient: "linear-gradient(135deg, rgba(56,140,220,0.14), rgba(255,255,255,1) 60%, rgba(83,173,111,0.10))",
    href: "https://evercred.everpower.io/",
    group: "featured",
  },
  {
    slug: "everpower-studio",
    name: "Everpower Studio",
    category: "Product Studio",
    categories: ["Web3", "AI"],
    description: "Studio platform for building digital products, AI tools and blockchain experiences with a focus on enterprise adoption.",
    features: ["Product design", "AI tooling", "Blockchain integration", "Launch support"],
    tags: ["Studio", "AI", "Web3"],
    Icon: Layers,
    gradient: "linear-gradient(135deg, rgba(220,180,80,0.14), rgba(255,255,255,1) 60%, rgba(83,173,111,0.10))",
    href: "https://everpowerstudio.com/",
    group: "featured",
  },

  // Enterprise & SaaS
  { slug: "fleet-management", name: "Fleet Management Platform", category: "Logistics", categories: ["SaaS", "Enterprise"],
    description: "Operational platform for fleet operators with route optimization, maintenance and cost analytics.",
    features: ["Live tracking", "Route optimization", "Maintenance"], tags: ["React", "Node", "GIS"], Icon: Truck,
    gradient: "linear-gradient(135deg,rgba(83,173,111,0.08),#fff 60%,rgba(83,173,111,0.05))", group: "saas" },
  { slug: "travel-management", name: "Travel Management System", category: "Travel & Corporate", categories: ["SaaS"],
    description: "Corporate travel and expense management with policy enforcement and approvals.",
    features: ["Policy engine", "Approvals", "Expense"], tags: ["Next.js", "Postgres"], Icon: Briefcase,
    gradient: "linear-gradient(135deg,rgba(56,140,220,0.08),#fff 60%,rgba(56,140,220,0.05))", group: "saas" },
  { slug: "erp", name: "ERP Solutions", category: "Enterprise Operations", categories: ["Enterprise", "SaaS"],
    description: "Modular ERP with finance, procurement and operations tailored to mid-market enterprises.",
    features: ["Finance", "Procurement", "Operations"], tags: ["Java", "Spring", "Oracle"], Icon: Database,
    gradient: "linear-gradient(135deg,rgba(220,180,80,0.10),#fff 60%,rgba(83,173,111,0.05))", group: "saas" },
  { slug: "hrms", name: "HR Management System", category: "People Operations", categories: ["SaaS", "Enterprise"],
    description: "HRMS covering hiring, payroll, performance and engagement in one cohesive platform.",
    features: ["Payroll", "Performance", "Hiring"], tags: ["React", ".NET", "Azure"], Icon: Users,
    gradient: "linear-gradient(135deg,rgba(83,173,111,0.10),#fff 60%,rgba(56,140,220,0.06))", group: "saas" },
  { slug: "customer-portal", name: "Customer Portal", category: "Customer Experience", categories: ["SaaS"],
    description: "Self-service portal for B2B customers — billing, support, integrations and APIs in one place.",
    features: ["SSO", "Billing", "Support center"], tags: ["Next.js", "Stripe", "Auth0"], Icon: LayoutDashboard,
    gradient: "linear-gradient(135deg,rgba(56,140,220,0.10),#fff 60%,rgba(83,173,111,0.05))", group: "saas" },
  { slug: "lms", name: "Learning Management Platform", category: "EdTech", categories: ["SaaS"],
    description: "Modern LMS with adaptive learning, content authoring, certifications and analytics.",
    features: ["Adaptive paths", "Authoring", "Certifications"], tags: ["React", "GraphQL", "AWS"], Icon: GraduationCap,
    gradient: "linear-gradient(135deg,rgba(83,173,111,0.10),#fff 60%,rgba(220,180,80,0.06))", group: "saas" },

  // AI & Innovation
  { slug: "ai-assistants", name: "AI Assistants", category: "Conversational AI", categories: ["AI"],
    description: "Domain-tuned AI assistants embedded into enterprise products with safety, telemetry and tools.",
    features: ["RAG", "Tool use", "Guardrails"], tags: ["LLMs", "LangChain", "Vector DB"], Icon: Bot,
    gradient: "linear-gradient(135deg,rgba(83,173,111,0.10),#fff 60%,rgba(56,140,220,0.08))", group: "ai" },
  { slug: "knowledge-mgmt", name: "Knowledge Management Systems", category: "Enterprise Knowledge", categories: ["AI", "Enterprise"],
    description: "Centralized knowledge platforms with semantic search, summarization and access controls.",
    features: ["Semantic search", "Summarization", "RBAC"], tags: ["OpenAI", "Pinecone", "Next.js"], Icon: BookOpen,
    gradient: "linear-gradient(135deg,rgba(56,140,220,0.10),#fff 60%,rgba(83,173,111,0.06))", group: "ai" },
  { slug: "automation", name: "Business Automation Platforms", category: "Workflow Automation", categories: ["AI", "Enterprise"],
    description: "AI-augmented workflow automation that removes manual handoffs across operations and finance.",
    features: ["Workflow engine", "AI tasks", "Integrations"], tags: ["Temporal", "n8n", "Python"], Icon: Workflow,
    gradient: "linear-gradient(135deg,rgba(220,180,80,0.10),#fff 60%,rgba(83,173,111,0.05))", group: "ai" },
  { slug: "intelligent-dashboards", name: "Intelligent Dashboards", category: "Decision Intelligence", categories: ["AI", "SaaS"],
    description: "Operational dashboards with natural-language querying, anomaly detection and forecasts.",
    features: ["NL queries", "Forecasts", "Alerts"], tags: ["DuckDB", "LLMs", "React"], Icon: BarChart3,
    gradient: "linear-gradient(135deg,rgba(83,173,111,0.10),#fff 60%,rgba(56,140,220,0.06))", group: "ai" },
  { slug: "ai-search", name: "AI Search Solutions", category: "Enterprise Search", categories: ["AI"],
    description: "Hybrid search combining lexical, vector and re-ranking — secure across enterprise content.",
    features: ["Hybrid retrieval", "Re-ranking", "Connectors"], tags: ["OpenSearch", "Embeddings"], Icon: Search,
    gradient: "linear-gradient(135deg,rgba(56,140,220,0.10),#fff 60%,rgba(220,180,80,0.06))", group: "ai" },
];

const FILTERS: Array<"All" | Category> = ["All", "SaaS", "AI", "Web3", "Enterprise", "Mobile"];

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Products & Platforms by Geveo" },
      { name: "description", content: "Explore SaaS, AI and Web3 products engineered by Geveo — from enterprise platforms to decentralized applications." },
      { property: "og:title", content: "Products & Platforms We've Built — Geveo" },
      { property: "og:description", content: "From enterprise SaaS to AI-powered systems and Web3 dApps — the digital products built by Geveo." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.categories.includes(filter as Category)),
    [filter]
  );

  const featured = filtered.filter((p) => p.group === "featured");
  const saas = filtered.filter((p) => p.group === "saas");
  const ai = filtered.filter((p) => p.group === "ai");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <CSHero />

        {/* Filters */}
        <section className="pb-2">
          <div className="container-x">
            <div className="flex flex-wrap gap-2 justify-center">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                    filter === f
                      ? "border-primary bg-primary text-primary-foreground shadow-green"
                      : "border-border bg-white/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {f === "All" ? "All Projects" : f}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        {featured.length > 0 && (
          <section className="py-16 md:py-20">
            <div className="container-x">
              <SectionHead
                eyebrow="Featured Web3 & dApp Showcase"
                title="Decentralized platforms, engineered end-to-end."
                desc="Our flagship Web3 and AI-powered products — built from protocol to UI."
              />
              <div className="mt-12 grid lg:grid-cols-2 gap-6">
                {featured.map((p, i) => (
                  <FeaturedCard key={p.slug} project={p} large={i === 0} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Enterprise & SaaS */}
        {saas.length > 0 && (
          <section className="py-16 md:py-20 bg-surface border-y border-border">
            <div className="container-x">
              <SectionHead
                eyebrow="Enterprise & SaaS Solutions"
                title="Production-grade platforms for modern operations."
                desc="SaaS products powering logistics, travel, HR, learning and customer experience."
              />
              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {saas.map((p) => <ProductCard key={p.slug} project={p} />)}
              </div>
            </div>
          </section>
        )}

        {/* AI & Innovation */}
        {ai.length > 0 && (
          <section className="py-16 md:py-20">
            <div className="container-x">
              <SectionHead
                eyebrow="AI & Innovation Projects"
                title="Intelligent systems that change how teams work."
                desc="AI assistants, knowledge platforms and decision intelligence — built for the enterprise."
              />
              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ai.map((p) => <ProductCard key={p.slug} project={p} />)}
              </div>
            </div>
          </section>
        )}

        {filtered.length === 0 && (
          <div className="container-x py-24 text-center text-muted-foreground">
            No projects match this filter yet.
          </div>
        )}

        <TrustRecognition />
      </main>
      <Footer />
    </div>
  );
}

function CSHero() {
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
          Products · Platforms · dApps
        </div>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[58px] leading-[1.05] tracking-[-0.03em] font-semibold text-balance max-w-4xl mx-auto">
          Products & Platforms We've Built
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
          From enterprise SaaS applications to AI-powered systems and decentralized Web3 platforms,
          explore the digital products engineered by Geveo.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#trust" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-5 py-2.5 text-sm font-medium hover:border-border-strong transition">
            <Globe className="h-4 w-4 text-primary" /> Trust & Recognition
          </a>
          <a href="/#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium shadow-green hover:opacity-95 transition">
            Start a project
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="max-w-3xl">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-balance">{title}</h2>
      <p className="mt-4 text-muted-foreground text-pretty">{desc}</p>
    </div>
  );
}

function FeaturedCard({ project, large }: { project: Project; large?: boolean }) {
  const Icon = project.Icon;
  const cardClassName = `group relative overflow-hidden rounded-3xl border border-border card-hover ${large ? "lg:col-span-2" : ""}`;
  const cardContent = (
    <div className="relative grid md:grid-cols-12 gap-6 p-8 md:p-10">
      <div className="md:col-span-7">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-primary/30 px-3 py-1 font-mono text-[10px] tracking-[0.18em] uppercase text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
          {project.category}
        </div>
        <h3 className="mt-4 font-display text-3xl md:text-4xl tracking-[-0.02em]">{project.name}</h3>
        <p className="mt-3 text-muted-foreground text-pretty max-w-xl">{project.description}</p>
        <ul className="mt-5 grid sm:grid-cols-2 gap-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-primary/30 bg-white/70 px-2.5 py-1 text-[11px] text-primary font-medium">{t}</span>
          ))}
        </div>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
          {project.href ? "View product" : "View Case Study"}
          <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="relative h-full min-h-[200px] rounded-2xl border border-border bg-white shadow-elev overflow-hidden p-6 flex items-center justify-center">
          <div className="absolute inset-0 opacity-40" style={{
            background: "radial-gradient(circle at 30% 30%, rgba(83,173,111,0.18), transparent 60%), radial-gradient(circle at 70% 70%, rgba(56,140,220,0.18), transparent 60%)",
          }} />
          <div className="relative h-24 w-24 rounded-2xl bg-gradient-to-br from-primary/15 to-[#2f9bd6]/15 border border-primary/30 grid place-items-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
            <Icon className="h-10 w-10 text-primary" strokeWidth={1.6} />
          </div>
          <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
        style={{ background: project.gradient }}
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-70 group-hover:opacity-100 transition" />
        <div className="absolute inset-0 blueprint-bg opacity-25 [mask-image:radial-gradient(circle_at_top_right,black_30%,transparent_70%)]" />
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      to="/case-studies/$slug"
      params={{ slug: project.slug }}
      className={cardClassName}
      style={{ background: project.gradient }}
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-70 group-hover:opacity-100 transition" />
      <div className="absolute inset-0 blueprint-bg opacity-25 [mask-image:radial-gradient(circle_at_top_right,black_30%,transparent_70%)]" />
      {cardContent}
    </Link>
  );
}

function ProductCard({ project }: { project: Project }) {
  const Icon = project.Icon;
  return (
    <Link
      to="/case-studies/$slug"
      params={{ slug: project.slug }}
      className="group relative overflow-hidden rounded-2xl border border-border p-6 card-hover"
      style={{ background: project.gradient }}
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="h-11 w-11 rounded-xl bg-white border border-primary/30 grid place-items-center transition-transform duration-500 group-hover:-rotate-6">
            <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <div className="mt-5 font-mono text-[10px] tracking-[0.18em] uppercase text-primary">{project.category}</div>
        <h3 className="mt-2 font-display text-xl tracking-[-0.01em]">{project.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground text-pretty">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full border border-border bg-white/70 px-2 py-0.5 text-[10px] text-muted-foreground">{t}</li>
          ))}
        </ul>
        <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
          View Details
          <ArrowRight className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export { PROJECTS };
export type { Project };
