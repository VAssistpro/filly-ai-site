import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Filly AI" },
      {
        name: "description",
        content:
          "How Filly handles account data, booking content, email imports, reservation history, and third-party processing.",
      },
      { property: "og:title", content: "Privacy Policy | Filly AI" },
      { property: "og:description", content: "How Filly handles your data — in plain English." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} className="text-primary hover:underline">
    {children}
  </a>
);

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Legal</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-gradient md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Effective date: September 3, 2026</p>

      <div className="mt-10 space-y-9 text-[15px] leading-[1.75] text-muted-foreground">
        <p>
          This policy explains what Filly AI (“Filly,” “we,” “us,” or “our”) accesses, why it is
          needed, where it is processed, and the choices available to you. Filly is a Chrome
          extension for transportation operators, operated by V Assist Pro Inc., doing business as
          GetFillyAI.
        </p>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">1. Contact</h2>
          <p className="mt-3">
            Our website is <Link href="https://getfillyai.com">getfillyai.com</Link>. Privacy
            questions and requests may be sent to{" "}
            <Link href="mailto:support@getfillyai.com">support@getfillyai.com</Link>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">2. Data we process</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong className="text-foreground">Account and subscription data:</strong> name,
              email address, authentication identifiers, plan, fill allowance, usage totals, and
              billing status.
            </li>
            <li>
              <strong className="text-foreground">Booking content you provide:</strong> pasted text
              and files such as PDFs, spreadsheets, and images, together with the passenger,
              contact, route, trip, affiliate, and reservation details they contain.
            </li>
            <li>
              <strong className="text-foreground">Supported inbox context:</strong> on Gmail,
              Outlook, Front, and Helpwise, Filly locally checks visible subject and message text
              for transportation-related terms to decide whether to show its shortcut. That
              relevance check stays on your device. The currently open message and its available
              attachments are sent for processing only after you click “Send to Filly” or otherwise
              start an import. Filly does not continuously scan your inbox.
            </li>
            <li>
              <strong className="text-foreground">Supported reservation-page data:</strong> Filly
              reads and writes the fields and page state needed to preview, fill, pause, resume,
              verify, and report the result of a reservation workflow.
            </li>
            <li>
              <strong className="text-foreground">History, memory, and diagnostics:</strong>{" "}
              reservation summaries, field completion metrics, elapsed time, learned account or
              sender mappings, settings, error details, and technical logs needed to sync your
              account and improve reliability.
            </li>
            <li>
              <strong className="text-foreground">Technical data:</strong> browser and extension
              version, device or session identifiers, IP address and request timestamps in ordinary
              authentication, hosting, and security logs.
            </li>
            <li>
              <strong className="text-foreground">Payment data:</strong> the extension does not
              extract, store, or autofill card numbers, CVVs/CVCs, security codes, or other payment
              credentials.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">3. How we use data</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>authenticate users, enforce plan limits, and provide account features;</li>
            <li>extract reservation details and perform the workflow you request;</li>
            <li>
              maintain local fill history and sync approved learned rules across eligible accounts
              and devices;
            </li>
            <li>recover unfinished work when session recovery is enabled;</li>
            <li>secure, debug, support, measure, and improve Filly;</li>
            <li>comply with law and enforce our Terms of Service.</li>
          </ul>
          <p className="mt-3">
            We do not sell personal data, serve behavioral advertising, or use customer booking
            content to train a general-purpose AI model.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            4. AI and service providers
          </h2>
          <p className="mt-3">
            We disclose data only as needed to providers that perform services for Filly or as
            required by law. Depending on the feature, these providers may include Google for Gemini
            API processing, Supabase for authentication and account data, Railway for backend
            hosting and request processing, AirLabs or AviationStack for requested flight lookups,
            OpenStreetMap/Nominatim for requested place lookups, and Stripe for subscription
            billing. Stripe processes payment-card data directly; Filly does not receive or store
            full card numbers.
          </p>
          <p className="mt-3">
            Providers process data under their own terms and our applicable service arrangements.
            Their infrastructure may process data in the United States or other countries where they
            operate.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            5. Local and cloud storage
          </h2>
          <p className="mt-3">
            Filly uses browser and Chrome extension storage for settings, authentication state,
            session recovery, pending work, local reservation history, and local UI data. Account
            information, subscription status, usage statistics, minimized fill telemetry, consent
            records, and approved learned rules may be stored in Filly’s cloud systems. Some booking
            content or file data may remain temporarily on the device when needed for an unfinished
            or recoverable session.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">6. Retention</h2>
          <p className="mt-3">
            Raw message bodies and attachment files are processed to fulfill the request and are not
            intentionally written to Filly’s production database. Local reservation history and
            minimized server fill telemetry are limited to 30 days. Temporary recovery and batch
            data is cleared after completion, cancellation, acknowledgement, expiry, or user
            deletion. Remembered rules and account records remain until you delete them or delete
            your account. Backup and security logs may persist for a limited period after deletion.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            7. Your choices and rights
          </h2>
          <p className="mt-3">
            You control when Filly reads a supported open message by clicking that service in the
            extension. You may clear pending input, remove learned memory, sign out, or uninstall
            the extension. Depending on your location, you may have rights to access, correct,
            delete, or receive a copy of your personal data, or object to or restrict certain
            processing. Contact us to make a request. We may need to verify your identity.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">8. Security</h2>
          <p className="mt-3">
            We use reasonable technical and organizational safeguards designed to protect data, but
            no browser extension, transmission, or storage system is completely secure. Keep your
            credentials private, limit extension access to authorized personnel, and do not submit
            data you are not authorized to process.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">9. Children</h2>
          <p className="mt-3">
            Filly is a business tool intended for adults. We do not knowingly create accounts for or
            collect personal data directly from children under 18. Booking records may include
            passenger details such as a child-seat requirement when supplied by an authorized
            transportation operator.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            10. Third-party services
          </h2>
          <p className="mt-3">
            Your use of Limo Anywhere, Gmail, Outlook, Front, Helpwise, and other connected services
            is also governed by their policies and your organization’s agreements. Filly is an
            independent product and does not control those services’ data practices.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            11. Chrome Web Store Limited Use
          </h2>
          <p className="mt-3">
            Filly’s use and transfer of personal or sensitive information obtained through Chrome,
            supported websites, and Google services complies with the Chrome Web Store User Data
            Policy, including its Limited Use requirements. Filly’s use and transfer to any other
            app of information received from Google APIs also adheres to the Google API Services
            User Data Policy, including its Limited Use requirements. We use this information only
            to provide or improve Filly’s disclosed reservation-import and form-filling workflow,
            protect the service, or comply with law. We do not sell it, use it for personalized
            advertising, transfer it to data brokers, or permit routine human review of message,
            attachment, or reservation content.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">12. Changes</h2>
          <p className="mt-3">
            We may update this policy as Filly or applicable requirements change. We will post the
            revised policy and effective date. For material changes, we will provide reasonable
            notice and, when appropriate, request renewed consent.
          </p>
        </section>
      </div>
    </article>
  );
}
