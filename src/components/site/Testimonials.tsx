import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Geveo has been a true engineering partner for over six years. Their senior teams quietly deliver complex platforms with the kind of ownership you rarely find at scale.",
    name: "Sarah Whitfield",
    role: "CTO",
    company: "Duncan Solutions",
    initials: "SW",
  },
  {
    quote:
      "Their technical depth in agile analytics and dashboarding helped us reshape how enterprises measure transformation. Communication has been outstanding throughout.",
    name: "Dr. Cherie Mylordis",
    role: "Founder",
    company: "Zen Ex Machina",
    initials: "CM",
  },
  {
    quote:
      "Geveo built mission-critical fintech workflows with exceptional rigour. They understood our compliance constraints and delivered automation that just works.",
    name: "James Patel",
    role: "Head of Engineering",
    company: "Apex Salary Packaging",
    initials: "JP",
  },
  {
    quote:
      "From architecture to launch, their team felt like an extension of our own. The platform now scales effortlessly across regions — exactly as promised.",
    name: "Linh Nguyen",
    role: "VP Product",
    company: "Argyle Insurance",
    initials: "LN",
  },
  {
    quote:
      "Specialised XRPL Hooks engineering at a level very few teams in the world can match. Geveo has become foundational to our roadmap.",
    name: "Marcus Eriksson",
    role: "Protocol Lead",
    company: "iXRPL",
    initials: "ME",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">Client voices</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.02em] text-balance">
              Trusted partnerships, built over years.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-pretty">
            What it feels like to work with senior engineers who care about
            your outcomes as much as their craft.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-14 relative overflow-hidden rounded-3xl border border-border bg-white shadow-elev">
          <div className="absolute inset-0 blueprint-bg opacity-30 [mask-image:radial-gradient(circle_at_center,black_25%,transparent_75%)]" />
          <Quote className="absolute -top-4 -left-4 h-32 w-32 text-[#53ad6f]/10" strokeWidth={1} />

          <div
            className="relative flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-full p-10 md:p-16">
                <div className="flex items-center gap-1 text-[#53ad6f]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#53ad6f]" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-6 font-display text-2xl md:text-3xl lg:text-[34px] leading-[1.3] tracking-[-0.01em] text-balance max-w-4xl">
                  "{t.quote}"
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#53ad6f] to-[#3d8a55] text-white grid place-items-center font-display font-semibold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role} · <span className="text-[#53ad6f]">{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="relative flex items-center justify-center gap-2 pb-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[#53ad6f]" : "w-2 bg-border hover:bg-[#53ad6f]/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "17+ yrs", v: "Engineering partnerships" },
            { k: "5+ yrs", v: "Avg. client tenure" },
            { k: "98%", v: "Client retention" },
            { k: "50+", v: "Senior engineers" },
          ].map((m) => (
            <div key={m.v} className="rounded-2xl border border-border bg-surface p-5">
              <div className="font-display text-2xl font-semibold text-[#53ad6f]">{m.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
