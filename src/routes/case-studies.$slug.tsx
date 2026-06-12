import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers, Target, Lightbulb, TrendingUp, Image as ImageIcon } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PROJECTS, type Project } from "./case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const p = PROJECTS.find((x) => x.slug === params.slug);
    const title = p ? `${p.name} — Geveo Case Study` : "Case Study — Geveo";
    const desc = p?.description ?? "A Geveo product case study.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="font-display text-4xl">Case study not found</h1>
        <Link to="/case-studies" className="mt-4 inline-block text-primary hover:underline">
          ← Back to case studies
        </Link>
      </div>
    </div>
  ),
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const Icon = project.Icon;
  const related = PROJECTS.filter(
    (p) => p.slug !== project.slug && p.categories.some((c) => project.categories.includes(c))
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-12 md:pt-36">
          <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(180deg, #f5fbff 0%, #eef6ff 40%, #f7fbf9 100%)",
          }} />
          <div className="container-x relative">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              <ArrowLeft className="h-4 w-4" /> All case studies
            </Link>

            <div className="mt-6 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-primary/30 px-3 py-1 font-mono text-[10px] tracking-[0.18em] uppercase text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
                  {project.category}
                </div>
                <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-[-0.03em] font-semibold">
                  {project.name}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl text-pretty">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="rounded-full border border-primary/30 bg-white/70 px-3 py-1 text-[11px] text-primary font-medium">{t}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="relative aspect-square rounded-3xl border border-border bg-white shadow-elev overflow-hidden grid place-items-center" style={{ background: project.gradient }}>
                  <div className="absolute inset-0 blueprint-bg opacity-25" />
                  <div className="relative h-28 w-28 rounded-2xl bg-white border border-primary/30 grid place-items-center shadow-md">
                    <Icon className="h-12 w-12 text-primary" strokeWidth={1.6} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16">
          <div className="container-x grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-12">
              <Block Icon={Target} title="Business Challenge">
                The client needed a partner who could combine deep engineering expertise with
                a clear understanding of {project.categories.join(", ").toLowerCase()} ecosystems —
                without compromising on speed, security or scale.
              </Block>
              <Block Icon={Lightbulb} title="Solution Delivered">
                Geveo designed and built {project.name} as a {project.category.toLowerCase()} platform,
                pairing modern architecture with a human-centred product experience. The system was
                rolled out incrementally with measurable milestones at each phase.
              </Block>

              <div>
                <h2 className="font-display text-2xl tracking-[-0.01em] inline-flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" /> Key Features
                </h2>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 rounded-xl border border-border bg-white p-3.5 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl tracking-[-0.01em] inline-flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" /> Technology Stack
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl tracking-[-0.01em] inline-flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-primary" /> Screenshots & Gallery
                </h2>
                <div className="mt-5 grid sm:grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl border border-border overflow-hidden relative"
                      style={{ background: project.gradient }}>
                      <div className="absolute inset-0 blueprint-bg opacity-30" />
                      <div className="absolute inset-0 grid place-items-center">
                        <Icon className="h-10 w-10 text-primary/70" strokeWidth={1.6} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Block Icon={TrendingUp} title="Business Outcomes">
                Faster time-to-market, reduced operational overhead and measurable adoption across
                the target user base — with a platform engineered for the next phase of growth.
              </Block>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-4">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary">Project Overview</div>
                  <dl className="mt-3 space-y-3 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd className="font-medium text-right">{project.category}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">Tags</dt>
                      <dd className="font-medium text-right">{project.categories.join(" · ")}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-muted-foreground">Engagement</dt>
                      <dd className="font-medium">End-to-end</dd>
                    </div>
                  </dl>
                  <a href="/#contact" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-medium shadow-green hover:opacity-95 transition">
                    Discuss a similar project <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <RelatedSolution project={project} />
              </div>
            </aside>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 bg-surface border-t border-border">
            <div className="container-x">
              <div className="eyebrow">Related Projects</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.02em]">
                Other products in this space
              </h2>
              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => <RelatedCard key={p.slug} project={p} />)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

function Block({ Icon, title, children }: { Icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl tracking-[-0.01em] inline-flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" /> {title}
      </h2>
      <p className="mt-3 text-muted-foreground text-pretty leading-relaxed">{children}</p>
    </div>
  );
}

const CATEGORY_TO_SOLUTION: Record<string, { slug: string; label: string }> = {
  Web3: { slug: "web3-emerging-tech", label: "Web3 & Emerging Tech" },
  AI: { slug: "web3-emerging-tech", label: "Web3 & Emerging Tech" },
  Mobile: { slug: "mobile-applications", label: "Mobile Applications" },
  SaaS: { slug: "enterprise-applications", label: "Enterprise Applications" },
  Enterprise: { slug: "enterprise-applications", label: "Enterprise Applications" },
};

function RelatedSolution({ project }: { project: Project }) {
  const primary = project.categories[0];
  const target = CATEGORY_TO_SOLUTION[primary] ?? CATEGORY_TO_SOLUTION.Enterprise;
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary">Related Solution</div>
      <div className="mt-2 font-display text-lg tracking-[-0.01em]">{target.label}</div>
      <p className="mt-2 text-sm text-muted-foreground">
        Learn how Geveo delivers this capability across industries.
      </p>
      <Link
        to="/solutions"
        hash={target.slug}
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
      >
        Explore solution <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function RelatedCard({ project }: { project: Project }) {
  const Icon = project.Icon;
  return (
    <Link
      to="/case-studies/$slug"
      params={{ slug: project.slug }}
      className="group relative overflow-hidden rounded-2xl border border-border p-6 card-hover bg-white"
    >
      <div className="flex items-start justify-between">
        <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center">
          <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
      </div>
      <div className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-primary">{project.category}</div>
      <h3 className="mt-1 font-display text-lg tracking-[-0.01em]">{project.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
    </Link>
  );
}
