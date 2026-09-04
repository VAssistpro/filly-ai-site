// Shared content data for integrations, glossary, and comparisons.

export interface Integration {
  slug: "gmail" | "outlook" | "front" | "helpwise";
  name: string;
  provider: string;
  tagline: string;
  headline: string;
  intro: string;
  buttonLocation: string;
  supported: string[];
  workflow: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const INTEGRATIONS: Integration[] = [
  {
    slug: "gmail",
    name: "Gmail",
    provider: "Google",
    tagline: "Start a Limo Anywhere reservation from a supported Gmail booking email.",
    headline: "Gmail + Limo Anywhere. Zero copy-paste.",
    intro:
      "Filly adds a FILLY button to your Gmail workflow. Open a supported booking email, click once, review the details Filly captures from the message and attachments, then continue the reservation in Limo Anywhere.",
    buttonLocation: "Above the email body, next to Reply and Forward.",
    supported: [
      "Personal Gmail (@gmail.com)",
      "Google Workspace (custom domains)",
      "Multiple signed-in accounts",
      "Email threads and forwarded bookings",
      "PDF and Excel attachments",
    ],
    workflow: [
      { title: "Open the email", body: "Open a supported direct, forwarded, farm-in, or attachment-based booking email." },
      { title: "Click FILLY", body: "Use the FILLY control on the selected message to capture supported body and attachment content." },
      { title: "Preview the trip", body: "Filly shows what it captured. Multi-leg? You'll see every leg before it fills." },
      { title: "Fill in Limo Anywhere", body: "Filly opens a new reservation and maps supported passenger, flight, routing, billing, and note fields for review." },
    ],
    faqs: [
      { q: "Does Filly read every email in my Gmail?", a: "No. Filly is activated on the booking message you choose. Review the Privacy page for details about how selected content is processed." },
      { q: "Does it work with Google Workspace?", a: "Yes. The current extension supports Gmail and Google Workspace inboxes in Chrome." },
      { q: "What about forwarded bookings?", a: "Supported forwarded bookings can be reviewed in Filly, including sender context used by farm-in matching." },
    ],
  },
  {
    slug: "outlook",
    name: "Outlook",
    provider: "Microsoft",
    tagline: "Fill Limo Anywhere from Outlook Live, Outlook 365, and Outlook Web.",
    headline: "Outlook web + Limo Anywhere.",
    intro:
      "Filly supports Outlook Live, Office, and Microsoft 365 in the browser. Use the same review-first workflow to map supported reservation fields without installing an Outlook add-in.",
    buttonLocation: "Inside the reading pane, next to Reply/Reply All/Forward.",
    supported: [
      "Outlook Live (outlook.live.com)",
      "Outlook Office (outlook.office.com)",
      "Outlook 365 (outlook.office365.com)",
      "Personal and business tenants",
      "Shared mailboxes",
      "PDF and Excel attachments",
    ],
    workflow: [
      { title: "Open any Outlook email", body: "Reading pane, popped-out window, or focused inbox." },
      { title: "Click FILLY", body: "Reads the email body and any PDF or spreadsheet attachments." },
      { title: "Confirm the trip", body: "Preview passenger, flight, addresses, and notes before Filly fills." },
      { title: "Fill in Limo Anywhere", body: "Supported reservation details are mapped for review, reducing repetitive re-entry." },
    ],
    faqs: [
      { q: "Do I need an Outlook add-in?", a: "No. Filly is a Chrome extension — no add-in installs, no admin approval, no MSA/tenant configuration. It works the moment you install it." },
      { q: "Which Outlook accounts are supported?", a: "The current extension supports Outlook Live, Outlook Office, and Outlook 365 in the browser. It does not support the Outlook desktop app." },
    ],
  },
  {
    slug: "front",
    name: "Front",
    provider: "Front App",
    tagline: "Fill Limo Anywhere directly from Front — shared inboxes fully supported.",
    headline: "Front + Limo Anywhere for team dispatch.",
    intro:
      "Filly adds the FILLY button to supported Front conversation views. Whether bookings arrive in a shared, personal, or routed inbox, your team can review the extracted trip before continuing in Limo Anywhere.",
    buttonLocation: "Inside the Front conversation header, next to Reply.",
    supported: [
      "Shared team inboxes",
      "Individual Front accounts",
      "Routed / assigned conversations",
      "Comments and internal replies (ignored — Filly reads the original message)",
      "PDF and Excel attachments",
    ],
    workflow: [
      { title: "Open a Front conversation", body: "From any inbox — shared, personal, or auto-routed." },
      { title: "Click FILLY", body: "Filly reads the customer message, not the internal comments." },
      { title: "Preview the trip", body: "See what Filly captured before it fills." },
      { title: "Fill the reservation", body: "Filly opens Limo Anywhere and maps the supported fields for review." },
    ],
    faqs: [
      { q: "Does Filly work in Front's shared inboxes?", a: "Yes. Filly supports shared and individual Front conversation workflows in the browser. Each dispatcher needs appropriate Front access and Filly access." },
      { q: "Will it read internal comments?", a: "No. Filly ignores internal comments and reads the original inbound customer message — the one that contains the booking details." },
    ],
  },
  {
    slug: "helpwise",
    name: "Helpwise",
    provider: "Helpwise",
    tagline: "Fill Limo Anywhere from Helpwise shared inboxes in one click.",
    headline: "Helpwise + Limo Anywhere for support-driven dispatch.",
    intro:
      "If your team runs bookings through Helpwise shared inboxes, Filly adds a FILLY button to supported conversations. Review the captured booking details, then continue the reservation in Limo Anywhere.",
    buttonLocation: "Inside the conversation view, next to the reply toolbar.",
    supported: [
      "Helpwise shared inboxes",
      "Assigned / routed conversations",
      "Multi-agent inboxes",
      "PDF and Excel attachments",
      "Email + web-form-originated bookings",
    ],
    workflow: [
      { title: "Open a Helpwise conversation", body: "From any shared or assigned inbox." },
      { title: "Click FILLY", body: "Captures the original customer message and attachments." },
      { title: "Preview", body: "Confirm the trip details before Filly touches Limo Anywhere." },
      { title: "Fill the trip", body: "Filly opens Limo Anywhere and maps supported passenger, flight, routing, and billing fields." },
    ],
    faqs: [
      { q: "Does Filly support Helpwise routed conversations?", a: "Filly supports eligible Helpwise conversations visible to the signed-in dispatcher, including shared and assigned inbox workflows." },
      { q: "Are attachments supported?", a: "Yes. Filly reads PDF and Excel attachments in Helpwise the same way it does in Gmail, Outlook, and Front." },
    ],
  },
];

// Glossary — LLM-friendly definitional content.
export const GLOSSARY: { term: string; slug: string; definition: string; filly: string }[] = [
  { term: "Farm-in", slug: "farm-in", definition: "A reservation received from another operator (a broker) who has subcontracted the trip to your fleet.", filly: "Filly detects farm-in bookings automatically by matching the sender's email domain to an existing broker account in Limo Anywhere, and sets the dispatch type radio accordingly." },
  { term: "Farm-out", slug: "farm-out", definition: "A reservation your dispatch team sends to another operator to fulfill on your behalf.", filly: "Filly sets the dispatch type to farm-out and preserves the original broker relationship in the notes and billing fields." },
  { term: "FBO (Fixed-Base Operator)", slug: "fbo", definition: "A private aviation terminal where charter jets and private aircraft handle passenger pickups and drop-offs.", filly: "Filly detects FBO names like Signature Flight Support, Jet Aviation, and Atlantic Aviation, then fills the FBO tab with name, address, and tail number." },
  { term: "IATA code", slug: "iata-code", definition: "The three-letter airport identifier used by airlines and dispatchers (e.g., JFK, LAX, ORD).", filly: "Filly resolves IATA codes to full airport names and terminals automatically, and cross-references live flight data via AirLabs." },
  { term: "PAX (Passenger count)", slug: "pax", definition: "Shorthand for the number of passengers on a trip; drives vehicle assignment and pricing.", filly: "Filly reads PAX counts from email text or attachment tables and fills the passenger count field along with any child seat requirements." },
  { term: "Deadhead", slug: "deadhead", definition: "A leg of a trip with no revenue passenger — the driver repositioning to or from a pickup or drop-off.", filly: "Filly handles deadhead legs when the source email specifies them, but by default fills only the revenue portion of the trip." },
  { term: "Round trip", slug: "round-trip", definition: "A booking with both an outbound leg and a return leg, often on the same or a later day.", filly: "For supported bookings, Filly maps return date, time, flight, and routing details into the Limo Anywhere round-trip workflow for review." },
  { term: "Multi-stop", slug: "multi-stop", definition: "A reservation with two or more intermediate stops between pickup and final drop-off.", filly: "Filly supports multi-stop trips including address, POI, and FBO stops — sequentially and in the correct order." },
  { term: "POI (Point of Interest)", slug: "poi", definition: "A named location like a hotel, venue, or landmark used as a pickup or drop-off point.", filly: "Filly recognizes POI names in booking emails and fills the POI tab in Limo Anywhere with the location, address, and any relevant notes." },
  { term: "Airline / Flight lookup", slug: "flight-lookup", definition: "Verifying a flight's schedule, terminal, or gate against live airline data.", filly: "When a supported booking is missing flight timing, Filly can query AirLabs and present available schedule data for review." },
  { term: "Batch fill", slug: "batch-fill", definition: "Filling multiple reservations at once from a spreadsheet or multi-page PDF.", filly: "Filly's batch fill previews every trip inside a PDF or Excel file, then fills them sequentially in Limo Anywhere with automatic pauses between trips." },
  { term: "Dispatch type", slug: "dispatch-type", definition: "How a reservation is fulfilled — in-house, farm-in from a broker, or farm-out to another operator.", filly: "Filly sets the correct dispatch type radio in the Limo Anywhere new-reservation form based on sender domain matching." },
  { term: "Tail number", slug: "tail-number", definition: "The unique registration identifier for a private aircraft (e.g., N123AB), used to match FBO arrivals.", filly: "Filly extracts tail numbers from private jet booking emails and fills them into the FBO tab alongside the FBO name and terminal address." },
  { term: "Account memory", slug: "account-memory", definition: "A system that remembers approved corrections made for a specific account so they can be reused on matching bookings.", filly: "Filly can save approved account-specific rules and apply them when relevant details match on a future booking." },
  { term: "Team memory", slug: "team-memory", definition: "Approved operating rules shared across eligible seats on a dispatch team.", filly: "Eligible multi-seat Filly packages can share approved account and sender rules across dispatcher seats." },
  { term: "Airline dropdown matching", slug: "airline-matching", definition: "Selecting the correct airline in a form dropdown based on the flight code or airline name in a booking.", filly: "Filly parses flight codes like 'DL 447' and selects the correct airline (Delta) in the Limo Anywhere dropdown automatically." },
  { term: "Child seat detection", slug: "child-seat", definition: "Identifying whether a passenger requires an infant, booster, or toddler seat.", filly: "Filly parses child seat mentions ('1 booster', 'infant car seat') and fills the seat requirements in the reservation notes and equipment fields." },
  { term: "PAUSE and learn", slug: "pause-and-learn", definition: "A feature that pauses an automated fill so a dispatcher can correct a field, then remembers the correction.", filly: "Filly pauses at any field where the source data is ambiguous. Correct it once, and the corresponding account memory rule ensures Filly won't ask again." },
];

// Comparisons — LLM-favored "X vs Y" content.
export interface Comparison {
  slug: string;
  title: string;
  competitor: string;
  h1: string;
  intro: string;
  rows: { criterion: string; filly: string; competitor: string; winner: "filly" | "competitor" | "tie" }[];
  verdict: string;
}

export const COMPARISONS: Comparison[] = [
  {
    slug: "manual-entry",
    competitor: "Manual entry",
    title: "Filly AI vs manual entry",
    h1: "Filly AI vs Manual Entry: The dispatcher's hidden tax",
    intro: "Manual reservation entry works, but repetitive re-keying consumes attention that could be spent on customers, exceptions, and dispatch decisions. The useful question is how Filly performs on your actual booking mix.",
    rows: [
      { criterion: "Reservation workflow", filly: "Extract, preview, map, and review", competitor: "Read, interpret, and re-key", winner: "filly" },
      { criterion: "Quality control", filly: "AI-assisted extraction with human review", competitor: "Depends on the operator and workload", winner: "tie" },
      { criterion: "Flight lookup", filly: "Integrated lookup for supported bookings", competitor: "Separate verification step", winner: "filly" },
      { criterion: "Round trips", filly: "Structured workflow for supported trips", competitor: "Manual entry for each leg", winner: "filly" },
      { criterion: "Cost model", filly: "Subscription tied to booking capacity", competitor: "Staff time and operating overhead", winner: "tie" },
      { criterion: "Setup", filly: "Chrome extension plus onboarding", competitor: "Existing process", winner: "competitor" },
      { criterion: "Process knowledge", filly: "Approved reusable account rules", competitor: "Training and standard procedures", winner: "tie" },
    ],
    verdict: "Run Filly on 10–20 representative bookings. Compare processing time, corrections, and staff confidence against your current process, then decide from measured results rather than a generic ROI promise.",
  },
  {
    slug: "generic-autofill",
    competitor: "Generic form-fill extensions",
    title: "Filly AI vs generic auto-fill extensions",
    h1: "Filly AI vs Generic Auto-Fill Extensions",
    intro: "Generic form-fill tools like AutoFill, iMacros, or LastPass form-fill were built for repeating your own address on shipping pages. They don't understand booking emails, flight codes, FBOs, or Limo Anywhere.",
    rows: [
      { criterion: "Reads booking emails", filly: "Yes — extracts supported trip details", competitor: "Usually needs pre-mapped data", winner: "filly" },
      { criterion: "Understands flight codes", filly: "Parses 'DL 447' → Delta", competitor: "Copies literal text", winner: "filly" },
      { criterion: "FBO / private aviation", filly: "Detects Signature, Jet Aviation, etc.", competitor: "Not supported", winner: "filly" },
      { criterion: "Round-trip workflow", filly: "Purpose-built mapping with review", competitor: "Typically requires custom setup", winner: "filly" },
      { criterion: "PDF/Excel attachment fill", filly: "Batch preview & fill", competitor: "Not supported", winner: "filly" },
      { criterion: "Account rules", filly: "Save approved reusable corrections", competitor: "Usually static templates", winner: "filly" },
      { criterion: "Limo Anywhere field mapping", filly: "50+ fields, pre-mapped", competitor: "You map every field manually", winner: "filly" },
    ],
    verdict: "Generic form fillers can reduce repeated keystrokes. Filly is designed around transportation booking content and Limo Anywhere fields, so the best evaluation is a side-by-side test using your real reservations.",
  },
  {
    slug: "limo-anywhere-native",
    competitor: "Limo Anywhere native AI",
    title: "Filly AI vs Limo Anywhere native AI",
    h1: "Filly AI vs Limo Anywhere Native AI: What Is Actually Available?",
    intro: "Limo Anywhere has announced two different AI products. Its customer-facing AI Chatbot is documented as an add-on for web, SMS, and voice. Its separate Email AI Agent—the product most comparable to Filly—was still documented in April 2026 as rolling out only to pre-selected pilot customers. Filly is an independent, browser-based reservation assistant available through direct onboarding.",
    rows: [
      { criterion: "Product relationship", filly: "Independent third-party product", competitor: "Built and supported by Limo Anywhere", winner: "competitor" },
      { criterion: "Primary workflow", filly: "Booking emails and supported documents into review-ready reservations", competitor: "Customer-facing chatbot is released; reservation email agent is a separate pilot", winner: "tie" },
      { criterion: "Current availability", filly: "Direct evaluation and onboarding with Filly", competitor: "Email AI Agent: pre-selected pilot customers as of April 2026", winner: "filly" },
      { criterion: "Inbox workflow", filly: "Gmail, Outlook web, Front, and Helpwise", competitor: "Email pilot documents Gmail, Exchange, Dovecot, IMAP, and the LA Email Gateway", winner: "tie" },
      { criterion: "Human review", filly: "Review extracted details before fill", competitor: "Human approval queue in the Email AI Agent pilot", winner: "tie" },
      { criterion: "Documents and specialized formats", filly: "Supported PDFs and transportation-specific extraction", competitor: "Confirm current document support during a pilot evaluation", winner: "filly" },
      { criterion: "Native platform capabilities", filly: "Focused reservation-entry assistant", competitor: "Email pilot documents booking, modification, cancellation, and customer communication", winner: "competitor" },
      { criterion: "Front and Helpwise", filly: "Purpose-built browser workflow", competitor: "Not listed in the published email pilot documentation", winner: "filly" },
      { criterion: "Best evaluation method", filly: "Test representative emails and PDFs", competitor: "Test the same booking set where pilot access is available", winner: "tie" },
    ],
    verdict: "The Limo Anywhere AI Chatbot announced in 2025 is not the same product as Filly: it is primarily a customer-facing booking assistant. The more direct competitor is Limo Anywhere's Email AI Agent, which its April 2026 documentation still describes as a limited pilot. Operators who do not have pilot access can evaluate Filly now using their real emails and documents. Filly does not replace Limo Anywhere—it helps reservation teams work inside it.",
  },
];
