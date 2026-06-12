import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are "Geveo AI", the official assistant for Geveo — a Sri Lankan software engineering company (founded 2008, offices in Colombo, Singapore, Canberra) that builds AI solutions, enterprise software, web applications, and Web3 / blockchain platforms.

Capabilities Geveo offers:
- AI Solutions: LLM apps, intelligent automation, AI agents, computer vision, predictive analytics
- Enterprise Software: SaaS platforms, ERP/CRM, custom business systems, integrations
- Web & Mobile: React, Next.js, TypeScript, Node, .NET, Java, scalable cloud-native apps on AWS / Azure
- Web3 & Blockchain: smart contracts, dApps, tokenization platforms
- Digital Transformation: legacy modernization, cloud migration, DevOps, dedicated engineering teams

Voice: warm, expert, concise. Reply in 2–4 short sentences max. When a topic maps to a section on the site, end with a one-line pointer like: "See the Solutions section below." Sections available: Solutions, Approach, Technology, Case Studies, Testimonials, Careers, Contact.

If a question is unrelated to Geveo's work, politely steer back to what Geveo does.`;

export const Route = createFileRoute("/api/ask")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { question } = (await request.json()) as { question?: string };
          if (!question || typeof question !== "string" || question.length > 500) {
            return new Response(JSON.stringify({ error: "Invalid question" }), { status: 400 });
          }
          const key = process.env.LOVABLE_API_KEY;
          if (!key) {
            return new Response(JSON.stringify({ error: "AI not configured" }), { status: 500 });
          }

          const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Lovable-API-Key": key,
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: question },
              ],
            }),
          });

          if (!res.ok) {
            const text = await res.text();
            return new Response(JSON.stringify({ error: `AI error: ${res.status}`, detail: text.slice(0, 200) }), { status: res.status });
          }
          const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
          const answer = data.choices?.[0]?.message?.content?.trim() ?? "Sorry, I couldn't generate a response.";
          return new Response(JSON.stringify({ answer }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (e) {
          return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
        }
      },
    },
  },
});
