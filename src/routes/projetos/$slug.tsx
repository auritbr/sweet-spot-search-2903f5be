import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/PageHero";
import { ArcThick, BrushStroke, HatchedCircle, Triangle } from "@/components/Shapes";
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
    <main className="overflow-hidden bg-background pt-20">
      <Section className="relative bg-background">
        <HatchedCircle size={180} color="#08B9E6" className="absolute -left-16 bottom-0 opacity-15" />
        <div className="container-x">
          <Link to="/projetos" className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-brand-petrol transition hover:text-brand-red"><ArrowLeft className="size-4" aria-hidden="true" /> Voltar aos projetos</Link>
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_.95fr] md:gap-16">
            <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">{project.category}</p>
            <h1 className="mt-3 max-w-2xl text-brand-ink" style={{ fontSize: "clamp(2.1rem, 4vw, 4.4rem)", lineHeight: 1.05, fontWeight: 700 }}>{project.title}</h1>
            <BrushStroke color="#FFB400" className="mt-5 w-28" />
            <p className="mt-6 max-w-2xl leading-relaxed text-brand-gray">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.ctas.map((cta, index) => (
                <Button key={cta.label} asChild variant={index === 0 ? "default" : "outline"} className={`rounded-full px-6 shadow-none ${index === 0 ? "bg-brand-red text-primary-foreground hover:bg-brand-petrol" : "border-brand-petrol bg-transparent text-brand-petrol hover:bg-brand-soft hover:text-brand-petrol"}`}><Link to={cta.to}>{cta.label}</Link></Button>
              ))}
            </div>
            </div>
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="aspect-square overflow-hidden rounded-full bg-brand-soft">
                <img src={project.image} alt={`Atividade do projeto ${project.name}`} className="h-full w-full object-cover" />
              </div>
              <ArcThick color="#00384C" className="absolute -left-7 -top-7 w-36" from={105} to={265} />
              <ArcThick color="#ED1C24" className="absolute -bottom-4 -right-7 w-28" from={290} to={430} />
              <HatchedCircle size={100} color="#08B9E6" className="absolute -bottom-7 left-4 opacity-65" />
              <Triangle color="#FFB400" size={50} className="absolute right-3 top-3" rotate={18} />
            </div>
          </div>
        </div>
      </Section>
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