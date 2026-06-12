import { NetworkLines } from "./TechBackdrop";
import teamWhiteboard from "@/assets/team-whiteboard.jpg";

export function Innovation() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]">
        <NetworkLines className="w-full h-full" density={26} seed={11} />
      </div>


      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary">Specialised</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] text-balance">
              Deep engineering for emerging platforms.
            </h2>
            <p className="mt-6 text-background/70 max-w-xl text-pretty">
              Geveo engineered the core Evernode platform and continues to
              deliver specialised work on XRPL Hooks and decentralised
              application development — an example of the technical depth we
              bring to the next generation of enterprise platforms.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Evernode", "XRPL Hooks", "DApps", "Smart Contracts"].map((t) => (
                <span key={t} className="rounded-full border border-background/15 bg-background/5 px-3 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://everpower.io/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-95 transition"
            >
              Visit Everpower Labs <span>↗</span>
            </a>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-background/10 shadow-elev">
              <img
                src={teamWhiteboard}
                alt="Geveo engineers architecting a specialised platform"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute left-4 bottom-4 right-4 rounded-xl border border-background/15 bg-foreground/40 backdrop-blur px-4 py-3 text-background">
                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-background/70">
                  Platform engineering
                </div>
                <div className="mt-1 text-sm">
                  Architects and engineers working on next-generation
                  decentralised infrastructure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
