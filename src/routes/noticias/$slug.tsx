import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { news } from "@/data/site";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const n = news.find((x) => x.slug === params.slug);
    if (!n) throw notFound();
    return { n };
  },
  head: ({ loaderData }) => {
    const n = loaderData?.n;
    return {
      meta: [
        { title: n ? `${n.title} — Cena Viva` : "Notícia" },
        { name: "description", content: n?.excerpt ?? "" },
        { property: "og:title", content: n?.title ?? "Notícia" },
        { property: "og:description", content: n?.excerpt ?? "" },
        ...(n ? [{ property: "og:image" as const, content: n.image }] : []),
      ],
      links: n ? [{ rel: "canonical", href: `/noticias/${n.slug}` }] : [],
    };
  },
  component: NewsDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display font-black text-3xl">Notícia não encontrada</h1>
      <Link to="/noticias" className="mt-6 inline-flex px-5 py-3 rounded-full bg-brand-red text-white font-semibold">Ver notícias</Link>
    </div>
  ),
});

function NewsDetail() {
  const { n } = Route.useLoaderData();
  const related = news.filter((x) => x.slug !== n.slug).slice(0, 3);
  return (
    <>
      <PageHero
        title={n.title}
        image={n.image}
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Notícias", to: "/noticias" }, { label: n.category }]}
        accent="brand-orange"
      />
      <Section className="bg-white">
        <div className="container-x max-w-3xl">
          <div className="flex items-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-brand-red text-white font-bold text-xs">{n.category}</span>
            <time className="text-brand-gray">{new Date(n.date).toLocaleDateString("pt-BR")}</time>
          </div>
          <p className="mt-6 text-xl text-brand-ink leading-relaxed">{n.excerpt}</p>
          <div className="mt-6 space-y-4 text-brand-gray text-lg leading-relaxed">
            <p>{n.body}</p>
            <p>A programação seguiu com momentos de fala aberta, apresentações artísticas e trocas entre educadores e público. As atividades reforçam o compromisso do Ponto de Cultura com a formação contínua e o diálogo com o território.</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm text-brand-gray">Compartilhar:</span>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(n.title)}`} className="px-4 py-2 rounded-full border border-brand-ink/20 text-sm font-semibold">Twitter</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=`} className="px-4 py-2 rounded-full border border-brand-ink/20 text-sm font-semibold">Facebook</a>
            <a href={`https://wa.me/?text=${encodeURIComponent(n.title)}`} className="px-4 py-2 rounded-full border border-brand-ink/20 text-sm font-semibold">WhatsApp</a>
          </div>
          <Link to="/noticias" className="mt-10 inline-flex px-5 py-3 rounded-full bg-brand-ink text-white font-semibold">← Voltar às notícias</Link>
        </div>
      </Section>

      <Section className="bg-brand-soft">
        <div className="container-x">
          <h2 className="font-display font-black text-2xl text-brand-ink mb-6">Notícias relacionadas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/noticias/$slug" params={{ slug: r.slug }} className="block rounded-2xl overflow-hidden bg-white hover:shadow-lg transition">
                <img src={r.image} alt="" className="aspect-video w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase text-brand-red">{r.category}</p>
                  <h3 className="mt-2 font-display font-black text-brand-ink">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
