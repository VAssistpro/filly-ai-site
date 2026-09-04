import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, LogIn } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in | Filly AI" },
      { name: "description", content: "Continue to your Filly account." },
      { name: "robots", content: "noindex,nofollow" },
    ],
    links: [{ rel: "canonical", href: "/signin" }],
  }),
  component: SignInPage,
});

function SignInPage() {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.slice(1));
    const token = hash.get("access_token") || hash.get("token");
    if (token) {
      window.localStorage.setItem("filly_token", token);
      window.location.replace(`/dashboard#token=${encodeURIComponent(token)}`);
      return;
    }
    setConfirmed(new URLSearchParams(window.location.search).has("confirmed"));
  }, []);

  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-noise px-5 py-16">
      <div className="card-premium w-full max-w-lg rounded-3xl p-8 text-center md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {confirmed ? <CheckCircle2 className="h-7 w-7" /> : <LogIn className="h-7 w-7" />}
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold text-foreground">{confirmed ? "Email confirmed" : "Sign in through Filly"}</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">Open the Filly Chrome extension and sign in from its Account screen. Then select View Dashboard to open your private activity page securely.</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/dashboard" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Open dashboard</Link>
          <a href="mailto:support@getfillyai.com?subject=Filly%20sign-in%20help" className="rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-surface">Get sign-in help</a>
        </div>
      </div>
    </section>
  );
}
