import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    return {
      meta: [
        { title: project ? `${project.name} | Associação Maggu` : "Projeto não encontrado | Associação Maggu" },
        { name: "description", content: project?.short ?? "Conheça os projetos da Associação Maggu." },
        { property: "og:title", content: project?.title ?? "Projeto | Associação Maggu" },
        { property: "og:description", content: project?.short ?? "Conheça os projetos da Associação Maggu." },
        { property: "og:type", content: "website" },
        ...(project ? [
          { property: "og:image" as const, content: project.image },
          { name: "twitter:image" as const, content: project.image },
        ] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: project ? [{ rel: "canonical", href: `/projetos/${project.slug}` }] : [],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <main className="overflow-hidden bg-background">
      <PageHero title={project.title} eyebrow={project.category} subtitle={project.short} image={project.image} variant="detail" accent="cyan" brush="#FFB400">
            <Link to="/projetos" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/85 transition hover:text-brand-gold"><ArrowLeft className="size-4" aria-hidden="true" /> Voltar aos projetos</Link>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.ctas.map((cta, index) => (
                <Button key={cta.label} asChild variant={index === 0 ? "default" : "outline"} className={`rounded-full px-6 shadow-none ${index === 0 ? "bg-brand-red text-primary-foreground hover:bg-brand-gold hover:text-brand-petrol" : "border-primary-foreground/40 bg-background/10 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground"}`}><Link to={cta.to}>{cta.label}</Link></Button>
              ))}
            </div>
      </PageHero>
    </main>
  );
}

function ProjectNotFound() {
  return (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl text-brand-ink">Projeto não encontrado</h1>
      <Link to="/projetos" className="mt-6 inline-flex rounded-full bg-brand-red px-5 py-3 font-semibold text-primary-foreground">Ver projetos</Link>
    </div>
  );
}