import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { COMPARISONS } from "../components/site/content-data";
import { compareIndexSchema } from "../components/site/schemas";

export const Route = createFileRoute("/compare/")({
  head: () => ({
    meta: [
      { title: "Compare Filly AI — vs manual entry, generic autofill, native LA | Filly AI" },
      {
        name: "description",
        content:
          "Compare Filly with manual entry, generic form-fill tools, and Limo Anywhere's current native AI options using workflow, access, and operational fit.",
      },
      { property: "og:title", content: "Filly AI Comparisons" },
      {
        property: "og:description",
        content:
          "How Filly compares to the alternatives Limo Anywhere operators actually consider.",
      },
      { property: "og:url", content: "/compare" },
    ],
    links: [{ rel: "canonical", href: "/compare" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(compareIndexSchema) },
    ],
  }),
  component: CompareIndex,
});

function CompareIndex() {
  return (
    <>
      <section className="border-b border-border/60 bg-noise">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Compare
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl">
            Filly AI vs the alternatives.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Evidence-based comparisons covering workflow, availability, and
            operational fit—not just announced feature lists.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {COMPARISONS.map((c) => (
            <Link
              key={c.slug}
              to="/compare/$slug"
              params={{ slug: c.slug }}
              className="card-premium group flex h-full flex-col rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                vs
              </p>
              <h2 className="mt-1 font-display text-xl font-semibold text-foreground">
                {c.competitor}
              </h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {c.intro.slice(0, 120)}…
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read comparison
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
