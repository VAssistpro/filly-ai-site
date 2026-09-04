import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, Clock3, Gauge, RefreshCw, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const API_URL = "https://filly-server-private-production.up.railway.app";

type Usage = { fills_used: number; fills_limit: number | null; plan: string };
type Stats = { today: number; this_week: number; this_month: number; all_time: number; streak: number; saved_mins: number };

function planLabel(plan?: string) {
  if (!plan) return "Filly";
  return plan.charAt(0).toUpperCase() + plan.slice(1);
}

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard | Filly AI" },
      { name: "description", content: "Your private Filly usage and activity dashboard." },
      { name: "robots", content: "noindex,nofollow" },
    ],
    links: [{ rel: "canonical", href: "/dashboard" }],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const [usage, setUsage] = useState<Usage | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "signed-out" | "error">("loading");

  useEffect(() => {
    async function load() {
      const hash = new URLSearchParams(window.location.hash.slice(1));
      const incomingToken = hash.get("token") || hash.get("access_token");
      const token = incomingToken || window.localStorage.getItem("filly_token");

      if (incomingToken) {
        window.localStorage.setItem("filly_token", incomingToken);
        window.history.replaceState(null, "", "/dashboard");
      }
      if (!token) {
        setStatus("signed-out");
        return;
      }

      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
        const headers = { Authorization: `Bearer ${token}` };
        const [usageResponse, statsResponse] = await Promise.all([
          fetch(`${API_URL}/api/usage`, { headers }),
          fetch(`${API_URL}/api/fill-stats?timezone=${encodeURIComponent(timezone)}`, { headers }),
        ]);

        if (usageResponse.status === 401 || statsResponse.status === 401) {
          window.localStorage.removeItem("filly_token");
          setStatus("signed-out");
          return;
        }
        if (!usageResponse.ok || !statsResponse.ok) throw new Error("Dashboard request failed");

        setUsage(await usageResponse.json());
        setStats(await statsResponse.json());
        setStatus("ready");
      } catch {
        setStatus("error");
      }
    }
    load();
  }, []);

  if (status === "loading") {
    return <DashboardMessage icon={<RefreshCw className="h-6 w-6 animate-spin" />} title="Loading your dashboard" body="Connecting to your Filly account…" />;
  }

  if (status === "signed-out") {
    return <DashboardMessage icon={<Gauge className="h-6 w-6" />} title="Open Filly to view your dashboard" body="Sign in inside the Filly extension, then select View Dashboard from Account. Filly will open this page securely." />;
  }

  if (status === "error") {
    return <DashboardMessage icon={<Activity className="h-6 w-6" />} title="Your dashboard is temporarily unavailable" body="Please try again from the View Dashboard button inside the Filly extension." />;
  }

  const limit = usage?.fills_limit;
  const used = usage?.fills_used ?? 0;
  const remaining = limit == null ? "Unlimited" : Math.max(limit - used, 0).toLocaleString();
  const saved = stats?.saved_mins ?? 0;

  return (
    <section className="bg-noise">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Private dashboard</p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-gradient md:text-6xl">Your Filly activity.</h1>
            <p className="mt-4 text-muted-foreground">A current view of fills, capacity, and estimated time returned to your team.</p>
          </div>
          <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
            {planLabel(usage?.plan)} plan
          </span>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Today" value={stats?.today ?? 0} />
          <Stat label="This week" value={stats?.this_week ?? 0} />
          <Stat label="This month" value={stats?.this_month ?? 0} />
          <Stat label="All time" value={stats?.all_time ?? used} accent />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card-premium rounded-2xl p-6 md:col-span-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground"><Clock3 className="h-4 w-4 text-primary" /> Estimated time saved</div>
            <div className="mt-5 font-display text-5xl font-semibold text-foreground">{saved >= 60 ? `${(saved / 60).toFixed(1)} hours` : `${saved} minutes`}</div>
            <p className="mt-3 text-sm text-muted-foreground">An estimate based on completed fills. Actual savings vary by reservation complexity and source quality.</p>
          </div>
          <div className="card-premium rounded-2xl p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground"><Sparkles className="h-4 w-4 text-primary" /> Monthly capacity</div>
            <div className="mt-5 font-display text-4xl font-semibold text-foreground">{used.toLocaleString()}{limit == null ? "" : ` / ${limit.toLocaleString()}`}</div>
            <p className="mt-2 text-sm text-muted-foreground">{remaining === "Unlimited" ? "Unlimited fills available" : `${remaining} fills remaining`}</p>
            <Link to="/pricing" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">View plans <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, accent = false }: { label: string; value: number; accent?: boolean }) {
  return <div className="card-premium rounded-2xl p-6"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p><p className={`mt-4 font-display text-4xl font-semibold ${accent ? "text-primary" : "text-foreground"}`}>{value.toLocaleString()}</p></div>;
}

function DashboardMessage({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return <section className="flex min-h-[65vh] items-center justify-center px-5"><div className="card-premium max-w-lg rounded-3xl p-8 text-center md:p-12"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">{icon}</div><h1 className="mt-6 font-display text-3xl font-semibold text-foreground">{title}</h1><p className="mt-4 leading-relaxed text-muted-foreground">{body}</p><a href="mailto:support@getfillyai.com?subject=Filly%20dashboard%20help" className="mt-7 inline-flex rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-surface">Contact support</a></div></section>;
}
