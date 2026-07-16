import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { HatchedCircle, BrushStroke, ArcThick, Triangle } from "@/components/Shapes";
import { news } from "@/data/site";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Notícias — Cena Viva" },
      { name: "description", content: "Últimas notícias, oficinas, espetáculos e ações culturais do Ponto de Cultura Cena Viva." },
      { property: "og:title", content: "Notícias — Cena Viva" },
      { property: "og:description", content: "Últimas notícias do Ponto de Cultura." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: Noticias,
});

const catColors: Record<string, string> = {
  "Apresentações": "#ED1C24",
  "Oficinas": "#08B9E6",
  "Parcerias": "#FFB400",
  "Comunidade": "#FF7A00",
  "Formação": "#B8DC4B",
  "Institucional": "#00384C",
};

function Noticias() {
  const [main, ...rest] = news;
  return (
    <>
      <PageHero
        title="NOTÍCIAS"
        subtitle="Acompanhe as ações, encontros e novidades do Ponto de Cultura."
        image="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Notícias" }]}
        accent="gold"
        brush="#08B9E6"
      />

      <Section className="bg-white overflow-hidden">
        <div className="container-x">
          <Link to="/noticias/$slug" params={{ slug: main.slug }} className="group grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <img src={main.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
              <span className="absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: catColors[main.category] ?? "#ED1C24" }}>{main.category}</span>
            </div>
            <div>
              <time className="text-sm text-brand-gray">{new Date(main.date).toLocaleDateString("pt-BR")}</time>
              <h2 className="mt-3 font-display uppercase leading-[1] text-brand-ink group-hover:text-brand-red transition" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>{main.title}</h2>
              <BrushStroke color="#FFB400" className="mt-5 w-32" />
              <p className="mt-6 text-lg text-brand-gray">{main.excerpt}</p>
              <span className="mt-6 inline-block px-6 py-3 rounded-full bg-brand-red text-white font-semibold uppercase tracking-wider text-sm">Leia mais</span>
            </div>
          </Link>
        </div>
      </Section>

      <Section className="bg-brand-soft overflow-hidden relative">
        <HatchedCircle size={200} color="#08B9E6" className="absolute -top-16 -left-16 opacity-40" />
        <Triangle color="#ED1C24" size={80} className="absolute bottom-10 right-10 hidden md:block" rotate={-15} />
        <div className="container-x">
          <h3 className="font-display uppercase text-brand-ink mb-8" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>Mais notícias</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((n) => (
              <article key={n.slug} className="group bg-white rounded-3xl overflow-hidden relative">
                <div className="h-2" style={{ backgroundColor: catColors[n.category] ?? "#ED1C24" }} />
                <div className="aspect-video overflow-hidden">
                  <img src={n.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: catColors[n.category] ?? "#ED1C24" }}>{n.category}</span>
                  <h4 className="mt-2 font-display uppercase text-lg text-brand-ink leading-tight">{n.title}</h4>
                  <p className="mt-2 text-sm text-brand-gray">{n.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <time className="text-xs text-brand-gray">{new Date(n.date).toLocaleDateString("pt-BR")}</time>
                    <Link to="/noticias/$slug" params={{ slug: n.slug }} className="text-sm font-semibold text-brand-red uppercase tracking-wider">Ler →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
