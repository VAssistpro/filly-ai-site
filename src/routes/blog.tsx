import { createFileRoute, Link } from "@tanstack/react-router";
import { blogIndexSchema } from "../components/site/schemas";

export const posts = [
  {
    slug: "limo-anywhere-automation-guide",
    title: "The complete guide to automating Limo Anywhere reservations",
    date: "2026-06-12",
    readingTime: "8 min read",
    excerpt:
      "What actually can — and can't — be automated in Limo Anywhere in 2026, and how modern AI tools like Filly close the gap.",
  },
  {
    slug: "dispatcher-cognitive-load",
    title: "Dispatch is a thinking job, not a typing job",
    date: "2026-05-28",
    readingTime: "6 min read",
    excerpt:
      "Why the real cost of manual data entry isn't minutes — it's the mental bandwidth stolen from customer service.",
  },
  {
    slug: "farm-in-workflows",
    title: "Handling farm-in reservations without losing money",
    date: "2026-05-14",
    readingTime: "5 min read",
    excerpt:
      "Farm-in jobs are the most error-prone reservations in ground transport. Here's how to make them reliable.",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Dispatch, AI, and Limo Anywhere | Filly AI" },
      {
        name: "description",
        content:
          "Insights on ground transportation dispatch, Limo Anywhere workflows, and how AI is changing operator productivity.",
      },
      { property: "og:title", content: "Filly AI Blog" },
      {
        property: "og:description",
        content: "Dispatch efficiency, AI automation, and Limo Anywhere guides for operators.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(blogIndexSchema) }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="border-b border-border/60 bg-noise">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Blog</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl">
            Notes from inside the industry.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Writing about dispatch workflows, Limo Anywhere edge cases, and how AI is
            changing what a small operator can do.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="card-premium flex h-full flex-col rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <time dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{p.readingTime}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold text-foreground">
                  {p.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <span className="mt-5 text-sm font-semibold text-primary">Read post →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
