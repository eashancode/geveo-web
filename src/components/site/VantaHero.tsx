import { useEffect, useRef } from "react";

export default function VantaHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    const loadScript = (id: string, src: string) =>
      new Promise<void>((resolve, reject) => {
        if (document.getElementById(id)) return resolve();
        const s = document.createElement("script");
        s.src = src;
        s.id = id;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(s);
      });

    let mounted = true;

    (async () => {
      try {
        await loadScript("vanta-three", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js");
        await loadScript(
          "vanta-net",
          "https://cdn.jsdelivr.net/gh/tengbao/vanta@latest/dist/vanta.net.min.js",
        );

        if (!mounted || !ref.current) return;
        const win = window as any;
        if (win.VANTA && ref.current && !vantaRef.current) {
          vantaRef.current = win.VANTA.NET({
            el: ref.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0xF8FBFF,
            // Use the requested net color for both line and node tones
            color: 0x20b2aa,
            color2: 0x20b2aa,
            // moderate point count so each joint has a visible dot
            points: 8,
            spacing: 40.0,
            maxDistance: 52.0,
            // show dots so each joint displays a small ball
            showDots: true,
            // lower overall opacity to keep content readable
            opacity: 0.3,
          });
        }
      } catch (e) {
        // fail silently — if Vanta doesn't load, page stays clean
        // eslint-disable-next-line no-console
        console.warn("Vanta failed to load:", e);
      }
    })();

    return () => {
      mounted = false;
      if (vantaRef.current && typeof vantaRef.current.destroy === "function") {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 w-full h-full" aria-hidden />;
}
