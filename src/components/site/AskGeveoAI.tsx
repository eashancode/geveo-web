import { useState } from "react";
import { Sparkles, ArrowUp, Loader2 } from "lucide-react";

const EXAMPLES = [
  "What AI solutions do you offer?",
  "Do you build Web3 applications?",
  "What technologies do you use?",
  "How can Geveo help my business?",
];

export function AskGeveoAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function ask(q: string) {
    const trimmed = q.trim();
    if (!trimmed || loading) return;
    setLoading(true);
    setError(null);
    setAnswer(null);

    // Simulate network latency for a realistic experience
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 600));

    try {
      const lower = trimmed.toLowerCase();
      let reply = "";

      if (lower.includes("ai solutions") || lower.includes("artificial intelligence")) {
        reply = "Geveo specializes in a wide range of AI solutions designed to drive business efficiency. Our expertise includes intelligent automation agents, custom LLM applications, computer vision systems, and predictive analytics. See the Solutions section below.";
      } else if (lower.includes("web3") || lower.includes("blockchain") || lower.includes("smart contract")) {
        reply = "Yes, Geveo builds robust Web3 and blockchain applications. We design secure smart contracts, decentralized applications (dApps), and tokenization platforms tailored to your business needs. See the Solutions section below.";
      } else if (lower.includes("technologies") || lower.includes("tech stack") || lower.includes("languages")) {
        reply = "We utilize a modern tech stack to build scalable products. This includes React, Next.js, TypeScript, Node.js, .NET, Java, and cloud-native serverless architectures on AWS and Azure. See the Technology section below.";
      } else if (lower.includes("help my business") || lower.includes("how can you help") || lower.includes("services")) {
        reply = "Geveo acts as a strategic engineering partner. We help businesses by providing dedicated engineering teams, legacy modernization, cloud migration, DevOps setup, and custom product development. See the Approach section below.";
      } else {
        reply = "Geveo is a premier software engineering firm building high-performance AI solutions, enterprise applications, and Web3 platforms. Let's schedule a consultation to discuss your specific requirements. See the Contact section below.";
      }

      setAnswer(reply);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl opacity-60 blur-xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(83,173,111,0.35), rgba(56,140,220,0.25) 50%, rgba(220,180,80,0.18))",
        }}
      />
      <div className="relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(15,40,80,0.18)] p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-[#3b82c6] text-white shadow-md">
            <Sparkles className="h-4 w-4" />
          </span>
          <div className="flex-1">
            <div className="text-sm font-semibold text-foreground flex items-center gap-2">
              Ask Geveo AI
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" /> Online
              </span>
            </div>
            <div className="text-[11px] text-muted-foreground">
              AI assistant · trained on Geveo services
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(question);
          }}
          className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-white/80 px-3 py-2 focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/15 transition"
        >
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about our services, technologies, projects, or expertise..."
            maxLength={500}
            className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground/80 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-green disabled:opacity-50 transition hover:opacity-95"
            aria-label="Ask"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUp className="h-4 w-4" />}
          </button>
        </form>

        {!answer && !error && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {EXAMPLES.map((q) => (
              <button
                key={q}
                onClick={() => {
                  setQuestion(q);
                  ask(q);
                }}
                className="rounded-full border border-border bg-white/70 px-2.5 py-1 text-[11px] text-muted-foreground hover:border-primary/50 hover:text-foreground hover:bg-primary/5 transition"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {(answer || error || loading) && (
          <div className="mt-3 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-white px-3 py-2.5 text-sm text-foreground/90 min-h-[60px]">
            {loading && (
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-3.5 w-3.5 animate-spin" /> Thinking…
              </span>
            )}
            {error && <span className="text-destructive text-xs">{error}</span>}
            {answer && <p className="whitespace-pre-wrap leading-relaxed">{answer}</p>}
            {(answer || error) && (
              <button
                onClick={() => {
                  setAnswer(null);
                  setError(null);
                  setQuestion("");
                }}
                className="mt-2 text-[11px] text-primary hover:underline"
              >
                Ask another question
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
