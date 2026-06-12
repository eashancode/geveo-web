import careersTeam from "@/assets/careers-team.jpg";
import { Sparkles, GraduationCap, Globe2, Users, TrendingUp, ArrowUpRight } from "lucide-react";

const badges = [
  { icon: Sparkles, label: "Flexible Working" },
  { icon: GraduationCap, label: "Learning Culture" },
  { icon: Globe2, label: "Global Projects" },
  { icon: Users, label: "Great Team" },
  { icon: TrendingUp, label: "Career Growth" },
];

export function Careers() {
  return (
    <section id="careers" className="relative py-24 md:py-32 overflow-hidden bg-[oklch(0.16_0.02_200)] text-white">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <span className="glow-orb-1 absolute -left-32 top-1/4 h-[460px] w-[460px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(83,173,111,0.28), transparent 70%)" }} />
        <span className="glow-orb-2 absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(83,173,111,0.18), transparent 70%)" }} />
        <div className="absolute inset-0 blueprint-bg opacity-[0.07]" />
      </div>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6 step-in">
            <div className="relative group">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-[#53ad6f]/30 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-[5/4] rounded-3xl overflow-hidden border border-white/10 shadow-elev">
                <img
                  src={careersTeam}
                  alt="Geveo team celebrating together in the office"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  width={1280}
                  height={896}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#53ad6f]/10 via-transparent to-transparent mix-blend-overlay" />

                {/* Floating badge on image */}
                <div className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#53ad6f] pulse-dot" />
                  We&rsquo;re hiring across teams
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6 step-in" style={{ animationDelay: "0.1s" }}>
            <div className="eyebrow" style={{ color: "#53ad6f" }}>Careers</div>
            <h2 className="mt-3 font-display text-5xl md:text-6xl tracking-[-0.03em] font-semibold text-balance">
              JOIN OUR <span className="text-[#53ad6f]">TEAM</span>
            </h2>
            <p className="mt-6 max-w-xl text-white/70 text-pretty text-lg">
              At Geveo, we build meaningful software with people who care.
              We invest in learning, embrace flexibility, and collaborate on
              global projects that move the needle — and we make room for
              real career growth along the way.
            </p>

            {/* Culture badges */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {badges.map((b, i) => (
                <span
                  key={b.label}
                  className="step-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur px-4 py-2 text-sm text-white/85 hover:border-[#53ad6f]/60 hover:bg-[#53ad6f]/10 hover:text-white transition-colors"
                  style={{ animationDelay: `${0.15 + i * 0.08}s` }}
                >
                  <b.icon className="h-3.5 w-3.5 text-[#53ad6f]" />
                  {b.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="https://jobs.geveo.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#53ad6f] text-white pl-5 pr-2 py-2.5 text-sm font-medium shadow-[0_10px_30px_-12px_rgba(83,173,111,0.7)] hover:bg-[#4a9c63] transition"
              >
                View Open Positions
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 group-hover:translate-x-0.5 transition-transform">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
