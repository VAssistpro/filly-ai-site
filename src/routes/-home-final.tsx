import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check, CirclePause, Files, Layers3, MapPin, Send, ShieldCheck, Sparkles } from "lucide-react";

const capabilities = [
  [Files, "Email and document intake", "Selected Gmail, Outlook, Front, or Helpwise messages, plus supported PDFs, spreadsheets, images, and pasted text."],
  [Layers3, "Batch reservation filling", "Preview every recognized trip first. Filly handles supported reservations one at a time, each with its own status."],
  [MapPin, "Transportation-aware routing", "Airports stay airports. Stored Home and Office addresses, FBOs, POIs, stops, waits, and supported returns follow the right workflow."],
  [CirclePause, "Pause, fix, and resume", "When a choice is unclear, Filly asks, waits safely, and continues the same reservation after review."],
  [ShieldCheck, "Account and routing memory", "Operator-approved corrections can become visible Learned Rules your team can review, edit, or remove."],
  [Send, "Confirmation delivery", "For supported requests, prepare the confirmation, use a verified recipient, attach the PDF, and respect the hide-rates choice."],
] as const;

function Mark({ className = "h-12 w-12" }: { className?: string }) {
  return <img src="/filly-launcher.svg" alt="" aria-hidden="true" width={96} height={96} className={className} />;
}

function PilotLink({ dark = false }: { dark?: boolean }) {
  return <a href="mailto:support@getfillyai.com?subject=Filly%20pilot%20access" className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 ${dark ? "bg-[#211c18] text-[#fffaf4]" : "bg-[#de7857] text-[#211c18]"}`}>Request pilot access <ArrowRight className="h-4 w-4" /></a>;
}

function Header() {
  return <header className="relative z-40 border-b border-white/10 bg-[#151210]/90 text-[#fffaf4] backdrop-blur-xl"><nav className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 md:px-10" aria-label="Primary">
    <Link to="/" className="flex items-center gap-3" aria-label="Filly AI home"><Mark /><span className="text-lg font-semibold tracking-[-0.02em]">Filly AI</span></Link>
    <div className="hidden items-center gap-7 md:flex"><a href="#how-it-works" className="text-sm text-white/58 hover:text-white">How it works</a><a href="#capabilities" className="text-sm text-white/58 hover:text-white">Capabilities</a><Link to="/guide" className="text-sm text-white/58 hover:text-white">Guide</Link><Link to="/faq" className="text-sm text-white/58 hover:text-white">FAQ</Link></div>
    <a href="mailto:support@getfillyai.com?subject=Filly%20pilot%20access" className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold transition hover:border-[#de7857] hover:bg-[#de7857] hover:text-[#211c18]">Request access</a>
  </nav></header>;
}

function Hero() {
  return <section className="relative overflow-hidden bg-[#151210] text-[#fffaf4]">
    <div className="filly-scroll-orbit pointer-events-none absolute right-[-9rem] top-[-10rem] h-[38rem] w-[38rem] rounded-full border border-[#de7857]/22"/><div className="filly-scroll-orbit filly-scroll-orbit--reverse pointer-events-none absolute right-[-3rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full border border-[#de7857]/18"/>
    <div className="mx-auto grid max-w-[1440px] gap-14 px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <div data-reveal className="relative z-10"><div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ef8a69]"><Mark className="h-9 w-9"/>AI reservation assistant for operators</div>
        <h1 className="mt-8 max-w-[760px] text-balance text-[clamp(4rem,8vw,7.8rem)] font-medium leading-[0.82] tracking-[-0.065em]" style={{fontFamily:"Newsreader, Georgia, serif"}}>Review, don&apos;t re-type.</h1>
        <p className="mt-8 max-w-xl text-2xl leading-snug tracking-[-0.025em] md:text-3xl">Filly reads the booking. You review the reservation.</p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/58">You pick the booking. Filly shows you what it found, then fills the reservation in front of you—checkpoint by checkpoint.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><PilotLink/><a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold hover:bg-white/5">See Filly at work</a></div>
      </div>
      <figure data-reveal data-reveal-delay="120" className="relative z-10 mx-auto w-full max-w-[650px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#211c18] p-4 shadow-[0_35px_90px_-35px_rgba(222,120,87,.28)] sm:p-5">
        <div className="mb-4 flex items-center justify-between px-2 text-xs text-white/50"><span>Filly while it works</span><span className="inline-flex items-center gap-2 text-emerald-300"><i className="h-2 w-2 rounded-full bg-emerald-400"/>Live progress</span></div>
        <div className="mx-auto max-h-[660px] max-w-[360px] overflow-hidden rounded-[1.1rem] border border-white/10"><img src="/screenshots/current/filly-working-dark.png" alt="Filly filling a reservation with visible checkpoints, pause, and stop controls." width={808} height={1610} loading="eager" className="h-auto w-full"/></div>
      </figure>
    </div>
  </section>;
}

function Metrics() {
  return <section className="border-y border-white/10 bg-[#1d1917] text-[#fffaf4]"><div className="mx-auto grid max-w-[1440px] divide-y divide-white/10 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-10">
    {[["35 sec","Average reservation with Filly"],["7.5 min","Average manual reservation"],["6m 55s","Average time returned"]].map(([v,l],i)=><div data-reveal data-reveal-delay={String(i*90)} key={v} className="py-8 md:px-10 md:py-10 first:pl-0"><p className="text-5xl tracking-[-0.05em]" style={{fontFamily:"Newsreader, Georgia, serif"}}>{v}</p><p className="mt-2 text-sm text-white/50">{l}</p></div>)}
  </div><p className="mx-auto max-w-[1440px] px-5 pb-5 text-xs text-white/35 md:px-10">Current operator test averages. Reservation complexity and source quality affect actual completion time.</p></section>;
}

function PreviewVisual() {
  return <div className="rounded-[2rem] border border-white/10 bg-[#2a2420] p-5 md:p-10"><div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#211c18]/12 bg-[#fffaf4] text-[#211c18] shadow-xl">
    <div className="flex items-center justify-between border-b border-[#211c18]/10 px-6 py-5"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#a34d34]">Preview</p><p className="mt-1 text-lg font-semibold">3 reservations recognized</p></div><span className="rounded-full bg-[#dcefe2] px-3 py-1 text-xs font-semibold text-[#246b3f]">Ready to review</span></div>
    <div className="divide-y divide-[#211c18]/10 px-6">{[["01","JFK","MANHATTAN"],["02","OFFICE","EWR"],["03","FBO","HOTEL"]].map(([n,a,b])=><div key={n} className="grid grid-cols-[36px_1fr_auto] items-center gap-3 py-5"><span className="text-sm text-[#a34d34]">{n}</span><div><p className="font-semibold">{a} <span className="text-[#de7857]">→</span> {b}</p><p className="mt-1 text-sm text-[#211c18]/50">Passenger · route · service · vehicle</p></div><Check className="h-5 w-5 text-[#3b9561]"/></div>)}</div>
  </div></div>;
}

function BatchVisual() {
  return <div className="rounded-[2rem] bg-[#211c18] p-5 text-[#fffaf4] md:p-10"><div className="overflow-hidden rounded-2xl border border-white/10 bg-[#2a2420]"><div className="flex items-center justify-between border-b border-white/10 px-6 py-5"><div><p className="text-xs uppercase tracking-[.18em] text-[#ef8a69]">Batch queue</p><p className="mt-1 text-xl font-semibold">One visible trip at a time</p></div><span className="text-sm text-white/45">2 of 3</span></div>{["Reservation 01 · completed","Reservation 02 · filling now","Reservation 03 · waiting"].map((x,i)=><div key={x} className={`flex items-center gap-4 border-b border-white/10 px-6 py-5 last:border-0 ${i===1?"bg-[#de7857]/12":""}`}><span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs ${i===0?"bg-emerald-400 text-[#211c18]":i===1?"bg-[#de7857] text-[#211c18]":"border border-white/20 text-white/50"}`}>{i===0?"✓":i+1}</span><span className={i===2?"text-white/45":""}>{x}</span></div>)}</div></div>;
}

function PauseVisual() {
  return <div className="rounded-[2rem] border border-white/10 bg-[#2a2420] p-5 md:p-10"><div className="rounded-2xl bg-[#100e0d] p-6 text-[#fffaf4] shadow-2xl md:p-8"><div className="flex items-center gap-3 text-[#ef8a69]"><CirclePause className="h-5 w-5"/><span className="text-xs font-semibold uppercase tracking-[.18em]">Paused for review</span></div><h4 className="mt-7 text-3xl font-semibold">Which stored address is “home”?</h4><p className="mt-3 text-white/58">Two saved addresses were found and neither is labeled Home. Choose the correct pickup to continue.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{["12 Example Avenue","84 Sample Street"].map(x=><div key={x} className="rounded-xl border border-white/15 bg-white/5 p-4 text-sm">{x}<br/><span className="text-white/45">Select as pickup</span></div>)}</div><div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm"><span className="text-white/45">Nothing has been saved</span><span className="font-semibold text-[#ef8a69]">Resume after selection →</span></div></div></div>;
}

function HowItWorks() {
  const stories = [
    ["01 · Understand before entry","A preview before anything touches the form.","Review the passenger, account, route, flight, service, vehicle, notes, and every recognized trip before filling starts.",<PreviewVisual/>],
    ["02 · Batch filling","A batch should still be visible one reservation at a time.","Filly shows exactly which item is ready, working, waiting, or needs review, then processes supported trips sequentially.",<BatchVisual/>],
    ["03 · Operator control","When Filly is unsure, it does not pretend.","A missing route, ambiguous account, or unresolved stored address becomes a clear question. Fix it, then resume the same fill.",<PauseVisual/>],
  ] as const;
  return <section id="how-it-works" className="bg-[#151210] text-[#fffaf4]"><div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36"><div data-reveal className="mx-auto max-w-4xl text-center"><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#ef8a69]">How Filly works</p><h2 className="mt-5 text-balance text-5xl leading-[.96] tracking-[-.045em] md:text-7xl" style={{fontFamily:"Newsreader, Georgia, serif"}}>The repetitive entry disappears. Your judgment stays.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55">From the source you select to the final save, every important stage remains visible.</p></div>
    <div className="mt-24 space-y-28 md:mt-36 md:space-y-40">{stories.map(([eyebrow,title,body,visual],i)=><article data-reveal key={title} className="grid gap-10 lg:grid-cols-2 lg:items-center"><div className={i===1?"lg:order-2":""}><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#ef8a69]">{eyebrow}</p><h3 className="mt-5 text-4xl leading-[1.02] md:text-5xl" style={{fontFamily:"Newsreader, Georgia, serif"}}>{title}</h3><p className="mt-5 max-w-lg text-lg leading-relaxed text-white/55">{body}</p></div><div className={i===1?"lg:order-1":""}>{visual}</div></article>)}</div>
  </div></section>;
}

function Capabilities() {
  return <section id="capabilities" className="border-t border-white/10 bg-[#1d1917] text-[#fffaf4]"><div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32"><div data-reveal className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#ef8a69]">Core capabilities</p><h2 className="mt-5 max-w-3xl text-5xl leading-[.96] tracking-[-.04em] md:text-7xl" style={{fontFamily:"Newsreader, Georgia, serif"}}>Built around the way transportation teams actually work.</h2></div><p className="max-w-xl text-lg leading-relaxed text-white/55 lg:justify-self-end">Filly is not a generic form filler. It understands reservation context and follows transportation-specific paths.</p></div><div className="mt-16 grid border-y border-white/10 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(([Icon,title,body],i)=><article data-reveal data-reveal-delay={String((i%3)*90)} key={title} className={`border-white/10 py-9 md:px-8 lg:border-r lg:[&:nth-child(3n)]:border-r-0 ${i<3?"lg:border-b":""}`}><Icon className="h-6 w-6 text-[#ef8a69]"/><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-white/52">{body}</p></article>)}</div></div></section>;
}

function TrustAndClose() {
  return <><section className="bg-[#100e0d] text-[#fffaf4]"><div data-reveal className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36"><div className="mx-auto max-w-5xl text-center"><Sparkles className="mx-auto h-7 w-7 text-[#de7857]"/><h2 className="mt-7 text-balance text-5xl leading-[.94] tracking-[-.04em] md:text-8xl" style={{fontFamily:"Newsreader, Georgia, serif"}}>Automation should feel accountable.</h2><p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/58">Filly shows its work, stops safely when required information is missing, and leaves the final reservation decision with your team.</p></div><div className="mt-20 grid divide-y divide-white/12 border-y border-white/12 md:grid-cols-3 md:divide-x md:divide-y-0">{[["Selected input","Filly processes the message or document the operator chooses."],["Preview first","See one trip—or every trip in a batch—before filling begins."],["Save it your way","Review and save manually, or use optional safeguarded Auto-Save."]].map(([t,b])=><div key={t} className="py-8 md:px-8 md:py-10 first:pl-0"><p className="font-semibold text-[#ef8a69]">{t}</p><p className="mt-3 leading-relaxed text-white/55">{b}</p></div>)}</div></div></section>
  <section className="bg-[#de7857] text-[#211c18]"><div data-reveal className="mx-auto max-w-[1440px] px-5 py-24 text-center md:px-10 md:py-36"><Mark className="mx-auto h-20 w-20"/><h2 className="mx-auto mt-8 max-w-5xl text-balance text-5xl leading-[.92] tracking-[-.045em] md:text-8xl" style={{fontFamily:"Newsreader, Georgia, serif"}}>Ready to stop typing the same reservation twice?</h2><p className="mx-auto mt-6 max-w-xl text-lg text-[#211c18]/65">Join the Filly pilot and see your own supported workflow become review-ready.</p><div className="mt-9"><PilotLink dark/></div></div></section></>;
}

function Footer() { return <footer className="bg-[#171310] text-[#fffaf4]"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-10 md:py-20"><div><div className="flex items-center gap-3"><Mark/><span className="text-xl font-semibold">Filly AI</span></div><p className="mt-5 max-w-sm leading-relaxed text-white/50">Selected booking requests become review-ready Limo Anywhere reservations—with visible checkpoints and operator control.</p></div><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#ef8a69]">Explore</p><div className="mt-5 grid gap-3 text-sm text-white/58"><Link to="/features">Features</Link><Link to="/guide">User guide</Link><Link to="/faq">FAQ</Link><Link to="/contact">Contact</Link></div></div><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#ef8a69]">Legal</p><div className="mt-5 grid gap-3 text-sm text-white/58"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><a href="mailto:support@getfillyai.com">support@getfillyai.com</a></div></div></div><div className="border-t border-white/10"><div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 text-xs text-white/38 md:flex-row md:justify-between md:px-10"><p>© 2026 V Assist Pro Inc., d/b/a GetFillyAI.</p><p>Independent product. Not affiliated with Limo Anywhere or Addison Lee Ltd.</p></div></div></footer>; }

export function HomeFinal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        element.style.transitionDelay = `${element.dataset.revealDelay ?? 0}ms`;
        element.classList.add("is-visible");
        observer.unobserve(element);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <div className="bg-[#151210] text-[#fffaf4]"><Header/><Hero/><Metrics/><HowItWorks/><Capabilities/><TrustAndClose/><Footer/></div>;
}
