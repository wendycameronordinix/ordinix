import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/adaptordie")({
  head: () => ({
    meta: [
      { title: "Ordinix Limited - Adapt or Die publication" },
      {
        name: "description",
        content:
          "A practical book about navigating change, building resilience, and adapting when it matters most.",
      },
      {
        property: "og:title",
        content: "Ordinix Limited - Adapt or Die publication",
      },
      {
        property: "og:description",
        content:
          "A practical book about navigating change, building resilience, and adapting when it matters most.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/adaptordie" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/adaptordie" }],
  }),
  component: AdaptOrDiePage,
});

function AdaptOrDiePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <Link
        to="/"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to Ordinix
      </Link>
      <div className="mt-8 grid gap-10 sm:grid-cols-[240px_1fr] sm:items-start">
        <img
          src={`${import.meta.env.BASE_URL}adapt-or-die-cover.webp`}
          alt="Adapt or Die book cover by Wendy Cameron"
          className="w-full max-w-[240px] rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Ordinix Limited
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">Adapt or Die publication</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A practical guide to navigating change, building resilience, and adapting when it
            matters most. For leaders and teams who know that standing still is not an option.
          </p>
        </div>
      </div>
      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-card-foreground">Coming soon</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The book is currently being written. Sign up below to be the first to hear about updates,
          sample chapters, and publication details.
        </p>
        {submitted ? (
          <div className="mt-6 rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
            <span className="font-semibold">Ordinix Limited:</span> Thanks — we&apos;ll be in touch
            with updates.
          </div>
        ) : (
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get("email");

              try {
                const res = await fetch("/api/notify", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email }),
                });

                if (res.ok) {
                  setSubmitted(true);
                  e.currentTarget.reset();
                }
              } catch (error) {
                console.error("Error:", error);
              }
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
        )}
      </div>
    </section>
  );
}
