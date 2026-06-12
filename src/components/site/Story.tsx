import { Link } from "@tanstack/react-router";

const milestones = [
  { y: "2008", t: "Founded in Colombo", d: "Geveo is established with a vision to deliver world-class digital engineering from Sri Lanka." },
  { y: "2013", t: "First enterprise partnerships", d: "Long-term engagements with global clients shape our delivery model and engineering culture." },
  { y: "2017", t: "Scaling internationally", d: "Expanded our footprint across Australia and the wider Asia-Pacific region." },
  { y: "2021", t: "Specialised practices", d: "Deepened capabilities in cloud, data, AI and modern product engineering." },
  { y: "2026", t: "Global delivery partner", d: "Today, our teams support enterprises across multiple continents and industries." },
];

export function Story() {
  return (
    <section id="company" className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="eyebrow">Our story</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.03em] text-balance font-semibold">
              Seventeen years of engineering software that creates lasting value.
            </h2>
            <p className="mt-6 text-muted-foreground text-pretty mb-7">
              Geveo was founded in 2008 by engineers and designers who believed
              software delivery could be done differently more thoughtful,
              more honest, more outcomes-driven. That belief has shaped every
              client, every product and every team we have built since.
            </p>
                      <Link
                        to="/about"
                        className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium shadow-green hover:opacity-95 transition group"
                      >
                        Find out more
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 group-hover:translate-x-0.5 transition-transform">→</span>
                      </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-card">
              <img
                src={new URL("../../assets/team-office.jpg", import.meta.url).href}
                alt="Geveo engineering floor"
                loading="lazy"
                className="w-full h-full object-cover aspect-[5/4]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
