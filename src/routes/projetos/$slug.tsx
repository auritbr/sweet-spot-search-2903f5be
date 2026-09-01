import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { ArcThick, BrushStroke, HatchedCircle, Triangle } from "@/components/Shapes";
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
    <>
      <PageHero
        title={project.title}
        subtitle={project.category}
        image={project.image}
        accent={project.color}
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Projetos", to: "/projetos" }, { label: project.name }]}
      />

      <Section className="overflow-hidden bg-background">
        <div className="container-x grid items-center gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-14">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-md">
              <img src={project.image} alt={`Projeto ${project.name}`} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <ArcThick color="#08B9E6" className="absolute -bottom-5 -left-5 w-24 opacity-80" from={210} to={340} />
            <Triangle color="#FFB400" size={42} className="absolute -right-3 -top-4" rotate={18} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">{project.category}</p>
            <h2 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>{project.name}</h2>
            <BrushStroke color="#FFB400" className="mt-5 w-28" />
            <p className="mt-6 max-w-2xl leading-relaxed text-brand-gray">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.ctas.map((cta, index) => (
                <Link key={cta.label} to={cta.to} className={`rounded-full px-6 py-3 text-sm font-semibold transition ${index === 0 ? "bg-brand-red text-primary-foreground hover:bg-brand-petrol" : "border-2 border-brand-petrol text-brand-petrol hover:bg-brand-soft"}`}>
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-brand-petrol py-14 md:py-16">
        <HatchedCircle size={150} color="#ED1C24" className="absolute -bottom-10 -right-8 opacity-30" />
        <div className="container-x relative mx-auto max-w-2xl text-center">
          <h2 className="text-2xl text-primary-foreground md:text-3xl">Conheça outras iniciativas da Maggu</h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/85">Explore os projetos que conectam cultura, formação e território.</p>
          <Link to="/projetos" className="mt-6 inline-flex rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-background">Ver todos os projetos</Link>
        </div>
      </section>
    </>
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