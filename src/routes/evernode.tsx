import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, Globe, Code2, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import VantaHero from "@/components/site/VantaHero";

const FEATURES = [
  {
    Icon: ShieldCheck,
    title: "Decentralized smart contracts",
    description:
      "EverNode runs on XRPL Hooks so smart contracts can execute without a central authority or trusted intermediary.",
  },
  {
    Icon: Globe,
    title: "XRPL-native Web 3.0",
    description:
      "Built for the XRP Ledger, EverNode supports low-fee, high-performance DApp experiences and tokenized business logic.",
  },
  {
    Icon: Code2,
    title: "Rapid DApp delivery",
    description:
      "Geveo helps you design, develop and deploy XRPL Hooks applications with production-grade architecture and governance.",
  },
];

const USAGE = [
  {
    label: "Smart contract platforms",
    description:
      "Create trustless workflows, on-chain business logic and automated settlements powered by XRPL Hooks.",
  },
  {
    label: "Decentralized applications",
    description:
      "Build responsive consumer experiences that connect to XRPL assets, wallets and decentralized identity.",
  },
  {
    label: "Tokenized ecosystems",
    description:
      "Launch loyalty, rewards, or financial products that operate transparently on xrpl-compatible infrastructure.",
  },
];

export const Route = createFileRoute("/evernode")({
  head: () => ({
    meta: [
      { title: "EverNode by Geveo — XRPL Smart Contract Platform" },
      {
        name: "description",
        content:
          "Geveo built the core EverNode platform for XRPL smart contracts, XRPL Hooks and decentralized app development.",
      },
      { property: "og:title", content: "EverNode by Geveo — XRPL Smart Contract Platform" },
      {
        property: "og:description",
        content:
          "Geveo develops EverNode for Web 3.0 and XRPL Hooks solutions, empowering decentralized applications and smart contract workflows.",
      },
    ],
  }),
  component: EvernodePage,
});

function EvernodePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#f8fbff]">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <VantaHero />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(83,173,111,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,168,229,0.08),transparent_24%)]" />
          </div>
          <div className="container-x relative z-10 text-slate-950">
            <div className="max-w-3xl">
              <div className="eyebrow inline-flex items-center gap-2 text-primary">
                <Sparkles className="h-3.5 w-3.5" /> EverNode
              </div>
              <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-balance font-semibold">
                Plug into <span className="bg-linear-to-r from-[#53AB6F] to-[#20B2AA] bg-clip-text text-transparent">XRPL native Web3</span> with EverNode.
              </h1>
              <p className="mt-6 text-lg text-slate-600 text-pretty max-w-2xl leading-8">
                Geveo developed the core EverNode platform to help teams build XRPL Hooks applications, decentralized workflows and tokenized Web 3.0 products with modern architecture, governance and security.
              </p>
              <p className="mt-4 text-slate-600 text-pretty max-w-2xl leading-8">
                EverNode is a layer 2 smart contract solution on the XRP Ledger, enabling decentralized apps and XRPL Hook automation without central authority or compromise.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://everpower.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium shadow-green hover:brightness-105 transition-all"
                >
                  Explore Everpower Labs
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border border-primary/80 bg-transparent backdrop-blur px-5 py-2 text-sm font-medium text-primary hover:border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Talk to us
                </a>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-primary/15 bg-surface/80 p-4 backdrop-blur transition-transform duration-500 hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Platform</p>
                  <p className="mt-3 text-lg font-semibold text-foreground">EverNode</p>
                </div>
                <div className="rounded-3xl border border-primary/15 bg-surface/80 p-4 backdrop-blur transition-transform duration-500 hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Protocol</p>
                  <p className="mt-3 text-lg font-semibold text-foreground">XRPL Hooks</p>
                </div>
                <div className="rounded-3xl border border-primary/15 bg-surface/80 p-4 backdrop-blur transition-transform duration-500 hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Focus</p>
                  <p className="mt-3 text-lg font-semibold text-foreground">Decentralized DApps</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-surface border-y border-border">
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="eyebrow">Why EverNode</div>
                <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance font-semibold">
                  The XRPL-native platform for smart contracts and DApps.
                </h2>
                <p className="mt-6 text-muted-foreground text-pretty max-w-xl">
                  EverNode brings decentralized applications to the XRP Ledger with a lightweight, composable smart contract framework. Geveo helps organizations design and deliver secure, scalable Web 3.0 products on this platform.
                </p>
              </div>
              <div className="lg:col-span-7 grid gap-5">
                {FEATURES.map((feature, index) => (
                  <div key={feature.title} className="group overflow-hidden rounded-3xl border border-border bg-background p-8 transition hover:border-primary/60">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <feature.Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 font-display text-xl tracking-[-0.01em]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground text-pretty">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28">
          <div className="container-x">
            <div className="max-w-2xl mx-auto text-center">
              <div className="eyebrow">EverNode use cases</div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance font-semibold">
                Practical XRPL solutions for business and blockchain products.
              </h2>
              <p className="mt-5 text-muted-foreground text-pretty">
                From smart contract automation to tokenized ecosystems, EverNode helps you unlock new digital experiences with XRPL-native infrastructure.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {USAGE.map((item) => (
                <div key={item.label} className="rounded-3xl border border-border bg-surface p-8">
                  <h3 className="font-display text-xl tracking-[-0.01em]">{item.label}</h3>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-surface border-y border-border">
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <div className="eyebrow">About EverNode</div>
                <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance font-semibold">
                  Built for faster, safer XRPL adoption.
                </h2>
                <p className="mt-6 text-muted-foreground text-pretty">
                  EverNode is a layer 2 solution built to make XRPL smart contracts easier to adopt and operate. It supports decentralized workflows, wallet-connected applications, and the next wave of blockchain-native business products.
                </p>
                <div className="mt-8 space-y-3 text-sm text-muted-foreground text-pretty">
                  <p>
                    Geveo supports end-to-end EverNode delivery: platform strategy, XRPL Hooks integration, smart contract development, testing and production rollout.
                  </p>
                  <p>
                    Our team helps you ship enterprise-grade DApps that are secure, maintainable and designed for real users across Web 3.0 ecosystems.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 rounded-3xl border border-border bg-background p-8">
                <div className="rounded-3xl border border-border bg-white/90 p-7 shadow-card">
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary">Looking for EverNode support?</div>
                  <p className="mt-4 text-sm text-muted-foreground text-pretty">
                    Talk to the Geveo team to discuss XRPL Hooks, EverNode architecture and DApp product design.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium shadow-green hover:brightness-105 transition-all"
                    >
                      Contact our team
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="https://everpower.io/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-2 text-sm font-medium hover:border-primary/40 transition-colors"
                    >
                      Visit Everpower Labs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16 text-center" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 12%, white) 0%, white 60%, rgba(56,140,220,0.10) 100%)" }}>
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#2f9bd6]/10 blur-3xl" />
              <div className="relative max-w-2xl mx-auto">
                <div className="eyebrow inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Ready to build on EverNode
                </div>
                <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance">
                  Start your XRPL journey with a partner who knows the platform.
                </h2>
                <p className="mt-5 text-muted-foreground text-pretty">
                  Whether you need smart contract strategy, XRPL Hooks development or end-to-end DApp execution, Geveo can help bring your EverNode project to production.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="/#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium shadow-green hover:brightness-105 transition-all"
                  >
                    Talk to EverNode experts
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </a>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-5 py-2 text-sm font-medium hover:border-primary/40 transition-colors"
                  >
                    View related work
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
