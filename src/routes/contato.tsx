import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HatchedCircle, ArcThick, BrushStroke, Triangle, QuarterCircle } from "@/components/Shapes";
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
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-32 md:pb-16" style={{ backgroundColor: "#00384C" }}>
        <QuarterCircle corner="tr" color="#ED1C24" className="absolute -top-2 -right-2 w-32 md:w-52 opacity-95" />
        <ArcThick color="#FFB400" className="absolute -left-4 top-32 w-40 opacity-80" from={200} to={340} />
        <HatchedCircle size={180} color="#08B9E6" className="absolute -left-16 bottom-0 opacity-25" />
        <Triangle color="#FFB400" size={54} className="absolute top-16 right-24 hidden md:block" rotate={20} />

        <div className="container-x grid lg:grid-cols-[1fr_minmax(0,520px)] gap-10 items-start relative text-white">
          <div>
            <p className="uppercase tracking-[0.22em] text-brand-gold text-xs mb-3" style={{ fontWeight: 600 }}>Fale conosco</p>
            <h1 style={{ fontSize: "clamp(2rem, 3.3vw, 3.5rem)", lineHeight: 1.1, fontWeight: 700, color: "#fff" }}>Contato</h1>
            <BrushStroke color="#ED1C24" className="mt-4 w-32" />
            <p className="mt-5 text-white/90 max-w-lg" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)", lineHeight: 1.6 }}>
              Quer participar, apoiar, propor uma parceria ou saber mais sobre nossos projetos? Estamos por aqui.
            </p>
            <div className="mt-7 grid gap-3.5 max-w-md">
              <ContactRow label="Telefone" value={site.phone} />
              <ContactRow label="WhatsApp" value={`+${site.whatsapp}`} href={`https://wa.me/${site.whatsapp}`} />
              <ContactRow label="E-mail" value={site.email} href={`mailto:${site.email}`} />
              <ContactRow label="Endereço" value={site.address} />
              <ContactRow label="Horário" value={site.hours} />
              <ContactRow label="Acessibilidade" value="Espaço acessível, VLibras disponível no site e canal aberto para solicitações de acessibilidade." />
            </div>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href={site.social.instagram} className="px-5 py-2 rounded-full bg-white/10 border border-white/30 text-white text-sm hover:bg-white/20" style={{ fontWeight: 600 }}>Instagram</a>
              <a href={site.social.facebook} className="px-5 py-2 rounded-full bg-white/10 border border-white/30 text-white text-sm hover:bg-white/20" style={{ fontWeight: 600 }}>Facebook</a>
              <a href={site.social.youtube} className="px-5 py-2 rounded-full bg-white/10 border border-white/30 text-white text-sm hover:bg-white/20" style={{ fontWeight: 600 }}>YouTube</a>
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
                <button type="submit" className="mt-1 justify-self-start px-6 py-2.5 rounded-full bg-brand-gold text-brand-ink font-bold uppercase tracking-wider text-xs hover:bg-brand-red hover:text-white transition">Enviar mensagem</button>
              </form>
            )}
            <HatchedCircle size={90} color="#08B9E6" className="absolute -top-6 -right-4 opacity-60 -z-0" />
          </div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="container-x">
          <div className="mx-auto" style={{ maxWidth: 860 }}>
            <div className="flex items-end justify-between gap-4 flex-wrap mb-4">
              <div>
                <p className="uppercase tracking-[0.22em] text-brand-red text-xs" style={{ fontWeight: 600 }}>Onde estamos</p>
                <h2 className="mt-1 text-brand-ink" style={{ fontSize: "1.25rem", fontWeight: 700 }}>Nossa localização</h2>
              </div>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full bg-brand-ink text-white text-xs hover:bg-brand-red" style={{ fontWeight: 600 }}>
                Abrir no Google Maps
              </a>
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

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="border-l-4 border-brand-gold pl-4">
      <p className="text-xs uppercase tracking-widest text-brand-gold font-bold">{label}</p>
      {href ? (
        <a href={href} className="text-white/95 hover:text-brand-gold">{value}</a>
      ) : (
        <p className="text-white/95">{value}</p>
      )}
    </div>
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
