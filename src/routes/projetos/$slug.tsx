import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/PageHero";
import { projects, news } from "@/data/site";

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
      <h1 className="text-3xl font-display font-black text-brand-ink">Projeto não encontrado</h1>
      <Link to="/projetos" className="mt-6 inline-flex px-5 py-3 rounded-full bg-brand-red text-white font-semibold">Ver projetos</Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  const related = news.slice(0, 3);
  return (
    <>
      <PageHero
        title={p.name}
        subtitle={p.short}
        image={p.image}
        accent={p.color}
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Projetos", to: "/projetos" }, { label: p.name }]}
      />

      <Section className="bg-white">
        <div className="container-x grid md:grid-cols-3 gap-10">
          <aside className="md:col-span-1 space-y-3 text-sm">
            <Info label="Categoria" value={p.category} />
            <Info label="Status" value={p.status} />
            <Info label="Período" value={p.period} />
            <Info label="Local" value={p.location} />
            <Info label="Público" value={p.audience} />
          </aside>
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-display font-black text-2xl text-brand-ink">Objetivo geral</h2>
              <p className="mt-2 text-brand-gray text-lg">{p.objective}</p>
            </div>
            <div>
              <h2 className="font-display font-black text-2xl text-brand-ink">Objetivos específicos</h2>
              <ul className="mt-2 space-y-2 list-disc pl-6 text-brand-gray">{p.specifics.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
            <div>
              <h2 className="font-display font-black text-2xl text-brand-ink">Metodologia</h2>
              <p className="mt-2 text-brand-gray">{p.methodology}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Block title="Atividades" items={p.activities} color={p.color} />
              <Block title="Resultados" items={p.results} color={p.color} />
              <Block title="Equipe" items={p.team} color={p.color} />
              <Block title="Parceiros" items={p.partners} color={p.color} />
            </div>
            <Link to="/contato" className="inline-flex px-6 py-3 rounded-full text-white font-semibold" style={{ backgroundColor: `var(--${p.color})` }}>
              Quero participar
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-soft">
        <div className="container-x">
          <SectionTitle eyebrow="Registros" title="Galeria do projeto" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[p.image, ...news.slice(0, 5).map((n) => n.image)].map((src, i) => (
              <img key={i} src={src} alt="" className="aspect-square w-full object-cover rounded-2xl" loading="lazy" />
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="Novidades" title="Notícias relacionadas" />
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((n) => (
              <Link key={n.slug} to="/noticias/$slug" params={{ slug: n.slug }} className="block rounded-2xl overflow-hidden bg-brand-soft hover:shadow-lg transition">
                <img src={n.image} alt="" className="aspect-video w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <p className="text-xs text-brand-red font-bold uppercase">{n.category}</p>
                  <h3 className="mt-2 font-display font-black text-brand-ink">{n.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-xl bg-brand-soft">
      <p className="text-xs uppercase tracking-widest text-brand-red font-bold">{label}</p>
      <p className="text-brand-ink font-semibold">{value}</p>
    </div>
  );
}

function Block({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div className="p-5 rounded-2xl border-2 border-brand-ink/10">
      <h3 className="font-display font-black text-lg" style={{ color: `var(--${color})` }}>{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-brand-gray">{items.map((x) => <li key={x}>• {x}</li>)}</ul>
    </div>
  );
}
