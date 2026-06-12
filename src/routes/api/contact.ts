import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { name, email, company, message } = (await request.json()) as {
            name?: string;
            email?: string;
            company?: string;
            message?: string;
          };

          // Validate inputs
          if (!name || !email || !company || !message) {
            return new Response(
              JSON.stringify({ error: "All fields are required" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          if (!email.includes("@")) {
            return new Response(
              JSON.stringify({ error: "Invalid email address" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          const apiKey = process.env.SENDGRID_API_KEY;
          if (!apiKey) {
            console.error("SENDGRID_API_KEY is not configured");
            return new Response(
              JSON.stringify({ error: "Email service not configured" }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          // Send email via SendGrid
          const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              personalizations: [
                {
                  to: [{ email: "hello@geveo.com" }],
                  subject: `New contact inquiry from ${name} at ${company}`,
                },
              ],
              from: { email: "noreply@geveo.com", name: "Geveo Contact Form" },
              replyTo: { email },
              content: [
                {
                  type: "text/html",
                  value: `
                    <h2>New Contact Inquiry</h2>
                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
                    <p><strong>Message:</strong></p>
                    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
                  `,
                },
              ],
            }),
          });

          if (!res.ok) {
            const text = await res.text();
            console.error("SendGrid error:", text);
            return new Response(
              JSON.stringify({ error: "Failed to send email" }),
              { status: res.status, headers: { "Content-Type": "application/json" } }
            );
          }

          return new Response(
            JSON.stringify({ success: true, message: "Email sent successfully" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        } catch (error) {
          console.error("Contact API error:", error);
          return new Response(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
