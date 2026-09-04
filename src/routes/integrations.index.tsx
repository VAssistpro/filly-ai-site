import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { INTEGRATIONS } from "../components/site/content-data";
import { integrationsIndexSchema } from "../components/site/schemas";
import { BrandLogo } from "../components/site/brand-logo";

export const Route = createFileRoute("/integrations/")({
  head: () => ({
    meta: [
      { title: "Integrations — Gmail, Outlook, Front, Helpwise | Filly AI" },
      {
        name: "description",
        content:
          "Filly AI supports booking workflows in Gmail, Outlook web, Front, and Helpwise, helping teams move selected emails into review-ready Limo Anywhere reservations.",
      },
      { property: "og:title", content: "Filly AI Integrations" },
      {
        property: "og:description",
        content:
          "Start review-first Limo Anywhere reservation workflows from Gmail, Outlook web, Front, or Helpwise.",
      },
      { property: "og:url", content: "/integrations" },
    ],
    links: [{ rel: "canonical", href: "/integrations" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(integrationsIndexSchema) },
    ],
  }),
  component: IntegrationsIndex,
});

function IntegrationsIndex() {
  return (
    <>
      <section className="border-b border-border/60 bg-noise">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Integrations
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl">
            Four inboxes. One Filly workflow.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Filly supports Gmail, Outlook web, Front, and Helpwise—the four
            inbox integrations available in the current extension.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {INTEGRATIONS.map((i) => (
            <Link
              key={i.slug}
              to="/integrations/$slug"
              params={{ slug: i.slug }}
              className="card-premium group flex flex-col rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface ring-1 ring-border">
                    <BrandLogo name={i.name} size={28} className="rounded-md" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {i.provider}
                    </p>
                    <h2 className="mt-0.5 font-display text-xl font-semibold text-foreground">
                      {i.name}
                    </h2>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {i.tagline}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
