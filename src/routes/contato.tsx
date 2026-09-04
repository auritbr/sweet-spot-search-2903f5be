import { createFileRoute } from "@tanstack/react-router";
import { Accessibility, Clock3, ExternalLink, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { ArcThick, BrushStroke, DiamondsCluster, HatchedCircle, QuarterCircle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Cena Viva" },
      { name: "description", content: "Fale com o Ponto de Cultura Cena Viva: endereço, telefone, formulário e redes sociais." },
      { property: "og:title", content: "Contato — Cena Viva" },
      { property: "og:description", content: "Fale com o Ponto de Cultura." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);
  const mapsQuery = encodeURIComponent(site.address);
  const mapsUrl = `https://www.google.com/maps?q=${mapsQuery}`;
  const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <>
      <PageHero
        title="Contato"
        eyebrow="Fale conosco"
        subtitle="Quer participar, apoiar, propor uma parceria ou saber mais sobre nossos projetos? Estamos por aqui."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80"
        accent="red"
        brush="#ED1C24"
        compact
        decoration="crescent"
      />

      <section className="relative overflow-hidden bg-white py-12 md:py-16">
        <ArcThick color="#08B9E6" className="pointer-events-none absolute -left-12 top-16 hidden w-24 opacity-15 lg:block" from={195} to={325} />
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,520px)]">
          <div className="text-brand-ink">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Canais de contato</p>
            <h2 className="mt-2 text-2xl font-bold">Estamos por aqui</h2>
            <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
              <ContactCard icon={Mail} label="E-mail" value={site.email} href={`mailto:${site.email}`} accent="cyan" />
              <ContactCard icon={Phone} label="Telefone e WhatsApp" value={site.phone} support={`WhatsApp +${site.whatsapp}`} href={`https://wa.me/${site.whatsapp}`} accent="gold" />
              <ContactCard icon={MapPin} label="Endereço" value={site.address} accent="red" />
              <ContactCard icon={Clock3} label="Horário" value={site.hours} accent="petrol" />
              <ContactCard icon={Accessibility} label="Acessibilidade" value="Espaço acessível, VLibras disponível no site e canal aberto para solicitações de acessibilidade." accent="cyan" wide />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <span className="mr-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gray"><Share2 className="size-4 text-brand-red" aria-hidden="true" /> Redes</span>
              {[["Instagram", site.social.instagram], ["Facebook", site.social.facebook], ["YouTube", site.social.youtube]].map(([label, href]) => (
                <a key={label} href={href} className="rounded-full border border-brand-petrol/12 bg-brand-soft/55 px-4 py-2 text-xs font-semibold text-brand-ink transition hover:border-brand-red/25 hover:bg-white hover:text-brand-red">{label}</a>
              ))}
            </div>
          </div>

          <div className="relative bg-white text-brand-ink rounded-2xl p-5 md:p-6 shadow-xl w-full lg:max-w-[520px] lg:justify-self-end">
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>Envie sua mensagem</h2>
            <BrushStroke color="#FFB400" className="mt-2 w-16" />
            {sent ? (
              <p className="mt-5 p-4 rounded-xl bg-brand-lime/40 text-brand-ink font-semibold text-sm">Mensagem enviada com sucesso. Em breve retornamos!</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-4 grid gap-3">
                <Field label="Nome completo" name="nome" />
                <Field label="E-mail" name="email" type="email" />
                <Field label="Telefone" name="tel" />
                <Field label="Assunto" name="assunto" />
                <div>
                  <label htmlFor="msg" className="block text-xs font-semibold mb-1.5">Mensagem</label>
                  <textarea id="msg" name="msg" required rows={4} className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm bg-brand-soft focus:bg-white outline-none focus:border-brand-red" />
                </div>
                <Button type="submit" size="sm" className="mt-1 justify-self-start rounded-full bg-brand-gold px-6 text-xs font-bold uppercase tracking-wider text-brand-ink hover:bg-brand-red hover:text-primary-foreground">Enviar mensagem</Button>
              </form>
            )}
            <HatchedCircle size={90} color="#08B9E6" className="absolute -top-6 -right-4 opacity-60 -z-0" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-10 md:py-14">
        <QuarterCircle corner="br" color="#FFB400" className="pointer-events-none absolute bottom-0 right-0 w-20 opacity-15 md:w-28" />
        <ArcThick color="#08B9E6" className="pointer-events-none absolute -left-10 top-16 hidden w-24 opacity-20 md:block" from={205} to={335} />
        <div className="container-x relative">
          <div className="relative mx-auto" style={{ maxWidth: 860 }}>
            <DiamondsCluster color="#ED1C24" size={30} className="pointer-events-none absolute -right-3 -top-2 hidden opacity-55 md:block" />
            <div className="flex items-end justify-between gap-4 flex-wrap mb-4">
              <div>
                <p className="uppercase tracking-[0.22em] text-brand-red text-xs" style={{ fontWeight: 600 }}>Onde estamos</p>
                <h2 className="mt-1 text-brand-ink" style={{ fontSize: "1.25rem", fontWeight: 700 }}>Nossa localização</h2>
              </div>
              <Button asChild size="sm" className="rounded-full bg-brand-petrol px-5 text-xs font-semibold text-primary-foreground hover:bg-brand-red">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">Abrir no Google Maps <ExternalLink className="size-3.5" aria-hidden="true" /></a>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <iframe
                title="Mapa da localização"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full block"
                style={{ height: "clamp(240px, 32vh, 300px)", border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const contactAccent = {
  cyan: "bg-brand-cyan/18 text-brand-petrol",
  gold: "bg-brand-gold/20 text-brand-petrol",
  red: "bg-brand-red/10 text-brand-red",
  petrol: "bg-brand-petrol/10 text-brand-petrol",
} as const;

function ContactCard({ icon: Icon, label, value, support, href, accent, wide = false }: { icon: typeof Mail; label: string; value: string; support?: string; href?: string; accent: keyof typeof contactAccent; wide?: boolean }) {
  const content = (
    <>
      <span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${contactAccent[accent]}`}><Icon className="size-5" aria-hidden="true" /></span>
      <span className="min-w-0">
        <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">{label}</span>
        <span className="mt-1 block break-words text-sm font-semibold leading-snug text-brand-ink">{value}</span>
        {support ? <span className="mt-1 block text-xs text-brand-gray">{support}</span> : null}
      </span>
    </>
  );

  return (
    <article className={`relative overflow-hidden rounded-xl border border-brand-petrol/10 bg-brand-soft/45 p-4 shadow-[0_14px_30px_-28px_rgba(0,56,76,0.5)] ${wide ? "sm:col-span-2" : ""}`}>
      <span className="pointer-events-none absolute -right-3 -top-3 size-10 rounded-full border-[7px] border-brand-gold/15" aria-hidden="true" />
      {href ? <a href={href} className="relative flex h-full gap-3 transition hover:text-brand-red">{content}</a> : <div className="relative flex h-full gap-3">{content}</div>}
    </article>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold mb-1.5">{label}</label>
      <input id={name} name={name} type={type} required className="w-full rounded-lg border border-black/10 px-3 py-2 text-sm bg-brand-soft focus:bg-white outline-none focus:border-brand-red" />
    </div>
  );
}
