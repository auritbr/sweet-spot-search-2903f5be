import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { FinalCampaignCTA } from "@/components/FinalCampaignCTA";
import { HatchedCircle, ArcThick, BrushStroke, Triangle } from "@/components/Shapes";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Nossos Projetos | Associação Maggu" },
      { name: "description", content: "Conheça os nove projetos culturais, formativos e territoriais da Associação Maggu." },
      { property: "og:title", content: "Nossos Projetos — Associação Maggu" },
      { property: "og:description", content: "Conheça as iniciativas que dão forma ao Ecossistema Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projetos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: Projetos,
});

const PROJECTS_PER_PAGE = 3;
function Projetos() {
  const [page, setPage] = useState(1);
  const listStart = useRef<HTMLElement>(null);
  const pageCount = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const visibleProjects = projects.slice((page - 1) * PROJECTS_PER_PAGE, page * PROJECTS_PER_PAGE);

  const selectPage = (nextPage: number) => {
    if (nextPage < 1 || nextPage > pageCount || nextPage === page) return;
    setPage(nextPage);
    window.requestAnimationFrame(() => listStart.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <>
      <PageHero
        title="Nossos Projetos"
        eyebrow="Projetos e iniciativas"
        subtitle="Formação, criação e circulação cultural em três frentes complementares."
        image="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1920&q=80"
        accent="gold"
        brush="#08B9E6"
        compact
        decoration="diamonds"
      />

      <section ref={listStart} className="scroll-mt-24 overflow-hidden bg-background py-12 md:py-20" aria-labelledby="project-list-title">
        <div className="container-x relative">
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Iniciativas</p>
            <h2 id="project-list-title" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>Projetos que dão forma ao Ecossistema Maggu</h2>
          </div>

          <div className="divide-y divide-brand-petrol/15">
            {visibleProjects.map((project, index) => (
              <article key={project.slug} className="group relative grid items-center gap-9 py-12 first:pt-4 md:grid-cols-2 md:gap-14 md:py-16">
                <div className={`relative z-10 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">{project.category}</p>
                  <h3 className="mt-3 max-w-xl text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>{project.name}</h3>
                  <BrushStroke color="#FFB400" className="mt-5 w-24" />
                  <p className="mt-5 max-w-xl leading-relaxed text-brand-gray">{project.short}</p>
                  <Button asChild className="mt-6 rounded-full bg-brand-red px-6 text-primary-foreground shadow-none hover:bg-brand-petrol">
                    <Link to="/projetos/$slug" params={{ slug: project.slug }}>Conheça o projeto <ChevronRight aria-hidden="true" /></Link>
                  </Button>
                </div>
                <div className={`relative mx-auto w-full max-w-[390px] ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="aspect-square overflow-hidden rounded-full bg-brand-soft">
                    <img src={project.image} alt={`Atividade do projeto ${project.name}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" loading="lazy" />
                  </div>
                  <ArcThick color={index % 2 === 0 ? "#00384C" : "#ED1C24"} className="absolute -left-6 -top-5 w-28 transition-transform duration-500 group-hover:-rotate-6" from={105} to={265} />
                  <HatchedCircle size={82} color="#08B9E6" className="absolute -bottom-4 left-0 opacity-65" />
                  <Triangle color="#FFB400" size={42} className="absolute right-1 top-2" rotate={18 + index * 8} />
                </div>
              </article>
            ))}
          </div>

          <nav aria-label="Paginação de projetos" className="mx-auto mt-10 flex w-fit max-w-full items-center gap-1 rounded-full border border-brand-petrol/10 bg-background/55 px-2 py-1.5 shadow-sm backdrop-blur-md">
            <Button type="button" variant="ghost" size="icon" onClick={() => selectPage(page - 1)} disabled={page === 1} className="size-8 rounded-full text-brand-petrol transition-colors hover:bg-brand-cyan/10 hover:text-brand-petrol disabled:opacity-30" aria-label="Página anterior"><ChevronLeft className="size-4" aria-hidden="true" /></Button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
              <Button key={pageNumber} type="button" variant="ghost" size="icon" onClick={() => selectPage(pageNumber)} aria-current={pageNumber === page ? "page" : undefined} aria-label={`Ir para a página ${pageNumber}`} className={`size-8 rounded-full text-xs font-bold transition-colors ${pageNumber === page ? "bg-brand-red text-primary-foreground hover:bg-brand-red hover:text-primary-foreground" : "text-brand-petrol hover:bg-brand-cyan/10 hover:text-brand-petrol"}`}>
                {String(pageNumber).padStart(2, "0")}
              </Button>
            ))}
            <Button type="button" variant="ghost" size="icon" onClick={() => selectPage(page + 1)} disabled={page === pageCount} className="size-8 rounded-full text-brand-petrol transition-colors hover:bg-brand-cyan/10 hover:text-brand-petrol disabled:opacity-30" aria-label="Próxima página"><ChevronRight className="size-4" aria-hidden="true" /></Button>
          </nav>
        </div>
      </section>

      <FinalCampaignCTA eyebrow="Continue explorando" title="Cada projeto é uma forma de transformar participação em experiência." text="Conheça outras iniciativas da Maggu ou acompanhe a agenda para descobrir o que está acontecendo agora." primary={{ label: "Explorar o Ecossistema", to: "/ecossistema" }} secondary={{ label: "Ver Agenda", to: "/agenda" }} image="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1920&q=80" variant="right" />
    </>
  );
}
