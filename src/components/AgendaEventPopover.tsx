import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarDays, Check, Clock3, Facebook, Instagram, Link2, Linkedin, MapPin, MessageCircle, Share2, X } from "lucide-react";
import { cloneElement, isValidElement, useState, type ReactElement, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { agendaCategoryStyles, agendaStatusLabels, formatEventDate, type AgendaEvent } from "@/data/agenda";
import { useIsMobile } from "@/hooks/use-mobile";

type AgendaEventPopoverProps = {
  event: AgendaEvent;
  children: ReactElement;
};

const shareButtonClass = "size-9 rounded-lg border border-brand-petrol/12 bg-background/70 p-0 text-brand-petrol shadow-sm backdrop-blur-sm transition hover:border-brand-red/45 hover:bg-brand-red/8 hover:text-brand-red";

function EventDetails({ event, close }: { event: AgendaEvent; close?: ReactNode }) {
  const style = agendaCategoryStyles[event.category];
  const [feedback, setFeedback] = useState<"link" | "instagram" | null>(null);
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
    setFeedback(target);
    window.setTimeout(() => setFeedback(null), 2200);
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-background/96 p-5 shadow-xl backdrop-blur-xl sm:p-6">
      <span className={`absolute inset-x-0 top-0 h-1 bg-current ${style.accentText}`} aria-hidden="true" />
      {close}
      <div className="pr-8">
        <p className={`text-[10px] font-bold uppercase tracking-[0.14em] ${style.text}`}>{event.category}</p>
        <h2 className="mt-2 text-xl leading-tight text-brand-ink">{event.title}</h2>
      </div>

      <dl className="mt-5 grid gap-2.5 text-xs text-brand-gray">
        <div className="grid grid-cols-[1rem_minmax(0,1fr)] items-start gap-2"><CalendarDays className={`mt-px size-3.5 ${style.accentText}`} aria-hidden="true" /><div><dt className="sr-only">Data</dt><dd className="font-semibold text-brand-ink">{formatEventDate(event.date)}</dd></div></div>
        {event.time && <div className="grid grid-cols-[1rem_minmax(0,1fr)] items-start gap-2"><Clock3 className={`mt-px size-3.5 ${style.accentText}`} aria-hidden="true" /><div><dt className="sr-only">Horário</dt><dd>{event.time}</dd></div></div>}
        {event.location && <div className="grid grid-cols-[1rem_minmax(0,1fr)] items-start gap-2"><MapPin className={`mt-px size-3.5 ${style.accentText}`} aria-hidden="true" /><div><dt className="sr-only">Local</dt><dd>{event.location}</dd></div></div>}
      </dl>

      <div className="mt-4 flex flex-wrap gap-2">
        {event.status && <span className={`rounded-full border border-current bg-background/65 px-2.5 py-1 text-[10px] font-semibold ${style.accentText}`}>{agendaStatusLabels[event.status]}</span>}
        {event.free === true && <span className="rounded-full border border-brand-petrol/12 bg-brand-soft/65 px-2.5 py-1 text-[10px] font-semibold text-brand-petrol">Gratuito</span>}
        {event.price && <span className="rounded-full border border-brand-petrol/12 bg-brand-soft/65 px-2.5 py-1 text-[10px] font-semibold text-brand-petrol">{event.price}</span>}
      </div>

      <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-brand-gray">{event.summary ?? event.description ?? "Mais informações serão divulgadas em breve."}</p>

      <div className="mt-5 border-t border-brand-petrol/10 pt-4">
        <p className="flex items-center gap-2 text-xs font-semibold text-brand-ink"><Share2 className="size-3.5" aria-hidden="true" />Compartilhar esta atividade</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="ghost" className={shareButtonClass} aria-label="Compartilhar no WhatsApp" title="WhatsApp" onClick={() => openShare(`https://wa.me/?text=${encodeURIComponent(`${event.title} — ${canonicalUrl()}`)}`)}><MessageCircle aria-hidden="true" /></Button>
          <Button variant="ghost" className={shareButtonClass} aria-label="Copiar link para compartilhar no Instagram" title="Instagram" onClick={() => void copyLink("instagram")}>{feedback === "instagram" ? <Check aria-hidden="true" /> : <Instagram aria-hidden="true" />}</Button>
          <Button variant="ghost" className={shareButtonClass} aria-label="Compartilhar no LinkedIn" title="LinkedIn" onClick={() => openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl())}`)}><Linkedin aria-hidden="true" /></Button>
          <Button variant="ghost" className={shareButtonClass} aria-label="Compartilhar no Facebook" title="Facebook" onClick={() => openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl())}`)}><Facebook aria-hidden="true" /></Button>
          <Button variant="ghost" className={shareButtonClass} aria-label="Copiar link da atividade" title="Copiar link" onClick={() => void copyLink("link")}>{feedback === "link" ? <Check aria-hidden="true" /> : <Link2 aria-hidden="true" />}</Button>
        </div>
        <p className="mt-1.5 min-h-4 text-[10px] text-brand-gray" aria-live="polite">{feedback === "instagram" ? "Link copiado para compartilhar no Instagram." : feedback === "link" ? "Link copiado." : ""}</p>
      </div>

      <Button asChild size="sm" className="mt-2 rounded-full border border-brand-petrol/15 bg-brand-petrol/90 px-4 text-primary-foreground shadow-sm backdrop-blur-md hover:bg-brand-red">
        <Link to="/contato">Fale com a Associação</Link>
      </Button>
    </div>
  );
}

export function AgendaEventPopover({ event, children }: AgendaEventPopoverProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <DialogPrimitive.Root>
        <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-brand-petrol/25 backdrop-blur-[2px] data-[state=closed]:animate-out data-[state=open]:animate-in" />
          <DialogPrimitive.Content className="fixed inset-x-3 bottom-3 z-50 max-h-[82dvh] overflow-y-auto rounded-xl border border-brand-petrol/12 bg-background/96 shadow-xl outline-none data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom">
            <DialogPrimitive.Title className="sr-only">Detalhes de {event.title}</DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">Informações essenciais da atividade</DialogPrimitive.Description>
            <EventDetails event={event} close={<DialogPrimitive.Close asChild><Button type="button" variant="ghost" size="icon" className="absolute right-3 top-3 z-10 size-8 rounded-full" aria-label="Fechar detalhes"><X aria-hidden="true" /></Button></DialogPrimitive.Close>} />
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>{isValidElement(children) ? cloneElement(children) : children}</PopoverTrigger>
      <PopoverContent side="right" align="start" sideOffset={10} collisionPadding={16} className="w-[min(390px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-brand-petrol/12 bg-transparent p-0 shadow-none">
        <EventDetails event={event} />
      </PopoverContent>
    </Popover>
  );
}