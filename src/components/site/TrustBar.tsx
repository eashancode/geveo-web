const clients = [
  "Duncan Solutions",
  "Australian National University",
  "Evernode",
  "Sigma Bravo",
  "Zen Ex Machina",
  "Argyle Insurance",
  "Doing Good Rewards",
  "Xentro",
  "Xpectra",
];

// Subtle weight variation for visual rhythm
const weights = [600, 700, 600, 800, 600, 700, 800, 600, 700];

export function TrustBar() {
  const items = clients.map((name, i) => ({ name, w: weights[i % weights.length] }));
  // Duplicate sequence for seamless loop
  const loop = [...items, ...items];

  return (
    <section aria-label="Our clients" className="relative overflow-hidden py-16 md:py-20">
      <div className="container-x">
        <div className="text-center">
          <div className="font-mono text-[11px] tracking-[0.32em] uppercase text-foreground/40">
            Our Clients
          </div>
          <div className="mt-4 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-16 bg-foreground/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#53ad6f]" />
            <span className="h-px w-16 bg-foreground/15" />
          </div>
        </div>
      </div>

      <div
        className="marquee-wrap relative mt-10 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-12 md:gap-16 py-3">
          {loop.map((c, i) => (
            <div key={i} className="flex items-center gap-12 md:gap-16">
              <span
                className="inline-flex cursor-default select-none whitespace-nowrap text-[15px] sm:text-[17px] md:text-[19px] uppercase tracking-[0.14em] text-foreground/40 grayscale transition-[color,filter,letter-spacing] duration-300 ease-out hover:text-[#53ad6f] hover:grayscale-0 hover:tracking-[0.18em]"
                style={{ fontWeight: c.w, fontFamily: "var(--font-display)" }}
              >
                {c.name}
              </span>
              <span className="text-[#53ad6f]/40 text-xs" aria-hidden="true">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
