import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { PageHero, Section } from "@/components/PageHero";
import { ArcThick, DiamondsCluster, HatchedCircle, Triangle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";
import { albums, projects } from "@/data/site";

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
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const relatedProjectImages = projects.filter((item) => item.slug !== project.slug && item.category === project.category).map((item) => item.image);
  const albumImages = albums[(projectIndex + albums.length) % albums.length]?.photos ?? [];
  const galleryPool = [...relatedProjectImages, ...albumImages];
  const gallery = [project.image, ...Array.from({ length: 4 }, (_, index) => galleryPool[index % galleryPool.length] ?? project.image)];
  const statements = project.description.split(". ").map((item) => item.replace(/\.$/, "")).filter(Boolean);
  const cardTitles = ["A proposta", "Como acontece", "Conexões do projeto"];
  const perspectiveStyles = [
    {
      panel: "bg-brand-petrol text-primary-foreground",
      marker: "bg-brand-gold text-brand-petrol",
      text: "text-primary-foreground/78",
      accent: "bg-brand-cyan",
    },
    {
      panel: "bg-brand-gold text-brand-petrol",
      marker: "bg-brand-red text-primary-foreground",
      text: "text-brand-petrol/75",
      accent: "bg-brand-red",
    },
    {
      panel: "bg-brand-cyan text-brand-petrol",
      marker: "bg-brand-petrol text-primary-foreground",
      text: "text-brand-petrol/75",
      accent: "bg-brand-gold",
    },
  ] as const;

  return (
    <main className="overflow-hidden bg-background">
      <PageHero title={project.title} eyebrow={project.category} subtitle={project.short} image={project.image} variant="detail" accent="cyan" brush="#FFB400">
        <div className="flex flex-wrap gap-3">
          {project.ctas.slice(0, 2).map((cta, index) => (
            <Button key={cta.label} asChild size="sm" variant="outline" className={`rounded-full border px-5 font-semibold shadow-sm backdrop-blur-md ${index === 0 ? "border-primary-foreground/20 bg-brand-red/85 text-primary-foreground hover:bg-brand-red hover:text-primary-foreground" : "border-brand-petrol/15 bg-brand-gold/90 text-brand-petrol hover:bg-brand-gold hover:text-brand-petrol"}`}><Link to={cta.to}>{cta.label}</Link></Button>
          ))}
        </div>
      </PageHero>

      <Section className="relative overflow-hidden bg-background py-14 md:py-20">
        <Triangle color="#FFB400" size={36} className="pointer-events-none absolute left-[6%] top-14 hidden opacity-55 md:block" rotate={18} />
        <div className="container-x grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,.7fr)] lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Sobre o projeto</p>
            <h2 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.65rem)", lineHeight: 1.15, fontWeight: 700 }}>{project.name}</h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-brand-gray md:text-base">{project.description}</p>
          </div>
          <div className="relative mx-auto w-full max-w-[390px]">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-brand-soft"><img src={project.image} alt={`Atividade do projeto ${project.name}`} className="h-full w-full object-cover" /></div>
            <ArcThick color="#08B9E6" className="pointer-events-none absolute -bottom-7 -right-6 w-24 opacity-75" from={195} to={325} />
            <DiamondsCluster color="#ED1C24" size={35} className="pointer-events-none absolute -left-3 -top-4 opacity-75" />
          </div>
        </div>
      </Section>

      <section className="relative bg-brand-soft/45 py-14 md:py-20" aria-labelledby="project-aspects-title">
        <HatchedCircle size={112} color="#08B9E6" className="pointer-events-none absolute -right-12 top-12 opacity-10" />
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Em perspectiva</p>
            <h2 id="project-aspects-title" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.4rem)", lineHeight: 1.15, fontWeight: 700 }}>Um projeto, diferentes dimensões</h2>
          </div>
           <div className="mx-auto mt-9 grid max-w-5xl gap-4 md:grid-cols-3 md:gap-5">
            {cardTitles.map((title, index) => (
               <article key={title} className={`group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-xl p-5 shadow-[0_16px_32px_-26px_rgba(0,56,76,0.65)] ring-1 ring-inset ring-primary-foreground/20 transition-transform duration-300 hover:-translate-y-1 md:p-6 ${perspectiveStyles[index].panel}`}>
                 <span className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 ${perspectiveStyles[index].accent}`} aria-hidden="true" />
                 <span className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full border-[12px] border-current opacity-10" aria-hidden="true" />
                 <div className="relative flex items-center justify-between">
                   <span className={`inline-flex size-8 items-center justify-center rounded-sm text-[10px] font-bold tracking-[0.12em] ${perspectiveStyles[index].marker}`}>0{index + 1}</span>
                   <span className={`size-3 rotate-45 ${perspectiveStyles[index].accent}`} aria-hidden="true" />
                 </div>
                 <div className="relative mt-6">
                   <h3 className="text-lg leading-snug text-inherit">{title}</h3>
                   <span className={`mt-3 block h-px w-10 ${perspectiveStyles[index].accent}`} aria-hidden="true" />
                   <p className={`mt-3 text-sm leading-relaxed ${perspectiveStyles[index].text}`}>{statements[index] ? `${statements[index]}.` : project.short}</p>
                 </div>
              </article>
            ))}
          </div>
          <Button asChild variant="ghost" className="mx-auto mt-8 flex w-fit rounded-full text-brand-petrol hover:bg-brand-soft hover:text-brand-red"><Link to="/projetos">Conheça outras iniciativas <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>

       <section className="relative overflow-hidden bg-background pb-12 pt-14 md:pb-16 md:pt-20" aria-labelledby="project-gallery-title">
         <ArcThick color="#08B9E6" className="pointer-events-none absolute -left-10 top-20 hidden w-24 opacity-20 md:block" from={205} to={335} />
         <HatchedCircle size={94} color="#FFB400" className="pointer-events-none absolute -right-8 bottom-10 opacity-15" />
         <span className="pointer-events-none absolute right-[9%] top-16 hidden size-3 rotate-45 bg-brand-red/75 md:block" aria-hidden="true" />
         <div className="container-x relative">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Galeria</p>
            <h2 id="project-gallery-title" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.4rem)", lineHeight: 1.15, fontWeight: 700 }}>Imagens que aproximam da experiência</h2>
          </div>
           <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
            {gallery.map((image, index) => (
               <figure key={`${image}-${index}`} className={`aspect-[4/3] overflow-hidden rounded-xl bg-brand-soft ${index < 2 ? "col-span-2 md:col-span-3" : "col-span-2"}`}>
                <img src={image} alt={`${project.name} — registro ${index + 1}`} className="h-full w-full object-cover transition duration-500 hover:scale-[1.025]" loading={index === 0 ? "eager" : "lazy"} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CompactFinalCTA
        title={`${project.name} faz parte de uma atuação que continua em movimento.`}
        text="Acompanhe a programação da Maggu ou entre em contato para saber mais sobre esta iniciativa."
        primary={{ label: "Ver Agenda", to: "/agenda" }}
        secondary={{ label: "Entre em Contato", to: "/contato" }}
         variant="projectDetail"
      />
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