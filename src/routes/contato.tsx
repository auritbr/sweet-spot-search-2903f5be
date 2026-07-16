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
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28" style={{ backgroundColor: "#00384C" }}>
        <QuarterCircle corner="tr" color="#ED1C24" className="absolute -top-2 -right-2 w-48 md:w-72 opacity-95" />
        <ArcThick color="#FFB400" className="absolute -left-4 top-40 w-56 opacity-90" from={200} to={340} />
        <HatchedCircle size={260} color="#08B9E6" className="absolute -left-16 bottom-0 opacity-30" />
        <Triangle color="#FFB400" size={80} className="absolute top-20 right-32 hidden md:block" rotate={20} />
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start relative text-white">
          <div>
            <p className="uppercase tracking-[0.3em] text-brand-gold font-bold text-xs mb-4">Fale conosco</p>
            <h1 className="font-display uppercase leading-[0.95]" style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)" }}>CONTATO</h1>
            <BrushStroke color="#ED1C24" className="mt-5 w-48" />
            <p className="mt-6 text-white/90 text-lg max-w-lg">
              Quer participar, apoiar, propor uma parceria ou saber mais sobre nossos projetos? Estamos por aqui.
            </p>
            <div className="mt-8 grid gap-5 max-w-md">
              <ContactRow label="Endereço" value={site.address} />
              <ContactRow label="Telefone" value={site.phone} />
              <ContactRow label="E-mail" value={site.email} />
              <ContactRow label="Horário" value={site.hours} />
            </div>
            <div className="mt-8 flex gap-3">
              <a href={site.social.instagram} className="px-5 py-2.5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold hover:bg-white/20">Instagram</a>
              <a href={site.social.facebook} className="px-5 py-2.5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold hover:bg-white/20">Facebook</a>
              <a href={site.social.youtube} className="px-5 py-2.5 rounded-full bg-white/10 border border-white/30 text-white text-sm font-semibold hover:bg-white/20">YouTube</a>
            </div>
          </div>

          <div className="relative bg-white text-brand-ink rounded-3xl p-6 md:p-10 shadow-xl">
            <h2 className="font-display uppercase text-2xl md:text-3xl">Envie sua mensagem</h2>
            <BrushStroke color="#FFB400" className="mt-3 w-24" />
            {sent ? (
              <p className="mt-8 p-4 rounded-2xl bg-brand-lime/40 text-brand-ink font-semibold">Mensagem enviada com sucesso. Em breve retornamos!</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 grid gap-4">
                <Field label="Nome completo" name="nome" />
                <Field label="E-mail" name="email" type="email" />
                <Field label="Telefone" name="tel" />
                <Field label="Assunto" name="assunto" />
                <div>
                  <label className="block text-sm font-semibold mb-2">Mensagem</label>
                  <textarea name="msg" required rows={5} className="w-full rounded-xl border border-black/10 px-4 py-3 bg-brand-soft focus:bg-white outline-none" />
                </div>
                <button type="submit" className="mt-2 justify-self-start px-7 py-3.5 rounded-full bg-brand-gold text-brand-ink font-bold uppercase tracking-wider text-sm hover:bg-brand-red hover:text-white transition">Enviar mensagem</button>
              </form>
            )}
            <HatchedCircle size={110} color="#08B9E6" className="absolute -top-8 -right-6 opacity-60 -z-0" />
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="aspect-[16/6] w-full bg-brand-soft">
          <iframe
            title="Mapa"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-46.65%2C-23.56%2C-46.63%2C-23.55&layer=mapnik"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-4 border-brand-gold pl-4">
      <p className="text-xs uppercase tracking-widest text-brand-gold font-bold">{label}</p>
      <p className="text-white/95">{value}</p>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-2">{label}</label>
      <input id={name} name={name} type={type} required className="w-full rounded-xl border border-black/10 px-4 py-3 bg-brand-soft focus:bg-white outline-none" />
    </div>
  );
}
