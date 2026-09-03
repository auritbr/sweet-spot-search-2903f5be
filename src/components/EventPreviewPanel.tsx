import { Link } from "@tanstack/react-router";
import { CalendarDays, Check, Clock3, Facebook, Instagram, Link2, Linkedin, MapPin, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import { AgendaStatusBadge } from "@/components/AgendaCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { agendaCategoryStyles, formatEventDate, type AgendaEvent } from "@/data/agenda";

type EventPreviewPanelProps = {
  event: AgendaEvent | null;
  onOpenChange: (open: boolean) => void;
};

const shareButtonClass = "group relative size-10 rounded-lg border border-brand-ink/15 bg-background/65 p-0 text-brand-ink shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-red/55 hover:bg-brand-red/10 hover:text-brand-red";

export function EventPreviewPanel({ event, onOpenChange }: EventPreviewPanelProps) {
  const [shareFeedback, setShareFeedback] = useState<"link" | "instagram" | null>(null);
  if (!event) return null;

  const style = agendaCategoryStyles[event.category];
  const canonicalUrl = () => `${window.location.origin}/agenda/${event.slug}`;
  const openShare = (url: string) => window.open(url, "_blank", "noopener,noreferrer,width=720,height=640");
  const copyLink = async (target: "link" | "instagram") => {
    const url = canonicalUrl();
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
  const hasFullPageContent = Boolean(event.description || event.guidelines?.length || event.registrationUrl || event.relatedProject);

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby="event-preview-description"
        className="!bottom-0 !left-0 !top-auto !flex !max-h-[92dvh] !w-full !max-w-none !translate-x-0 !translate-y-0 flex-col gap-0 overflow-hidden rounded-t-2xl border-brand-petrol/10 bg-background/95 p-0 shadow-2xl backdrop-blur-xl data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom md:!bottom-auto md:!left-auto md:!right-0 md:!top-0 md:!h-dvh md:!max-h-none md:!w-[min(480px,42vw)] md:rounded-none md:rounded-l-2xl data-[state=closed]:md:slide-out-to-right data-[state=open]:md:slide-in-from-right"
      >
        <span className={`h-1.5 w-full shrink-0 bg-current ${style.accentText}`} aria-hidden="true" />
        <div className="overflow-y-auto px-5 pb-8 pt-7 sm:px-7 md:px-8 md:pb-10 md:pt-9">
          <div className="pr-10">
            <p className={`text-[11px] font-bold uppercase tracking-[0.16em] ${style.text}`}>{event.category}</p>
            <DialogTitle className="mt-2 text-[1.55rem] font-bold leading-tight text-brand-ink md:text-[1.85rem]">{event.title}</DialogTitle>
            <DialogDescription id="event-preview-description" className="sr-only">Detalhes da atividade {event.title}</DialogDescription>
          </div>

          <dl className="mt-6 grid gap-3 rounded-xl border border-brand-petrol/8 bg-brand-soft/35 p-4 text-sm">
            <div className="grid grid-cols-[1.25rem_minmax(0,1fr)] items-start gap-2.5">
              <CalendarDays className={`mt-0.5 size-4 ${style.accentText}`} aria-hidden="true" />
              <div><dt className="sr-only">Data</dt><dd className="font-semibold text-brand-ink">{formatEventDate(event.date)}</dd></div>
            </div>
            {event.time && <div className="grid grid-cols-[1.25rem_minmax(0,1fr)] items-start gap-2.5"><Clock3 className={`mt-0.5 size-4 ${style.accentText}`} aria-hidden="true" /><div><dt className="sr-only">Horário</dt><dd className="text-brand-gray">{event.time}</dd></div></div>}
            {event.location && <div className="grid grid-cols-[1.25rem_minmax(0,1fr)] items-start gap-2.5"><MapPin className={`mt-0.5 size-4 ${style.accentText}`} aria-hidden="true" /><div><dt className="sr-only">Local</dt><dd className="text-brand-gray">{event.location}</dd></div></div>}
          </dl>

          <div className="mt-5"><AgendaStatusBadge event={event} statusAccentClass={style.accentText} /></div>
          <p className="mt-6 text-sm leading-[1.75] text-brand-gray">{event.description ?? event.summary ?? "Mais informações sobre esta atividade serão divulgadas em breve."}</p>

          {(event.price || event.ageRange || event.accessibility || event.contact) && (
            <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-brand-petrol/10 pt-5 text-sm">
              {event.price && <div><dt className={`text-[10px] font-bold uppercase tracking-[0.12em] ${style.accentText}`}>Valor</dt><dd className="mt-1 text-brand-gray">{event.price}</dd></div>}
              {event.ageRange && <div><dt className={`text-[10px] font-bold uppercase tracking-[0.12em] ${style.accentText}`}>Público</dt><dd className="mt-1 text-brand-gray">{event.ageRange}</dd></div>}
              {event.accessibility && <div><dt className={`text-[10px] font-bold uppercase tracking-[0.12em] ${style.accentText}`}>Acessibilidade</dt><dd className="mt-1 text-brand-gray">{event.accessibility}</dd></div>}
              {event.contact && <div><dt className={`text-[10px] font-bold uppercase tracking-[0.12em] ${style.accentText}`}>Contato</dt><dd className="mt-1 text-brand-gray">{event.contact}</dd></div>}
            </dl>
          )}

          <section aria-labelledby="preview-share-title" className="mt-7 border-t border-brand-petrol/10 pt-6">
            <h3 id="preview-share-title" className="flex items-center gap-2 text-sm font-semibold text-brand-ink"><Share2 className="size-4" aria-hidden="true" />Compartilhar</h3>
            <div className="mt-3 flex flex-wrap gap-2.5">
              <Button variant="ghost" className={shareButtonClass} aria-label="Compartilhar no WhatsApp" title="WhatsApp" onClick={() => openShare(`https://wa.me/?text=${encodeURIComponent(`${event.title} — ${canonicalUrl()}`)}`)}><MessageCircle aria-hidden="true" /></Button>
              <Button variant="ghost" className={shareButtonClass} aria-label="Copiar link para compartilhar no Instagram" title="Instagram" onClick={() => void copyLink("instagram")}>{shareFeedback === "instagram" ? <Check aria-hidden="true" /> : <Instagram aria-hidden="true" />}</Button>
              <Button variant="ghost" className={shareButtonClass} aria-label="Compartilhar no LinkedIn" title="LinkedIn" onClick={() => openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl())}`)}><Linkedin aria-hidden="true" /></Button>
              <Button variant="ghost" className={shareButtonClass} aria-label="Compartilhar no Facebook" title="Facebook" onClick={() => openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl())}`)}><Facebook aria-hidden="true" /></Button>
              <Button variant="ghost" className={shareButtonClass} aria-label="Copiar link da atividade" title="Copiar link" onClick={() => void copyLink("link")}>{shareFeedback === "link" ? <Check aria-hidden="true" /> : <Link2 aria-hidden="true" />}</Button>
            </div>
            <p className="mt-2 min-h-5 text-xs text-brand-gray" aria-live="polite">{shareFeedback === "instagram" ? "Link copiado para compartilhar no Instagram." : shareFeedback === "link" ? "Link copiado." : ""}</p>
          </section>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-full bg-brand-petrol px-5 text-primary-foreground shadow-sm hover:bg-brand-red"><Link to="/contato">Fale com a Associação</Link></Button>
            {hasFullPageContent && <Link to="/agenda/$slug" params={{ slug: event.slug }} className="text-sm font-semibold text-brand-petrol underline decoration-brand-red decoration-2 underline-offset-4 transition hover:text-brand-red">Ver página completa</Link>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}