import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/PageHero";
import { AgendaStatusBadge } from "@/components/AgendaCard";
import { ArcThick, BrushStroke, HatchedCircle, QuarterCircle } from "@/components/Shapes";
import { formatEventDate, getEventBySlug } from "@/data/agenda";
import { site } from "@/data/site";

export const Route = createFileRoute("/agenda/$slug")({
  loader: ({ params }) => {
    const event = getEventBySlug(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Atividade não encontrada | Associação Maggu" }, { name: "robots", content: "noindex" }] };
    }
    const { event } = loaderData;
    const description = event.summary ?? `Atividade do Ecossistema Maggu em ${formatEventDate(event.date)}.`;
    return {
      meta: [
        { title: `${event.title} | Agenda | Associação Maggu` },
        { name: "description", content: description },
        { property: "og:title", content: `${event.title} | Agenda | Associação Maggu` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/agenda/${event.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/agenda/${event.slug}` }],
    };
  },
  notFoundComponent: EventoNaoEncontrado,
  component: EventoDetalhe,
});

function EventoNaoEncontrado() {
  return (
    <Section className="bg-white">
      <div className="container-x pt-24 text-center">
        <h1 className="text-brand-ink" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700 }}>Atividade não encontrada</h1>
        <p className="mt-4 text-brand-gray">Essa atividade pode ter sido encerrada ou removida da programação.</p>
        <Link to="/agenda" className="mt-6 inline-flex rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-petrol">Ver Agenda</Link>
      </div>
    </Section>
  );
}

function EventoDetalhe() {
  const { event } = Route.useLoaderData();
  const closed = event.status === "inscricoes-encerradas";

  const facts: { label: string; value: string }[] = [
    { label: "Data", value: formatEventDate(event.date) },
    ...(event.time ? [{ label: "Horário", value: event.time }] : []),
    ...(event.location ? [{ label: "Local", value: event.location }] : []),
    ...(event.ageRange ? [{ label: "Faixa etária", value: event.ageRange }] : []),
    ...(event.free === true ? [{ label: "Valor", value: "Gratuito" }] : event.price ? [{ label: "Valor", value: event.price }] : []),
    ...(event.accessibility ? [{ label: "Acessibilidade", value: event.accessibility }] : []),
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-soft">
        <QuarterCircle corner="tr" color="#ED1C24" className="absolute -right-3 -top-3 w-28 md:w-44" />
        <ArcThick color="#FFB400" className="absolute left-4 bottom-8 w-24 md:w-36 opacity-90" from={210} to={340} />
        <div className="container-x relative pb-12 pt-28 md:pt-32">
          <nav aria-label="Breadcrumb" className="text-sm text-brand-gray">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="underline underline-offset-4 hover:text-brand-red">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/agenda" className="underline underline-offset-4 hover:text-brand-red">Agenda</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-brand-ink">{event.title}</li>
            </ol>
          </nav>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{event.category}</p>
          <h1 className="mt-3 max-w-3xl text-brand-ink" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", lineHeight: 1.1, fontWeight: 700 }}>{event.title}</h1>
          <BrushStroke color="#ED1C24" className="mt-5 w-28" />
          <div className="mt-5"><AgendaStatusBadge event={event} /></div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1.25fr_.75fr] items-start">
          <div>
            {event.image && (
              <div className="mb-8 aspect-[16/9] overflow-hidden rounded-md">
                <img src={event.image} alt="" className="h-full w-full object-cover" />
              </div>
            )}
            {event.description && <p className="leading-relaxed text-brand-gray">{event.description}</p>}
            {event.guidelines?.length ? (
              <div className="mt-8">
                <h2 className="text-xl text-brand-ink">Orientações</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-brand-gray">
                  {event.guidelines.map((g) => <li key={g}>{g}</li>)}
                </ul>
              </div>
            ) : null}

            {closed && (
              <div className="mt-8 border-l-4 border-brand-red bg-brand-soft p-6">
                <p className="font-bold text-brand-ink">Inscrições encerradas.</p>
                <p className="mt-2 text-brand-gray">Acompanhe a Agenda para novas oportunidades.</p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {event.registrationUrl && !closed && (
                <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-petrol">Inscreva-se</a>
              )}
              <Link to="/agenda" className="rounded-full border-2 border-brand-petrol px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Voltar para a Agenda</Link>
            </div>
          </div>

          <aside className="rounded-md bg-brand-soft p-6">
            <h2 className="text-lg text-brand-ink">Informações</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-bold uppercase tracking-[0.14em] text-[11px] text-brand-red">{f.label}</dt>
                  <dd className="mt-1 text-brand-gray">{f.value}</dd>
                </div>
              ))}
            </dl>
            {event.relatedProject && (
              <div className="mt-6 border-t border-brand-petrol/10 pt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">Projeto relacionado</p>
                <p className="mt-1 text-brand-ink">{event.relatedProject}</p>
                <Link to="/projetos" className="mt-3 inline-flex text-sm font-bold text-brand-petrol underline underline-offset-4 hover:text-brand-red">Conheça o projeto relacionado</Link>
              </div>
            )}
            <div className="mt-6 border-t border-brand-petrol/10 pt-5 text-sm text-brand-gray">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">Contato</p>
              <p className="mt-1">{event.contact ?? site.email}</p>
              <Link to="/contato" className="mt-3 inline-flex text-sm font-bold text-brand-petrol underline underline-offset-4 hover:text-brand-red">Fale com a Associação</Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
