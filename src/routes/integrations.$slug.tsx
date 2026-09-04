import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Mail } from "lucide-react";
import { INTEGRATIONS } from "../components/site/content-data";
import {
  integrationPageSchema,
  integrationHowToSchema,
  integrationFaqSchema,
} from "../components/site/schemas";
import { BrandLogo } from "../components/site/brand-logo";

export const Route = createFileRoute("/integrations/$slug")({
  loader: ({ params }) => {
    const integration = INTEGRATIONS.find((i) => i.slug === params.slug);
    if (!integration) throw notFound();
    return integration;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Integration not found | Filly AI" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const i = loaderData;
    const desc = `${i.tagline} Works inside ${i.name} to auto-fill Limo Anywhere reservations in one click.`;
    return {
      meta: [
        { title: `${i.name} + Limo Anywhere auto-fill | Filly AI` },
        { name: "description", content: desc },
        { property: "og:title", content: `Filly AI + ${i.name}` },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/integrations/${i.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/integrations/${i.slug}` }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(integrationPageSchema(i.name, i.slug, desc)) },
        { type: "application/ld+json", children: JSON.stringify(integrationHowToSchema(i.name, i.workflow)) },
        { type: "application/ld+json", children: JSON.stringify(integrationFaqSchema(i.faqs)) },
      ],
    };
  },
  component: IntegrationPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-md px-5 py-32 text-center">
      <h1 className="font-display text-3xl text-foreground">Integration not found</h1>
      <p className="mt-3 text-muted-foreground">
        Try one of our{" "}
        <Link to="/integrations" className="text-primary underline">
          supported integrations
        </Link>
        .
      </p>
    </div>
  ),
});

function IntegrationPage() {
  const i = Route.useLoaderData();

  return (
    <>
      <section className="border-b border-border/60 bg-noise">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <Link
            to="/integrations"
            className="text-xs font-semibold uppercase tracking-widest text-primary hover:underline"
          >
            ← All integrations
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface ring-1 ring-border">
              <BrandLogo name={i.name} size={40} className="rounded-md" />
            </div>
            <span className="text-2xl text-muted-foreground">+</span>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface ring-1 ring-border">
              <BrandLogo name="Limo Anywhere" size={40} className="rounded-md" />
            </div>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl">
            {i.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{i.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:support@getfillyai.com?subject=Filly%20integration%20demo"
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Book a Live Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-transparent px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
            >
              All features
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <h2 className="font-display text-2xl font-semibold text-gradient md:text-3xl">
          How it works inside {i.name}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          FILLY button location: {i.buttonLocation}
        </p>
        <ol className="mt-8 space-y-4">
          {i.workflow.map((step: (typeof i.workflow)[number], idx: number) => (
            <li key={step.title} className="card-premium flex gap-4 rounded-2xl p-5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-gradient">
                Fully supported
              </h2>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {i.supported.map((s: string) => (
                  <li key={s} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-premium rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <Mail className="h-4 w-4" /> Privacy
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Filly only reads the email you click FILLY on. It never scans
                your inbox, never indexes anything, and never sends emails
                anywhere except to fill the trip you asked for.{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Read the full privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <h2 className="font-display text-2xl font-semibold text-gradient md:text-3xl">
          {i.name} FAQ
        </h2>
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-background/40">
          {i.faqs.map((f: (typeof i.faqs)[number]) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-base font-semibold text-foreground">
                  {f.q}
                </span>
                <span className="text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-noise">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
          <h2 className="font-display text-3xl font-semibold text-gradient md:text-4xl">
            Stop copy-pasting {i.name} bookings.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Test the workflow using the booking formats your team receives every day.
          </p>
          <div className="mt-8">
            <a
              href="mailto:support@getfillyai.com?subject=Filly%20integration%20evaluation"
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground"
            >
              Book a Live Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
