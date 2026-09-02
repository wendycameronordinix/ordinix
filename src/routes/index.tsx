import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "../assets/ordinix-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ordinix Limited | Principal Architect & Strategic Advisory" },
      {
        name: "description",
        content:
          "Ordinix partners with financial services, insurance and media organisations to architect and deliver high-impact digital transformations. Available for contract and advisory engagements.",
      },
      {
        property: "og:title",
        content: "Ordinix Limited | Principal Architect & Strategic Advisory",
      },
      {
        property: "og:description",
        content:
          "Ordinix partners with financial services, insurance and media organisations to architect and deliver high-impact digital transformations. Available for contract and advisory engagements.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <section className="flex flex-col justify-center py-12">
        <div className="mb-10">
          <img
            src={logoAsset.url}
            alt="Ordinix Limited"
            className="h-20 w-auto sm:h-24"
          />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Principal Architect & Strategic Advisory
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Ordinix partners with financial services, insurance, and media organisations to
          architect and deliver high-impact digital transformations.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:wendy.cameron@ordinix.co.uk"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in touch
          </a>
          <Link
            to="/adaptordie"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Adapt or Die
          </Link>
          <a
            href="https://www.linkedin.com/company/ordinix-limited/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">What we do</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <ServiceCard
            title="AI-First Orchestration & Agentic Workflows"
            description="Designing enterprise adoption frameworks for AI-driven automation and intelligent business processes."
          />
          <ServiceCard
            title="Data Strategy & Platforms"
            description="Azure Lakehouse (Databricks), Snowflake, and federated Data Mesh governance that unlock competitive advantage."
          />
          <ServiceCard
            title="Enterprise Integration Architecture"
            description="API-first solutions, integration governance, and seamless ecosystem connectivity."
          />
          <ServiceCard
            title="Cloud-Native & Microservices"
            description="Scalable, resilient architectures across AWS, Azure, and Kubernetes with security built in."
          />
          <ServiceCard
            title="Strategic Discovery"
            description="Time-boxed sandbox spikes and fail-fast validation to de-risk architectural investment."
          />
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">How we work</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          With 25+ years leading mission-critical transformations at scale, we operate as a force
          multiplier—bridging the gap between C-suite vision and engineering execution. We identify
          architectural risks early, establish governance frameworks, and deliver production-ready
          solutions on schedule.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Engagements</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="inline-flex items-center rounded-full border border-border bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            Contract delivery
          </span>
          <span className="inline-flex items-center rounded-full border border-border bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            Advisory
          </span>
          <span className="inline-flex items-center rounded-full border border-border bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            Discovery & validation
          </span>
          <span className="inline-flex items-center rounded-full border border-border bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            Fractional architecture leadership
          </span>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-accent/50">
      <h3 className="font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
