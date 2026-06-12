import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, Sparkles, Heart, ShieldCheck, GraduationCap, Users,
  Globe, ArrowRight, ArrowUpRight, MapPin, CheckCircle2, Compass,
  PenTool, Code2, Rocket, TrendingUp, Lightbulb, Handshake, Scale,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import gptw from "@/assets/geveo_GPTW_new_300.png";
import teamStandup from "@/assets/team-standup.jpg";
import teamReview from "@/assets/team-review.jpg";
import teamWhiteboard from "@/assets/team-whiteboard.jpg";
import teamPair from "@/assets/team-pair.jpg";
import teamOffice from "@/assets/team-office.jpg";
import raviImg from "@/assets/ravi.png";
import yudhishImg from "@/assets/yudhish.png";
import hethuImg from "@/assets/hethu.png";

const GALLERY: { src: string; alt: string; tag: string; span: string }[] = [
  { src: teamOffice, alt: "Geveo team celebration at the office", tag: "Team celebrations", span: "row-span-2" },
  { src: teamWhiteboard, alt: "Engineers in a knowledge-sharing session", tag: "Knowledge sharing", span: "" },
  { src: teamReview, alt: "Designers and engineers in a workshop", tag: "Workshops", span: "" },
  { src: teamStandup, alt: "Company-wide stand-up gathering", tag: "Company events", span: "row-span-2" },
  { src: teamPair, alt: "Colleagues mentoring one another", tag: "Mentorship", span: "" },
  { src: teamReview, alt: "Team enjoying a community activity", tag: "Community", span: "" },
];

const CULTURE_CARDS = [
  { Icon: Lightbulb, t: "Innovation First", d: "We explore, prototype and ship ideas that push our craft forward." },
  { Icon: TrendingUp, t: "Growth Mindset", d: "Every engineer is supported with learning, mentorship and new challenges." },
  { Icon: Handshake, t: "Collaboration", d: "We work shoulder-to-shoulder — across teams, time zones and disciplines." },
  { Icon: Scale, t: "Work-Life Balance", d: "We care about wellbeing as much as we care about outcomes." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Geveo — Your Trusted Digital Transformation Partner" },
      {
        name: "description",
        content:
          "Geveo helps organizations solve complex business challenges through AI, enterprise software, digital platforms and emerging technologies. People first. Technology driven.",
      },
      { property: "og:title", content: "About Geveo — Trusted Digital Transformation Partner" },
      {
        property: "og:description",
        content:
          "Innovation, engineering excellence and long-term partnerships. Proudly certified Great Place To Work®.",
      },
    ],
  }),
  component: AboutPage,
});

const STORY = [
  {
    n: "01",
    t: "A belief in real impact",
    d: "Technology should solve real business problems, create measurable impact and empower organizations to grow.",
  },
  {
    n: "02",
    t: "Founded with purpose",
    d: "Geveo was founded with the belief that successful digital transformation requires more than software development it requires understanding business objectives, embracing innovation and delivering long-term value.",
  },
  {
    n: "03",
    t: "A global partner today",
    d: "Geveo partners with organizations across industries to build scalable platforms, intelligent systems and future-ready digital experiences.",
  },
];

const PROCESS = [
  { n: "01", t: "Discover", d: "Understand your business, users and constraints.", Icon: Compass },
  { n: "02", t: "Design", d: "Shape experiences, architecture and roadmap.", Icon: PenTool },
  { n: "03", t: "Develop", d: "Ship with senior engineers, quality at the core.", Icon: Code2 },
  { n: "04", t: "Deliver", d: "Production-grade rollout with observability.", Icon: Rocket },
  { n: "05", t: "Evolve", d: "Continuous improvement against the outcomes that matter.", Icon: TrendingUp },
];

const VALUES = [
  { Icon: Heart, t: "Customer Commitment", d: "We place customer success at the center of everything we do." },
  { Icon: Sparkles, t: "Innovation", d: "We embrace emerging technologies and continuous improvement." },
  { Icon: ShieldCheck, t: "Honesty & Integrity", d: "We build trust through transparency and accountability." },
  { Icon: GraduationCap, t: "Growth & Development", d: "We invest in learning, innovation and professional excellence." },
  { Icon: Users, t: "People First", d: "Our people are our greatest strength and the foundation of our success." },
];

const LEADERS = [
  {
    name: "Ravi Weerasooriya",
    role: "CEO & Founder",
    initials: "RW",
    img: raviImg,
    linkedin: "https://www.linkedin.com/in/ravi-weerasooriya-8a31a02",
  },
  {
    name: "Yudhish Omprasadham",
    role: "General Manager",
    initials: "YO",
    img: yudhishImg,
    linkedin: "https://www.linkedin.com/in/yudhish-omprasadham-2612a321b/",
  },
  {
    name: "Hethu Nanayakkara",
    role: "Head of Software Engineering",
    initials: "HN",
    img: hethuImg,
    linkedin: "https://www.linkedin.com/in/hethu/?originalSubdomain=lk",
  },
];

const REGIONS = [
  { c: "Australia", city: "Sydney · Melbourne", flag: "🇦🇺" },
  { c: "Singapore", city: "Singapore", flag: "🇸🇬" },
  { c: "Sri Lanka", city: "Colombo · Delivery HQ", flag: "🇱🇰" },
];

const METRICS = [
  { k: "35+", v: "Projects Delivered" },
  { k: "17+", v: "Industries Served" },
  { k: "40+", v: "Technologies Mastered" },
  { k: "50+", v: "Engineers" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 50% at 20% 0%, color-mix(in oklab, var(--primary) 12%, transparent) 0%, transparent 60%), radial-gradient(50% 40% at 90% 10%, rgba(56,140,220,0.10) 0%, transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(to right, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse at top, black 30%, transparent 75%)",
            }}
          />
          <div className="container-x">
            <div className="max-w-3xl">
              <div className="eyebrow inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> About Geveo
              </div>
              <h1 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] text-balance font-semibold">
                Your Trusted{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, var(--primary), #2f9bd6)",
                  }}
                >
                  Digital Transformation
                </span>{" "}
                Partner
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-2xl">
                Transforming ideas into intelligent digital solutions through
                innovation, engineering excellence and long-term partnerships.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty max-w-2xl">
                At Geveo, we help organizations solve complex business
                challenges through AI, enterprise software, digital platforms
                and emerging technologies. Our mission is to deliver solutions
                that create measurable business value while building lasting
                partnerships with our clients.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/case-studies"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium shadow-green hover:brightness-105 transition-all"
                >
                  Explore our work
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </Link>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-5 py-2 text-sm font-medium hover:border-primary/40 transition-colors"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="py-24 md:py-28 bg-surface border-y border-border">
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="eyebrow">Our story</div>
                <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance font-semibold">
                  Why Geveo exists.
                </h2>
                <p className="mt-6 text-muted-foreground text-pretty">
                  We believe technology is most valuable when it creates real
                  outcomes for people, for businesses and for the
                  communities they serve. That belief has shaped every team,
                  every product and every partnership we have built.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ol className="relative border-l border-border ml-2">
                  {STORY.map((m) => (
                    <li key={m.n} className="pl-8 pb-10 relative last:pb-0">
                      <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-surface" />
                      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
                        Chapter {m.n}
                      </div>
                      <div className="mt-1 font-display text-2xl tracking-[-0.02em] font-semibold">
                        {m.t}
                      </div>
                      <p className="mt-2 text-muted-foreground text-pretty max-w-xl">
                        {m.d}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="py-24 md:py-28">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto">
              <div className="eyebrow">How we work</div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance">
                Strategic partners. Outcome-driven delivery.
              </h2>
              <p className="mt-5 text-muted-foreground text-pretty">
                We combine business understanding, user-centered design and
                engineering excellence to deliver successful outcomes.
              </p>
            </div>

            <div className="mt-16 relative">
              <div className="hidden lg:block absolute left-0 right-0 top-[34px] px-[6%]">
                <div className="relative h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent">
                  <svg viewBox="0 0 1000 2" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                    <line x1="0" x2="1000" y1="1" y2="1" stroke="#53ad6f" strokeOpacity=".7" strokeWidth="1" className="flow-dash" />
                  </svg>
                </div>
              </div>

              <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 lg:gap-x-6">
                {PROCESS.map((p, i) => (
                  <li
                    key={p.n}
                    className="group relative text-center lg:text-left step-in"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    <div className="relative mx-auto lg:mx-0 flex h-[68px] w-[68px] items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-[#53ad6f]/0 group-hover:bg-[#53ad6f]/10 transition-colors duration-300" />
                      <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white border border-border shadow-card transition-transform duration-300 group-hover:scale-105">
                        <p.Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                      </span>
                    </div>
                    <div className="mt-5">
                      <div className="font-mono text-[11px] tracking-[0.24em] text-foreground/40 group-hover:text-[#53ad6f] transition-colors">
                        STEP {p.n}
                      </div>
                      <h3 className="mt-2 font-display text-xl tracking-[-0.01em]">
                        {p.t}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground text-pretty max-w-xs mx-auto lg:mx-0">
                        {p.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 md:py-28 bg-surface border-y border-border">
          <div className="container-x">
            <div className="max-w-2xl">
              <div className="eyebrow">Our values</div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance">
                What we believe shapes how we build.
              </h2>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((v, i) => (
                <div
                  key={v.t}
                  className="group relative rounded-2xl border border-border bg-card p-7 card-hover overflow-hidden step-in"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 18%, transparent), transparent)",
                    }}
                  />
                  <div className="relative">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <v.Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 font-display text-xl">{v.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground text-pretty">{v.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIFE AT GEVEO */}
        <section className="py-24 md:py-28">
          <div className="container-x">
            <div className="max-w-2xl">
              <div className="eyebrow inline-flex items-center gap-2">
                <Heart className="h-3.5 w-3.5" /> Life at Geveo
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance font-semibold">
                Building Great Products Starts With Great People
              </h2>
              <p className="mt-5 text-muted-foreground text-pretty">
                At Geveo, we believe innovation thrives in an environment where
                people feel valued, supported, and empowered. Our culture
                encourages collaboration, continuous learning, creativity, and
                professional growth.
              </p>
            </div>

            {/* Masonry gallery */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4">
              {GALLERY.map((g, i) => (
                <figure
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-surface card-hover step-in ${g.span}`}
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent opacity-90" />
                  <figcaption className="absolute left-3 bottom-3 right-3 flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/90">
                      {g.tag}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_rgba(83,173,111,0.25)]" />
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Culture cards */}
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CULTURE_CARDS.map((c, i) => (
                <div
                  key={c.t}
                  className="group relative rounded-2xl border border-border bg-card p-6 card-hover overflow-hidden step-in"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 18%, transparent), transparent)",
                    }}
                  />
                  <div className="relative">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <c.Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 font-display text-lg tracking-[-0.01em]">{c.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground text-pretty">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* LEADERSHIP */}
        <section className="py-24 md:py-28 bg-surface border-y border-border">
          <div className="container-x">
            <div className="max-w-2xl">
              <div className="eyebrow">Leadership</div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance">
                Experienced. Engaged. Handson.
              </h2>
              <p className="mt-5 text-muted-foreground text-pretty">
                Our leadership team blends decades of engineering, product and
                business experience close to clients, close to the work.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEADERS.map((l, i) => (
                <div
                  key={l.name}
                  className="group relative rounded-2xl border border-border bg-card p-8 card-hover overflow-hidden step-in"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: "linear-gradient(90deg, var(--primary), #2f9bd6)" }}
                  />
                  <div
                    className="relative h-20 w-20 rounded-2xl overflow-hidden"
                    style={{
                      border: "1px solid color-mix(in oklab, var(--primary) 100%, transparent)",
                    }}
                  >
                    <img src={l.img} alt={l.name} className="h-full w-full object-cover" />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-xl tracking-[-0.01em]">{l.name}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{l.role}</div>
                  <a
                    href={l.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-mono tracking-[0.18em] uppercase text-foreground/40 hover:text-primary transition-colors"
                  >
                    LinkedIn
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST & RECOGNITION */}
        <section className="py-24 md:py-28 bg-surface border-y border-border">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto">
              <div className="eyebrow inline-flex items-center gap-2">
                <Award className="h-3.5 w-3.5" /> Trust & recognition
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance">
                Trusted by businesses across industries.
              </h2>
            </div>

            <div className="mt-12 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
                {METRICS.map((m) => (
                  <div key={m.v} className="bg-background p-7 text-center">
                    <div className="font-display text-3xl md:text-4xl tracking-[-0.02em] font-semibold text-foreground">
                      {m.k}
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">{m.v}</div>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-border bg-white p-6 shadow-elev flex items-center gap-5">
                  <img src={gptw} alt="Great Place To Work · Certified" className="h-24 w-auto" />
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary">Certified</div>
                    <div className="mt-1 font-display text-lg tracking-[-0.01em]">
                      Great Place To Work® · Sri Lanka
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Recognized for workplace culture and engineering excellence.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-28">
          <div className="container-x">
            <div
              className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16 text-center"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--primary) 12%, white) 0%, white 60%, rgba(56,140,220,0.10) 100%)",
              }}
            >
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#2f9bd6]/10 blur-3xl" />
              <div className="relative max-w-2xl mx-auto">
                <div className="eyebrow inline-flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Let's build together
                </div>
                <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance">
                  Let's build something meaningful together.
                </h2>
                <p className="mt-5 text-muted-foreground text-pretty">
                  Whether you're exploring AI, modernizing enterprise systems,
                  building SaaS products, or developing Web3 solutions, Geveo
                  is ready to help.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="/#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium shadow-green hover:brightness-105 transition-all"
                  >
                    Start a Conversation
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-5 py-2 text-sm font-medium hover:border-primary/40 transition-colors"
                  >
                    Explore Case Studies
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
