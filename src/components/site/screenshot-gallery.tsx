type Shot = {
  src: string;
  alt: string;
  title: string;
  body: string;
  caption: string;
  width: number;
  height: number;
};

const SHOTS: Shot[] = [
  {
    src: "/screenshots/inbox-bubble.png",
    alt: 'Filly AI floating bubble inside a Gmail booking email, saying "Hey, I\'m Filly! Booking email detected. Ready to fill?"',
    title: "In-inbox, one click",
    body: 'Filly appears inside the email itself. Click FILLY to begin a review-first reservation workflow from the message you are already viewing.',
    caption: "Gmail · Filly bubble on a live booking email",
    width: 1392,
    height: 448,
  },
  {
    src: "/screenshots/preview-memory.png",
    alt: 'Filly AI trip preview: recognized account "Bay Coach" mapped to "BAY COACH LIMO" with a Memory Applied badge before filling Limo Anywhere.',
    title: "Trip preview with Memory",
    body: 'Filly recognized "Bay Coach" and mapped it to "BAY COACH LIMO" from a previous correction. Verifies every match before it fills.',
    caption: "Extension · Trip preview with Memory Applied",
    width: 593,
    height: 1280,
  },
  {
    src: "/screenshots/details-dark.png",
    alt: "Filly AI details form pre-filled with SFO, United Airlines, flight UA 858, Sedan vehicle, PAX 1, and Farm-In trip type — mapped from a booking email.",
    title: "Trip details, mapped",
    body: "SFO, United, UA 858, Sedan, PAX 1, Farm-In — all parsed from the email and mapped to the right Limo Anywhere fields, ready to submit.",
    caption: "Extension · Auto-populated details form",
    width: 607,
    height: 1280,
  },
  {
    src: "/screenshots/history-dark.png",
    alt: "Filly AI history dashboard showing 22 reservations filled, 29 second average, 94.1% accuracy, and 5 hours saved in the last 7 days.",
    title: "History and estimated time saved",
    body: "Filly history can summarize completed fills, average processing time, mapped-field accuracy, and estimated time saved.",
    caption: "Extension · Weekly history dashboard",
    width: 600,
    height: 1280,
  },
  {
    src: "/screenshots/warning-dark.png",
    alt: 'Filly AI safety modal: "DATE WARNING — The pickup date (05/25/2026) is in the PAST. Proceed with historical entry?" with Abort and Proceed buttons.',
    title: "Safety nets built in",
    body: "Past-date detection, missing-field prompts, and account lookup add visible checkpoints before the reservation is completed.",
    caption: "Extension · Past-date safety warning",
    width: 597,
    height: 1280,
  },
  {
    src: "/screenshots/settings-dark.png",
    alt: "Filly AI settings screen with sections for Remembered Senders, Memory Rules, POI routing, and team-shared corrections.",
    title: "Memory that learns your ops",
    body: "Remembered senders, memory rules, POI routing, and eligible team-shared corrections help approved operating rules travel with the workflow.",
    caption: "Extension · Settings & memory panel",
    width: 597,
    height: 1280,
  },
];

export function ScreenshotGallery() {
  return (
    <section className="border-y border-border/60 bg-noise">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Real product, real reservations
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-gradient md:text-5xl">
            Not a mockup. This is Filly today.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every screen below is captured from the live extension, filling
            actual bookings in Limo Anywhere.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SHOTS.filter((_, index) => [0, 1, 2, 4].includes(index)).map((s, i) => (
            <figure
              key={s.src}
              className="card-premium reveal group flex flex-col overflow-hidden rounded-2xl p-4"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className="relative overflow-hidden rounded-xl border border-border-strong bg-background/60"
                style={{ aspectRatio: `${s.width} / ${s.height}` }}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="mt-4 px-1 pb-1">
                <h3 className="font-display text-base font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-wider text-primary/80">
                  {s.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
