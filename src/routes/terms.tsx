import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Filly AI" },
      {
        name: "description",
        content:
          "The terms that govern use of Filly AI, including permitted use, data responsibilities, third-party services, and proprietary rights.",
      },
      { property: "og:title", content: "Terms of Service | Filly AI" },
      { property: "og:description", content: "Terms governing the use of Filly AI." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Acceptance and authority",
    body: (
      <>
        <p>
          These Terms of Service (the “Terms”) are a binding agreement between you and V Assist Pro
          Inc., doing business as GetFillyAI (“Filly,” “we,” “us,” or “our”). By creating an
          account, selecting an acceptance checkbox, signing in after being shown these Terms, or
          using Filly, you agree to these Terms and our{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        <p>
          If you use Filly for a company or other organization, you represent that you have
          authority to bind that organization. You must be at least 18 years old and legally able to
          enter into this agreement.
        </p>
      </>
    ),
  },
  {
    title: "2. What Filly provides",
    body: (
      <p>
        Filly is an independent browser-based reservation assistant that extracts booking
        information supplied or selected by a user and assists with entering that information into
        supported third-party systems. Features may include email and attachment import, document
        extraction, reservation previews, account memory, batch processing, fill history, and
        automated form entry. Features may change as Filly improves or as third-party services
        change.
      </p>
    ),
  },
  {
    title: "3. Accounts and security",
    body: (
      <p>
        You are responsible for safeguarding your account credentials, limiting access to authorized
        users, and promptly notifying us of suspected unauthorized use. You are responsible for
        activity performed through your account unless prohibited by law. You may not share, sell,
        or transfer access in a way that avoids plan or usage limits.
      </p>
    ),
  },
  {
    title: "4. Limited license",
    body: (
      <p>
        Subject to these Terms and payment of any applicable fees, Filly grants you a limited,
        revocable, non-exclusive, non-transferable, non-sublicensable license to install and use
        Filly for your internal business operations. Filly is licensed, not sold. No rights are
        granted except those expressly stated in these Terms.
      </p>
    ),
  },
  {
    title: "5. Filly’s proprietary rights",
    body: (
      <>
        <p>
          Filly and its licensors retain all right, title, and interest in the product and its
          technology, including its source and object code, extension and server software,
          interfaces, designs, branding, documentation, prompts, extraction and mapping logic, field
          rules, workflows, automations, compilations, improvements, and know-how. These materials
          are protected by copyright, trade secret, trademark, contract, and other applicable laws.
        </p>
        <p>
          Your content remains yours. Using Filly does not transfer ownership of your booking data
          to us, but you grant us the limited rights needed to process that data and provide,
          secure, troubleshoot, and improve the service as described in the Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "6. Prohibited conduct",
    body: (
      <>
        <p>You may not, and may not help anyone else to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            copy, reproduce, modify, translate, distribute, sell, lease, sublicense, white-label, or
            create derivative works from Filly except as expressly authorized;
          </li>
          <li>
            reverse engineer, decompile, disassemble, decode, discover source code, or reconstruct
            Filly’s models, prompts, mappings, workflows, logic, or non-public interfaces, except to
            the limited extent a restriction is prohibited by applicable law;
          </li>
          <li>
            scrape, probe, benchmark, monitor, or systematically extract product behavior or output
            to build, train, evaluate, or improve a competing product or service;
          </li>
          <li>
            bypass authentication, security controls, usage limits, payment controls, or technical
            restrictions;
          </li>
          <li>
            remove proprietary notices, impersonate another person, share credentials without
            authorization, or misrepresent Filly’s origin or affiliation;
          </li>
          <li>
            introduce malicious code, interfere with the service, access another user’s data, or use
            Filly for unlawful, deceptive, abusive, or privacy-invasive activity.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Your data and compliance responsibilities",
    body: (
      <>
        <p>
          You represent that you have all permissions and lawful authority needed to provide
          passenger, customer, employee, affiliate, email, attachment, and reservation data to Filly
          and to direct Filly to enter it into third-party systems. You are responsible for
          applicable privacy notices, consents, contracts, retention rules, and data protection
          obligations.
        </p>
        <p>
          Do not submit payment-card data, government identifiers, health information, or other
          highly sensitive data through Filly. The extension does not support extracting, storing,
          or autofilling payment-card credentials. Use reasonable data minimization and access
          controls.
        </p>
      </>
    ),
  },
  {
    title: "8. Limo Anywhere and other third-party services",
    body: (
      <>
        <p>
          Filly is an independent product. It is not affiliated with, sponsored by, endorsed by, or
          operated by Limo Anywhere, Addison Lee Ltd., Google, Microsoft, Front, Helpwise, or other
          third-party services unless we expressly say otherwise. Third-party names and marks belong
          to their respective owners.
        </p>
        <p>
          Your use of third-party services remains governed by your agreements and their terms,
          policies, permissions, and data-handling requirements. Filly does not grant you rights to
          access or use a third-party service and does not excuse noncompliance with its rules. You
          are responsible for maintaining authorized accounts and determining that your use of Filly
          with those services is permitted. Third-party changes, outages, validation rules, or
          access restrictions may affect Filly’s operation.
        </p>
      </>
    ),
  },
  {
    title: "9. Automation requires human review",
    body: (
      <>
        <p>
          Filly uses automated and AI-assisted processing. Extracted data and automated actions may
          be inaccurate, incomplete, delayed, duplicated, or placed in the wrong field. You must
          review each reservation before relying on it, including passenger and billing contacts,
          account selection, dates and times, pickup, wait, stop and drop-off routing, flight data,
          service and vehicle type, child seats, affiliate status, pricing, notes, and save status.
        </p>
        <p>
          You remain responsible for correcting errors, confirming that a reservation was saved and
          finalized, maintaining appropriate backups, and complying with operational, legal, safety,
          contractual, and customer-service requirements. Filly is an assistance tool; it is not a
          substitute for professional judgment or a system of record.
        </p>
      </>
    ),
  },
  {
    title: "10. Plans, payments, and trials",
    body: (
      <p>
        Paid plans, usage allowances, renewal terms, and cancellation options are presented at
        purchase. Unless required otherwise by law or stated at checkout, fees are non-refundable
        after a billing period begins. Taxes may apply. We may change prices prospectively with
        reasonable notice. You may cancel future renewals through the available account or billing
        controls.
      </p>
    ),
  },
  {
    title: "11. Feedback",
    body: (
      <p>
        If you voluntarily provide suggestions or feedback, you grant Filly a perpetual, worldwide,
        royalty-free right to use it without restriction or compensation. This does not give us
        ownership of your reservation or customer data.
      </p>
    ),
  },
  {
    title: "12. Suspension and termination",
    body: (
      <p>
        You may stop using Filly at any time. We may suspend or terminate access when reasonably
        necessary to address nonpayment, security risk, unlawful activity, abuse, material breach,
        or harm to Filly, users, or third parties. Provisions that by their nature should survive
        termination—including proprietary rights, restrictions, disclaimers, liability limits, and
        indemnity—will survive.
      </p>
    ),
  },
  {
    title: "13. Disclaimers",
    body: (
      <p className="uppercase">
        To the maximum extent permitted by law, Filly is provided “as is” and “as available.” We
        disclaim all express, implied, and statutory warranties, including merchantability, fitness
        for a particular purpose, title, non-infringement, accuracy, uninterrupted operation, and
        compatibility. We do not warrant that Filly will prevent errors or data loss, satisfy
        third-party requirements, or remain compatible with every version or configuration of a
        third-party service. Some jurisdictions do not allow certain disclaimers, so portions of
        this section may not apply to you.
      </p>
    ),
  },
  {
    title: "14. Limitation of liability",
    body: (
      <p className="uppercase">
        To the maximum extent permitted by law, Filly and its owners, personnel, contractors, and
        suppliers will not be liable for indirect, incidental, special, consequential, exemplary, or
        punitive damages, or for lost profits, revenue, goodwill, data, customers, reservations, or
        business interruption. Our total aggregate liability arising out of or relating to Filly or
        these Terms will not exceed the greater of US $100 or the amount you paid to Filly during
        the 12 months before the event giving rise to the claim. These limits apply regardless of
        the theory of liability and even if a remedy fails of its essential purpose. Nothing in
        these Terms excludes liability that cannot lawfully be excluded.
      </p>
    ),
  },
  {
    title: "15. Indemnity",
    body: (
      <p>
        To the extent permitted by law, you will defend, indemnify, and hold harmless Filly and its
        owners, personnel, contractors, and suppliers from third-party claims, losses, liabilities,
        damages, and reasonable costs arising from your content, your instructions to Filly, your
        violation of these Terms, your violation of law or third-party rights, or your unauthorized
        or noncompliant use of a third-party service.
      </p>
    ),
  },
  {
    title: "16. Changes to these Terms",
    body: (
      <p>
        We may update these Terms as Filly or applicable requirements change. We will post the
        revised version and effective date. For material changes, we will provide reasonable notice
        and may require renewed affirmative acceptance before continued use. Changes do not apply
        retroactively unless required by law or expressly agreed.
      </p>
    ),
  },
  {
    title: "17. General terms",
    body: (
      <p>
        If a provision is unenforceable, it will be limited to the minimum extent necessary and the
        remaining provisions will continue. Our failure to enforce a provision is not a waiver. You
        may not assign these Terms without our written consent; we may assign them in connection
        with a reorganization, financing, merger, acquisition, or transfer of the business. These
        Terms, the Privacy Policy, any order form, and any separate written agreement between you
        and Filly form the entire agreement for the service. Applicable law governs; any
        governing-law, venue, or dispute provision in a signed order form or separate written
        agreement controls if one exists.
      </p>
    ),
  },
  {
    title: "18. Contact",
    body: (
      <p>
        Questions about these Terms may be sent to{" "}
        <a href="mailto:support@getfillyai.com" className="text-primary hover:underline">
          support@getfillyai.com
        </a>
        .
      </p>
    ),
  },
];

function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Legal</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-gradient md:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Effective date and version: September 3, 2026
      </p>

      <div className="mt-10 rounded-xl border border-primary/25 bg-primary/5 p-5 text-sm leading-6 text-foreground">
        <strong>Important:</strong> Filly assists with reservation entry, but you remain responsible
        for reviewing every field and saving each reservation in Limo Anywhere.
      </div>

      <div className="mt-10 space-y-9 text-[15px] leading-[1.75] text-muted-foreground">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-xl font-semibold text-foreground">{section.title}</h2>
            <div className="mt-3 space-y-3">{section.body}</div>
          </section>
        ))}
      </div>
    </article>
  );
}
