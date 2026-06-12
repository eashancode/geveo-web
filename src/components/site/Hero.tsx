import { Brain, Building2, Globe, Boxes, LineChart, Sparkles, Users } from "lucide-react";
import teamHero from "@/assets/team-hero.jpg";
import teamWhiteboard from "@/assets/team-whiteboard.jpg";
import teamPair from "@/assets/team-pair.jpg";
import HeroBackground from "./HeroBackground";

const BADGES = [
  { Icon: Brain, label: "AI Solutions", pos: "top-4 -left-3 sm:-left-6", delay: "0s" },
  { Icon: Building2, label: "Enterprise Software", pos: "top-1/3 -right-3 sm:-right-8", delay: "1.2s" },
  { Icon: Boxes, label: "Web3 Platforms", pos: "bottom-24 -left-4 sm:-left-10", delay: "2.4s" },
  { Icon: Globe, label: "Digital Transformation", pos: "bottom-6 right-2 sm:right-6", delay: "0.6s" },
  { Icon: LineChart, label: "Data & Analytics", pos: "top-1/2 -left-4 sm:-left-12", delay: "1.8s" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-36 md:pb-28">
      <HeroBackground />
      <HeroBackdrop />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6">

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[58px] leading-[1.05] tracking-[-0.03em] text-balance font-semibold">
              Transforming Ideas Into{" "}
              <span className="bg-gradient-to-r from-[#53AB6F]  to-[#20B2AA] bg-clip-text text-transparent">
                Intelligent Digital Solutions
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
              Helping organizations innovate, automate, and grow through AI, enterprise software,
              Web3 platforms, and digital transformation services.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium shadow-green hover:opacity-95 transition"
              >
                Book a Consultation
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 backdrop-blur px-5 py-2.5 text-sm font-medium hover:border-border-strong transition"
              >
                Explore Our Work
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {[
                { Icon: Brain, label: "AI Solutions" },
                { Icon: Building2, label: "Enterprise Software" },
                { Icon: Globe, label: "Web3 Platforms" },
                { Icon: Boxes, label: "Digital Transformation" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-muted-foreground shadow-sm"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "17+", v: "Years delivering" },
                { k: "50+", v: "Engineers" },
                { k: "35+", v: "Projects shipped" },
              ].map((m) => (
                <div key={m.k}>
                  <div className="font-display text-3xl sm:text-4xl tracking-[-0.03em] font-semibold">
                    {m.k}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Human-centered visual */}
          <div className="lg:col-span-6">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Soft halo */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[2.5rem] blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(83,173,111,0.22), transparent 60%), radial-gradient(ellipse at bottom right, rgba(56,140,220,0.16), transparent 60%)",
        }}
      />

      {/* Main collage */}
      <div className="relative grid grid-cols-6 grid-rows-6 gap-3 aspect-[5/6] max-w-xl mx-auto">
        {/* Primary image */}
        <div className="col-span-6 row-span-4 relative rounded-3xl overflow-hidden border border-white/70 shadow-[0_30px_80px_-30px_rgba(15,40,80,0.3)]">
          <img
            src={teamHero}
            alt="Geveo product team collaborating on digital solutions"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
          <div className="absolute left-4 bottom-4 right-4 flex items-center gap-3 rounded-xl border border-white/40 bg-white/80 backdrop-blur-md px-4 py-3 shadow-sm">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary">
              <Users className="h-4 w-4" />
            </span>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
                People · Product · Engineering
              </div>
              <div className="text-sm font-medium text-foreground">
                Building great software, together.
              </div>
            </div>
          </div>
        </div>

        {/* Secondary images */}
        <div className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden border border-white/70 shadow-md">
          <img
            src={teamWhiteboard}
            alt="Product workshop"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden border border-white/70 shadow-md">
          <img
            src={teamPair}
            alt="Engineers pairing on a build"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Floating ecosystem badges */}
      {BADGES.map(({ Icon, label, pos, delay }) => (
        <div
          key={label}
          className={`hidden sm:flex absolute ${pos} items-center gap-2 rounded-full border border-white/80 bg-white/90 backdrop-blur px-3 py-1.5 shadow-[0_8px_24px_-8px_rgba(15,40,80,0.25)] float-soft`}
          style={{ animationDelay: delay }}
        >
          <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/12 text-primary">
            <Icon className="h-3 w-3" strokeWidth={2.4} />
          </span>
          <span className="text-[11px] font-medium text-foreground whitespace-nowrap">{label}</span>
        </div>
      ))}

      {/* Top-right sparkle chip */}
      <div className="hidden sm:flex absolute -top-3 right-6 items-center gap-2 rounded-full border border-white/80 bg-white/95 backdrop-blur px-3 py-1.5 shadow-md float-soft">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        <span className="text-[11px] font-medium text-foreground">Innovation in motion</span>
      </div>
    </div>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #edf8ff 0%, #ecf2ff 30%, #f6effc 100%)",
        }}
      />

      {/* Animated mesh gradient orbs */}
      <div
        className="absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full blur-3xl glow-orb-1"
        style={{
          background:
            "radial-gradient(circle, rgba(54,197,168,0.28), transparent 70%)",
        }}
      />
      <div
        className="absolute top-20 right-[-140px] h-[560px] w-[560px] rounded-full blur-3xl glow-orb-2"
        style={{
          background:
            "radial-gradient(circle, rgba(90,143,244,0.25), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-180px] left-1/3 h-[480px] w-[480px] rounded-full blur-3xl glow-orb-1"
        style={{
          background:
            "radial-gradient(circle, rgba(255,166,184,0.14), transparent 70%)",
          animationDelay: "4s",
        }}
      />

      {/* Soft flowing wave */}
      <svg
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full opacity-[0.35]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hero-wave" x1="0" x2="1">
            <stop offset="0%" stopColor="#53ad6f" stopOpacity="0" />
            <stop offset="50%" stopColor="#53ad6f" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2f9bd6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          fill="none"
          stroke="url(#hero-wave)"
          strokeWidth="1.2"
          d="M0,160 C240,80 480,240 720,160 C960,80 1200,240 1440,160"
        />
        <path
          fill="none"
          stroke="url(#hero-wave)"
          strokeWidth="1"
          strokeOpacity="0.6"
          d="M0,200 C240,120 480,280 720,200 C960,120 1200,280 1440,200"
        />
      </svg>

      {/* Floating geometric accents */}
      <div className="absolute top-24 left-[18%] h-3 w-3 rounded-sm border border-primary/40 rotate-45 float-soft" />
      <div className="absolute top-40 right-[22%] h-2 w-2 rounded-full bg-primary/40 float-soft" style={{ animationDelay: "1.4s" }} />
      <div className="absolute bottom-32 left-[28%] h-2.5 w-2.5 rounded-full border border-[#2f9bd6]/50 float-soft" style={{ animationDelay: "2.2s" }} />

      {/* Soft blueprint grid */}
      <div className="absolute inset-0 blueprint-bg opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
