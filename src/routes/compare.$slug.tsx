import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Minus, X } from "lucide-react";
import { COMPARISONS } from "../components/site/content-data";
import { comparisonWebPageSchema } from "../components/site/schemas";

export const Route = createFileRoute("/compare/$slug")({
  loader: ({ params }) => {
    const c = COMPARISONS.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Comparison not found | Filly AI" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const c = loaderData;
    const desc = `${c.title}: side-by-side breakdown for Limo Anywhere operators. ${c.intro.slice(0, 120)}`;
    return {
      meta: [
        { title: `${c.title} | Filly AI` },
        { name: "description", content: desc },
        { property: "og:title", content: c.title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/compare/${c.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/compare/${c.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(comparisonWebPageSchema(c.slug, c.title, c.competitor)),
        },
      ],
    };
  },
  component: ComparePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-md px-5 py-32 text-center">
      <h1 className="font-display text-3xl text-foreground">Comparison not found</h1>
      <p className="mt-3 text-muted-foreground">
        See all{" "}
        <Link to="/compare" className="text-primary underline">
          Filly comparisons
        </Link>
        .
      </p>
    </div>
  ),
});

function Verdict({ w }: { w: "filly" | "competitor" | "tie" }) {
  if (w === "filly") return <Check className="h-4 w-4 text-primary" />;
  if (w === "competitor") return <X className="h-4 w-4 text-muted-foreground/60" />;
  return <Minus className="h-4 w-4 text-muted-foreground" />;
}

function ComparePage() {
  const c = Route.useLoaderData();
  const isNativeAiComparison = c.slug === "limo-anywhere-native";

  return (
    <>
      <section className="border-b border-border/60 bg-noise">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <Link
            to="/compare"
            className="text-xs font-semibold uppercase tracking-widest text-primary hover:underline"
          >
            ← All comparisons
          </Link>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl">
            {c.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{c.intro}</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {isNativeAiComparison
              ? "Availability checked against official April 2026 documentation"
              : "Compare using your real reservation workflow"}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-background/40">
          <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-border bg-surface/50 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <div>Criterion</div>
            <div className="text-primary">Filly AI</div>
            <div>{c.competitor}</div>
          </div>
          {c.rows.map((r: (typeof c.rows)[number]) => (
            <div
              key={r.criterion}
              className="grid grid-cols-[1.5fr_1fr_1fr] items-center gap-3 border-b border-border/60 px-5 py-4 text-sm last:border-b-0"
            >
              <div className="font-medium text-foreground">{r.criterion}</div>
              <div className="flex items-start gap-2 text-foreground/90">
                <Verdict w={r.winner === "filly" ? "filly" : r.winner === "tie" ? "tie" : "competitor"} />
                <span>{r.filly}</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Verdict w={r.winner === "competitor" ? "filly" : r.winner === "tie" ? "tie" : "competitor"} />
                <span>{r.competitor}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border-strong bg-surface/50 p-8 md:p-10">
          <h2 className="font-display text-xl font-semibold text-gradient md:text-2xl">
            Verdict
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            {c.verdict}
          </p>
          {isNativeAiComparison && (
            <div className="mt-6 border-t border-border/60 pt-5 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Official sources: </span>
              <a
                href="https://www.limoanywhere.com/2025/05/22/coming-soon-the-only-ai-agent-built-for-and-by-limo-anywhere/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                May 2025 AI Agent announcement
              </a>
              <span> · </span>
              <a
                href="https://kb.limoanywhere.com/docs/addons-whats-new-december-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                AI Chatbot documentation
              </a>
              <span> · </span>
              <a
                href="https://kb.limoanywhere.com/docs/addons-whats-new-april-27-2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                Email AI Agent pilot documentation
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-border/60 bg-noise">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
          <h2 className="font-display text-3xl font-semibold text-gradient md:text-4xl">
            Test Filly on your own bookings.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Bring representative emails or documents and evaluate the workflow with us.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:support@getfillyai.com?subject=Filly%20evaluation%20request"
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground"
            >
              Book a Live Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-transparent px-7 py-3.5 text-base font-medium text-foreground hover:bg-surface"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
