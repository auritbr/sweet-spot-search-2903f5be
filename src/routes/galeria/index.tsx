import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { ArcThick, BrushStroke, HatchedCircle, Triangle } from "@/components/Shapes";
import { albums } from "@/data/site";

export const Route = createFileRoute("/galeria/")({
  head: () => ({
    meta: [
      { title: "Nossa Galeria — Cena Viva" },
      { name: "description", content: "Fotografias das oficinas, apresentações e encontros do Ponto de Cultura Cena Viva." },
      { property: "og:title", content: "Nossa Galeria — Cena Viva" },
      { property: "og:description", content: "Registros das nossas atividades." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

function Galeria() {
  const byYear = albums.reduce<Record<number, typeof albums>>((acc, a) => {
    (acc[a.year] ||= []).push(a);
    return acc;
  }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  return (
    <>
      <PageHero
        title=""
        split={{ first: "NOSSA", second: "GALERIA", secondColor: "#08B9E6" }}
        image="https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Galeria" }]}
        accent="cyan"
        brush="#FFB400"
      />

      {years.map((year, i) => (
        <Section key={year} className={i % 2 === 0 ? "bg-white" : "bg-brand-soft"}>
          <div className="container-x relative overflow-hidden">
            {i % 2 === 0
              ? <HatchedCircle size={180} color="#08B9E6" className="absolute -top-10 -right-10 opacity-60" />
              : <Triangle color="#FFB400" size={100} className="absolute -top-8 -left-8" rotate={20} />}
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <h2 className="font-display text-brand-red leading-none" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>{year}</h2>
                <BrushStroke color="#FFB400" className="mt-3 w-40" />
              </div>
              <p className="text-brand-gray text-sm">{byYear[year].length} álbuns</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byYear[year].map((a) => (
                <Link key={a.slug} to="/galeria/$slug" params={{ slug: a.slug }} className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <p className="uppercase text-xs tracking-widest text-brand-red font-bold">{a.year} · {a.count} fotos</p>
                    <h3 className="mt-1 font-display uppercase text-xl text-brand-ink leading-tight">{a.title}</h3>
                    <p className="mt-2 text-sm text-brand-gray">{a.description}</p>
                    <span className="mt-4 inline-block font-semibold text-brand-red text-sm uppercase tracking-wider">Ver álbum →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
