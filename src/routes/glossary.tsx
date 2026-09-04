import { createFileRoute, Link } from "@tanstack/react-router";
import { GLOSSARY } from "../components/site/content-data";
import { glossarySchema, glossaryWebPageSchema } from "../components/site/schemas";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
      { title: "Limo Anywhere Glossary — Every dispatch term explained | Filly AI" },
      {
        name: "description",
        content:
          "The complete Limo Anywhere & dispatch glossary: farm-in, FBO, IATA codes, PAX, batch fill, tail numbers, and every term Filly AI handles. Built for operators.",
      },
      { property: "og:title", content: "Limo Anywhere Glossary" },
      {
        property: "og:description",
        content:
          "Every ground-transportation term a Limo Anywhere dispatcher should know — with plain-language definitions and how Filly handles each one.",
      },
      { property: "og:url", content: "/glossary" },
    ],
    links: [{ rel: "canonical", href: "/glossary" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(glossaryWebPageSchema) },
      { type: "application/ld+json", children: JSON.stringify(glossarySchema(GLOSSARY)) },
    ],
  }),
  component: GlossaryPage,
});

function GlossaryPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-noise">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Glossary
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl">
            Every dispatch term, defined.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Farm-in, FBO, IATA, PAX, deadhead — the vocabulary Limo Anywhere
            operators speak, and how Filly handles each one.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <nav aria-label="Glossary index" className="mb-10 flex flex-wrap gap-2">
          {GLOSSARY.map((t) => (
            <a
              key={t.slug}
              href={`#${t.slug}`}
              className="rounded-full border border-border-strong bg-surface/50 px-3 py-1 text-xs text-muted-foreground hover:bg-surface hover:text-foreground"
            >
              {t.term}
            </a>
          ))}
        </nav>

        <dl className="divide-y divide-border rounded-2xl border border-border bg-background/40">
          {GLOSSARY.map((t) => (
            <div key={t.slug} id={t.slug} className="scroll-mt-24 p-6 md:p-8">
              <dt className="font-display text-xl font-semibold text-foreground">
                {t.term}
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {t.definition}
              </dd>
              <dd className="mt-3 text-sm leading-relaxed text-foreground/80">
                <span className="font-semibold text-primary">How Filly handles it: </span>
                {t.filly}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 rounded-2xl border border-border-strong bg-surface/50 p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-semibold text-gradient md:text-3xl">
            See how Filly handles common transportation workflows.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:support@getfillyai.com?subject=Filly%20demo%20request"
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Book a Live Demo
            </a>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-transparent px-5 py-2.5 text-sm text-foreground hover:bg-surface"
            >
              See all features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
