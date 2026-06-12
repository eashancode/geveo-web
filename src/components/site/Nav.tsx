import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/geveo-logo.svg";

const links = [
  { to: "/about", label: "About Us" },
  { to: "/solutions", label: "Solutions" },
  { to: "/evernode", label: "Evernode" },
  { to: "/case-studies", label: "Case Studies" },
  { href: "/#careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Geveo home">
          <img src={logo} alt="Geveo" className="h-7 w-auto md:h-8" />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) =>
            "to" in l ? (
              <Link
                key={l.label}
                to={l.to}
                className="nav-link relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "nav-link relative px-3 py-2 text-sm text-foreground font-medium" }}
                activeOptions={l.to === "/" ? { exact: true } : undefined}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="nav-link relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            )
          )}
        </nav>
        <a
          href="/#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-1.5 text-sm font-medium shadow-green hover:shadow-[0_14px_36px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] hover:brightness-105 transition-all"
        >
          Talk to us
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 group-hover:translate-x-0.5 transition-transform">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
