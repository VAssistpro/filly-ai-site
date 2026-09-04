import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { pricingWebPageSchema, pricingProductSchema } from "../components/site/schemas";

const plans = [
  {
    name: "Starter",
    price: "$149",
    suffix: "/mo",
    fills: "100 fills / month",
    seats: "1 seat",
    tagline: "For owner-operators and small reservation desks proving repeatable value.",
    features: ["All supported reservation workflows", "Four inbox integrations", "PDF and spreadsheet extraction", "Account memory and fill history"],
    cta: "Book a Live Demo",
  },
  {
    name: "Operations",
    price: "$349",
    suffix: "/mo",
    fills: "500 fills / month",
    seats: "Up to 3 seats",
    tagline: "For active reservation teams using Filly throughout the working day.",
    features: ["Everything in Starter", "Shared operating rules", "Batch processing", "Fill history and CSV export", "Priority onboarding and support"],
    cta: "Book a Live Demo",
    popular: true,
  },
  {
    name: "Scale",
    price: "$699",
    suffix: "/mo",
    fills: "1,500 fills / month",
    seats: "Up to 5 seats",
    tagline: "For high-volume operations standardizing reservation work across a team.",
    features: ["Everything in Operations", "Shared team memory", "Multi-seat operating workflow", "Higher monthly capacity", "Priority implementation support"],
    cta: "Book a Live Demo",
  },
  {
    name: "Enterprise",
    price: "Custom",
    suffix: "",
    fills: "Custom capacity",
    seats: "Custom seats",
    tagline: "For large reservation departments, affiliates, and tailored deployments.",
    features: ["Custom usage and seat package", "Team memory and governance", "Implementation planning", "Direct founder support"],
    cta: "Talk to Filly",
  },
];

const faqs = [
  { q: "What counts as a fill?", a: "One reservation filled into Limo Anywhere counts as one fill — regardless of how many fields (single-stop, multi-stop, round-trip, FBO). Batch fills count once per trip filled." },
  { q: "What happens when I hit my fill limit?", a: "Filly pauses additional fills for the remainder of the billing period. Contact support to move to a higher-capacity plan; your account memory, history, and preferences are preserved." },
  { q: "Can I change plans?", a: "Yes. Contact Filly support when your reservation volume or dispatcher-seat needs change." },
  { q: "Can I evaluate Filly before choosing a paid plan?", a: "Yes. You can evaluate Filly on up to 15 supported reservations without entering a credit card." },
  { q: "Which plan is best for a reservation team?", a: "Operations includes up to 3 seats and 500 monthly fills. Scale supports up to 5 seats and 1,500 monthly fills. Enterprise packages are tailored to larger teams." },
  { q: "Do you offer custom plans?", a: "Yes. Enterprise packages can be structured around higher volume, additional dispatcher seats, and implementation needs." },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Start free, scale when you're ready | Filly AI" },
      {
        name: "description",
        content:
          "Filly AI pricing: evaluate with 15 free fills, then choose Starter at $149, Operations at $349, Scale at $699, or a custom Enterprise package.",
      },
      { property: "og:title", content: "Filly AI Pricing — Plans built around operational value" },
      {
        property: "og:description",
        content:
          "Start with 15 free fills, then choose a plan based on monthly reservation capacity and dispatcher seats.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(pricingWebPageSchema) },
      { type: "application/ld+json", children: JSON.stringify(pricingProductSchema) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSON_LD) },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-noise border-b border-border/60">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl">
            Start with proof. Scale with confidence.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Test Filly on representative bookings, measure the time saved, and choose the capacity your operation needs.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p) => (
              <div
                key={p.name}
                className={`card-premium relative flex flex-col rounded-2xl p-6 ${
                  p.popular ? "border-primary/60 ring-1 ring-primary/40" : ""
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[11px] font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h2 className="font-display text-lg text-foreground">{p.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold text-foreground">
                    {p.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{p.suffix}</span>
                </div>
                <div className="mt-4 space-y-1 text-sm">
                  <div className="font-medium text-foreground">{p.fills}</div>
                  <div className="text-muted-foreground">{p.seats}</div>
                </div>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:support@getfillyai.com?subject=${encodeURIComponent(`Filly ${p.name} plan`)}`}
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    p.popular
                      ? "btn-glow bg-primary text-primary-foreground"
                      : "border border-border-strong bg-transparent text-foreground hover:bg-surface"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Start with 15 free fills · No credit card required · Paid plans begin at $149/month
        </p>
      </section>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-24">
          <h2 className="font-display text-3xl font-semibold text-gradient md:text-4xl">
            Pricing questions
          </h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-background/40">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5 md:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
