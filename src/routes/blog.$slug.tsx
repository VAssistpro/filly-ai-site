import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts } from "./blog";
import { articleSchema } from "../components/site/schemas";

const bodies: Record<string, string[]> = {
  "limo-anywhere-automation-guide": [
    "Limo Anywhere has been the industry standard for ground transportation dispatch for over a decade. Its strength is that it does everything. Its weakness is that doing everything means every reservation touches a dozen tabs, forms, and dropdowns — most of them still filled by hand.",
    "In 2026, most operators are still copying passenger names, flight numbers, and billing details out of email and into LA by hand. Even the operators who have adopted CRMs, quoting tools, or dispatch dashboards typically still have a human dispatcher doing the final entry into Limo Anywhere itself.",
    "This is where the gap is. And this is where modern AI — specifically tools built for the exact shape of a Limo Anywhere reservation — closes it.",
    "The right way to think about automation is not \"replace the dispatcher.\" It's \"absorb the routine so the dispatcher can apply judgment.\" A dispatcher's real job is customer service, exception handling, and quality control. Every minute they spend typing is a minute stolen from that job.",
    "Filly was designed around this principle: fill everything a machine can fill reliably, review everything before it commits, learn from every correction. That's the workflow that actually works.",
  ],
  "dispatcher-cognitive-load": [
    "There's a hidden cost to manual data entry that never shows up on the P&L. It's the cognitive load — the mental bandwidth your dispatcher spends holding all the details in their head while switching between screens.",
    "Ask any senior dispatcher what makes their job hard and they won't say \"typing.\" They'll say something like: \"I have to remember that Whitaker Holdings wants their invoice in a specific format, that Delta 447 usually lands 15 minutes early, that the corporate account for this client uses a different billing address than the passenger name, and that this particular FBO wants us to call ahead.\"",
    "That's real cognitive work. And every time they interrupt it to type a passenger name, they lose the thread.",
    "The productivity gain from automation isn't just the minutes saved. It's the recovered mental bandwidth. It's the calm focus that comes from not having to hold twelve things in your head while typing the thirteenth.",
    "This is what \"AI for dispatch\" actually means when it's done right. Not replacing judgment. Absorbing the routine so judgment has room to breathe.",
  ],
  "farm-in-workflows": [
    "Farm-in reservations — jobs handed to you by another operator or a broker — are the most error-prone bookings in ground transportation. They also make up a substantial portion of most operators' volume.",
    "The problems are structural. The email comes from a different sender than the passenger. The account it needs to be billed to isn't obvious. The dispatch type in Limo Anywhere has to be set to the correct radio button or the job breaks downstream. Miss any of these and you either don't get paid or you assign the wrong car.",
    "The manual workaround most operations use is a cheat sheet — a list of broker domains and their corresponding LA accounts, taped to the wall next to the dispatcher's monitor.",
    "The right way to handle this is to let the software recognize the broker automatically. Sender domain matching, dispatch-type inference from email content, and account lookup all belong in the tool, not on a sticky note.",
    "Filly's farm-in workflow is built for this: it uses sender and booking context to help match the broker account, set the dispatch type, and present the result for dispatcher review. That reduces repetitive lookup and re-entry while keeping the final decision with your team.",
  ],
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post, body: bodies[post.slug] ?? [] };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found | Filly AI Blog" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Filly AI` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(articleSchema(post)),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post, body } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="mx-auto max-w-[720px] px-5 py-16 md:px-8 md:py-24">
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← All posts
        </Link>
        <header className="mt-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
            <span>·</span>
            <span>Filly AI</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-gradient md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        </header>

        <div className="prose mt-10 space-y-5 text-[17px] leading-[1.8] text-muted-foreground">
          {body.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <section className="border-t border-border/60 bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="font-display text-2xl font-semibold text-gradient">
            Keep reading
          </h2>
          <ul className="mt-6 grid gap-5 md:grid-cols-2">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="card-premium block rounded-2xl p-6"
                >
                  <div className="text-xs text-muted-foreground">{p.readingTime}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
