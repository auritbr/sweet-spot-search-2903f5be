import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/PageHero";
import { HatchedCircle, ArcThick, BrushStroke, Triangle, QuarterCircle } from "@/components/Shapes";
import { timeline } from "@/data/site";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Cena Viva" },
      { name: "description", content: "Conheça o Ponto de Cultura Cena Viva: história, missão, visão, valores e atuação." },
      { property: "og:title", content: "Quem Somos — Cena Viva" },
      { property: "og:description", content: "História, missão, visão e valores." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <>
      <PageHero
        title="Quem Somos"
        subtitle="Um Ponto de Cultura dedicado ao teatro, à formação artística e à participação comunitária."
        image="https://images.unsplash.com/photo-1519683384663-1de1a1e3f6a7?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Quem Somos" }]}
        accent="cyan"
        brush="#FFB400"
      />

      {/* Apresentação institucional */}
      <section id="apresentacao" className="relative bg-white py-16 md:py-20 overflow-hidden">
        <ArcThick color="#FFB400" className="absolute -top-6 -left-6 w-32" from={300} to={80} />
        <HatchedCircle size={120} color="#ED1C24" className="absolute top-16 right-8 opacity-50 hidden md:block" />
        <Triangle color="#FFB400" size={44} className="absolute top-40 left-20 hidden md:block" rotate={20} />

        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.22em] text-brand-red text-xs mb-3 text-center" style={{ fontWeight: 600 }}>Apresentação</p>
            <h2 className="text-center text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>Uma trajetória construída em coletivo</h2>
            <BrushStroke color="#FFB400" className="mx-auto mt-4 w-32" />
            <p className="mt-8 text-brand-gray" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.75 }}>
              O Ponto de Cultura Cena Viva nasceu do encontro entre artistas, arte-educadores e moradores que enxergaram no teatro uma resposta concreta à ausência de espaços culturais qualificados no território. Começamos com uma pequena oficina em espaço cedido, com poucos recursos e muito desejo de compartilhar experiências.
            </p>
            <p className="mt-6 text-brand-red text-center" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)", lineHeight: 1.35, fontWeight: 600 }}>
              O teatro deixou de ser apenas linguagem artística: passou a ser lugar de encontro, escuta e transformação da nossa comunidade.
            </p>
            <p className="mt-6 text-brand-gray" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.75 }}>
              Ao longo dos anos, ampliamos ações, formamos novas turmas, apresentamos espetáculos, ocupamos espaços públicos e construímos parcerias com escolas, universidades e coletivos. Ser reconhecido como Ponto de Cultura fortaleceu a nossa continuidade e permitiu estruturar programas de formação, criação e circulação.
            </p>
          </div>
        </div>
      </section>

      {/* História / Marco */}
      <Section id="nossa-historia" className="bg-brand-soft overflow-hidden scroll-mt-24">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.22em] text-brand-red text-xs mb-3" style={{ fontWeight: 600 }}>Nossa história</p>
            <h2 className="text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.5rem)", lineHeight: 1.15, fontWeight: 700 }}>Do coletivo ao Ponto de Cultura</h2>
            <BrushStroke color="#FFB400" className="mt-4 w-28" />
            <p className="mt-5 text-brand-gray" style={{ lineHeight: 1.7 }}>
              A conquista da certificação como Ponto de Cultura consolidou uma trajetória iniciada anos antes por um grupo de artistas comprometidos com a comunidade. Esse marco permitiu ampliar programas, formalizar processos e construir parcerias institucionais que sustentam a atuação atual.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square w-full max-w-sm mx-auto rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80" alt="Grupo em ensaio" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <ArcThick color="#ED1C24" className="absolute -top-6 -left-6 w-32" from={100} to={260} />
            <ArcThick color="#00384C" className="absolute -bottom-4 -right-4 w-28" from={300} to={80} />
            <HatchedCircle size={110} color="#08B9E6" className="absolute -bottom-10 left-4 opacity-40" />
          </div>
        </div>
      </Section>

      {/* Timeline — desktop grid, mobile vertical */}
      <Section className="bg-white overflow-hidden">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="uppercase tracking-[0.22em] text-brand-red text-xs mb-3" style={{ fontWeight: 600 }}>Trajetória</p>
            <h2 className="text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.5rem)", lineHeight: 1.15, fontWeight: 700 }}>Linha do tempo</h2>
            <BrushStroke color="#FFB400" className="mx-auto mt-4 w-24" />
          </div>

          {/* Desktop grid — each marker in its own column, line at vertical center */}
          <div className="hidden md:block relative px-4">
            <div className="relative grid grid-cols-6 gap-4" style={{ minHeight: 420 }}>
              {/* horizontal line at vertical center, behind everything (z-1) */}
              <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-[3px] bg-brand-red/30 rounded-full" style={{ zIndex: 1 }} />
              {timeline.map((t, i) => {
                const above = i % 2 === 0;
                const dotColor = ["#ED1C24", "#08B9E6", "#FFB400", "#00384C", "#FF7A00", "#ED1C24"][i];
                return (
                  <div key={t.year} className="relative flex flex-col items-center" style={{ minHeight: 420 }}>
                    {above ? (
                      <>
                        {/* content above */}
                        <div className="absolute left-0 right-0 bottom-1/2 flex flex-col items-center px-1 pb-[54px] text-center bg-white/0" style={{ zIndex: 4 }}>
                          <p className="text-brand-red" style={{ fontSize: "1.4rem", fontWeight: 700, lineHeight: 1 }}>{t.year}</p>
                          <p className="mt-2 text-brand-ink text-sm" style={{ fontWeight: 600 }}>{t.title}</p>
                          <p className="mt-1 text-xs text-brand-gray leading-snug">{t.text}</p>
                        </div>
                        {/* stem */}
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-1/2 w-[2px] h-[18px] bg-brand-red/40 mb-1" style={{ zIndex: 2 }} />
                      </>
                    ) : (
                      <>
                        {/* stem below dot */}
                        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 w-[2px] h-[18px] bg-brand-red/40 mt-1" style={{ zIndex: 2 }} />
                        {/* content below */}
                        <div className="absolute left-0 right-0 top-1/2 flex flex-col items-center px-1 pt-[54px] text-center" style={{ zIndex: 4 }}>
                          <p className="text-brand-red" style={{ fontSize: "1.4rem", fontWeight: 700, lineHeight: 1 }}>{t.year}</p>
                          <p className="mt-2 text-brand-ink text-sm" style={{ fontWeight: 600 }}>{t.title}</p>
                          <p className="mt-1 text-xs text-brand-gray leading-snug">{t.text}</p>
                        </div>
                      </>
                    )}
                    {/* dot on the line */}
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ring-4 ring-white" style={{ backgroundColor: dotColor, zIndex: 3 }} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile vertical */}
          <ol className="md:hidden relative border-l-2 border-brand-red/30 pl-6 space-y-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-brand-red ring-4 ring-white" />
                <p className="text-brand-red" style={{ fontSize: "1.4rem", fontWeight: 700, lineHeight: 1 }}>{t.year}</p>
                <p className="mt-1 text-brand-ink" style={{ fontWeight: 600 }}>{t.title}</p>
                <p className="mt-1 text-sm text-brand-gray">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Missão, Visão e Valores — três composições próprias */}
      <section id="missao-visao-valores" className="bg-white py-12 md:py-16 scroll-mt-24">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="uppercase tracking-[0.22em] text-brand-red text-xs mb-3" style={{ fontWeight: 600 }}>Princípios</p>
            <h2 className="text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.5rem)", lineHeight: 1.15, fontWeight: 700 }}>Missão, visão e valores</h2>
            <BrushStroke color="#FFB400" className="mx-auto mt-4 w-24" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* MISSÃO */}
            <article className="relative overflow-hidden rounded-3xl p-7 md:p-8 min-h-[380px] flex flex-col" style={{ backgroundColor: "#00384C", color: "#fff" }}>
              <QuarterCircle corner="tl" color="#ED1C24" className="absolute -top-2 -left-2 w-20 opacity-95" />
              <HatchedCircle size={110} color="#FFB400" className="absolute top-4 -right-8 opacity-30" />
              <div className="relative z-10">
                <p className="uppercase tracking-[0.22em] text-brand-gold text-xs" style={{ fontWeight: 700 }}>Missão</p>
                <h3 className="mt-2" style={{ fontSize: "1.5rem", lineHeight: 1.15, fontWeight: 700, color: "#fff" }}>Para que existimos</h3>
                <BrushStroke color="#FFB400" className="mt-3 w-16" />
                <p className="mt-5 text-white/95" style={{ fontSize: "0.98rem", lineHeight: 1.65 }}>
                  Ampliar o acesso ao teatro e às artes cênicas, promovendo experiências de formação, expressão, convivência e participação cultural.
                </p>
              </div>
              <ArcThick color="#FFB400" className="absolute -bottom-2 -left-2 w-24 opacity-90" from={300} to={80} />
            </article>

            {/* VISÃO */}
            <article className="relative overflow-hidden rounded-3xl p-7 md:p-8 min-h-[380px] flex flex-col" style={{ backgroundColor: "#FFB400", color: "#00384C" }}>
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full border-[10px] border-white/50" aria-hidden />
              <div className="absolute top-4 right-6 w-16 h-16 rounded-full" style={{ backgroundColor: "#ED1C24" }} aria-hidden />
              <Triangle color="#00384C" size={40} className="absolute bottom-8 right-8" rotate={-15} />
              <div className="relative z-10">
                <p className="uppercase tracking-[0.22em] text-brand-red text-xs" style={{ fontWeight: 700 }}>Visão</p>
                <h3 className="mt-2" style={{ fontSize: "1.5rem", lineHeight: 1.15, fontWeight: 700 }}>Onde queremos chegar</h3>
                <BrushStroke color="#ED1C24" className="mt-3 w-16" />
                <p className="mt-5" style={{ fontSize: "0.98rem", lineHeight: 1.65, color: "#00384C" }}>
                  Consolidar-se como um espaço cultural de referência, capaz de formar pessoas, fortalecer o território e aproximar diferentes públicos da produção artística.
                </p>
              </div>
            </article>

            {/* VALORES */}
            <article className="relative overflow-hidden rounded-3xl p-7 md:p-8 min-h-[380px] flex flex-col" style={{ backgroundColor: "#ED1C24", color: "#fff" }}>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full" style={{ backgroundColor: "#08B9E6" }} aria-hidden />
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full border-[6px] border-brand-gold/70" aria-hidden />
              <HatchedCircle size={90} color="#00384C" className="absolute bottom-8 right-4 opacity-40" />
              <div className="relative z-10">
                <p className="uppercase tracking-[0.22em] text-brand-gold text-xs" style={{ fontWeight: 700 }}>Valores</p>
                <h3 className="mt-2" style={{ fontSize: "1.5rem", lineHeight: 1.15, fontWeight: 700, color: "#FFB400" }}>Como agimos</h3>
                <BrushStroke color="#FFB400" className="mt-3 w-16" />
                <p className="mt-5 text-white/95" style={{ fontSize: "0.98rem", lineHeight: 1.65 }}>
                  Ética, diversidade, respeito, transparência, criatividade, inclusão, participação comunitária, escuta e compromisso com a cultura.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Frentes de atuação — cards heterogêneos */}
      <Section id="atuacao" className="bg-brand-soft scroll-mt-24">
        <div className="container-x">
          <SectionTitle eyebrow="Atuação" title="Nossas frentes de trabalho" text="Ações continuadas que se articulam entre formação, criação, circulação e memória." />
          <FrentesGrid />
        </div>
      </Section>

      {/* Chamada final */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-white">
        <ArcThick color="#FFB400" className="absolute -top-4 left-8 w-32 opacity-80" from={200} to={340} />
        <HatchedCircle size={140} color="#08B9E6" className="absolute -bottom-10 -right-10 opacity-30" />
        <div className="container-x text-center max-w-2xl mx-auto">
          <h2 className="text-brand-ink" style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)", lineHeight: 1.2, fontWeight: 700 }}>
            Faça parte da nossa história
          </h2>
          <p className="mt-4 text-brand-gray" style={{ lineHeight: 1.7 }}>
            Participe das oficinas, acompanhe as apresentações ou apoie o Ponto de Cultura. A cultura se sustenta com muitas mãos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/projetos" className="px-6 py-3 rounded-full bg-brand-red text-white text-sm" style={{ fontWeight: 600 }}>Ver projetos</Link>
            <Link to="/contato" className="px-6 py-3 rounded-full border-2 border-brand-ink text-brand-ink text-sm hover:bg-brand-soft" style={{ fontWeight: 600 }}>Entre em contato</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FrentesGrid() {
  const cards = [
    { t: "Formação teatral", d: "Oficinas continuadas em interpretação, corpo e voz.", bg: "#08B9E6", text: "#00384C", shape: "spot" },
    { t: "Oficinas culturais", d: "Vivências abertas à comunidade em diferentes linguagens.", bg: "#ED1C24", text: "#fff", shape: "layers" },
    { t: "Criação de espetáculos", d: "Processos colaborativos de dramaturgia e cena.", bg: "#FFB400", text: "#00384C", shape: "curtain" },
    { t: "Circulação artística", d: "Apresentações em praças, escolas e centros comunitários.", bg: "#00384C", text: "#fff", shape: "path" },
    { t: "Ações comunitárias", d: "Iniciativas em diálogo com lideranças locais.", bg: "#fff", text: "#00384C", shape: "people", border: "#ED1C24" },
    { t: "Formação de público", d: "Mediação cultural para crianças, jovens e famílias.", bg: "#FF7A00", text: "#00384C", shape: "audience" },
    { t: "Memória e registro cultural", d: "Registros, acervos e narrativas do território — preservando a memória viva do nosso trabalho.", bg: "#F1F1F0", text: "#00384C", shape: "archive", wide: true, image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
      {cards.map((c) => (
        <article
          key={c.t}
          className={`group relative overflow-hidden rounded-3xl p-6 md:p-7 min-h-[220px] flex flex-col justify-end transition-transform duration-300 hover:-translate-y-1 ${c.wide ? "sm:col-span-2 lg:col-span-3" : ""}`}
          style={{ backgroundColor: c.bg, color: c.text, borderLeft: c.border ? `10px solid ${c.border}` : undefined }}
        >
          <FrenteShape kind={c.shape} />
          {c.wide && c.image && (
            <img src={c.image} alt="" loading="lazy" className="absolute top-4 right-4 w-40 h-28 object-cover rounded-2xl hidden md:block" />
          )}
          <div className="relative z-10 max-w-[36ch]">
            <h3 style={{ fontSize: "clamp(1.05rem, 1.35vw, 1.2rem)", fontWeight: 700, lineHeight: 1.2 }}>{c.t}</h3>
            <p className="mt-2 text-sm opacity-90" style={{ lineHeight: 1.55 }}>{c.d}</p>
            <span className="mt-3 inline-block h-[3px] w-8 bg-current opacity-40 group-hover:w-16 transition-all" />
          </div>
        </article>
      ))}
    </div>
  );
}

function FrenteShape({ kind }: { kind: string }) {
  switch (kind) {
    case "spot":
      return (<><div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/40 group-hover:translate-x-1 transition" /><div className="absolute -top-2 -right-2 w-16 h-16 rounded-full" style={{ backgroundColor: "#FFB400" }} /></>);
    case "layers":
      return (<><div className="absolute top-4 right-4 w-20 h-20 rounded-2xl rotate-6" style={{ backgroundColor: "#FFB400" }} /><div className="absolute top-8 right-10 w-20 h-20 rounded-2xl -rotate-3" style={{ backgroundColor: "#08B9E6", opacity: 0.85 }} /></>);
    case "curtain":
      return (<><div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1" aria-hidden>{Array.from({length:9}).map((_,i)=>(<span key={i} className="block w-2 h-16" style={{ backgroundColor: i%2 ? "#ED1C24" : "#00384C", opacity:0.8 }} />))}</div></>);
    case "path":
      return (<svg className="absolute top-3 right-3 w-28 h-16" viewBox="0 0 120 60" aria-hidden><path d="M4 40 Q30 4 60 30 T116 20" fill="none" stroke="#FFB400" strokeWidth="4" strokeLinecap="round"/><circle cx="4" cy="40" r="5" fill="#08B9E6"/><circle cx="116" cy="20" r="5" fill="#ED1C24"/></svg>);
    case "people":
      return (<div className="absolute top-4 right-4 flex gap-1 items-end" aria-hidden><span className="w-6 h-6 rounded-full bg-brand-red" /><span className="w-8 h-8 rounded-full bg-brand-cyan" /><span className="w-6 h-6 rounded-full bg-brand-gold" /></div>);
    case "audience":
      return (<svg className="absolute top-3 right-3 w-24 h-16" viewBox="0 0 120 60" aria-hidden><ellipse cx="60" cy="45" rx="55" ry="12" fill="#00384C" opacity="0.15"/>{Array.from({length:9}).map((_,i)=>(<circle key={i} cx={12+i*12} cy={35 - (i%3)*4} r="5" fill="#00384C" />))}</svg>);
    case "archive":
      return (<><div className="absolute top-4 left-4 flex gap-1 md:hidden">{Array.from({length:5}).map((_,i)=>(<span key={i} className="block w-3 h-10 rounded-sm" style={{ backgroundColor: ["#ED1C24","#08B9E6","#FFB400","#00384C","#FF7A00"][i] }} />))}</div><ArcThick color="#FF7A00" className="absolute -bottom-4 -left-4 w-24 opacity-80" from={300} to={80} /></>);
    default: return null;
  }
}
