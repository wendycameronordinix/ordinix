import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/adaptordie")({
  head: () => ({
    meta: [
      { title: "Adapt or Die — a book by Wendy Cameron" },
      {
        name: "description",
        content:
          "A practical book about navigating change, building resilience, and adapting when it matters most.",
      },
      {
        property: "og:title",
        content: "Adapt or Die — a book by Wendy Cameron",
      },
      {
        property: "og:description",
        content:
          "A practical book about navigating change, building resilience, and adapting when it matters most.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdaptOrDiePage,
});

function AdaptOrDiePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <Link
        to="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to Ordinix
      </Link>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Adapt or Die
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        A practical guide to navigating change, building resilience, and adapting when it
        matters most. Written by Wendy Cameron for leaders and teams who know that standing
        still is not an option.
      </p>
      <div className="mt-10 rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-card-foreground">Coming soon</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The book is currently being written. Sign up below to be the first to hear about
          updates, sample chapters, and publication details.
        </p>
        <form
          className="mt-6 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — we'll be in touch with updates.");
          }}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Notify me
          </button>
        </form>
      </div>
    </section>
  );
}
