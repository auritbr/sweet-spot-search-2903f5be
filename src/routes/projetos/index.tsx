import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { HatchedCircle, ArcThick, BrushStroke, DiamondsCluster, Triangle, QuarterCircle } from "@/components/Shapes";
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

const bandColors = [
  { bg: "#ED1C24", text: "#ffffff", pill: "#FF7A00", accent: "#FFB400", arc: "#00384C" },
  { bg: "#08B9E6", text: "#ffffff", pill: "#ED1C24", accent: "#FFB400", arc: "#00384C" },
  { bg: "#FFB400", text: "#00384C", pill: "#ED1C24", accent: "#00384C", arc: "#ED1C24" },
];

function Projetos() {
  return (
    <>
      <PageHero
        title="NOSSOS PROJETOS"
        subtitle="Formação, criação e circulação cultural em três frentes complementares."
        image="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Projetos" }]}
        accent="gold"
        brush="#08B9E6"
      />

      <Section className="bg-white overflow-hidden">
        <div className="container-x grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1200&q=80" alt="Grupo em atividade" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <ArcThick color="#00384C" className="absolute -top-6 -left-6 w-44" from={100} to={260} />
            <ArcThick color="#ED1C24" className="absolute -bottom-4 -right-4 w-36" from={300} to={80} />
            <HatchedCircle size={130} color="#08B9E6" className="absolute -bottom-10 left-4 opacity-70" />
            <DiamondsCluster color="#FFB400" className="absolute top-4 -right-2" size={60} />
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-brand-red font-bold text-xs mb-3">Programas</p>
            <h2 className="font-display uppercase leading-[1] text-brand-red" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
              Arte que constrói pessoas e territórios
            </h2>
            <BrushStroke color="#FFB400" className="mt-5 w-40" />
            <p className="mt-6 text-lg leading-relaxed" style={{ color: "#00384C" }}>
              Nossos projetos articulam formação, criação e apresentação. Cada frente atende públicos específicos e amplia o acesso à cultura no território.
            </p>
            <Link to="/contato" className="mt-8 inline-flex px-7 py-3.5 rounded-full bg-brand-red text-white font-semibold uppercase tracking-wider text-sm">
              Quero participar
            </Link>
          </div>
        </div>
      </Section>

      {projects.map((p, idx) => {
        const c = bandColors[idx % bandColors.length];
        const reverse = idx % 2 === 1;
        return (
          <div key={p.slug} className="relative overflow-hidden" style={{ backgroundColor: c.bg, color: c.text }}>
            <QuarterCircle corner={reverse ? "br" : "bl"} color={c.arc} className="absolute -bottom-4 -left-4 w-56 md:w-72 opacity-90" />
            <ArcThick color={c.accent} className="absolute top-8 right-10 w-48 md:w-64 opacity-90" from={200} to={340} />
            <HatchedCircle size={280} color={c.accent} className="absolute -right-16 -bottom-10 opacity-25" />
            <Triangle color={c.pill} size={70} className="absolute top-16 left-16 hidden md:block" rotate={20} />

            <div className={`container-x py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <p className="uppercase tracking-[0.3em] font-bold text-xs mb-3 opacity-90">{p.category}</p>
                <h3 className="font-display uppercase leading-[0.95]" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>{p.name}</h3>
                <BrushStroke color={c.accent} className="mt-5 w-32" />
                <p className="mt-6 text-lg opacity-95 max-w-lg">{p.short}</p>
                <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
                  <InfoBlock label="Público" value={p.audience} bg={c.pill} />
                  <InfoBlock label="Local" value={p.location} bg={c.pill} />
                  <InfoBlock label="Período" value={p.period} bg={c.pill} />
                  <InfoBlock label="Situação" value={p.status} bg={c.pill} />
                </div>
                <Link to="/projetos/$slug" params={{ slug: p.slug }} className="mt-8 inline-flex px-7 py-3.5 rounded-full bg-white text-brand-ink font-semibold uppercase tracking-wider text-sm hover:bg-brand-gold">
                  Acessar o projeto
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden max-w-md mx-auto">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <DiamondsCluster color={c.accent} className="absolute -top-6 -right-4" size={70} />
                <HatchedCircle size={140} color={c.accent} className="absolute -bottom-10 -left-8 opacity-70" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function InfoBlock({ label, value, bg }: { label: string; value: string; bg: string }) {
  return (
    <div className="rounded-2xl p-3 text-white" style={{ backgroundColor: bg }}>
      <p className="text-[10px] uppercase tracking-widest opacity-80 font-bold">{label}</p>
      <p className="text-sm font-semibold leading-tight mt-1">{value}</p>
    </div>
  );
}
