import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Check, Clock3, Facebook, Instagram, Link2, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { AgendaStatusBadge } from "@/components/AgendaCard";
import { ArcThick, BrushStroke, HatchedCircle, QuarterCircle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";
import { agendaCategoryStyles, formatEventDate, getEventBySlug } from "@/data/agenda";

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
  const categoryStyle = agendaCategoryStyles[event.category];
  const [shareFeedback, setShareFeedback] = useState<"link" | "instagram" | null>(null);

  const currentUrl = () => window.location.href;
  const openShare = (url: string) => window.open(url, "_blank", "noopener,noreferrer,width=720,height=640");
  const copyActivityLink = async (target: "link" | "instagram") => {
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
    setShareFeedback(target);
    window.setTimeout(() => setShareFeedback(null), 2600);
  };

  // Informações complementares — apenas dados que NÃO aparecem no hero
  // (data, horário, local e valor já estão no hero e não se repetem aqui).
  const complementary: { label: string; value: string }[] = [
    ...(event.ageRange ? [{ label: "Faixa etária", value: event.ageRange }] : []),
    ...(event.accessibility ? [{ label: "Acessibilidade", value: event.accessibility }] : []),
  ];

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <PageHero title={event.title} eyebrow={event.category} image={event.image ?? "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1920&q=80"} variant="detail" accent="gold" brush={categoryStyle.accentColor}>
        <Link to="/agenda" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground/85 underline-offset-4 hover:text-brand-gold hover:underline">
          <ArrowLeft aria-hidden="true" className="size-4" /> Voltar para a Agenda
        </Link>
        <ul className="mt-5 flex max-w-3xl flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/85">
          <li className="flex items-center gap-2"><CalendarDays aria-hidden="true" className="size-4 text-brand-gold" />{formatEventDate(event.date)}</li>
          {event.time && <li className="flex items-center gap-2"><Clock3 aria-hidden="true" className="size-4 text-brand-gold" />{event.time}</li>}
          {event.location && <li className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-4 text-brand-gold" />{event.location}</li>}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <AgendaStatusBadge event={event} statusAccentClass={categoryStyle.accentText} />
          {event.registrationUrl && !closed && <Button asChild className="rounded-full bg-brand-red px-6 text-primary-foreground shadow-none hover:bg-brand-gold hover:text-brand-petrol"><a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">Inscreva-se</a></Button>}
        </div>
      </PageHero>

      {/* ---------------- CONTEÚDO ---------------- */}
      <Section className="bg-background">
        <div className="container-x">
          {/* Sobre esta atividade — texto direto sobre o fundo, sem card */}
          <div className="mx-auto max-w-[800px]">
            <section aria-labelledby="activity-description">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Conheça a programação</p>
              <h2 id="activity-description" className="mt-2 text-brand-ink" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)", fontWeight: 700 }}>Sobre esta atividade</h2>
              <p className="mt-5 text-brand-gray" style={{ fontSize: "14px", lineHeight: 1.7 }}>
                {event.description ?? event.summary ?? "Mais informações sobre esta atividade serão divulgadas em breve."}
              </p>
            </section>

            <section aria-labelledby="share-title" className="mt-10 border-t border-brand-ink/10 pt-8 md:mt-12 md:pt-10">
              <h2 id="share-title" className="text-sm font-semibold text-brand-ink">Compartilhe esta atividade</h2>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button type="button" aria-label="Compartilhar no Facebook" title="Facebook" onClick={() => openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl())}`)} className="group relative inline-flex size-11 items-center justify-center rounded-lg border border-brand-ink/15 bg-white/55 text-brand-ink shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-red/55 hover:bg-brand-red/10 hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50">
                  <Facebook className="size-[18px]" aria-hidden="true" />
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 rounded bg-brand-ink px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">Facebook</span>
                </button>
                <button type="button" aria-label="Copiar link para compartilhar no Instagram" title="Instagram" onClick={() => void copyActivityLink("instagram")} className="group relative inline-flex size-11 items-center justify-center rounded-lg border border-brand-ink/15 bg-white/55 text-brand-ink shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-red/55 hover:bg-brand-red/10 hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50">
                  {shareFeedback === "instagram" ? <Check className="size-[18px]" aria-hidden="true" /> : <Instagram className="size-[18px]" aria-hidden="true" />}
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 rounded bg-brand-ink px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">Instagram</span>
                </button>
                <button type="button" aria-label="Compartilhar no LinkedIn" title="LinkedIn" onClick={() => openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl())}`)} className="group relative inline-flex size-11 items-center justify-center rounded-lg border border-brand-ink/15 bg-white/55 text-brand-ink shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-red/55 hover:bg-brand-red/10 hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50">
                  <Linkedin className="size-[18px]" aria-hidden="true" />
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 rounded bg-brand-ink px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">LinkedIn</span>
                </button>
                <button type="button" aria-label="Compartilhar no WhatsApp" title="WhatsApp" onClick={() => openShare(`https://wa.me/?text=${encodeURIComponent(`${event.title} — ${currentUrl()}`)}`)} className="group relative inline-flex size-11 items-center justify-center rounded-lg border border-brand-ink/15 bg-white/55 text-brand-ink shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-red/55 hover:bg-brand-red/10 hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50">
                  <MessageCircle className="size-[18px]" aria-hidden="true" />
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 rounded bg-brand-ink px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">WhatsApp</span>
                </button>
                <button type="button" aria-label="Copiar link da atividade" title="Copiar link" onClick={() => void copyActivityLink("link")} className="group relative inline-flex size-11 items-center justify-center rounded-lg border border-brand-ink/15 bg-white/55 text-brand-ink shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-red/55 hover:bg-brand-red/10 hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50">
                  {shareFeedback === "link" ? <Check className="size-[18px]" aria-hidden="true" /> : <Link2 className="size-[18px]" aria-hidden="true" />}
                  <span className="pointer-events-none absolute -bottom-8 right-0 z-10 whitespace-nowrap rounded bg-brand-ink px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">{shareFeedback === "link" ? "Link copiado" : "Copiar link"}</span>
                </button>
              </div>
              <p className="mt-3 min-h-5 text-xs text-brand-gray" aria-live="polite">
                {shareFeedback === "instagram" ? "Link copiado para compartilhar no Instagram." : shareFeedback === "link" ? "Link copiado." : ""}
              </p>
            </section>

            {/* Imagem da atividade, quando houver */}
            {event.image && (
              <div className="mt-8 aspect-[16/9] overflow-hidden rounded-md">
                <img src={event.image} alt="" className="h-full w-full object-cover" />
              </div>
            )}

            {/* Informações complementares — grade simples, só campos preenchidos */}
            {complementary.length > 0 && (
              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                {complementary.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">{f.label}</dt>
                    <dd className="mt-1 text-sm text-brand-gray">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {/* Orientações, quando houver */}
            {event.guidelines?.length ? (
              <div className="mt-8">
                <h3 className="text-base font-bold text-brand-ink">Orientações</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brand-gray">
                  {event.guidelines.map((g) => <li key={g}>{g}</li>)}
                </ul>
              </div>
            ) : null}

            {/* Projeto relacionado — linha simples, não repete dados do hero */}
            {event.relatedProject && (
              <div className="mt-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">Projeto relacionado</p>
                <p className="mt-1 text-sm text-brand-ink">{event.relatedProject}</p>
                <Link to="/projetos" className="mt-2 inline-flex text-sm font-bold text-brand-petrol underline underline-offset-4 hover:text-brand-red">Conheça o projeto relacionado</Link>
              </div>
            )}

            {/* Aviso de inscrições encerradas */}
            {closed && (
              <div className="mt-8 border-l-4 border-brand-red bg-brand-soft p-5">
                <p className="font-bold text-brand-ink">Inscrições encerradas.</p>
                <p className="mt-1 text-sm text-brand-gray">Acompanhe a Agenda para novas oportunidades.</p>
              </div>
            )}

            {/* Contato — frase curta, sem e-mail de demonstração */}
            <div className="mt-8 border-t border-brand-petrol/10 pt-6">
              <p className="text-sm text-brand-gray">Ficou com alguma dúvida sobre esta atividade?</p>
              <Button asChild className="mt-3 h-auto rounded-full border border-brand-petrol/15 bg-brand-petrol/85 px-4 py-2 text-sm font-semibold normal-case text-primary-foreground shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-brand-petrol/95 hover:text-primary-foreground">
                <Link to="/contato">Fale com a Associação</Link>
              </Button>
            </div>
          </div>

        </div>
      </Section>
    </>
  );
}
