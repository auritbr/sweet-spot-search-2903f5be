import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Section, SectionTitle } from "@/components/PageHero";
import { AgendaStatusBadge } from "@/components/AgendaCard";
import { ArcThick, BrushStroke, DiamondsCluster, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";
import { agendaCategories, eventDayMonth, isWithinPeriod, sortByDate, agendaEvents, type AgendaPeriod } from "@/data/agenda";

export const Route = createFileRoute("/agenda/")({
  head: () => ({
    meta: [
      { title: "Agenda | Associação Maggu" },
      { name: "description", content: "Confira cursos, oficinas, sessões, apresentações, encontros e atividades do Ecossistema Maggu." },
      { property: "og:title", content: "Agenda | Associação Maggu" },
      { property: "og:description", content: "Confira cursos, oficinas, sessões, apresentações, encontros e atividades do Ecossistema Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/agenda" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/agenda" }],
  }),
  component: Agenda,
});

const periods: { value: AgendaPeriod; label: string }[] = [
  { value: "proximos", label: "Próximos" },
  { value: "semana", label: "Esta semana" },
  { value: "mes", label: "Este mês" },
];

const categoryStyles: Record<string, string> = {
  Todos: "bg-brand-petrol text-primary-foreground",
  Teatro: "bg-brand-red text-primary-foreground",
  Cinema: "bg-brand-cyan text-brand-petrol",
  Formação: "bg-brand-gold text-brand-petrol",
  Literatura: "bg-brand-lime text-brand-petrol",
  Esporte: "bg-brand-orange text-brand-petrol",
  Comunidade: "bg-brand-petrol text-primary-foreground",
  Sustentabilidade: "bg-brand-lime text-brand-petrol",
};

function Agenda() {
  const [category, setCategory] = useState<string>("Todos");
  const [period, setPeriod] = useState<AgendaPeriod>("proximos");

  const events = useMemo(() => {
    return sortByDate(agendaEvents).filter(
      (e) => isWithinPeriod(e, period) && (category === "Todos" || e.category === category),
    );
  }, [category, period]);

  return (
    <>
      <section className="relative isolate min-h-[500px] overflow-hidden bg-brand-petrol md:min-h-[560px]">
        <QuarterCircle corner="tr" color="#ED1C24" className="absolute -right-2 -top-2 w-40 md:w-56" />
        <HatchedCircle size={220} color="#08B9E6" className="absolute -bottom-16 -left-12 opacity-25" />
        <ArcThick color="#FFB400" className="absolute left-7 top-32 w-28 opacity-90 md:left-16 md:w-36" from={200} to={340} />
        <DiamondsCluster color="#08B9E6" className="absolute bottom-16 right-12 hidden opacity-80 md:block" size={54} />
        <div className="container-x relative grid min-h-[500px] items-center gap-10 pb-14 pt-28 md:min-h-[560px] md:grid-cols-[1fr_.8fr] md:pb-16 md:pt-32">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Programação cultural</p>
            <h1 className="mt-4 text-primary-foreground" style={{ fontSize: "clamp(2rem, 3.3vw, 3.5rem)", lineHeight: 1.1, fontWeight: 700 }}>Agenda</h1>
            <BrushStroke color="#FFB400" className="mt-5 w-36" />
            <p className="mt-6 max-w-2xl text-primary-foreground/90" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.6 }}>
              Cursos, sessões de cinema, oficinas, apresentações, encontros, atividades esportivas e outras ações do Ecossistema Maggu.
            </p>
          </div>
          <div className="relative mx-auto hidden aspect-square w-full max-w-[310px] md:block" aria-hidden="true">
            <div className="absolute inset-x-3 bottom-3 top-12 rotate-3 bg-brand-cyan" />
            <div className="absolute inset-x-8 bottom-8 top-0 -rotate-3 bg-background p-6">
              <div className="flex justify-between border-b-2 border-brand-petrol pb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-petrol"><span>Agenda</span><span>Maggu</span></div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["01", "07", "14", "21", "28", "•"].map((day, index) => <span key={`${day}-${index}`} className={`flex aspect-square items-center justify-center text-sm font-bold ${index === 2 ? "bg-brand-red text-primary-foreground" : index === 4 ? "bg-brand-gold text-brand-petrol" : "border border-brand-petrol/20 text-brand-petrol"}`}>{day}</span>)}
              </div>
              <div className="mt-6 h-2 w-3/4 bg-brand-petrol/15" />
              <div className="mt-3 h-2 w-1/2 bg-brand-petrol/15" />
            </div>
          </div>
        </div>
      </section>

      <Section className="overflow-hidden bg-background">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_.7fr] lg:gap-16">
          <div className="max-w-3xl">
            <SectionTitle eyebrow="Agenda Maggu" title="O que está acontecendo agora" text="A Agenda reúne atividades abertas, próximas programações e oportunidades de participação nas diferentes iniciativas da Associação." />
            <p className="leading-relaxed text-brand-gray">Encontre oficinas, cursos, sessões, apresentações, encontros e outras ações organizadas por data.</p>
          </div>
          <div className="relative mx-auto w-full max-w-sm bg-brand-gold p-7">
            <Triangle color="#ED1C24" size={38} className="absolute -right-3 -top-3" rotate={18} />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Como acompanhar</p>
            <div className="mt-5 grid grid-cols-[auto_1fr] items-center gap-5">
              <div className="bg-brand-petrol px-4 py-3 text-center text-primary-foreground"><span className="block text-3xl font-bold leading-none">14</span><span className="mt-1 block text-[10px] font-bold uppercase">set</span></div>
              <p className="text-sm leading-relaxed text-brand-petrol">Escolha uma categoria, filtre o período e acompanhe cada atividade pela data.</p>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-brand-soft pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="container-x">
          <div className="flex flex-col gap-7">
            <div>
              <h2 className="sr-only">Filtros da agenda</h2>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Categorias</p>
              <div role="group" aria-label="Filtrar por categoria" className="flex gap-2 overflow-x-auto pb-2">
                {["Todos", ...agendaCategories].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={category === c}
                    className={`shrink-0 border-2 px-4 py-2 text-sm font-semibold transition ${
                      category === c ? `${categoryStyles[c]} border-transparent` : "border-brand-petrol/20 bg-background text-brand-petrol hover:border-brand-red hover:text-brand-red"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Período</p>
              <div role="group" aria-label="Filtrar por período" className="flex flex-wrap gap-2">
              {periods.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPeriod(p.value)}
                  aria-pressed={period === p.value}
                  className={`border-2 px-4 py-2 text-sm font-semibold transition ${
                    period === p.value
                      ? "border-brand-petrol bg-brand-petrol text-primary-foreground"
                      : "border-brand-petrol/20 bg-background text-brand-gray hover:border-brand-petrol hover:text-brand-petrol"
                  }`}
                >
                  {p.label}
                </button>
              ))}
              </div>
            </div>
          </div>

          <div className="mt-10" aria-live="polite">
            {events.length ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => {
                  const { day, month, weekday } = eventDayMonth(event.date);
                  const closed = event.status === "inscricoes-encerradas";
                  return (
                    <article key={event.slug} className="relative flex min-h-[390px] flex-col overflow-hidden bg-background">
                      <div className={`flex items-end justify-between px-6 py-5 ${categoryStyles[event.category]}`}>
                        <time dateTime={event.date}>
                          <span className="block text-4xl font-bold leading-none">{day}</span>
                          <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em]">{month}</span>
                        </time>
                        <p className="text-xs font-bold uppercase tracking-[0.16em]">{event.category}</p>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <p className="text-xs font-semibold capitalize text-brand-gray">{weekday}{event.time ? ` · ${event.time}` : ""}</p>
                        <h3 className="mt-3 text-xl leading-snug text-brand-ink">{event.title}</h3>
                        {event.summary && <p className="mt-3 text-sm leading-relaxed text-brand-gray">{event.summary}</p>}
                        {event.location && <p className="mt-4 border-t border-brand-petrol/15 pt-4 text-sm font-semibold text-brand-petrol">{event.location}</p>}
                        <div className="mt-auto flex flex-col items-start gap-4 pt-6">
                        <AgendaStatusBadge event={event} />
                        <div className="flex flex-wrap gap-2">
                          <Link to="/agenda/$slug" params={{ slug: event.slug }} className="rounded-full border-2 border-brand-petrol px-5 py-2 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Saiba mais</Link>
                          {event.registrationUrl && !closed && <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand-red px-5 py-2 text-sm font-bold text-primary-foreground transition hover:bg-brand-petrol">Inscreva-se</a>}
                        </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="relative overflow-hidden bg-background px-7 py-10 md:grid md:grid-cols-[.8fr_1.2fr] md:items-center md:gap-12 md:px-12 md:py-12">
                <div className="relative mx-auto mb-9 h-48 w-48 md:mb-0" aria-hidden="true">
                  <div className="absolute inset-4 rotate-6 bg-brand-cyan" />
                  <div className="absolute inset-4 -rotate-6 bg-brand-gold" />
                  <div className="absolute inset-8 bg-brand-petrol p-5 text-primary-foreground">
                    <div className="flex justify-between border-b border-primary-foreground/40 pb-3 text-[10px] font-bold uppercase"><span>Próxima</span><span>data</span></div>
                    <span className="mt-4 block text-center text-6xl font-bold">+</span>
                  </div>
                </div>
                <div className="relative max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Programação em atualização</p>
                  <h2 className="mt-3 text-2xl text-brand-ink">Novas atividades em breve</h2>
                  <p className="mt-4 leading-relaxed text-brand-gray">A Agenda será atualizada conforme novas oficinas, apresentações, sessões, encontros e outras atividades forem confirmadas.</p>
                  <p className="mt-3 leading-relaxed text-brand-gray">Enquanto isso, conheça as iniciativas que fazem parte do Ecossistema Maggu.</p>
                  <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/projetos" className="rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-brand-petrol">Conheça os projetos</Link>
                  <Link to="/ecossistema" className="rounded-full border-2 border-brand-petrol px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Explore o Ecossistema</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-petrol py-14 md:py-18">
        <QuarterCircle corner="br" color="#ED1C24" className="absolute -bottom-2 -right-2 w-32 opacity-90" />
        <HatchedCircle size={160} color="#08B9E6" className="absolute -left-12 top-0 opacity-20" />
        <div className="container-x relative mx-auto max-w-3xl text-center text-primary-foreground">
          <h2 className="text-2xl text-primary-foreground md:text-3xl">Quer saber mais sobre uma atividade?</h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/90">
            Fale com a Associação ou conheça as iniciativas que originam a programação do Ecossistema Maggu.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/projetos" className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-background">Conheça os projetos</Link>
            <Link to="/contato" className="rounded-full border-2 border-primary-foreground px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-background/10">Entre em contato</Link>
          </div>
        </div>
      </section>
    </>
  );
}
