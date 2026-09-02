import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Clock3, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { ArcThick, BrushStroke, DiamondsCluster, HatchedCircle, Triangle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";
import { FinalCampaignCTA } from "@/components/FinalCampaignCTA";
import {
  agendaCategories,
  agendaEvents,
  agendaStatusLabels,
  parseEventDate,
  sortByDate,
  type AgendaCategory,
  type AgendaEvent,
} from "@/data/agenda";

export const Route = createFileRoute("/agenda/")({
  head: () => ({
    meta: [
      { title: "Agenda | Associação Maggu" },
      { name: "description", content: "Acompanhe cursos, oficinas, sessões, apresentações, encontros e outras atividades do Ecossistema Maggu." },
      { property: "og:title", content: "Agenda | Associação Maggu" },
      { property: "og:description", content: "Acompanhe a programação cultural, formativa e comunitária da Associação Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/agenda" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/agenda" }],
  }),
  component: Agenda,
});

type CalendarView = "semana" | "mes" | "proximos";

const views: { value: CalendarView; label: string }[] = [
  { value: "semana", label: "Semana" },
  { value: "mes", label: "Mês" },
  { value: "proximos", label: "Próximos eventos" },
];

const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

const categoryStyle: Record<AgendaCategory, { surface: string; text: string }> = {
  Teatro: { surface: "bg-brand-red/8", text: "text-brand-red" },
  Cinema: { surface: "bg-brand-cyan/10", text: "text-brand-petrol" },
  Formação: { surface: "bg-brand-gold/12", text: "text-brand-petrol" },
  Literatura: { surface: "bg-brand-lime/15", text: "text-brand-petrol" },
  Esporte: { surface: "bg-brand-orange/10", text: "text-brand-petrol" },
  Comunidade: { surface: "bg-brand-petrol/8", text: "text-brand-petrol" },
  Sustentabilidade: { surface: "bg-brand-lime/15", text: "text-brand-petrol" },
};

function atStartOfDay(date: Date) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value;
}

function addDays(date: Date, amount: number) {
  const value = new Date(date);
  value.setDate(value.getDate() + amount);
  return value;
}

function startOfWeek(date: Date) {
  return addDays(atStartOfDay(date), -date.getDay());
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function sameDay(first: Date, second: Date) {
  return first.getFullYear() === second.getFullYear()
    && first.getMonth() === second.getMonth()
    && first.getDate() === second.getDate();
}

function dateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function CalendarEvent({ event }: { event: AgendaEvent }) {
  const style = categoryStyle[event.category];
  return (
    <Link
      to="/agenda/$slug"
      params={{ slug: event.slug }}
      className={`group block rounded-md border border-background/80 ${style.surface} p-3 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:border-brand-petrol/15 hover:shadow-md`}
    >
      <p className={`text-[10px] font-bold uppercase ${style.text}`}>{event.category}</p>
      <h3 className="mt-1 text-sm leading-snug text-brand-ink group-hover:text-brand-red">{event.title}</h3>
      {event.time && (
        <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-brand-gray">
          <Clock3 aria-hidden="true" className="size-3" /> {event.time}
        </p>
      )}
      {event.location && (
        <p className="mt-1 flex items-start gap-1.5 text-[11px] leading-snug text-brand-gray">
          <MapPin aria-hidden="true" className="mt-0.5 size-3 shrink-0" /> {event.location}
        </p>
      )}
      {event.status && (
        <span className="mt-2 inline-flex rounded-full border border-background/80 bg-background/70 px-2 py-1 text-[9px] font-bold uppercase text-brand-petrol backdrop-blur-sm">
          {agendaStatusLabels[event.status]}
        </span>
      )}
    </Link>
  );
}

function Agenda() {
  const [category, setCategory] = useState<"Todos" | AgendaCategory>("Todos");
  const [view, setView] = useState<CalendarView>("semana");
  const [cursor, setCursor] = useState(() => atStartOfDay(new Date()));

  const filteredEvents = useMemo(
    () => sortByDate(agendaEvents).filter((event) => category === "Todos" || event.category === category),
    [category],
  );

  const calendarDays = useMemo(() => {
    if (view === "mes") {
      const first = startOfWeek(startOfMonth(cursor));
      const last = addDays(startOfWeek(endOfMonth(cursor)), 6);
      const days: Date[] = [];
      for (let day = first; day <= last; day = addDays(day, 1)) days.push(day);
      return days;
    }

    if (view === "proximos") {
      const firstUpcoming = filteredEvents.find((event) => parseEventDate(event.date) >= cursor);
      const first = startOfWeek(firstUpcoming ? parseEventDate(firstUpcoming.date) : cursor);
      return Array.from({ length: 7 }, (_, index) => addDays(first, index));
    }

    const first = startOfWeek(cursor);
    return Array.from({ length: 7 }, (_, index) => addDays(first, index));
  }, [cursor, filteredEvents, view]);

  const eventsByDay = useMemo(() => {
    const grouped = new Map<string, AgendaEvent[]>();
    filteredEvents.forEach((event) => {
      const list = grouped.get(event.date) ?? [];
      list.push(event);
      grouped.set(event.date, list);
    });
    return grouped;
  }, [filteredEvents]);

  const visibleEvents = calendarDays.reduce((total, day) => total + (eventsByDay.get(dateKey(day))?.length ?? 0), 0);
  const title = view === "mes"
    ? cursor.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
    : calendarDays[0].getMonth() === calendarDays[calendarDays.length - 1].getMonth()
      ? calendarDays[0].toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
      : `${calendarDays[0].toLocaleDateString("pt-BR", { month: "short" })} — ${calendarDays[calendarDays.length - 1].toLocaleDateString("pt-BR", { month: "short", year: "numeric" })}`;

  const movePeriod = (direction: -1 | 1) => {
    if (view === "mes") {
      setCursor((current) => new Date(current.getFullYear(), current.getMonth() + direction, 1));
      return;
    }
    setCursor((current) => addDays(current, direction * 7));
  };

  return (
    <>
      <section className="relative flex h-[310px] items-center overflow-hidden bg-brand-soft sm:h-[330px] lg:h-[370px]">
        <ArcThick color="#00384C" className="absolute -left-8 top-24 w-40 opacity-80 md:w-52" from={200} to={340} />
        <HatchedCircle size={140} color="#08B9E6" className="absolute -right-12 -top-12 opacity-50" />
        <Triangle color="#FFB400" size={54} className="absolute bottom-8 right-16 hidden md:block" rotate={20} />
        <DiamondsCluster color="#ED1C24" className="absolute bottom-8 left-[18%] hidden opacity-70 lg:block" size={42} />
        <div className="container-x relative text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Programação</p>
          <h1 className="text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.06, fontWeight: 700 }}>Agenda</h1>
          <BrushStroke color="#FFB400" className="mx-auto mt-4 w-32" />
          <p className="mx-auto mt-4 max-w-xl text-brand-gray" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", lineHeight: 1.55 }}>
            Acompanhe cursos, oficinas, sessões, apresentações, encontros e outras atividades do Ecossistema Maggu.
          </p>
        </div>
      </section>

      <main id="programacao" className="relative overflow-hidden bg-background py-14 md:py-20">
        <HatchedCircle size={180} color="#08B9E6" className="pointer-events-none absolute -right-24 top-72 opacity-10" />
        <div className="container-x">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Agenda Maggu</p>
            <h2 className="mt-3 text-brand-ink" style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.15, fontWeight: 700 }}>
              Acompanhe a programação
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-brand-gray">
              Veja as atividades da Associação Maggu por categoria e período, de forma simples, visual e organizada.
            </p>
            <p className="mt-2 text-sm text-brand-gray">A agenda reúne ações culturais, formativas e comunitárias do Ecossistema Maggu.</p>
          </header>

          <div className="mx-auto mt-10 max-w-5xl rounded-lg border border-background/80 bg-background/70 p-3 shadow-[0_12px_40px_rgba(0,56,76,0.08)] backdrop-blur-xl md:p-4">
            <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-8">
              <fieldset className="min-w-0 text-center">
                <legend className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gray">Categoria</legend>
                <div className="flex max-w-full flex-wrap justify-center gap-2 pb-1">
                  {(["Todos", ...agendaCategories] as const).map((item) => (
                    <Button
                      key={item}
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => setCategory(item)}
                      aria-pressed={category === item}
                      className={`shrink-0 rounded-full border px-4 shadow-none backdrop-blur-md ${category === item ? "border-brand-red bg-brand-red text-primary-foreground hover:bg-brand-red/90 hover:text-primary-foreground" : "border-brand-petrol/10 bg-background/65 text-brand-petrol hover:bg-brand-soft/80 hover:text-brand-petrol"}`}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </fieldset>

              <div className="hidden h-12 w-px bg-brand-petrol/10 lg:block" aria-hidden="true" />

              <fieldset className="min-w-0 text-center">
                <legend className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gray">Período</legend>
                <div className="flex flex-wrap justify-center gap-2 pb-1">
                  {views.slice(0, 2).map((item) => (
                    <Button
                      key={item.value}
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => setView(item.value)}
                      aria-pressed={view === item.value}
                      className={`shrink-0 rounded-full border px-4 shadow-none backdrop-blur-md ${view === item.value ? "border-brand-petrol bg-brand-petrol text-primary-foreground hover:bg-brand-petrol/90 hover:text-primary-foreground" : "border-brand-petrol/10 bg-background/65 text-brand-petrol hover:bg-brand-soft/80 hover:text-brand-petrol"}`}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap justify-center gap-2 pb-1">
                  {views.slice(2).map((item) => (
                    <Button
                      key={item.value}
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => setView(item.value)}
                      aria-pressed={view === item.value}
                      className={`shrink-0 rounded-full border px-4 shadow-none backdrop-blur-md ${view === item.value ? "border-brand-petrol bg-brand-petrol text-primary-foreground hover:bg-brand-petrol/90 hover:text-primary-foreground" : "border-brand-petrol/10 bg-background/65 text-brand-petrol hover:bg-brand-soft/80 hover:text-brand-petrol"}`}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          <section aria-labelledby="calendar-title" className="mx-auto mt-8 max-w-7xl overflow-hidden rounded-lg border border-brand-petrol/10 bg-background">
            <div className="flex flex-col gap-4 border-b border-brand-petrol/10 px-4 py-5 sm:flex-row sm:items-center sm:justify-between md:px-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">{view === "mes" ? "Calendário mensal" : "Calendário semanal"}</p>
                <h2 id="calendar-title" className="mt-1 capitalize text-brand-ink" style={{ fontSize: "clamp(1.35rem, 2vw, 1.8rem)", fontWeight: 700 }}>{title}</h2>
              </div>
              <div className="flex items-center gap-2">
                <Button type="button" variant="outline" size="icon" aria-label="Período anterior" onClick={() => movePeriod(-1)} className="rounded-full border-brand-petrol/15 bg-background shadow-none hover:bg-brand-soft">
                  <ChevronLeft aria-hidden="true" />
                </Button>
                <Button type="button" variant="outline" onClick={() => setCursor(atStartOfDay(new Date()))} className="rounded-full border-brand-petrol/15 bg-background px-5 text-brand-petrol shadow-none hover:bg-brand-soft">
                  Hoje
                </Button>
                <Button type="button" variant="outline" size="icon" aria-label="Próximo período" onClick={() => movePeriod(1)} className="rounded-full border-brand-petrol/15 bg-background shadow-none hover:bg-brand-soft">
                  <ChevronRight aria-hidden="true" />
                </Button>
              </div>
            </div>

            <div className="hidden grid-cols-7 border-b border-brand-petrol/10 bg-brand-soft/55 md:grid">
              {weekdays.map((day) => <div key={day} className="px-3 py-3 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-brand-gray">{day}</div>)}
            </div>

            <div className="grid md:grid-cols-7">
              {calendarDays.map((day) => {
                const dayEvents = eventsByDay.get(dateKey(day)) ?? [];
                const isToday = sameDay(day, new Date());
                const outsideMonth = view === "mes" && day.getMonth() !== cursor.getMonth();
                return (
                  <article key={dateKey(day)} className={`min-h-36 border-b border-brand-petrol/10 p-3 md:min-h-52 md:border-r ${outsideMonth ? "bg-brand-soft/35" : "bg-background"}`}>
                    <div className="mb-3 flex items-center justify-between md:justify-end">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-gray md:hidden">{weekdays[day.getDay()]}</p>
                      <time dateTime={dateKey(day)} className={`flex size-8 items-center justify-center rounded-full text-sm font-bold ${isToday ? "bg-brand-red text-primary-foreground" : outsideMonth ? "text-brand-gray/50" : "text-brand-petrol"}`}>
                        {day.getDate()}
                      </time>
                    </div>
                    <div className="space-y-2">
                      {dayEvents.map((event) => <CalendarEvent key={event.slug} event={event} />)}
                    </div>
                  </article>
                );
              })}
            </div>

            {visibleEvents === 0 && (
              <div className="flex flex-col items-center border-t border-brand-petrol/10 bg-brand-soft/35 px-6 py-9 text-center">
                <span className="mb-4 h-1.5 w-14 rounded-full bg-brand-gold" aria-hidden="true" />
                <h3 className="text-lg text-brand-ink">Nenhuma atividade neste período</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-brand-gray">A programação será atualizada conforme novas atividades forem confirmadas. Navegue pelos períodos ou escolha outra categoria.</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <FinalCampaignCTA eyebrow="Siga acompanhando" title="Quer acompanhar mais de perto as atividades da Maggu?" text="Entre em contato, conheça os projetos e acompanhe a programação para descobrir novas experiências, encontros e ações culturais." primary={{ label: "Conheça os Projetos", to: "/projetos" }} secondary={{ label: "Entre em Contato", to: "/contato" }} image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1920&q=80" />
    </>
  );
}