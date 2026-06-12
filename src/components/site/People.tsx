import teamStandup from "@/assets/team-standup.jpg";
import teamReview from "@/assets/team-review.jpg";
import teamWhiteboard from "@/assets/team-whiteboard.jpg";
import teamPair from "@/assets/team-pair.jpg";

const facets = [
  { t: "Engineering culture", d: "A team of senior practitioners who care about craft, mentorship and quality." },
  { t: "Curiosity at the core", d: "We invest in learning, exploration and the time to think deeply about problems." },
  { t: "Human-centred mindset", d: "Empathy with our clients, our users and each other shapes how we work." },
];

const photos = [
  { src: teamStandup, alt: "Engineering team in a morning stand-up", aspect: "aspect-[4/5]" },
  { src: teamReview, alt: "Designers and engineers reviewing UI sketches", aspect: "aspect-square" },
  { src: teamWhiteboard, alt: "Senior engineers at the whiteboard", aspect: "aspect-square" },
  { src: teamPair, alt: "Colleagues pair programming", aspect: "aspect-[4/5]" },
];

export function People() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow">Our people</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.03em] text-balance font-semibold">
              A team that takes ownership of what they build.
            </h2>
            <p className="mt-5 text-muted-foreground text-pretty max-w-xl">
              Our culture is built around real collaboration, creative
              problem-solving and a quiet obsession with quality. Great
              software is the by-product of great teams — and we invest in
              ours accordingly.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Senior engineers", "Product designers", "AI specialists", "Platform & DevOps"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs text-muted-foreground hover:border-[#53ad6f] hover:text-[#53ad6f] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://jobs.geveo.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition"
            >
              Explore careers <span>↗</span>
            </a>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            {photos.map((p, i) => (
              <div
                key={i}
                className={`group rounded-2xl overflow-hidden border border-border bg-surface ${p.aspect} relative card-hover`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {facets.map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-7 card-hover">
              <div className="h-1 w-10 rounded-full bg-primary" />
              <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.02em]">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
