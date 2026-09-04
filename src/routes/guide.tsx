import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Chrome,
  CirclePause,
  ClipboardPaste,
  FileImage,
  FileSpreadsheet,
  Files,
  Flag,
  History,
  House,
  Inbox,
  Lightbulb,
  ListChecks,
  LockKeyhole,
  MapPin,
  MemoryStick,
  MousePointerClick,
  PanelRightOpen,
  Plane,
  Play,
  RotateCcw,
  Route as RouteIcon,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Upload,
  UserCheck,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Filly User Guide — Install, import, review, and fill" },
      {
        name: "description",
        content:
          "A visual guide to installing Filly and using email import, attachments, batch filling, routing, stored addresses, confirmations, history, memory, and tester tools.",
      },
      { property: "og:title", content: "Filly User Guide" },
      {
        property: "og:description",
        content: "Install Filly and learn every major workflow with a simple visual guide.",
      },
    ],
    links: [{ rel: "canonical", href: "/guide" }],
  }),
  component: GuidePage,
});

type Icon = ComponentType<{ className?: string }>;

const sections = [
  ["install", "Install"],
  ["first-fill", "First fill"],
  ["inputs", "Ways to import"],
  ["playbook", "Use-case playbook"],
  ["after-fill", "After the fill"],
  ["tester", "Tester tools"],
  ["help", "Help & safety"],
] as const;

const inputMethods = [
  {
    icon: Inbox,
    title: "Open inbox message",
    copy: "Use Import while the booking is open in Gmail, Outlook Web, Front, or Helpwise.",
    badge: "FASTEST",
  },
  {
    icon: Files,
    title: "Attach a document",
    copy: "Add a supported PDF, spreadsheet, image, or other booking attachment.",
    badge: "FILES",
  },
  {
    icon: ClipboardPaste,
    title: "Paste",
    copy: "Paste booking text or a copied screenshot directly into the drop zone.",
    badge: "QUICK",
  },
  {
    icon: FileSpreadsheet,
    title: "Import a batch",
    copy: "Use selected Gmail rows, a multi-trip PDF, or an XLSX, XLS, or CSV file.",
    badge: "BATCH",
  },
];

const scenarios: Array<{
  icon: Icon;
  title: string;
  when: string;
  steps: string[];
  check: string;
  accent?: string;
}> = [
  {
    icon: Inbox,
    title: "Booking from an inbox",
    when: "A reservation request is open in Gmail, Outlook Web, Front, or Helpwise.",
    steps: [
      "Open the individual message or conversation.",
      "Open Filly and select Import.",
      "Review the extracted reservation, then select Run Filly.",
    ],
    check: "Confirm the requested trip, account, date, and routing before entry begins.",
  },
  {
    icon: FileImage,
    title: "PDF, image, or screenshot",
    when: "The important trip details are inside an attachment or image.",
    steps: [
      "Select Attach and choose the file, or paste a copied screenshot.",
      "Open the attachment preview if you need to confirm the correct file.",
      "Review each recognized trip before running Filly.",
    ],
    check: "Use clear, readable files. Confirm that the preview found every page or trip you expect.",
  },
  {
    icon: FileSpreadsheet,
    title: "Spreadsheet or multi-trip batch",
    when: "A client or affiliate sends several reservations together.",
    steps: [
      "Attach the XLSX, XLS, CSV, or multi-trip PDF.",
      "Check the number of reservations in the batch preview.",
      "Review the trips and start the sequential fill.",
    ],
    check: "Follow the status of each item. If one needs review, resolve that trip before continuing.",
    accent: "BATCH",
  },
  {
    icon: Users,
    title: "Selected Gmail messages",
    when: "Several visible Gmail rows each contain a booking request or attachment.",
    steps: [
      "Select the Gmail rows you want to process.",
      "Open Filly and import the selected messages.",
      "Confirm the recognized count and review the batch.",
    ],
    check: "Current guidance is up to 12 selected messages and 18 MB total. Wait for Gmail's attachment tray to finish loading.",
    accent: "GMAIL BATCH",
  },
  {
    icon: UserCheck,
    title: "Existing account",
    when: "The passenger or booking contact belongs to an account already in Limo Anywhere.",
    steps: [
      "Verify the billing and passenger details in Preview.",
      "Review Filly's account suggestion during the fill.",
      "If more than one account is plausible, choose the correct one and resume.",
    ],
    check: "Do not approve an uncertain account only because the name looks similar. Confirm the contact or company details.",
  },
  {
    icon: Users,
    title: "New account needed",
    when: "No appropriate existing account is available and a new account is required.",
    steps: [
      "Review passenger, booking, and routing information first.",
      "Let Filly finish the supported trip details.",
      "Complete account creation near the end of the workflow.",
    ],
    check: "Make sure the request truly calls for a new account before creating one.",
  },
  {
    icon: House,
    title: "Home, Office, or Work",
    when: "The request says 'from home,' 'to the office,' 'ride back home,' or similar wording.",
    steps: [
      "Confirm the existing customer account first.",
      "Filly checks the Stored Addresses dropdown for a matching label.",
      "If no single label is clear, choose the correct stored address and resume.",
    ],
    check: "The result should be a stored address selection, not the word 'Home' or 'Office' typed into a street field.",
  },
  {
    icon: Plane,
    title: "Airport, FBO, POI, or address",
    when: "The route includes an airport code, flight, private terminal, venue, or street address.",
    steps: [
      "Review how each location is classified in Preview.",
      "Filly uses the supported Airport, FBO, POI, or Address workflow.",
      "Verify flight, terminal, tail number, or address details before saving.",
    ],
    check: "An airport should appear in the airport workflow, not as a street address.",
  },
  {
    icon: RotateCcw,
    title: "Round trip or multiple legs",
    when: "The source explicitly provides a return, ride back, second leg, or multiple vehicles.",
    steps: [
      "Confirm every recognized leg in the preview.",
      "Check the date, time, direction, and passenger for each reservation.",
      "Fill and review the linked reservations in order.",
    ],
    check: "Filly should not create a return leg unless the source provides return intent and usable details.",
  },
  {
    icon: RouteIcon,
    title: "Farm-in or farm-out",
    when: "Another operator sends an affiliate confirmation or your team is assigning the work outward.",
    steps: [
      "Review the sender, document title, and direction.",
      "Confirm the affiliate and reference details in Preview.",
      "Verify the farm-in or farm-out direction before completion.",
    ],
    check: "A Farm-Out Confirmation received from another operator is generally your farm-in.",
  },
  {
    icon: CirclePause,
    title: "Pause, fix, and resume",
    when: "Filly needs an account, address, route, or other operator decision.",
    steps: [
      "Read the Action Needed message.",
      "Correct the requested field directly in Limo Anywhere or the Filly review state.",
      "Select Resume so Filly continues the same reservation.",
    ],
    check: "Use Resume for the current fill. Start New Reservation is only for intentionally beginning another trip.",
    accent: "ACTION NEEDED",
  },
  {
    icon: Send,
    title: "Send a confirmation",
    when: "The source explicitly requests a confirmation or the operator chooses to send one.",
    steps: [
      "Review the confirmation-delivery card before the fill completes.",
      "Choose one verified recipient and confirm the Standard Confirmation PDF.",
      "Review Hide Rates, then complete the supported Email/Fax workflow.",
    ],
    check: "An email address alone is not permission to send. A 'do not send' instruction always wins.",
  },
];

const tools = [
  {
    icon: History,
    title: "History",
    body: "Review recent fills, search and filter results, check time saved, inspect details, and export supported history to CSV.",
  },
  {
    icon: MemoryStick,
    title: "Learned Rules",
    body: "Review, edit, or remove approved account and routing shortcuts. Current booking details take priority over memory.",
  },
  {
    icon: Settings,
    title: "Settings",
    body: "Manage account details, routing preferences, help tips, authorized testing, and other available preferences.",
  },
  {
    icon: Star,
    title: "Feedback",
    body: "Rate the fill, choose what stood out, and add a short note. Do not include passenger or customer information.",
  },
  {
    icon: Lightbulb,
    title: "Tips & Discover",
    body: "Use the top tips, feature tours, What's New, and shortcuts to learn the workflow without interrupting a fill.",
  },
  {
    icon: PanelRightOpen,
    title: "Theme and launcher",
    body: "Use light or dark mode, open Filly from the browser toolbar, or use the page launcher where available.",
  },
];

function StepNumber({ children }: { children: string }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/50 bg-primary/10 font-mono text-sm font-bold text-primary">
      {children}
    </span>
  );
}

function MiniWindow({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="overflow-hidden border border-border-strong bg-[#171411] shadow-elev">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-primary/50" />
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        </span>
      </div>
      {children}
    </div>
  );
}

function GuidePage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b border-border bg-noise">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Filly user guide
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-gradient sm:text-6xl">
              Install it. Import a booking. Review. Fill.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A simple visual guide to every major Filly workflow, from the first Chrome setup to
              batches, stored addresses, confirmations, history, memory, and tester tools.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#install"
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                Start with installation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#playbook"
                className="inline-flex items-center justify-center rounded-md border border-border-strong bg-surface/60 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface-2"
              >
                Jump to a use case
              </a>
            </div>
          </div>

          <MiniWindow label="The Filly flow">
            <div className="p-5">
              <div className="grid gap-3">
                {[
                  [Inbox, "SELECT", "Choose the booking request"],
                  [ListChecks, "PREVIEW", "Check what Filly found"],
                  [Play, "FILL", "Follow the visible checkpoints"],
                  [BadgeCheck, "COMPLETE", "Review and save your way"],
                ].map(([RawIcon, label, copy], index) => {
                  const ItemIcon = RawIcon as Icon;
                  return (
                    <div
                      key={String(label)}
                      className="grid grid-cols-[42px_1fr_auto] items-center gap-4 border border-border bg-surface px-4 py-4"
                    >
                      <ItemIcon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-mono text-xs font-bold tracking-[0.16em] text-foreground">
                          {String(label)}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">{String(copy)}</p>
                      </div>
                      <span className="font-mono text-xs text-primary">0{index + 1}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </MiniWindow>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <nav aria-label="Guide sections" className="sticky top-24 border-l border-border pl-4">
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              In this guide
            </p>
            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="block border-l border-transparent px-3 py-2 text-sm text-muted-foreground transition hover:border-primary hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 space-y-24">
          <section id="install" className="scroll-mt-24">
            <SectionTitle
              eyebrow="01 · INSTALL"
              title="Tester installation takes about five minutes."
              copy="Use these steps for the unpacked tester build. When Filly is live in the Chrome Web Store, installation becomes a normal Add to Chrome flow."
            />
            <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              {[
                ["01", Upload, "Unzip the Filly folder", "Keep the entire folder together. Open it once and confirm manifest.json is inside."],
                ["02", Chrome, "Open Chrome Extensions", "Enter chrome://extensions in Chrome's address bar."],
                ["03", Settings, "Turn on Developer mode", "Use the Developer mode switch in the upper-right corner."],
                ["04", MousePointerClick, "Select Load unpacked", "Choose the Filly folder containing manifest.json, not the ZIP file."],
                ["05", PanelRightOpen, "Pin Filly", "Open Chrome's Extensions menu and pin Filly so its icon stays visible."],
                ["06", LockKeyhole, "Sign in", "Open Filly and sign in with the invited email. Use Forgot password if needed."],
              ].map(([number, RawIcon, title, body]) => {
                const ItemIcon = RawIcon as Icon;
                return (
                  <article key={String(number)} className="bg-surface p-6 md:p-7">
                    <div className="flex items-center justify-between">
                      <StepNumber>{String(number)}</StepNumber>
                      <ItemIcon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-foreground">{String(title)}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{String(body)}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-5 flex gap-4 border border-primary/25 bg-primary/10 p-5">
              <RotateCcw className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                After receiving an updated tester folder, replace the old folder, return to
                <strong className="text-foreground"> chrome://extensions</strong>, and select the
                Reload icon on Filly. Refresh Gmail and Limo Anywhere afterward.
              </p>
            </div>
          </section>

          <section id="first-fill" className="scroll-mt-24">
            <SectionTitle
              eyebrow="02 · FIRST FILL"
              title="The same four steps power every use case."
              copy="The source may change, but the operator workflow stays familiar."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                ["1", Inbox, "Choose the request", "Open one booking or add the file, screenshot, spreadsheet, or text you want Filly to process."],
                ["2", ListChecks, "Review Preview", "Check the passenger, account, routing, flight, service, vehicle, notes, and number of trips."],
                ["3", Play, "Run Filly", "Watch the live checkpoints while Filly enters supported fields into Limo Anywhere."],
                ["4", BadgeCheck, "Review and complete", "Save manually, or use optional safeguarded Auto-Save for the workflows your team approves."],
              ].map(([number, RawIcon, title, body]) => {
                const ItemIcon = RawIcon as Icon;
                return (
                  <article key={String(number)} className="card-premium p-6">
                    <div className="flex items-center gap-4">
                      <StepNumber>{String(number)}</StepNumber>
                      <ItemIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-foreground">{String(title)}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{String(body)}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 grid gap-4 border border-border-strong bg-[#171411] p-5 sm:grid-cols-3">
              {[
                ["PREVIEW", "Nothing enters the form yet."],
                ["PROGRESS", "Follow each live checkpoint."],
                ["SUCCESS", "Review the completed reservation."],
              ].map(([label, copy]) => (
                <div key={label} className="border border-border bg-surface px-5 py-4">
                  <p className="font-mono text-xs font-bold tracking-[0.16em] text-primary">{label}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="inputs" className="scroll-mt-24">
            <SectionTitle
              eyebrow="03 · WAYS TO IMPORT"
              title="Use the source that already has the booking."
              copy="Filly only processes the message or document you choose."
            />
            <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {inputMethods.map(({ icon: ItemIcon, title, copy, badge }) => (
                <article key={title} className="bg-surface p-7">
                  <div className="flex items-center justify-between">
                    <ItemIcon className="h-6 w-6 text-primary" />
                    <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-primary">
                      {badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="playbook" className="scroll-mt-24">
            <SectionTitle
              eyebrow="04 · USE-CASE PLAYBOOK"
              title="Choose the situation that matches the booking."
              copy="Each card shows when to use the workflow, what to do, and the detail that deserves a final check."
            />
            <div className="mt-10 space-y-5">
              {scenarios.map((scenario, index) => (
                <ScenarioCard key={scenario.title} scenario={scenario} number={index + 1} />
              ))}
            </div>
          </section>

          <section id="after-fill" className="scroll-mt-24">
            <SectionTitle
              eyebrow="05 · AFTER THE FILL"
              title="Filly keeps the useful tools close."
              copy="Use these screens to review work, improve recurring matches, and tell the team what happened."
            />
            <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {tools.map(({ icon: ItemIcon, title, body }) => (
                <article key={title} className="bg-surface p-6">
                  <ItemIcon className="h-6 w-6 text-primary" />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="tester" className="scroll-mt-24">
            <SectionTitle
              eyebrow="06 · AUTHORIZED TESTERS ONLY"
              title="Golden Cases help catch regressions before release."
              copy="This section appears only for accounts approved for Filly's controlled testing program. It is not part of the normal customer workflow."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <MiniWindow label="Authorized testing">
                <div className="p-5">
                  <div className="border border-border bg-surface p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs font-bold tracking-[0.16em] text-primary">
                          BUILD GOLDEN CASES
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Locally anonymize completed fills and capture before-and-after results.
                        </p>
                      </div>
                      <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-2 font-mono text-xs font-bold text-primary">
                        ON
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="border border-border bg-surface px-4 py-3 text-center font-mono text-xs text-foreground">
                      VIEW CASES
                    </div>
                    <div className="border border-border bg-surface px-4 py-3 text-center font-mono text-xs text-foreground">
                      CHECK HISTORY
                    </div>
                  </div>
                </div>
              </MiniWindow>
              <div className="space-y-4">
                {[
                  [ShieldCheck, "Enable only with owner authorization", "The tester must accept the on-screen consent before capture begins."],
                  [Sparkles, "Complete representative fills", "Golden Cases compare the initial preview with the corrected completed result."],
                  [Flag, "Report a problem from the result", "Attach a tester issue to the captured case when a fill exposes a regression."],
                  [BookOpenCheck, "Review cases and recovery", "View captured totals or recover eligible historical source-and-output pairs after confirmation."],
                ].map(([RawIcon, title, body]) => {
                  const ItemIcon = RawIcon as Icon;
                  return (
                    <div key={String(title)} className="flex gap-4 border border-border bg-surface p-5">
                      <ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">{String(title)}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{String(body)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="help" className="scroll-mt-24">
            <SectionTitle
              eyebrow="07 · HELP & SAFETY"
              title="When in doubt, stop and review."
              copy="Filly is designed to assist the operator, not remove the operator's responsibility for the reservation."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="border border-amber-400/25 bg-amber-400/10 p-6">
                <AlertTriangle className="h-6 w-6 text-amber-300" />
                <h3 className="mt-5 text-xl font-semibold text-foreground">Always verify before completion</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {[
                    "Passenger and customer account",
                    "Pickup date, time, and timezone",
                    "Airport, flight, FBO, and tail number",
                    "Pickup, drop-off, stops, and return legs",
                    "Service type, vehicle, affiliate direction, and references",
                    "Confirmation recipient and Hide Rates choice",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border bg-surface p-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-xl font-semibold text-foreground">Use data carefully</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {[
                    "Process only the booking request needed for the reservation.",
                    "Do not place passenger information in product feedback.",
                    "Do not use real customer files for public demos or marketing screenshots.",
                    "Do not use Filly to transmit payment-card numbers or security codes.",
                    "Report a suspected privacy or security issue to support immediately.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-start justify-between gap-5 border border-border-strong bg-[#171411] p-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-mono text-xs font-bold tracking-[0.16em] text-primary">NEED HELP?</p>
                <p className="mt-2 text-muted-foreground">
                  Include what you expected, what happened, and a screenshot with customer details removed.
                </p>
              </div>
              <a
                href="mailto:support@getfillyai.com?subject=Filly%20user%20guide%20help"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Contact support
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="border-b border-border pb-7">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">{copy}</p>
    </div>
  );
}

function ScenarioCard({ scenario, number }: { scenario: (typeof scenarios)[number]; number: number }) {
  const ItemIcon = scenario.icon;
  return (
    <article className="overflow-hidden border border-border bg-surface">
      <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="border-b border-border p-6 lg:border-b-0 lg:border-r lg:p-7">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-primary">{String(number).padStart(2, "0")}</span>
              <ItemIcon className="h-6 w-6 text-primary" />
            </div>
            {scenario.accent ? (
              <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-primary">
                {scenario.accent}
              </span>
            ) : null}
          </div>
          <h3 className="mt-6 text-2xl font-semibold text-foreground">{scenario.title}</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">{scenario.when}</p>
        </div>
        <div className="p-6 lg:p-7">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            Do this
          </p>
          <ol className="mt-4 space-y-3">
            {scenario.steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="font-mono text-xs font-bold text-primary">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3 border-t border-border pt-5">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">Final check:</span>{" "}
              <span className="text-muted-foreground">{scenario.check}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

