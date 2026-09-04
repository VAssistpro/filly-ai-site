import { createFileRoute } from "@tanstack/react-router";

const groups = [
  {
    label: "Getting Started",
    items: [
      { q: "What is Filly?", a: "Filly is an independent AI reservation assistant built for Limo Anywhere operators. It turns supported booking emails and PDFs into review-ready reservation data, then helps fill more than 50 fields." },
      { q: "Does Limo Anywhere already have an AI agent?", a: "Limo Anywhere documents a customer-facing AI Chatbot and a separate Email AI Agent. The Email AI Agent—the product most comparable to Filly—was still limited to pre-selected pilot customers in its April 2026 documentation. Filly is available through direct evaluation and onboarding." },
      { q: "What do I need to install it?", a: "Google Chrome and an active Limo Anywhere operator account. Install the extension from the Chrome Web Store, sign in with your Filly account, and you're ready." },
      { q: "Does Filly work on Mac and Windows?", a: "Yes. Filly runs inside Chrome, so it works identically on Mac, Windows, and Chromebook." },
      { q: "Which email clients does Filly work in?", a: "Gmail, Outlook (Live / Office / 365), Front, and Helpwise. The FILLY button is injected natively into each inbox." },
    ],
  },
  {
    label: "Features",
    items: [
      { q: "What reservation types does Filly handle?", a: "Airport pickup/drop-off, FBO/private aviation, multi-stop, round-trip, farm-in/farm-out, and batch fills across all of the above." },
      { q: "Does Filly handle farm-in reservations?", a: "Yes — Filly auto-detects farm-in emails, sets the dispatch type radio, and matches broker accounts by sender domain." },
      { q: "Can Filly fill multiple reservations at once?", a: "Yes. Attach multiple PDFs or a spreadsheet, review the extracted trips, then click Fill All. Filly processes the trips sequentially with review and safety controls available." },
      { q: "Does Filly support private aviation and FBO?", a: "Yes. Filly detects Signature, Jet Aviation, and other FBO terminals and fills FBO name, tail number, and street address into the correct LA tab." },
      { q: "Does it work with multi-stop trips?", a: "Yes. Address, POI, and FBO tabs are fully supported. Filly builds the trip stop-by-stop." },
      { q: "Can Filly upload from Excel/spreadsheets?", a: "Yes. Upload a .xlsx or .csv file and Filly parses each row as a reservation for batch processing." },
    ],
  },
  {
    label: "AI & Accuracy",
    items: [
      { q: "How does Filly know which flight time to use?", a: "Filly extracts the flight number and date, then queries live aviation data to get the actual scheduled arrival. When no flight is provided, it uses the time explicitly stated in the email." },
      { q: "How does Filly handle booking dates?", a: "Filly uses timezone anchors, relative-date resolution, and safety warnings. Because dates are operationally critical, your team should verify them before confirming a reservation." },
      { q: "What happens if I correct a field Filly got wrong?", a: "Approved corrections can be saved as account memory and reused on future matching bookings. Eligible multi-seat plans can share approved rules across dispatcher seats." },
      { q: "Does Filly learn from corrections?", a: "Approved edits can become rules tied to an account, sender, or context. Saved rules can sync across devices and, with eligible multi-seat plans, across dispatcher seats." },
    ],
  },
  {
    label: "Privacy & Data",
    items: [
      { q: "Does Filly read my entire inbox?", a: "No. Filly only reads the specific email you click the FILLY button on. It has no access to your inbox as a whole, other emails, or any account except the tab you activate it on." },
      { q: "Where does my email data go?", a: "The specific content you activate is sent through Filly's service to Google Gemini for extraction. The booking content is processed for that request and is not retained in Filly's server-side fill history." },
      { q: "Does Filly store my reservation data?", a: "Completed reservations live in your Limo Anywhere account. Filly stores the account data needed to run the service, approved memory rules, usage counts, and limited non-sensitive fill-history summaries used by the product dashboard." },
    ],
  },
  {
    label: "Account & Billing",
    items: [
      { q: "What counts as a fill?", a: "One reservation filled into Limo Anywhere counts as one fill, regardless of how many fields or how complex the trip." },
      { q: "Can I change plans?", a: "Yes. Contact Filly support when you need to move between Starter, Operations, Scale, or a custom Enterprise package." },
      { q: "Is there a free trial?", a: "Yes. You can evaluate Filly on up to 15 supported reservations without entering a credit card." },
      { q: "How does team sharing work?", a: "Eligible Operations, Scale, and Enterprise packages support multiple dispatcher seats and shared approved account rules." },
    ],
  },
];

const flat = groups.flatMap((g) => g.items);

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: flat.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Everything about Filly for Limo Anywhere | Filly AI" },
      {
        name: "description",
        content:
          "Frequently asked questions about Filly AI: features, reservation types, AI accuracy, privacy, pricing, and how it works with Limo Anywhere.",
      },
      { property: "og:title", content: "Filly AI FAQ" },
      {
        property: "og:description",
        content:
          "Everything you need to know about Filly and how it works with Limo Anywhere.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FAQ_JSON_LD) }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-noise">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl">
            Questions? Answered.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Everything you need to know about Filly and how it works with Limo Anywhere.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[220px_1fr] md:gap-16 md:px-8">
        <aside className="hidden md:block">
          <nav aria-label="FAQ sections" className="sticky top-24 space-y-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Categories
            </p>
            {groups.map((g) => (
              <a
                key={g.label}
                href={`#${g.label.replace(/ &? /g, "-").toLowerCase()}`}
                className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {g.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-14">
          {groups.map((g) => (
            <section
              key={g.label}
              id={g.label.replace(/ &? /g, "-").toLowerCase()}
              className="scroll-mt-24"
            >
              <h2 className="font-display text-2xl font-semibold text-gradient md:text-3xl">
                {g.label}
              </h2>
              <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-surface/40">
                {g.items.map((f) => (
                  <details key={f.q} className="group p-5 md:p-6">
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
          ))}
        </div>
      </div>
    </>
  );
}
