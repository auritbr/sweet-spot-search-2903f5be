import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, HatchedCircle, BrushStroke, Triangle } from "@/components/Shapes";
import { projects, partners } from "@/data/site";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { project: p };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.name} — Cena Viva` : "Projeto não encontrado" },
        { name: "description", content: p?.short ?? "Projeto do Ponto de Cultura Cena Viva." },
        { property: "og:title", content: p?.name ?? "Projeto" },
        { property: "og:description", content: p?.short ?? "" },
        ...(p ? [{ property: "og:image" as const, content: p.image }] : []),
      ],
      links: p ? [{ rel: "canonical", href: `/projetos/${p.slug}` }] : [],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-brand-ink" style={{ fontSize: "2rem", fontWeight: 700 }}>Projeto não encontrado</h1>
      <Link to="/projetos" className="mt-6 inline-flex px-5 py-3 rounded-full bg-brand-red text-white" style={{ fontWeight: 600 }}>Ver projetos</Link>
    </div>
  ),
});

const stages = ["Mobilização", "Inscrições", "Formação", "Ensaios", "Criação", "Apresentação", "Avaliação"];

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();

  // gallery lightbox
  const gallery = [p.image, "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80", "https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&w=1600&q=80", "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1600&q=80", "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80", "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80"];
  const [lb, setLb] = useState<number | null>(null);

  useEffect(() => {
    if (lb === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowRight") setLb((v) => v === null ? v : (v + 1) % gallery.length);
      if (e.key === "ArrowLeft") setLb((v) => v === null ? v : (v - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lb, gallery.length]);

  return (
    <>
      {/* 1 — Hero */}
      <PageHero
        title={p.name}
        subtitle={p.short}
        image={p.image}
        accent={p.color as any}
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Projetos", to: "/projetos" }, { label: p.name }]}
      />

      {/* 2 — Apresentação */}
      <Section className="bg-white overflow-hidden">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square w-full max-w-sm mx-auto rounded-full overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <ArcThick color="#ED1C24" className="absolute -top-6 -left-6 w-32" from={100} to={260} />
            <ArcThick color="#08B9E6" className="absolute -bottom-4 -right-4 w-28" from={300} to={80} />
            <HatchedCircle size={90} color="#FFB400" className="absolute -bottom-6 left-8 opacity-50" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-white text-[10px] uppercase tracking-widest bg-brand-red" style={{ fontWeight: 700 }}>{p.status}</span>
            <h2 className="mt-3" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.5rem)", lineHeight: 1.15, fontWeight: 700, color: `var(--${p.color})` }}>{p.name}</h2>
            <BrushStroke color="#FFB400" className="mt-4 w-32" />
            <p className="mt-5 text-brand-gray" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.7, maxWidth: "62ch" }}>{p.short}</p>
          </div>
        </div>
      </Section>

      {/* 3 — Informações principais */}
      <section className="bg-brand-soft py-10">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { l: "Público", v: p.audience },
            { l: "Faixa etária", v: p.audience },
            { l: "Período", v: p.period },
            { l: "Local", v: p.location },
          ].map((b, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 border border-black/5">
              <p className="text-[10px] uppercase tracking-widest text-brand-red" style={{ fontWeight: 700 }}>{b.l}</p>
              <p className="text-sm text-brand-ink mt-1" style={{ fontWeight: 600 }}>{b.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 — Sobre */}
      <Section className="bg-white">
        <div className="container-x max-w-3xl">
          <SectionTitle eyebrow="Sobre o projeto" title="Origem, contexto e público" />
          <p className="text-brand-gray" style={{ lineHeight: 1.7 }}>
            {p.short} Nasceu da escuta ativa do território e da constatação de que o teatro é uma linguagem potente para formar público, ampliar o repertório cultural e fortalecer laços comunitários.
          </p>
          <p className="mt-4 text-brand-gray" style={{ lineHeight: 1.7 }}>
            Atendemos {p.audience.toLowerCase()} em {p.location.toLowerCase()}, com ciclos formativos regulares que combinam prática, criação e apresentação pública. A proposta se justifica pela demanda por espaços culturais qualificados e pela vocação artística do território.
          </p>
        </div>
      </Section>

      {/* 5 — Objetivos */}
      <Section className="bg-brand-soft">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div>
            <SectionTitle eyebrow="Objetivo geral" title="O que buscamos" />
            <p className="text-brand-gray" style={{ lineHeight: 1.7 }}>{p.objective}</p>
          </div>
          <div>
            <SectionTitle eyebrow="Objetivos específicos" title="Como avançamos" />
            <ul className="space-y-2 text-brand-gray" style={{ lineHeight: 1.6 }}>
              {p.specifics.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 6 — Atividades */}
      <Section className="bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="Programação" title="Atividades" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.activities.map((a, i) => (
              <div key={a} className="rounded-2xl border border-black/5 p-5">
                <p className="text-[10px] uppercase tracking-widest text-brand-red" style={{ fontWeight: 700 }}>Atividade {i + 1}</p>
                <h3 className="mt-1 text-brand-ink" style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)", lineHeight: 1.25, fontWeight: 600 }}>{a}</h3>
                <p className="mt-2 text-sm text-brand-gray">Encontros semanais com condução de arte-educadores da equipe.</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-brand-gray">
                  <span className="px-2 py-1 rounded-full bg-brand-soft">Semanal</span>
                  <span className="px-2 py-1 rounded-full bg-brand-soft">19h — 21h</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7 — Metodologia */}
      <Section className="bg-brand-soft overflow-hidden">
        <div className="container-x grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle eyebrow="Como fazemos" title="Metodologia" />
            <p className="text-brand-gray" style={{ lineHeight: 1.7 }}>{p.methodology}</p>
            <p className="mt-4 text-brand-gray" style={{ lineHeight: 1.7 }}>
              Trabalhamos em ciclos progressivos: sensibilização, experimentação, criação coletiva e apresentação pública. Registros e avaliações contínuas orientam ajustes ao longo do processo.
            </p>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&w=1200&q=80" alt="" className="rounded-3xl aspect-[4/3] w-full object-cover" loading="lazy" />
            <Triangle color="#FFB400" size={54} className="absolute -top-6 -right-4" rotate={20} />
          </div>
        </div>
      </Section>

      {/* 8 — Etapas */}
      <Section className="bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="Percurso" title="Etapas do projeto" />
          <ol className="relative flex flex-wrap gap-3 md:gap-0 md:items-stretch">
            {stages.map((s, i) => (
              <li key={s} className="flex-1 min-w-[140px] relative">
                <div className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center text-sm shrink-0" style={{ fontWeight: 700 }}>{i + 1}</span>
                  {i < stages.length - 1 && <span className="hidden md:block flex-1 h-0.5 bg-brand-red/30" />}
                </div>
                <p className="mt-2 text-sm text-brand-ink" style={{ fontWeight: 600 }}>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 9 — Resultados */}
      <section className="relative py-14 md:py-20 overflow-hidden" style={{ backgroundColor: "#00384C" }}>
        <div className="container-x text-white">
          <p className="uppercase tracking-[0.22em] text-brand-gold text-xs mb-3" style={{ fontWeight: 600 }}>Impacto</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.5rem)", lineHeight: 1.15, fontWeight: 700 }}>Resultados e impacto</h2>
          <BrushStroke color="#ED1C24" className="mt-4 w-32" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {p.results.concat(["território atendido"]).slice(0, 4).map((r, i) => (
              <div key={i} className="border-l-2 border-brand-gold pl-4">
                <p className="text-brand-gold" style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", fontWeight: 700, lineHeight: 1 }}>{r.match(/\d[\d.]*/)?.[0] ?? "+"}</p>
                <p className="text-white/85 text-sm mt-2">{r.replace(/^\d[\d.]*\s?/, "")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Equipe */}
      <Section className="bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="Realização" title="Equipe do projeto" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {p.team.map((role, i) => (
              <div key={role} className="rounded-2xl border border-black/5 p-4 text-center">
                <div className="w-14 h-14 rounded-full mx-auto bg-brand-soft flex items-center justify-center text-brand-red" style={{ fontWeight: 700 }}>{["A", "B", "C", "D", "E"][i % 5]}</div>
                <p className="mt-3 text-sm text-brand-ink" style={{ fontWeight: 600 }}>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 11 — Galeria */}
      <Section className="bg-brand-soft">
        <div className="container-x">
          <SectionTitle eyebrow="Registros" title="Galeria do projeto" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((src, i) => (
              <button key={i} onClick={() => setLb(i)} className="group relative aspect-square overflow-hidden rounded-2xl">
                <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* 12 — Parceiros */}
      <Section className="bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="Apoio" title="Parceiros" />
          <div className="flex flex-wrap gap-3">
            {partners.map((pp) => (
              <span key={pp} className="px-5 py-3 rounded-2xl bg-brand-soft text-brand-ink text-sm" style={{ fontWeight: 600 }}>{pp}</span>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/contato" className="inline-flex px-6 py-3 rounded-full bg-brand-red text-white text-sm" style={{ fontWeight: 600 }}>Quero participar</Link>
          </div>
        </div>
      </Section>

      {lb !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button aria-label="Fechar" onClick={() => setLb(null)} className="absolute top-4 right-4 text-white text-3xl">✕</button>
          <button aria-label="Anterior" onClick={() => setLb((v) => v === null ? v : (v - 1 + gallery.length) % gallery.length)} className="absolute left-4 md:left-8 text-white text-4xl">‹</button>
          <button aria-label="Próxima" onClick={() => setLb((v) => v === null ? v : (v + 1) % gallery.length)} className="absolute right-4 md:right-8 text-white text-4xl">›</button>
          <img src={gallery[lb]} alt="" className="max-w-6xl w-full max-h-[85vh] object-contain rounded-2xl" />
        </div>
      )}
    </>
  );
}
