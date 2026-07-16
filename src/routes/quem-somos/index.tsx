import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/PageHero";
import { HatchedCircle, ArcThick, BrushStroke, Triangle, QuarterCircle } from "@/components/Shapes";
import { timeline, indicators } from "@/data/site";

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

const mvv = [
  { key: "Missão", text: "Promover o acesso ao teatro e às artes cênicas como instrumentos de formação, expressão, convivência e transformação social.", ill: <MissionIll /> },
  { key: "Visão", text: "Ser reconhecido como referência cultural no desenvolvimento de ações artísticas, educativas e comunitárias comprometidas com o território.", ill: <VisionIll /> },
  { key: "Valores", text: "Ética, respeito, diversidade, criatividade, transparência, inclusão, participação comunitária e compromisso com a cultura.", ill: <ValuesIll /> },
];

const atuacao = [
  { t: "Formação teatral", d: "Oficinas continuadas em interpretação, corpo e voz." },
  { t: "Oficinas culturais", d: "Vivências abertas à comunidade em diferentes linguagens." },
  { t: "Criação de espetáculos", d: "Processos colaborativos de dramaturgia e cena." },
  { t: "Circulação", d: "Apresentações em praças, escolas e centros comunitários." },
  { t: "Ações comunitárias", d: "Iniciativas em diálogo com lideranças locais." },
  { t: "Formação de público", d: "Mediação cultural para crianças, jovens e famílias." },
  { t: "Preservação da memória", d: "Registros, acervos e narrativas do território." },
];

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

      {/* Nossa história */}
      <section className="relative bg-white py-16 md:py-20 overflow-hidden">
        <ArcThick color="#FFB400" className="absolute -top-6 -left-6 w-32" from={300} to={80} />
        <HatchedCircle size={120} color="#ED1C24" className="absolute top-16 right-8 opacity-50 hidden md:block" />
        <Triangle color="#FFB400" size={44} className="absolute top-40 left-20 hidden md:block" rotate={20} />
        <ArcThick color="#FFB400" className="absolute -bottom-6 -right-6 w-32" from={100} to={260} />

        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.22em] text-brand-red text-xs mb-3 text-center" style={{ fontWeight: 600 }}>Nossa história</p>
            <h2 className="text-center text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>Uma trajetória construída em coletivo</h2>
            <BrushStroke color="#FFB400" className="mx-auto mt-4 w-32" />

            <p className="mt-8 text-brand-gray" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.75 }}>
              O Ponto de Cultura Cena Viva nasceu do encontro entre artistas, arte-educadores e moradores que enxergaram no teatro uma resposta concreta à ausência de espaços culturais qualificados no território. Começamos com uma pequena oficina em um espaço cedido, com poucos recursos e muito desejo de compartilhar experiências.
            </p>

            <p className="mt-6 text-brand-red text-center" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)", lineHeight: 1.35, fontWeight: 600 }}>
              O teatro deixou de ser apenas linguagem artística: passou a ser lugar de encontro, escuta e transformação da nossa comunidade.
            </p>

            <p className="mt-6 text-brand-gray" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.75 }}>
              Ao longo dos anos, ampliamos ações, formamos novas turmas, apresentamos espetáculos, ocupamos espaços públicos e construímos parcerias com escolas, universidades e coletivos. Ser reconhecido como Ponto de Cultura fortaleceu a nossa continuidade e permitiu estruturar programas de formação, criação e circulação que atendem crianças, jovens, famílias e artistas do território.
            </p>
          </div>
        </div>
      </section>

      {/* História em destaque */}
      <Section className="bg-brand-soft overflow-hidden">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.22em] text-brand-red text-xs mb-3" style={{ fontWeight: 600 }}>Marco</p>
            <h2 className="text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.5rem)", lineHeight: 1.15, fontWeight: 700 }}>Do coletivo ao Ponto de Cultura</h2>
            <BrushStroke color="#FFB400" className="mt-4 w-28" />
            <p className="mt-5 text-brand-gray" style={{ lineHeight: 1.7 }}>
              A conquista da certificação como Ponto de Cultura consolidou uma trajetória iniciada anos antes por um grupo pequeno de artistas comprometidos com a comunidade. Este marco permitiu ampliar programas, formalizar processos e construir parcerias institucionais que sustentam a atuação atual.
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

      {/* Timeline */}
      <Section className="bg-white overflow-hidden">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="uppercase tracking-[0.22em] text-brand-red text-xs mb-3" style={{ fontWeight: 600 }}>Trajetória</p>
            <h2 className="text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.5rem)", lineHeight: 1.15, fontWeight: 700 }}>Linha do tempo</h2>
            <BrushStroke color="#FFB400" className="mx-auto mt-4 w-24" />
          </div>

          {/* Desktop horizontal */}
          <div className="hidden md:block relative py-6">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-brand-red/30" />
            <div className="relative grid grid-cols-6 gap-4">
              {timeline.map((t, i) => {
                const above = i % 2 === 0;
                return (
                  <div key={t.year} className={`relative flex flex-col items-center ${above ? "pb-16" : "pt-16"}`}>
                    <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10 ring-4 ring-white ${["bg-brand-red", "bg-brand-cyan", "bg-brand-gold", "bg-brand-petrol", "bg-brand-orange", "bg-brand-red"][i]}`} />
                    <div className={`text-center px-1 ${above ? "" : "order-2"}`} style={{ transform: above ? "translateY(0)" : "translateY(0)" }}>
                      <p className="text-brand-red" style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1 }}>{t.year}</p>
                      <p className="mt-2 text-brand-ink text-sm" style={{ fontWeight: 600 }}>{t.title}</p>
                      <p className="mt-1 text-xs text-brand-gray">{t.text}</p>
                    </div>
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

          <div className="mt-10 text-center">
            <Link to="/quem-somos/nossa-historia" className="inline-flex px-6 py-3 rounded-full bg-brand-ink text-white text-sm" style={{ fontWeight: 600 }}>Ver nossa história completa</Link>
          </div>
        </div>
      </Section>

      {/* Missão, Visão, Valores */}
      <section className="bg-white py-10 md:py-14">
        <div className="container-x grid md:grid-cols-3 gap-5">
          {mvv.map((m) => (
            <article key={m.key} className="relative overflow-hidden rounded-3xl bg-brand-red text-white p-7 md:p-8 min-h-[420px] flex flex-col">
              <QuarterCircle corner="tr" color="#00384C" className="absolute -top-2 -right-2 w-16 opacity-90" />
              <div className="mb-6 flex justify-center">{m.ill}</div>
              <h3 className="uppercase" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", fontWeight: 700, color: "#FFB400" }}>{m.key}</h3>
              <BrushStroke color="#FFB400" className="mt-3 w-16" />
              <p className="mt-5 text-white/95" style={{ fontSize: "0.95rem", lineHeight: 1.65, fontWeight: 400 }}>{m.text}</p>
              <HatchedCircle size={110} color="#FFB400" className="absolute -bottom-8 -right-4 opacity-20" />
            </article>
          ))}
        </div>
      </section>

      {/* Atuação */}
      <Section className="bg-brand-soft">
        <div className="container-x">
          <SectionTitle eyebrow="Atuação" title="Nossas frentes de trabalho" text="Ações continuadas que se articulam entre formação, criação, circulação e memória." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {atuacao.map((a, i) => (
              <div key={a.t} className="bg-white rounded-2xl p-5 border border-black/5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: ["#ED1C24", "#08B9E6", "#FFB400", "#FF7A00", "#00384C", "#B8DC4B", "#ED1C24"][i], color: "#fff" }}>
                  <span style={{ fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", fontWeight: 600 }}>{a.t}</h3>
                <p className="mt-1 text-sm text-brand-gray">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Impacto */}
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: "#00384C" }}>
        <QuarterCircle corner="tl" color="#ED1C24" className="absolute -top-2 -left-2 w-32 opacity-90" />
        <div className="container-x text-white">
          <p className="uppercase tracking-[0.22em] text-brand-gold text-xs mb-3" style={{ fontWeight: 600 }}>Impacto</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.5rem)", lineHeight: 1.15, fontWeight: 700 }}>Números que contam a nossa trajetória</h2>
          <BrushStroke color="#ED1C24" className="mt-4 w-28" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {indicators.map((n, i) => (
              <div key={i} className={`${i > 0 ? "md:border-l md:border-white/20 md:pl-5" : ""}`}>
                <p className="text-brand-gold leading-none" style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 700 }}>{n.value}</p>
                <p className="mt-2 text-white/85 text-sm">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MissionIll() {
  return (
    <svg width="120" height="100" viewBox="0 0 140 120" aria-hidden>
      <path d="M10 100 L70 20 L130 100 Z" fill="#FFB400" />
      <rect x="55" y="80" width="30" height="24" fill="#08B9E6" />
      <path d="M0 108 H140" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M70 20 L70 8 L92 14 L70 22 Z" fill="#FFFFFF" />
    </svg>
  );
}
function VisionIll() {
  return (
    <svg width="120" height="100" viewBox="0 0 140 120" aria-hidden>
      <ellipse cx="70" cy="60" rx="60" ry="35" fill="#FFB400" />
      <circle cx="70" cy="60" r="22" fill="#00384C" />
      <circle cx="70" cy="60" r="10" fill="#08B9E6" />
      <circle cx="76" cy="54" r="4" fill="#fff" />
    </svg>
  );
}
function ValuesIll() {
  return (
    <svg width="120" height="100" viewBox="0 0 140 120" aria-hidden>
      <path d="M30 70 Q30 40 60 40 Q80 40 80 60 Q80 80 55 80 L40 80 Q30 80 30 70 Z" fill="#FFB400" />
      <polygon points="95,30 102,50 122,50 106,62 112,82 95,70 78,82 84,62 68,50 88,50" fill="#FFFFFF" />
    </svg>
  );
}
