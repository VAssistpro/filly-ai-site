import { createFileRoute } from "@tanstack/react-router";
import { Mail, Clock, Heart } from "lucide-react";
import { contactPageSchema } from "../components/site/schemas";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — We read every email | Filly AI" },
      {
        name: "description",
        content:
          "Reach the Filly team directly. support@getfillyai.com — responses within 24 hours from real humans, not a support bot.",
      },
      { property: "og:title", content: "Contact Filly AI" },
      {
        property: "og:description",
        content:
          "A small team building for Limo Anywhere operators. Real humans respond within 24 hours.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(contactPageSchema) }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-noise">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl">
            We're a small team, and we read every email.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Filly is a founder-built product. Real humans respond to every message —
            usually within a few hours, always within a day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <a
            href="mailto:support@getfillyai.com"
            className="card-premium rounded-2xl p-6 text-center"
          >
            <Mail className="mx-auto h-6 w-6 text-primary" />
            <h2 className="mt-3 font-display text-base font-semibold text-foreground">
              Email
            </h2>
            <p className="mt-1 break-all text-sm text-primary">support@getfillyai.com</p>
          </a>
          <div className="card-premium rounded-2xl p-6 text-center">
            <Clock className="mx-auto h-6 w-6 text-primary" />
            <h2 className="mt-3 font-display text-base font-semibold text-foreground">
              Response time
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Within 24 hours</p>
          </div>
          <div className="card-premium rounded-2xl p-6 text-center">
            <Heart className="mx-auto h-6 w-6 text-primary" />
            <h2 className="mt-3 font-display text-base font-semibold text-foreground">
              Built by hand
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Founder-built. No support bots.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-border-strong bg-surface/50 p-8 md:p-12">
          <h2 className="font-display text-2xl font-semibold text-gradient md:text-3xl">
            What we love hearing about
          </h2>
          <ul className="mt-5 space-y-2 text-[15px] text-muted-foreground">
            <li>· Edge cases in Limo Anywhere that Filly doesn't handle yet</li>
            <li>· New reservation types you want automated</li>
            <li>· Integrations with inboxes or dispatch tools we haven't added</li>
            <li>· Anything Filly got wrong that we should get right</li>
            <li>· What your team wishes existed but doesn't</li>
          </ul>
          <p className="mt-6 text-muted-foreground">
            If you're a Limo Anywhere operator, we especially want to hear from you.
            Filly gets better every week because dispatchers tell us what to fix next.
          </p>
        </div>
      </section>
    </>
  );
}
