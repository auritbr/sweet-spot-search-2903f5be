import { Link } from "@tanstack/react-router";
import { agendaStatusLabels, eventDayMonth, formatEventDate, type AgendaEvent } from "@/data/agenda";

const statusStyles: Record<string, string> = {
  "inscricoes-abertas": "bg-brand-lime text-brand-petrol",
  "ultimas-vagas": "bg-brand-gold text-brand-petrol",
  "inscricoes-encerradas": "bg-brand-soft text-brand-petrol",
  "em-breve": "bg-brand-cyan text-brand-petrol",
};

export function AgendaStatusBadge({ event }: { event: AgendaEvent }) {
  const badges: { label: string; className: string }[] = [];
  if (event.status) {
    badges.push({ label: agendaStatusLabels[event.status], className: statusStyles[event.status] });
  }
  if (event.free === true) badges.push({ label: "Gratuito", className: "bg-brand-petrol text-white" });
  else if (event.price) badges.push({ label: event.price, className: "bg-brand-petrol text-white" });
  if (!badges.length) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {badges.map((b) => (
        <li key={b.label} className={`rounded-full px-3 py-1 text-xs font-bold ${b.className}`}>
          {b.label}
        </li>
      ))}
    </ul>
  );
}

export function AgendaCard({ event }: { event: AgendaEvent }) {
  const { day, month, weekday } = eventDayMonth(event.date);
  const closed = event.status === "inscricoes-encerradas";

  return (
    <article className="rounded-md border border-brand-petrol/10 bg-white p-5 md:p-6 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-7">
      <div className="flex items-center gap-4 md:block md:w-24 md:text-center">
        <time dateTime={event.date} className="block">
          <span className="block text-3xl font-bold leading-none text-brand-red">{day}</span>
          <span className="block text-xs font-bold uppercase tracking-[0.18em] text-brand-petrol">{month}</span>
          <span className="sr-only">{formatEventDate(event.date)}</span>
        </time>
        <p className="text-sm text-brand-gray md:mt-2">
          <span className="capitalize">{weekday}</span>
          {event.time ? ` · ${event.time}` : ""}
        </p>
      </div>

      <div className="mt-4 min-w-0 md:mt-0 md:border-l md:border-brand-petrol/10 md:pl-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">{event.category}</p>
        <h3 className="mt-2 text-xl leading-snug text-brand-ink">{event.title}</h3>
        {event.summary && <p className="mt-2 text-sm leading-relaxed text-brand-gray">{event.summary}</p>}
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-brand-gray">
          {event.location && <li>{event.location}</li>}
          {event.ageRange && <li>{event.ageRange}</li>}
          {event.accessibility && <li>{event.accessibility}</li>}
        </ul>
      </div>

      <div className="mt-5 flex flex-col items-start gap-3 md:mt-0 md:items-end">
        <AgendaStatusBadge event={event} />
        {closed ? (
          <p className="text-sm text-brand-gray md:text-right">
            <strong className="block text-brand-ink">Inscrições encerradas.</strong>
            Acompanhe a Agenda para novas oportunidades.
          </p>
        ) : null}
        <div className="flex flex-wrap gap-2">
          <Link
            to="/agenda/$slug"
            params={{ slug: event.slug }}
            className="rounded-full border-2 border-brand-petrol px-5 py-2 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft"
          >
            Saiba mais
          </Link>
          {event.registrationUrl && !closed && (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-red px-5 py-2 text-sm font-bold text-white transition hover:bg-brand-petrol"
            >
              Inscreva-se
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function AgendaEmptyState() {
  return (
    <div className="rounded-md border-l-4 border-brand-red bg-brand-soft p-8 text-center">
      <h3 className="text-xl text-brand-ink">Nenhuma atividade disponível no momento.</h3>
      <p className="mx-auto mt-3 max-w-xl leading-relaxed text-brand-gray">
        Novas atividades serão anunciadas em breve. Enquanto isso, conheça nossas iniciativas.
      </p>
      <Link
        to="/projetos"
        className="mt-6 inline-flex rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-petrol"
      >
        Conheça os projetos
      </Link>
    </div>
  );
}
