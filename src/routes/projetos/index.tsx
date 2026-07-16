import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { HatchedCircle, ArcThick, BrushStroke, Triangle } from "@/components/Shapes";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Nossos Projetos — Cena Viva" },
      { name: "description", content: "Conheça os projetos culturais e formativos do Ponto de Cultura Cena Viva." },
      { property: "og:title", content: "Nossos Projetos — Cena Viva" },
      { property: "og:description", content: "Formação, criação e circulação cultural." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: Projetos,
});

const backgrounds = [
  { bg: "#FFFFFF", text: "#00384C", muted: "#565656", pill: "#ED1C24", accents: ["#ED1C24", "#08B9E6"] },
  { bg: "#F1F8FB", text: "#00384C", muted: "#4a5560", pill: "#00384C", accents: ["#FFB400", "#00384C"] },
  { bg: "#FFFFFF", text: "#00384C", muted: "#565656", pill: "#FF7A00", accents: ["#FF7A00", "#ED1C24"] },
];

function Projetos() {
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

      {/* Project sections */}
      {projects.map((p, idx) => {
        const c = backgrounds[idx % backgrounds.length];
        const reverse = idx % 2 === 1;
        return (
          <section key={p.slug} className="relative overflow-hidden py-14 md:py-20" style={{ backgroundColor: c.bg, color: c.text }}>
            <ArcThick color={c.accents[0]} className={`absolute ${reverse ? "-right-6 top-8" : "-left-6 top-8"} w-28 opacity-70`} from={200} to={340} />
            <HatchedCircle size={140} color={c.accents[1]} className={`absolute ${reverse ? "-left-10 -bottom-10" : "-right-10 -bottom-10"} opacity-25`} />

            <div className={`container-x grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="uppercase tracking-[0.22em] text-xs" style={{ color: c.pill, fontWeight: 600 }}>{p.category}</span>
                  <span className="px-3 py-1 rounded-full text-white text-[10px] uppercase tracking-widest" style={{ backgroundColor: c.pill, fontWeight: 700 }}>{p.status}</span>
                </div>
                <h3 style={{ fontSize: "clamp(1.5rem, 2.3vw, 2.2rem)", lineHeight: 1.15, fontWeight: 700, color: c.text }}>{p.name}</h3>
                <p className="mt-4" style={{ color: c.muted, fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.6, maxWidth: "56ch" }}>{p.short}</p>

                <dl className="mt-5 grid grid-cols-2 gap-3 max-w-md">
                  <InfoBit label="Público" value={p.audience} />
                  <InfoBit label="Local" value={p.location} />
                  <InfoBit label="Período" value={p.period} />
                  <InfoBit label="Categoria" value={p.category} />
                </dl>

                <ul className="mt-5 space-y-1.5">
                  {p.activities.slice(0, 3).map((a) => (
                    <li key={a} className="flex gap-2 text-sm" style={{ color: c.muted }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c.pill }} />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/projetos/$slug" params={{ slug: p.slug }} className="mt-6 inline-flex px-6 py-2.5 rounded-full text-white text-sm hover:opacity-90" style={{ backgroundColor: c.pill, fontWeight: 600 }}>
                  Conheça o projeto
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-square w-full max-w-sm mx-auto rounded-full overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <ArcThick color={c.accents[0]} className="absolute -top-4 -left-4 w-28" from={100} to={260} />
                <ArcThick color={c.accents[1]} className="absolute -bottom-4 -right-4 w-24" from={300} to={80} />
                <Triangle color={c.pill} size={40} className="absolute top-6 -right-2" rotate={-15} />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

function InfoBit({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-widest text-brand-red" style={{ fontWeight: 700 }}>{label}</dt>
      <dd className="text-sm text-brand-ink mt-0.5" style={{ fontWeight: 500 }}>{value}</dd>
    </div>
  );
}
