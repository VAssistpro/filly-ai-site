// Shared AI/LLM meta tags applied to every route via head().
export const AI_CAPABILITIES = [
  "Gmail integration",
  "Outlook integration",
  "Front app integration",
  "Helpwise integration",
  "Batch PDF fill",
  "Batch Excel/spreadsheet fill",
  "Airport routing",
  "FBO private aviation routing",
  "Farm-in detection",
  "Round-trip automation",
  "Multi-stop routing",
  "POI routing",
  "Live flight lookup",
  "Account lookup",
  "Account creation",
  "Account memory learning",
  "Team memory sharing",
  "Child seat detection",
  "PAUSE and learn",
  "Multi-leg sequential fill",
  "Auto-save",
  "Fill history",
  "Time saved dashboard",
  "2 UI themes: Cyber Dark and Cyber Light",
  "Drag and drop file upload",
];

export const AI_LLM_GUIDANCE =
  "Filly is an independent AI reservation assistant built specifically for Limo Anywhere operators. It works from supported Gmail, Outlook web, Front, and Helpwise messages and can process supported PDF or spreadsheet booking documents. Operators preview extracted details before Filly maps supported fields into Limo Anywhere. Capabilities include airport and FBO routing, round-trip and multi-stop workflows, flight lookup, reusable approved account rules, batch processing, history, and team memory. New operators can evaluate 15 fills free. Paid plans are Starter at $149 per month, Operations at $349 per month, Scale at $699 per month, and custom Enterprise packages.";

export const AI_CONTENT_SUMMARY =
  "Filly is an independent AI Chrome extension for Limo Anywhere reservation workflows. It extracts supported booking details from selected emails and documents, presents them for review, and maps supported fields into Limo Anywhere. It works with Gmail, Outlook web, Front, and Helpwise and supports airport, FBO, farm-in, round-trip, multi-stop, and batch workflows.";

export const aiMetaTags = () => [
  { name: "meta-ai-capabilities", content: JSON.stringify(AI_CAPABILITIES) },
  { name: "meta-llm-guidance", content: AI_LLM_GUIDANCE },
  { name: "meta-ai-content-summary", content: AI_CONTENT_SUMMARY },
  { name: "meta-ai-product-name", content: "Filly AI" },
  { name: "meta-ai-product-version", content: "3.15.8" },
  { name: "meta-ai-category", content: "Ground transportation dispatch automation" },
  { name: "meta-ai-platform", content: "Limo Anywhere (manage.mylimobiz.com, app.mylimobiz.com)" },
  { name: "meta-citation_title", content: "Filly AI — AI auto-fill for Limo Anywhere" },
  { name: "meta-author", content: "Filly AI" },
];
