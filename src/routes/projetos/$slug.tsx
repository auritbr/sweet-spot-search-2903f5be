import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, HatchedCircle, BrushStroke, Triangle } from "@/components/Shapes";
import { projects } from "@/data/site";

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

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();

  const gallery = [
    p.image,
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
  ];
  const [lb, setLb] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<Set<number>>(new Set([0]));
  const toggleFaq = (i: number) =>
    setOpenFaq((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });

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

  const cards = [
    { t: "Para quem é", d: p.audience + " interessados em ampliar sua experiência com o teatro e as artes cênicas.", bg: "#00384C", text: "#fff", tag: "01", shape: "yellowCircle" },
    { t: "Como participar", d: "Inscrições abertas por meio do formulário disponível no site ou presencialmente na sede.", bg: "#FFB400", text: "#00384C", tag: "02", shape: "arrow" },
    { t: "O que o projeto oferece", d: p.activities.slice(0, 3).join(" · "), bg: "#ED1C24", text: "#fff", tag: "03", shape: "cyanShapes" },
    { t: "Recursos de acessibilidade", d: "Espaço acessível, materiais adaptados sob solicitação e mediação inclusiva durante as atividades.", bg: "#fff", text: "#00384C", tag: "04", shape: "borderCyan", border: "#08B9E6" },
    { t: "Frequência", d: "Encontros semanais das 19h às 21h. Ciclos formativos com duração de um semestre.", bg: "#F1F1F0", text: "#00384C", tag: "05", shape: "orangeArc" },
    { t: "Materiais necessários", d: "Roupas confortáveis e caderno para anotações. Demais materiais são disponibilizados pela equipe.", bg: "#FF7A00", text: "#00384C", tag: "06", shape: "dots" },
  ];

  const faqs = [
    { q: "Quem pode participar?", a: `O projeto atende ${p.audience.toLowerCase()}. Não é necessário possuir experiência anterior com teatro.` },
    { q: "É necessário ter experiência anterior?", a: "Não. O projeto acolhe iniciantes e pessoas com alguma experiência, respeitando o ritmo individual." },
    { q: "As atividades são gratuitas?", a: "Sim. Todas as atividades do projeto são gratuitas e abertas ao público inscrito." },
    { q: "Como são realizadas as inscrições?", a: "As inscrições acontecem por meio do formulário disponível na página de contato ou presencialmente, conforme o calendário divulgado." },
    { q: "Existe limite de vagas?", a: "Sim. As vagas são limitadas por turma para garantir a qualidade da formação e o acompanhamento dos participantes." },
    { q: "Quais materiais são necessários?", a: "Recomendamos roupas confortáveis e caderno para anotações. Materiais específicos das oficinas são disponibilizados pela equipe." },
    { q: "Crianças e adolescentes precisam de autorização?", a: "Sim. É necessária autorização por escrito do responsável legal para a participação de menores de idade." },
    { q: "O projeto oferece certificado?", a: "Sim, para participantes com frequência mínima em ciclos formativos completos." },
    { q: "O espaço possui recursos de acessibilidade?", a: "O espaço é acessível e oferecemos recursos adicionais mediante solicitação prévia." },
    { q: "Como entrar em contato com a organização?", a: "Pela página de contato do site, por telefone, WhatsApp ou e-mail." },
  ];

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
            Atendemos {p.audience.toLowerCase()} em {p.location.toLowerCase()}, com ciclos formativos regulares que combinam prática, criação e apresentação pública.
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
              {p.specifics.map((s: string) => (
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
            {p.activities.map((a: string, i: number) => (
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

      {/* 8 — O projeto em detalhes (novos cards) */}
      <Section className="bg-white overflow-hidden">
        <div className="container-x">
          <SectionTitle eyebrow="Detalhes" title="O projeto em detalhes" text="Conheça os principais aspectos que orientam a realização das atividades." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((c) => (
              <article
                key={c.t}
                className="group relative overflow-hidden rounded-3xl p-6 md:p-7 min-h-[220px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
                style={{ backgroundColor: c.bg, color: c.text, borderLeft: c.border ? `10px solid ${c.border}` : undefined }}
              >
                <ProjetoCardShape kind={c.shape} />
                <div className="relative z-10">
                  <span className="text-[11px] uppercase tracking-widest opacity-70" style={{ fontWeight: 700 }}>{c.tag}</span>
                  <h3 className="mt-1" style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)", fontWeight: 700, lineHeight: 1.2 }}>{c.t}</h3>
                  <p className="mt-3 text-sm opacity-95" style={{ lineHeight: 1.6 }}>{c.d}</p>
                </div>
                <span className="relative z-10 mt-4 inline-block h-[3px] w-8 bg-current opacity-40 group-hover:w-16 transition-all" />
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 9 — FAQ */}
      <Section className="bg-brand-soft">
        <div className="container-x max-w-3xl">
          <SectionTitle eyebrow="Perguntas frequentes" title="Perguntas frequentes" text="Encontre respostas para as principais dúvidas sobre a participação e o funcionamento do projeto." />
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq.has(i);
              const colors = ["#ED1C24", "#08B9E6", "#FFB400", "#00384C", "#FF7A00"];
              const accent = colors[i % colors.length];
              return (
                <div key={i} className="bg-white rounded-2xl overflow-hidden" style={{ borderLeft: `6px solid ${accent}` }}>
                  <button
                    onClick={() => toggleFaq(i)}
                    aria-expanded={open}
                    aria-controls={`faq-${i}`}
                    className="w-full flex items-center gap-4 px-5 md:px-6 py-4 md:py-5 text-left"
                  >
                    <span className="text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: accent, color: "#fff", fontWeight: 700 }}>{i + 1}</span>
                    <span className="flex-1 text-brand-ink" style={{ fontSize: "clamp(0.98rem, 1.15vw, 1.05rem)", fontWeight: 600, lineHeight: 1.35 }}>{f.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-ink shrink-0 transition-transform" style={{ transform: open ? "rotate(180deg)" : "none" }}><path d="M6 9l6 6 6-6" /></svg>
                  </button>
                  <div
                    id={`faq-${i}`}
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-5 pt-0 text-sm text-brand-gray" style={{ lineHeight: 1.7 }}>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 10 — Galeria */}
      <Section className="bg-white">
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

      {/* 11 — Chamada final */}
      <section className="relative py-14 md:py-16 overflow-hidden" style={{ backgroundColor: "#00384C" }}>
        <ArcThick color="#FFB400" className="absolute -left-4 top-8 w-32 opacity-80" from={200} to={340} />
        <HatchedCircle size={160} color="#ED1C24" className="absolute -right-10 -bottom-10 opacity-30" />
        <div className="container-x text-center max-w-2xl mx-auto text-white">
          <h2 style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)", lineHeight: 1.15, fontWeight: 700, color: "#fff" }}>Quer participar deste projeto?</h2>
          <p className="mt-4 text-white/90" style={{ lineHeight: 1.7 }}>Entre em contato conosco para saber mais sobre inscrições, calendário e como fazer parte.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/contato" className="px-6 py-3 rounded-full bg-brand-red text-white text-sm" style={{ fontWeight: 600 }}>Quero participar</Link>
            <Link to="/projetos" className="px-6 py-3 rounded-full border-2 border-white text-white text-sm hover:bg-white/10" style={{ fontWeight: 600 }}>Ver outros projetos</Link>
          </div>
        </div>
      </section>

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

function ProjetoCardShape({ kind }: { kind: string }) {
  switch (kind) {
    case "yellowCircle":
      return (<><div className="absolute -top-6 -right-6 w-28 h-28 rounded-full" style={{ backgroundColor: "#FFB400" }} /><div className="absolute -top-2 -right-2 w-14 h-14 rounded-full border-4 border-white/40" /></>);
    case "arrow":
      return (<svg className="absolute top-4 right-4 w-20 h-16" viewBox="0 0 80 60" aria-hidden><path d="M4 30 H60" stroke="#ED1C24" strokeWidth="6" strokeLinecap="round"/><path d="M46 12 L74 30 L46 48" stroke="#ED1C24" strokeWidth="6" fill="none" strokeLinejoin="round" strokeLinecap="round"/></svg>);
    case "cyanShapes":
      return (<><div className="absolute -top-4 -right-4 w-24 h-24 rounded-full" style={{ backgroundColor: "#08B9E6" }} /><div className="absolute top-8 right-10 w-14 h-14 rounded-full" style={{ backgroundColor: "#FFB400" }} /></>);
    case "borderCyan":
      return (<><div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full" style={{ backgroundColor: "#08B9E6", opacity: 0.18 }} /><Triangle color="#08B9E6" size={36} className="absolute top-4 right-4" rotate={20} /></>);
    case "orangeArc":
      return (<ArcThick color="#FF7A00" className="absolute -top-4 right-2 w-28 opacity-90" from={200} to={340} />);
    case "dots":
      return (<div className="absolute top-4 right-4 grid grid-cols-3 gap-1" aria-hidden>{Array.from({length:9}).map((_,i)=>(<span key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: i%2 ? "#00384C" : "#fff" }} />))}</div>);
    default: return null;
  }
}
