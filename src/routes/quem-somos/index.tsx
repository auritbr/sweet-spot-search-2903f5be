import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { HatchedCircle, ArcThick, BrushStroke, Triangle, QuarterCircle } from "@/components/Shapes";
import { timeline } from "@/data/site";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Cena Viva" },
      { name: "description", content: "Conheça o Ponto de Cultura Cena Viva: história, missão, visão e valores." },
      { property: "og:title", content: "Quem Somos — Cena Viva" },
      { property: "og:description", content: "História, missão, visão e valores." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

const mvv = [
  {
    key: "Missão",
    text: "Promover formação, acesso à cultura e desenvolvimento humano por meio do teatro e das artes cênicas.",
    ill: <MissionIll />,
  },
  {
    key: "Visão",
    text: "Ser referência em formação cultural, criação artística e participação comunitária no território.",
    ill: <VisionIll />,
  },
  {
    key: "Valores",
    text: "Respeito, diversidade, ética, criatividade, transparência, inclusão, cooperação e compromisso social.",
    ill: <ValuesIll />,
  },
];

function QuemSomos() {
  return (
    <>
      <PageHero
        title="QUEM SOMOS"
        image="https://images.unsplash.com/photo-1519683384663-1de1a1e3f6a7?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Quem Somos" }]}
        accent="cyan"
        brush="#FFB400"
      />

      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        <HatchedCircle size={220} color="#08B9E6" className="absolute -top-20 -left-16 opacity-60" />
        <ArcThick color="#ED1C24" className="absolute -bottom-8 -right-8 w-64" from={100} to={260} />
        <Triangle color="#FFB400" size={80} className="absolute top-24 right-16 hidden md:block" rotate={30} />
        <div className="container-x max-w-3xl text-center">
          <p className="text-lg text-brand-gray leading-relaxed">
            O Ponto de Cultura nasceu do encontro entre artistas, educadores e moradores que acreditam no teatro como instrumento de formação, expressão e transformação social.
          </p>
          <p className="mt-8 font-display uppercase text-brand-red leading-tight" style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}>
            Por meio de oficinas, espetáculos e ações culturais, ampliamos o acesso à arte e fortalecemos histórias que já existem no território.
          </p>
          <BrushStroke color="#FFB400" className="mx-auto mt-6 w-32" />
          <p className="mt-10 text-lg text-brand-gray leading-relaxed">
            Nossa atuação aproxima crianças, jovens, famílias, artistas e comunidade em processos de criação, aprendizagem e participação cultural.
          </p>
        </div>
      </section>

      <section className="bg-white py-8 md:py-16">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {mvv.map((m) => (
            <article key={m.key} className="relative overflow-hidden rounded-3xl bg-brand-red text-white p-8 md:p-10 min-h-[480px] flex flex-col">
              <QuarterCircle corner="tr" color="#00384C" className="absolute -top-2 -right-2 w-20 opacity-90" />
              <div className="mb-8 flex justify-center">{m.ill}</div>
              <h3 className="font-display uppercase text-brand-gold text-4xl">{m.key}</h3>
              <BrushStroke color="#FFB400" className="mt-4 w-24" />
              <p className="mt-6 text-white/95 leading-relaxed">{m.text}</p>
              <HatchedCircle size={140} color="#FFB400" className="absolute -bottom-10 -right-6 opacity-25" />
            </article>
          ))}
        </div>
      </section>

      <Section className="bg-brand-soft overflow-hidden">
        <div className="container-x">
          <p className="uppercase tracking-[0.3em] text-brand-red font-bold text-xs mb-3">Trajetória</p>
          <h2 className="font-display uppercase leading-[1] text-brand-ink" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>Nossa linha do tempo</h2>
          <BrushStroke color="#FFB400" className="mt-5 w-40" />
          <ol className="mt-12 relative border-l-4 border-brand-red/40 pl-8 space-y-10">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[46px] top-1 w-8 h-8 rounded-full bg-brand-red ring-4 ring-brand-soft" />
                <p className="font-display text-brand-red text-4xl">{t.year}</p>
                <h3 className="font-display uppercase text-xl text-brand-ink mt-1">{t.title}</h3>
                <p className="text-brand-gray mt-1">{t.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Link to="/quem-somos/nossa-historia" className="inline-flex px-7 py-3.5 rounded-full bg-brand-ink text-white font-semibold uppercase tracking-wider text-sm">Ver nossa história completa</Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function MissionIll() {
  return (
    <svg width="140" height="120" viewBox="0 0 140 120" aria-hidden>
      <path d="M10 100 L70 20 L130 100 Z" fill="#FFB400" />
      <circle cx="70" cy="70" r="18" fill="#08B9E6" />
      <path d="M0 110 H140" stroke="#00384C" strokeWidth="6" />
    </svg>
  );
}
function VisionIll() {
  return (
    <svg width="140" height="120" viewBox="0 0 140 120" aria-hidden>
      <ellipse cx="70" cy="60" rx="60" ry="35" fill="#FFB400" />
      <circle cx="70" cy="60" r="22" fill="#00384C" />
      <circle cx="70" cy="60" r="10" fill="#08B9E6" />
      <circle cx="76" cy="54" r="4" fill="#fff" />
    </svg>
  );
}
function ValuesIll() {
  return (
    <svg width="140" height="120" viewBox="0 0 140 120" aria-hidden>
      <polygon points="70,10 82,44 118,44 88,64 100,100 70,78 40,100 52,64 22,44 58,44" fill="#FFB400" />
      <path d="M20 110 Q70 80 120 110 L120 120 L20 120 Z" fill="#08B9E6" />
    </svg>
  );
}
