// Centralized Schema.org JSON-LD blocks for Filly AI.
// Absolute URLs are used per JSON-LD guidance and the site's canonical domain.

export const SITE_URL = "https://getfillyai.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GetFillyAI",
  legalName: "GetFillyAI",
  url: "https://getfillyai.com",
  logo: {
    "@type": "ImageObject",
    url: "https://getfillyai.com/logo.png",
    width: 400,
    height: 120,
  },
  description:
    "Builders of Filly AI — an independent AI reservation assistant for Limo Anywhere operators.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@getfillyai.com",
    contactType: "customer support",
    availableLanguage: "English",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Limo Anywhere automation",
    "Ground transportation dispatch software",
    "AI reservation auto-fill",
    "Limousine dispatch automation",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Filly AI",
  url: "https://getfillyai.com",
  description:
    "An independent AI reservation assistant that turns supported booking emails and PDFs into review-ready Limo Anywhere reservations.",
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "GetFillyAI",
    url: "https://getfillyai.com",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://getfillyai.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Filly AI",
  alternateName: ["Filly", "GetFillyAI", "Filly Chrome Extension"],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "ProductivityApplication",
  operatingSystem: "Google Chrome on Windows, macOS, Linux",
  browserRequirements: "Requires Google Chrome 116 or later",
  softwareVersion: "3.15.8",
  datePublished: "2025-01-01",
  dateModified: "2026-07-29",
  url: "https://getfillyai.com",
  screenshot: "https://getfillyai.com/og-image.png",
  description:
    "Filly is an independent AI reservation assistant built for Limo Anywhere operators. It reads supported booking emails and attachments, organizes the trip details for review, and helps fill more than 50 fields. Works with compatible versions of Gmail, Outlook, Front, and Helpwise.",
  abstract:
    "AI-assisted Limo Anywhere reservation entry from supported booking emails and documents. Handles airport, FBO, affiliate, round-trip, multi-stop, and batch workflows with flight lookup, account memory, and team sharing.",
  featureList: [
    "Gmail, Outlook, Front, and Helpwise email integration",
    "Batch fill from multiple PDFs or Excel/spreadsheet uploads",
    "Airport and flight routing with IATA code detection",
    "FBO and private aviation routing (Signature, Jet Aviation, etc.)",
    "Farm-in and farm-out detection with auto account matching",
    "Round-trip automation with return flight and date fill",
    "Multi-stop, POI, and FBO routing tabs",
    "Live flight lookup for missing pickup times",
    "Date safety checks with timezone anchors and visible warnings",
    "Child seat detection and auto-fill",
    "Account lookup and creation",
    "Account memory and learning from dispatcher corrections",
    "Team memory sharing across dispatcher seats",
    "Fill history and time-saved dashboard",
    "PAUSE and learn mode",
    "Auto-Save",
    "2 UI themes: Cyber Dark and Cyber Light",
    "50+ supported reservation fields",
    "Drag and drop file upload",
  ],
  creator: { "@type": "Organization", name: "GetFillyAI", url: "https://getfillyai.com" },
  publisher: { "@type": "Organization", name: "GetFillyAI", url: "https://getfillyai.com" },
  inLanguage: "en",
  audience: {
    "@type": "Audience",
    audienceType:
      "Limo Anywhere operators, ground transportation dispatchers, limousine company owners, black car service dispatchers",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Free Evaluation",
      price: "0",
      priceCurrency: "USD",
      description: "15 evaluation fills, no credit card required.",
      eligibleQuantity: { "@type": "QuantitativeValue", value: 15, unitText: "fills per month" },
    },
    {
      "@type": "Offer",
      name: "Starter Plan",
      price: "149",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "149",
        priceCurrency: "USD",
        billingIncrement: 1,
        unitText: "month",
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
      },
      description: "100 fills per month for one dispatcher seat.",
    },
    {
      "@type": "Offer",
      name: "Operations Plan",
      price: "349",
      priceCurrency: "USD",
      description: "500 fills per month for up to three dispatcher seats.",
    },
    {
      "@type": "Offer",
      name: "Scale Plan",
      price: "699",
      priceCurrency: "USD",
      description: "1,500 fills per month for up to five dispatcher seats.",
    },
  ],
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://getfillyai.com/" },
};

export const homeWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://getfillyai.com/",
  url: "https://getfillyai.com/",
  name: "Filly — Independent AI reservation assistance for Limo Anywhere operators.",
  description:
    "Filly turns supported booking emails and PDFs into review-ready Limo Anywhere reservation data, then helps fill more than 50 fields.",
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", url: "https://getfillyai.com" },
  about: { "@type": "SoftwareApplication", name: "Filly AI" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getfillyai.com/" },
    ],
  },
};

export const featuresWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://getfillyai.com/features",
  url: "https://getfillyai.com/features",
  name: "Filly Features — 50+ Supported Fields for Limo Anywhere",
  description:
    "Filly features include inbox integrations, airport and FBO routing, affiliate workflows, round trips, batch processing, flight lookup, account memory, and team sharing.",
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", url: "https://getfillyai.com" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getfillyai.com/" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://getfillyai.com/features" },
    ],
  },
};

const featureItems: Array<[string, string]> = [
  ["Email Integration", "FILLY button injected into Gmail, Outlook (Live, Office, 365), Front, and Helpwise. One click captures email body and attachments."],
  ["Batch Fill — PDF and Excel", "Attach multiple PDFs or upload a spreadsheet. Filly previews all extracted trips and fills them sequentially in Limo Anywhere."],
  ["Airport and Flight Routing", "Detects IATA airport codes, selects airline and flight number, and performs live flight lookup for missing arrival times."],
  ["FBO / Private Aviation", "Detects FBO terminals (Signature, Jet Aviation, etc.) and fills FBO name, tail number, and terminal address automatically."],
  ["Farm-In Detection", "Auto-detects broker farm-in emails, sets dispatch type radio, and matches accounts by sender domain."],
  ["Round-Trip Automation", "Fills the Limo Anywhere round-trip dialog with return date, time, flight number, and routing automatically."],
  ["Multi-Stop, POI, and FBO Routing", "Maps supported stops across address, Point of Interest, and FBO workflows for operator review."],
  ["Live Flight Lookup", "When pickup times are missing, Filly queries live flight data to find the actual scheduled arrival time."],
  ["Date Safety Checks", "Timezone anchors, relative-date resolution, and visible warnings help teams verify booking dates."],
  ["Account Memory and Learning", "Approved corrections can be saved as reusable account rules and shared across eligible team plans."],
  ["Child Seat Detection", "Reads child seat requests and fills type and count (infant, rear-facing, forward-facing, booster) automatically."],
  ["Account Lookup and Creation", "Searches existing Limo Anywhere accounts and creates new ones with billing contact and passenger type if not found."],
  ["Team Memory Sharing", "Approved account and sender rules can be shared across eligible team seats."],
  ["Fill History", "Review completed fill summaries, timing, and mapped-field details, and export history to CSV."],
  ["Time Saved Dashboard", "History reports average processing time and estimated time saved."],
  ["PAUSE and Learn", "Pause a fill mid-way to correct any field. Filly updates its memory rules automatically."],
  ["Auto-Save", "Optional mode that fills and saves the reservation in one uninterrupted pass."],
  ["2 UI Themes", "Choose Cyber Dark or Cyber Light from the Filly panel."],
  ["Drag and Drop Upload", "Drop PDF or Excel files directly into the Filly panel anywhere. No need to find an upload button."],
];

export const featuresItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Filly AI Features",
  description: "Complete list of Filly AI capabilities for Limo Anywhere reservation automation",
  numberOfItems: featureItems.length,
  itemListElement: featureItems.map(([name, description], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    description,
  })),
};

export const pricingWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://getfillyai.com/pricing",
  url: "https://getfillyai.com/pricing",
  name: "Filly Pricing — Starter, Operations, Scale, and Enterprise",
  description:
    "Evaluate Filly with 15 free fills, then choose Starter at $149, Operations at $349, Scale at $699, or a custom Enterprise package.",
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", url: "https://getfillyai.com" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getfillyai.com/" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://getfillyai.com/pricing" },
    ],
  },
};

export const pricingProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Filly AI — Limo Anywhere Reservation Auto-Fill",
  description:
    "Independent AI reservation assistant that turns supported booking emails and PDFs into review-ready Limo Anywhere reservation data.",
  brand: { "@type": "Brand", name: "GetFillyAI" },
  url: "https://getfillyai.com",
  image: "https://getfillyai.com/og-image.png",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "149",
    highPrice: "699",
    priceCurrency: "USD",
    offerCount: 3,
    offers: [
      { "@type": "Offer", name: "Starter", price: "149", priceCurrency: "USD", description: "100 fills/month · 1 seat", url: "https://getfillyai.com/pricing", availability: "https://schema.org/InStock", priceValidUntil: "2027-12-31" },
      { "@type": "Offer", name: "Operations", price: "349", priceCurrency: "USD", description: "500 fills/month · up to 3 seats", url: "https://getfillyai.com/pricing", availability: "https://schema.org/InStock", priceValidUntil: "2027-12-31" },
      { "@type": "Offer", name: "Scale", price: "699", priceCurrency: "USD", description: "1,500 fills/month · up to 5 seats", url: "https://getfillyai.com/pricing", availability: "https://schema.org/InStock", priceValidUntil: "2027-12-31" },
    ],
  },
};

export const storyAboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://getfillyai.com/story",
  url: "https://getfillyai.com/story",
  name: "Our Story — Why Filly Was Built",
  description:
    "The story behind Filly AI — built by someone who saw firsthand how much time and mental energy Limo Anywhere dispatchers spend on manual data entry, and decided to fix it.",
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", url: "https://getfillyai.com" },
  about: { "@type": "Organization", name: "GetFillyAI", url: "https://getfillyai.com" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getfillyai.com/" },
      { "@type": "ListItem", position: 2, name: "Our Story", item: "https://getfillyai.com/story" },
    ],
  },
};

export const blogIndexSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://getfillyai.com/blog",
  url: "https://getfillyai.com/blog",
  name: "Filly AI Blog — Limo Anywhere Automation & Dispatch Efficiency",
  description:
    "Guides, tips, and insights for Limo Anywhere operators on dispatch automation, AI tools, and running a more efficient ground transportation business.",
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "GetFillyAI", url: "https://getfillyai.com" },
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://getfillyai.com/contact",
  url: "https://getfillyai.com/contact",
  name: "Contact Filly AI",
  description:
    "Get in touch with the Filly AI team. We're a small team and we read every email. support@getfillyai.com",
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", url: "https://getfillyai.com" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getfillyai.com/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://getfillyai.com/contact" },
    ],
  },
};

export function articleSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}) {
  const url = `https://getfillyai.com/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url,
    url,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "GetFillyAI", url: "https://getfillyai.com" },
    publisher: {
      "@type": "Organization",
      name: "GetFillyAI",
      url: "https://getfillyai.com",
      logo: { "@type": "ImageObject", url: "https://getfillyai.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@type": "Blog", url: "https://getfillyai.com/blog" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getfillyai.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://getfillyai.com/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  };
}

export function integrationPageSchema(name: string, slug: string, description: string) {
  const url = `https://getfillyai.com/integrations/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: `Filly AI ${name} Integration`,
    description,
    isPartOf: { "@type": "WebSite", "@id": "https://getfillyai.com/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getfillyai.com/" },
        { "@type": "ListItem", position: 2, name: "Integrations", item: "https://getfillyai.com/integrations" },
        { "@type": "ListItem", position: 3, name, item: url },
      ],
    },
  };
}

export function integrationHowToSchema(name: string, steps: { title: string; body: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to fill Limo Anywhere from ${name} with Filly AI`,
    description: `Step-by-step guide to using Filly AI inside ${name} to auto-fill Limo Anywhere reservations.`,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
}

export function integrationFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const integrationsIndexSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://getfillyai.com/integrations",
  url: "https://getfillyai.com/integrations",
  name: "Filly AI Integrations",
  description: "The current Filly AI extension supports Gmail, Outlook web, Front, and Helpwise booking workflows into Limo Anywhere.",
};

// Glossary — DefinedTermSet is the correct schema.
export function glossarySchema(terms: { term: string; slug: string; definition: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": "https://getfillyai.com/glossary#termset",
    name: "Limo Anywhere & Dispatch Glossary",
    description: "Definitions of key terms every Limo Anywhere operator should know — farm-in, FBO, IATA, PAX, batch fill, and more.",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `https://getfillyai.com/glossary#${t.slug}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: "https://getfillyai.com/glossary#termset",
    })),
  };
}

export const glossaryWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://getfillyai.com/glossary",
  url: "https://getfillyai.com/glossary",
  name: "Limo Anywhere Glossary — Every dispatch term explained",
  description: "The complete Limo Anywhere & ground-transportation dispatch glossary: farm-in, FBO, IATA codes, PAX, batch fill, tail numbers, and every term Filly AI handles.",
};

export function comparisonWebPageSchema(slug: string, title: string, competitor: string) {
  const url = `https://getfillyai.com/compare/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: title,
    description: `Head-to-head comparison of Filly AI vs ${competitor} for Limo Anywhere operators.`,
    about: [
      { "@type": "SoftwareApplication", name: "Filly AI" },
      { "@type": "Thing", name: competitor },
    ],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getfillyai.com/" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://getfillyai.com/compare" },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  };
}

export const compareIndexSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://getfillyai.com/compare",
  url: "https://getfillyai.com/compare",
  name: "Filly AI comparisons",
  description: "How Filly AI compares to manual entry, generic auto-fill extensions, and Limo Anywhere's native AI products, including its limited-pilot Email AI Agent.",
};

// HowTo — install Filly (for home page).
export const installHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to install Filly AI for Limo Anywhere",
  description: "Install Filly AI in Chrome and start filling Limo Anywhere reservations from your inbox in under 60 seconds.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "Google Chrome" }],
  step: [
    { "@type": "HowToStep", position: 1, name: "Install the Chrome extension", text: "Open the Chrome Web Store, search for Filly AI, and click Add to Chrome. Installation takes about 20 seconds." },
    { "@type": "HowToStep", position: 2, name: "Sign in with your inbox", text: "Open Gmail, Outlook, Front, or Helpwise. Filly detects the inbox automatically and injects the FILLY button." },
    { "@type": "HowToStep", position: 3, name: "Open a booking email", text: "Any customer or broker email that contains a reservation. Filly reads the body text and any PDF or Excel attachments." },
    { "@type": "HowToStep", position: 4, name: "Click FILLY and preview the trip", text: "Filly extracts supported details and shows a preview. Confirm the information is correct." },
    { "@type": "HowToStep", position: 5, name: "Fill into Limo Anywhere", text: "Filly opens a new reservation in Limo Anywhere and maps supported fields. Review and save the reservation as normal." },
  ],
};
