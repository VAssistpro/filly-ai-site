import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { featuresWebPageSchema, featuresItemListSchema } from "../components/site/schemas";
import { BrandLogo, brandDomain } from "../components/site/brand-logo";

const categories = [
  {
    id: "email",
    label: "Email Integrations",
    intro:
      "Filly starts inside the inbox tools your dispatchers already use, then carries the selected booking into a review-first Limo Anywhere workflow.",
    items: [
      {
        name: "Gmail",
        how: "A FILLY button is added to the Gmail email view. Clicking it captures the selected email body and available supported attachments.",
        why: "Your dispatchers can start from the message they are already viewing, with the reservation details ready to review.",
      },
      {
        name: "Outlook",
        how: "Supports Outlook Live, Outlook on Office, and Office 365 in the browser. Same one-click experience as Gmail.",
        why: "Enterprise operators on Microsoft don't need to switch tooling. Filly meets your team on their inbox of choice.",
      },
      {
        name: "Front",
        how: "Native integration inside Front's shared inboxes. FILLY appears in the message toolbar of every conversation.",
        why: "Team-based operations that use Front for shared dispatch inboxes get automation on top of their existing workflow.",
      },
      {
        name: "Helpwise",
        how: "Supported on Helpwise.io and Helpwise.com. The FILLY button appears inside team inboxes.",
        why: "Operators using Helpwise as their shared inbox get the same one-click capture as everyone else.",
      },
    ],
  },
  {
    id: "input",
    label: "Input Formats",
    intro:
      "Booking requests arrive in many formats. Filly supports email text, selected documents, spreadsheets, and drag-and-drop workflows.",
    items: [
      { name: "Email text", how: "Paste any booking email or click the FILLY button to capture it directly.", why: "Filly works even when the email is unstructured, forwarded, or partially quoted." },
      { name: "PDF attachments", how: "PDFs are extracted and parsed automatically alongside the email body — no downloading, no dragging.", why: "Airline confirmations, broker manifests, and corporate itineraries usually arrive as PDFs. Filly reads them natively." },
      { name: "Excel / spreadsheet uploads", how: "Upload a spreadsheet and Filly parses rows into individual reservations for batch processing.", why: "Corporate accounts sending recurring rosters can be turned into filled reservations in minutes, not hours." },
      { name: "Drag & drop anywhere", how: "Drop files directly into the Filly panel from the desktop.", why: "Zero friction. No hunting for an upload button. Your dispatchers stay in flow." },
    ],
  },
  {
    id: "reservations",
    label: "Reservation Types",
    intro:
      "Purpose-built workflows for common airport, FBO, farm-in, multi-stop, and round-trip reservations.",
    items: [
      { name: "Airport pickup & drop-off", how: "Filly detects IATA codes, resolves airline and flight number, picks the correct terminal, and fills the airport tab.", why: "Airport work is the volume driver for most operators. Filly makes it a solved problem." },
      { name: "FBO / private aviation", how: "Detects Signature, Jet Aviation, Atlantic, and other FBO terminals. Fills FBO name, tail number, and street address.", why: "Private aviation clients expect white-glove precision. Filly gets the FBO details right the first time." },
      { name: "Multi-stop routing", how: "Address, POI, and FBO tabs are supported. Filly builds supported itineraries stop-by-stop.", why: "Complex city itineraries can be organized into one structured workflow for review." },
      { name: "Round-trip workflow", how: "Filly maps supported return dates, times, flights, and routing into the Limo Anywhere round-trip dialog for review.", why: "The outbound and return details stay together in one structured workflow." },
      { name: "Farm-in / farm-out", how: "Helps identify broker farm-in emails, dispatch type, and possible account matches from sender information.", why: "Filly organizes the affiliate details for review before the reservation is completed." },
    ],
  },
  {
    id: "ai",
    label: "AI Intelligence",
    intro: "Real AI reasoning — not brittle regex. Filly understands context, resolves ambiguity, and asks for help only when it should.",
    items: [
      { name: "Live flight lookup", how: "When arrival times are missing or unclear, Filly queries live aviation data via AirLabs.", why: "No more Googling flight numbers. Filly grabs the actual scheduled arrival on the actual date." },
      { name: "Date safety checks", how: "Timezone anchors, relative-date resolution, and visible warnings help the team verify dates.", why: "Dates are operationally critical, so Filly keeps human review in the workflow." },
      { name: "Child seat detection", how: "Reads infant, rear-facing, forward-facing, and booster requests and maps the stated type and count.", why: "Family transport requests are safety-critical, so the extracted requirement remains visible for operator review." },
      { name: "Account lookup & creation", how: "Searches existing LA accounts; creates new ones with billing contact and passenger type if not found.", why: "Manual account matching eats minutes per booking. Filly does it in one pass." },
      { name: "Account memory & learning", how: "Save approved corrections as reusable account rules that can sync across eligible team plans.", why: "Documented corrections can become consistent operating knowledge for the team." },
    ],
  },
  {
    id: "team",
    label: "Team Features",
    intro: "Team workflows can share approved operating knowledge across dispatcher seats.",
    items: [
      { name: "Team memory sharing", how: "Approved sender and account rules can be shared across eligible team seats.", why: "Documented corrections can become consistent operating knowledge for the team." },
      { name: "Fill history", how: "Completed fill summaries, timing, and mapped-field details are available in History.", why: "Review recent activity and export a portable CSV record when needed." },
      { name: "Time saved dashboard", how: "History reports average processing time and estimated time saved.", why: "Use measured workflow data to evaluate Filly's operational impact." },
      { name: "PAUSE + learn", how: "Pause mid-fill to correct any field. Filly updates its rules automatically.", why: "Corrections become permanent improvements without any manual configuration." },
    ],
  },
  {
    id: "experience",
    label: "Experience",
    intro: "The details that make Filly feel like a premium product, not a script.",
    items: [
      { name: "Batch fill", how: "Attach multiple PDFs or spreadsheet rows. Filly previews supported trips and processes them sequentially.", why: "Reduce repetitive re-entry when a manifest contains multiple reservations." },
      { name: "Optional Auto-Save", how: "Eligible workflows can fill and save in one pass after the operator establishes appropriate review policies.", why: "Teams can choose the level of supervision that fits their risk and workflow." },
      { name: "2 UI themes", how: "Choose Cyber Dark or Cyber Light from the Filly panel.", why: "Use the interface contrast that best suits your dispatch station." },
      { name: "50+ supported fields", how: "Passenger, booker, billing, routing, flight, and trip-note information can be organized for review and entry.", why: "Filly reduces repetitive entry across the fields reservationists use most often." },
    ],
  },
];

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Every capability, in full detail | Filly AI" },
      {
        name: "description",
        content:
          "Every Filly feature explained: Gmail, Outlook, Front, Helpwise, airport and FBO routing, batch processing, flight lookup, account memory, and team sharing.",
      },
      { property: "og:title", content: "Filly Features — Complete capability list" },
      {
        property: "og:description",
        content:
          "The full list of everything Filly does for Limo Anywhere operators. Built for the edge cases dispatchers hit every day.",
      },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(featuresWebPageSchema) },
      { type: "application/ld+json", children: JSON.stringify(featuresItemListSchema) },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-noise border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Complete feature list
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl">
            Every capability, in full detail.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Filly isn't a generic AI wrapper. Every capability below was built specifically
            for Limo Anywhere — including the edge cases your dispatchers hit every day.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[220px_1fr] md:gap-16 md:px-8">
        <aside className="hidden md:block">
          <nav aria-label="Feature sections" className="sticky top-24 space-y-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Jump to
            </p>
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {c.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-20">
          {categories.map((c) => (
            <section key={c.id} id={c.id} className="scroll-mt-24">
              <h2 className="font-display text-2xl font-semibold text-gradient md:text-4xl">
                {c.label}
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">{c.intro}</p>
              <div className="mt-8 space-y-5">
                {c.items.map((f) => (
                  <article key={f.name} className="card-premium rounded-xl p-6">
                    <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                      {brandDomain(f.name) && (
                        <BrandLogo name={f.name} size={20} className="rounded-sm" />
                      )}
                      {f.name}
                    </h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                          How it works
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {f.how}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                          Why it matters
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {f.why}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8">
          <h2 className="font-display text-3xl font-semibold text-gradient md:text-5xl">
            See it for yourself.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Bring a representative booking and see the review-first workflow in action.
          </p>
          <a
            href="mailto:support@getfillyai.com?subject=Filly%20demo%20request"
            className="btn-glow mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Book a Live Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
