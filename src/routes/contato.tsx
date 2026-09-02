import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { BrushStroke, HatchedCircle } from "@/components/Shapes";
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
        decoration="crescent"
      />

      <section className="bg-white py-12 md:py-16">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,520px)]">
          <div className="text-brand-ink">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Canais de contato</p>
            <h2 className="mt-2 text-2xl font-bold">Estamos por aqui</h2>
            <div className="mt-7 grid max-w-md gap-3.5">
              <ContactRow label="Telefone" value={site.phone} />
              <ContactRow label="WhatsApp" value={`+${site.whatsapp}`} href={`https://wa.me/${site.whatsapp}`} />
              <ContactRow label="E-mail" value={site.email} href={`mailto:${site.email}`} />
              <ContactRow label="Endereço" value={site.address} />
              <ContactRow label="Horário" value={site.hours} />
              <ContactRow label="Acessibilidade" value="Espaço acessível, VLibras disponível no site e canal aberto para solicitações de acessibilidade." />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.social.instagram} className="rounded-full border border-brand-ink/20 px-5 py-2 text-sm font-semibold text-brand-ink hover:bg-brand-soft">Instagram</a>
              <a href={site.social.facebook} className="rounded-full border border-brand-ink/20 px-5 py-2 text-sm font-semibold text-brand-ink hover:bg-brand-soft">Facebook</a>
              <a href={site.social.youtube} className="rounded-full border border-brand-ink/20 px-5 py-2 text-sm font-semibold text-brand-ink hover:bg-brand-soft">YouTube</a>
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
      <p className="text-xs uppercase tracking-widest text-brand-red font-bold">{label}</p>
      {href ? (
        <a href={href} className="text-brand-gray hover:text-brand-red">{value}</a>
      ) : (
        <p className="text-brand-gray">{value}</p>
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
