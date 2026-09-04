import { Link } from "@tanstack/react-router";
import { FillyLogo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
        <div>
          <FillyLogo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Selected booking requests become review-ready Limo Anywhere reservations—with visible
            checkpoints and operator control.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/80">
            Product
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/features" className="text-muted-foreground hover:text-foreground">
                Features
              </Link>
            </li>
            <li>
              <Link to="/integrations" className="text-muted-foreground hover:text-foreground">
                Integrations
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/compare" className="text-muted-foreground hover:text-foreground">
                Compare
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/80">
            Resources
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/guide" className="text-muted-foreground hover:text-foreground">
                User Guide
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/glossary" className="text-muted-foreground hover:text-foreground">
                Glossary
              </Link>
            </li>
            <li>
              <Link to="/story" className="text-muted-foreground hover:text-foreground">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/80">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <a
                href="mailto:support@getfillyai.com"
                className="text-muted-foreground hover:text-foreground"
              >
                support@getfillyai.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:px-8">
          <p>© 2026 V Assist Pro Inc., d/b/a GetFillyAI.</p>
          <p>Filly AI is not affiliated with Limo Anywhere or Addison Lee Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
