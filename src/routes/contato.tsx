import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Facebook, Instagram, Mail, MessageCircle, Phone, Share2, Youtube } from "lucide-react";
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

const socialLinks = [
  { label: "Facebook", href: site.social.facebook, icon: Facebook },
  { label: "Instagram", href: site.social.instagram, icon: Instagram },
  { label: "YouTube", href: site.social.youtube, icon: Youtube },
  { label: "WhatsApp", href: "https://wa.me/5582998067374", icon: MessageCircle },
] as const;

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
            <div className="mt-6 grid max-w-2xl gap-3">
              <ContactCard icon={Mail} label="E-mail" value="comunicacaomktmaggu@gmail.com" accent="cyan" />
              <ContactCard icon={Phone} label="Telefone" value="(82) 99806-7374" accent="gold" />
              <ContactCard icon={MapPin} label="Endereço" value={"Rua Em Projeto A, 33 — Benedito Bentes\nMaceió - AL, 57084-411"} accent="red" />
            </div>
            <SocialLinksArea />
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

function ContactCard({ icon: Icon, label, value, href, action, accent, external = false }: { icon: typeof Mail; label: string; value: string; href: string; action: string; accent: keyof typeof contactAccent; external?: boolean }) {
  return (
    <article className="relative overflow-hidden rounded-xl border border-brand-petrol/10 bg-brand-soft/45 p-4 shadow-[0_14px_30px_-28px_rgba(0,56,76,0.5)] md:px-5">
      <span className="pointer-events-none absolute -right-3 -top-3 size-10 rounded-full border-[7px] border-brand-gold/15" aria-hidden="true" />
      <div className="relative grid items-center gap-4 sm:grid-cols-[minmax(9.5rem,.75fr)_minmax(0,1.35fr)_auto]">
        <div className="flex items-center gap-3">
          <span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${contactAccent[accent]}`}><Icon className="size-5" aria-hidden="true" /></span>
          <h3 className="text-sm font-semibold text-brand-ink">{label}</h3>
        </div>
        <p className="min-w-0 break-words text-sm font-semibold leading-snug text-brand-ink">{value}</p>
        <Button asChild size="sm" className="w-fit rounded-full bg-brand-petrol px-4 font-semibold text-primary-foreground hover:bg-brand-red">
          <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{action}</a>
        </Button>
      </div>
    </article>
  );
}

function SocialContactCard() {
  return (
    <article className="relative overflow-visible rounded-xl border border-brand-petrol/10 bg-brand-soft/45 p-4 shadow-[0_14px_30px_-28px_rgba(0,56,76,0.5)] md:px-5">
      <div className="relative grid items-center gap-4 sm:grid-cols-[minmax(9.5rem,.75fr)_minmax(0,1.35fr)_auto]">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red"><Share2 className="size-5" aria-hidden="true" /></span>
          <h3 className="text-sm font-semibold text-brand-ink">Redes sociais</h3>
        </div>
        <p className="text-sm leading-relaxed text-brand-gray">Acompanhe a Maggu e compartilhe nossas ações.</p>
        <div className="flex flex-wrap items-center gap-2.5" aria-label="Redes sociais">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="group relative inline-flex size-11 items-center justify-center rounded-lg border border-brand-ink/15 bg-white/55 text-brand-ink shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-red/55 hover:bg-brand-red/10 hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50">
              <Icon className="size-[18px]" aria-hidden="true" />
              <span className="pointer-events-none absolute -bottom-8 right-0 z-10 whitespace-nowrap rounded bg-brand-ink px-2 py-1 text-[10px] font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">{label}</span>
            </a>
          ))}
        </div>
      </div>
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
