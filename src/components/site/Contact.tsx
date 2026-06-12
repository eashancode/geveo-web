"use client";

import { useRef, useState } from "react";

const offices = [
  {
    city: "Australian Office",
    addr: "Ground Floor, 490 Northbourne Ave, Dickson, ACT 2602, Australia",
    tel: "1300 151 927",
  },
  {
    city: "Singapore Office",
    addr: "#04-01 The Quadrant, 19 Cecil Street, (S) 049704, Singapore",
  },
  {
    city: "Sri Lankan Office",
    addr: "123A, Poorwarama Road, Kirulapona, Colombo 5, Sri Lanka",
    tel: "+94 112 824 899",
  },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const formData = new FormData(formRef.current!);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const company = formData.get("company") as string;
      const message = formData.get("message") as string;

      // Validate inputs
      if (!name || !email || !company || !message) {
        setStatus("error");
        setErrorMsg("All fields are required");
        return;
      }

      if (!email.includes("@")) {
        setStatus("error");
        setErrorMsg("Invalid email address");
        return;
      }

      // Simulate network response
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Contact Inquiry Received (Static Demo Mode):", {
        name,
        email,
        company,
        message,
      });

      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 shadow-elev">
          <div className="absolute inset-0 hero-glow opacity-70 pointer-events-none" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="eyebrow">Let's build together</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] text-balance">
                Ready to make your next digital initiative a measurable success?
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl text-pretty">
                Talk to our team about your goals — we'll bring the
                engineering depth, delivery rigour and partnership mindset to
                make it happen.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="#form"
                className="inline-flex items-center justify-between gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium shadow-green"
              >
                Book a consultation <span>→</span>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-between gap-2 rounded-full border border-border bg-surface-elevated px-5 py-3 text-sm font-medium"
              >
                Explore solutions <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div id="form" className="mt-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Contact</div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.02em]">
              Talk to a real engineer.
            </h3>
            <p className="mt-5 text-muted-foreground text-pretty">
              Ready to build something exceptional? Share your requirements with us, and our team will connect you with an experienced engineer to explore your goals, evaluate options, and define a clear path forward.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Company" name="company" required />
            <Field label="How can we help?" name="message" multiline required />
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Request a consultation"} <span>→</span>
            </button>
            {status === "success" && (
              <div className="mt-3 p-3 rounded-lg bg-green-50 text-green-700 text-sm">
                ✓ Thank you! We'll get back to you within 1 business day.
              </div>
            )}
            {status === "error" && (
              <div className="mt-3 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
                ✗ {errorMsg}
              </div>
            )}
          </form>
        </div>

        {/* Offices */}
        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {offices.map((o) => (
            <div key={o.city} className="bg-background p-7">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary">{o.city}</div>
              <p className="mt-3 text-sm text-foreground text-pretty">{o.addr}</p>
              {o.tel && (
                <a href={`tel:${o.tel.replace(/\s/g, "")}`} className="mt-3 inline-block text-sm text-muted-foreground hover:text-foreground">
                  {o.tel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  multiline = false,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  multiline?: boolean;
  required?: boolean;
}) {
  const base =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition";
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </span>
      <div className="mt-2">
        {multiline ? (
          <textarea name={name} rows={5} className={base} required={required} />
        ) : (
          <input name={name} type={type} className={base} required={required} />
        )}
      </div>
    </label>
  );
}
