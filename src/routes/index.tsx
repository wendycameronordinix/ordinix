import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "../assets/ordinix-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ordinix — Adapt. Evolve. Thrive." },
      {
        name: "description",
        content:
          "Ordinix delivers AI-first orchestration, data strategy, enterprise integration and cloud-native architecture for financial services, insurance and media.",
      },
      {
        property: "og:title",
        content: "Ordinix — Adapt. Evolve. Thrive.",
      },
      {
        property: "og:description",
        content:
          "Ordinix delivers AI-first orchestration, data strategy, enterprise integration and cloud-native architecture for financial services, insurance and media.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
            title="AI-first orchestration & agentic workflows"
            description="Design and deploy autonomous, goal-driven systems that connect people, data and decisions across your enterprise."
          />
          <ServiceCard
            title="Data strategy & platforms"
            description="Azure Lakehouse, Snowflake, Data Mesh and modern data platforms built for scale, governance and real insight."
          />
          <ServiceCard
            title="Enterprise integration & API-first solutions"
            description="Resilient, event-driven architecture that unites legacy systems, SaaS and partners behind clean, secure APIs."
          />
          <ServiceCard
            title="Cloud-native & microservices"
            description="AWS, Azure and Kubernetes platforms engineered for reliability, elasticity and continuous delivery."
          />
          <ServiceCard
            title="Strategic discovery & validation"
            description="Rapid, evidence-based exploration that turns uncertainty into a clear, actionable path forward."
          />
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Experience</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          25+ years delivering mission-critical digital transformations for financial services,
          insurance and media. From enterprise-wide re-platforming to targeted advisory, we bring
          the architecture, delivery discipline and commercial judgement needed to make change
          stick.
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
