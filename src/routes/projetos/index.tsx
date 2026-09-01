import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { HatchedCircle, ArcThick, BrushStroke, Triangle } from "@/components/Shapes";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Nossos Projetos — Cena Viva" },
      { name: "description", content: "Conheça os projetos culturais e formativos do Ponto de Cultura Cena Viva." },
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
const cardAccents = ["border-brand-red", "border-brand-cyan", "border-brand-gold"] as const;

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
        subtitle="Formação, criação e circulação cultural em três frentes complementares."
        image="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Projetos" }]}
        accent="gold"
        brush="#08B9E6"
      />

      {/* Intro */}
      <Section className="bg-white overflow-hidden">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <p className="uppercase tracking-[0.22em] text-brand-red text-xs mb-3" style={{ fontWeight: 600 }}>Programas</p>
            <h2 className="text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>
              Arte que constrói pessoas e territórios
            </h2>
            <BrushStroke color="#FFB400" className="mt-5 w-32" />
            <p className="mt-5 text-brand-gray" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.7, maxWidth: "62ch" }}>
              Nossos projetos articulam formação, criação e apresentação, com atenção às demandas do território e à participação ativa das comunidades.
            </p>
            <p className="mt-4 text-brand-gray" style={{ lineHeight: 1.7, maxWidth: "62ch" }}>
              Cada frente atende públicos específicos, com metodologias próprias e ações integradas às políticas culturais locais.
            </p>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-square w-full max-w-sm mx-auto rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1200&q=80" alt="Grupo em atividade" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <ArcThick color="#00384C" className="absolute -top-6 -left-6 w-32" from={100} to={260} />
            <ArcThick color="#ED1C24" className="absolute -bottom-4 -right-4 w-28" from={300} to={80} />
            <HatchedCircle size={90} color="#08B9E6" className="absolute -bottom-6 left-4 opacity-60" />
            <Triangle color="#FFB400" size={48} className="absolute top-4 -right-2" rotate={20} />
          </div>
        </div>
      </Section>

      <section ref={listStart} className="scroll-mt-24 overflow-hidden bg-brand-soft py-12 md:py-16" aria-labelledby="project-list-title">
        <div className="container-x relative">
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Iniciativas</p>
            <h2 id="project-list-title" className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>Projetos que dão forma ao Ecossistema Maggu</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <article key={project.slug} className={`flex min-h-full flex-col overflow-hidden rounded-md border-t-4 bg-background shadow-sm ${cardAccents[index % cardAccents.length]}`}>
                <div className="aspect-[16/10] overflow-hidden bg-brand-soft">
                  <img src={project.image} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-red">{project.category}</p>
                  <h3 className="mt-3 text-xl leading-snug text-brand-ink">{project.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-gray">{project.short}</p>
                  <Link to="/projetos/$slug" params={{ slug: project.slug }} className="mt-6 inline-flex w-fit rounded-full bg-brand-petrol px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-red">
                    Conhecer projeto
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <nav aria-label="Paginação de projetos" className="mx-auto mt-10 flex w-fit max-w-full items-center gap-1.5 rounded-xl border border-background/80 bg-background/65 p-2 shadow-sm backdrop-blur-md">
            <button type="button" onClick={() => selectPage(page - 1)} disabled={page === 1} className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-petrol transition hover:bg-background disabled:cursor-not-allowed disabled:opacity-35" aria-label="Página anterior">Anterior</button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
              <button key={pageNumber} type="button" onClick={() => selectPage(pageNumber)} aria-current={pageNumber === page ? "page" : undefined} className={`flex size-9 items-center justify-center rounded-lg text-sm font-bold transition ${pageNumber === page ? "bg-brand-red text-primary-foreground" : "text-brand-petrol hover:bg-background"}`}>
                {pageNumber}
              </button>
            ))}
            <button type="button" onClick={() => selectPage(page + 1)} disabled={page === pageCount} className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-petrol transition hover:bg-background disabled:cursor-not-allowed disabled:opacity-35" aria-label="Próxima página">Próximo</button>
          </nav>
          <p className="mt-3 text-center text-xs text-brand-gray" aria-live="polite">Página {page} de {pageCount}</p>
        </div>
      </section>
    </>
  );
}
