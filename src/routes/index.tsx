import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ordinix — Adapt. Evolve. Thrive." },
      {
        name: "description",
        content:
          "Ordinix helps organisations navigate change, build resilience, and create lasting value.",
      },
      {
        property: "og:title",
        content: "Ordinix — Adapt. Evolve. Thrive.",
      },
      {
        property: "og:description",
        content:
          "Ordinix helps organisations navigate change, build resilience, and create lasting value.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col justify-center px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Adapt. Evolve. Thrive.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        Ordinix helps organisations cut through complexity and build the clarity, resilience,
        and momentum they need to keep moving forward.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          to="/adaptordie"
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          The book: Adapt or Die
        </Link>
        <a
          href="mailto:hello@ordinix.co.uk"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
