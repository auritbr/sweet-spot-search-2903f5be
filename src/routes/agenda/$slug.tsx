import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Check, Clock3, Facebook, Instagram, Link2, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/PageHero";
import { AgendaStatusBadge } from "@/components/AgendaCard";
import { ArcThick, BrushStroke, HatchedCircle, QuarterCircle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";
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
  const [shareFeedback, setShareFeedback] = useState("");

  const currentUrl = () => window.location.href;
  const openShare = (url: string) => window.open(url, "_blank", "noopener,noreferrer");
  const copyActivityLink = async (instagram = false) => {
    const url = currentUrl();
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement("textarea");
      input.value = url;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setShareFeedback(instagram ? "Link copiado. Cole-o no Instagram para compartilhar." : "Link copiado!");
    window.setTimeout(() => setShareFeedback(""), 3500);
  };

  const shareButtons = [
    {
      label: "WhatsApp",
      icon: MessageCircle,
      action: () => openShare(`https://wa.me/?text=${encodeURIComponent(`${event.title} — ${currentUrl()}`)}`),
    },
    { label: "Instagram", icon: Instagram, action: () => void copyActivityLink(true) },
    {
      label: "LinkedIn",
      icon: Linkedin,
      action: () => openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl())}`),
    },
    { label: "Copiar link", icon: shareFeedback ? Check : Link2, action: () => void copyActivityLink() },
    {
      label: "Facebook",
      icon: Facebook,
      action: () => openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl())}`),
    },
  ];

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
        <HatchedCircle size={110} color="#08B9E6" className="absolute -bottom-12 right-[12%] hidden opacity-40 md:block" />
        <div className="container-x relative pb-14 pt-28 text-center md:pb-16 md:pt-32">
          <nav aria-label="Breadcrumb" className="text-sm text-brand-gray">
            <ol className="flex flex-wrap items-center justify-center gap-2">
              <li><Link to="/" className="underline underline-offset-4 hover:text-brand-red">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/agenda" className="underline underline-offset-4 hover:text-brand-red">Agenda</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-brand-ink">{event.title}</li>
            </ol>
          </nav>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{event.category}</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-brand-ink" style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", lineHeight: 1.1, fontWeight: 700 }}>{event.title}</h1>
          <BrushStroke color="#ED1C24" className="mx-auto mt-5 w-28" />
          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-brand-gray">
            <li className="flex items-center gap-2"><CalendarDays aria-hidden="true" className="size-4 text-brand-red" />{formatEventDate(event.date)}</li>
            {event.time && <li className="flex items-center gap-2"><Clock3 aria-hidden="true" className="size-4 text-brand-red" />{event.time}</li>}
            {event.location && <li className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-brand-red" />{event.location}</li>}
          </ul>
          <div className="mt-5 flex justify-center"><AgendaStatusBadge event={event} /></div>
        </div>
      </section>

      <Section className="bg-background">
        <div className="container-x">
          <section aria-labelledby="activity-description" className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Conheça a programação</p>
            <h2 id="activity-description" className="mt-2 text-brand-ink" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)", fontWeight: 700 }}>Sobre esta atividade</h2>
            <p className="mt-5 text-brand-gray" style={{ fontSize: "12px", lineHeight: 1.65 }}>
              {event.description ?? event.summary ?? "Mais informações sobre esta atividade serão divulgadas em breve."}
            </p>
          </section>

          <section aria-labelledby="share-title" className="mx-auto mt-10 max-w-3xl border-y border-brand-petrol/10 py-7">
            <h2 id="share-title" className="text-base text-brand-ink">Compartilhe esta atividade</h2>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {shareButtons.map(({ label, icon: Icon, action }) => (
                <Button
                  key={label}
                  type="button"
                  variant="outline"
                  onClick={action}
                  aria-label={label === "Instagram" ? "Instagram — copiar link da atividade" : label}
                  className="justify-start rounded-full border-brand-petrol/15 bg-brand-soft/60 px-4 text-brand-petrol shadow-sm backdrop-blur-md hover:border-brand-petrol/40 hover:bg-brand-soft/90 hover:text-brand-petrol hover:shadow-md sm:justify-center"
                >
                  <Icon aria-hidden="true" className="size-4 shrink-0" />
                  <span>{label}</span>
                </Button>
              ))}
            </div>
            <p aria-live="polite" className="mt-3 min-h-5 text-sm text-brand-gray">{shareFeedback}</p>
          </section>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.25fr_.75fr]">
            <div>
            {event.image && (
              <div className="mb-8 aspect-[16/9] overflow-hidden rounded-md">
                <img src={event.image} alt="" className="h-full w-full object-cover" />
              </div>
            )}
            {event.guidelines?.length ? (
              <div>
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
                <Button asChild className="rounded-full bg-brand-red px-6 text-primary-foreground shadow-none hover:bg-brand-petrol"><a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">Inscreva-se</a></Button>
              )}
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
        </div>
      </Section>
    </>
  );
}
