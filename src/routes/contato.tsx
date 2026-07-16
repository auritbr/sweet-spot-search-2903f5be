import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { site } from "@/data/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Cena Viva" },
      { name: "description", content: "Fale com o Ponto de Cultura Cena Viva. Formulário, telefone, endereço e WhatsApp." },
      { property: "og:title", content: "Contato — Cena Viva" },
      { property: "og:description", content: "Fale conosco." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "", motivo: "Informações gerais", mensagem: "", consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!form.nome.trim()) err.nome = "Informe seu nome";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "E-mail inválido";
    if (!form.mensagem.trim() || form.mensagem.length < 10) err.mensagem = "Escreva uma mensagem com pelo menos 10 caracteres";
    if (!form.consent) err.consent = "É necessário aceitar a política de privacidade";
    setErrors(err);
    if (Object.keys(err).length === 0) setSent(true);
  };

  return (
    <>
      <PageHero
        title="Fale com a gente"
        subtitle="Queremos ouvir você. Envie sua mensagem, tire dúvidas ou proponha parcerias."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Contato" }]}
      />

      <Section className="bg-white">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-black text-3xl text-brand-ink">Envie sua mensagem</h2>
            {sent ? (
              <div className="mt-6 p-6 rounded-2xl bg-brand-lime/30 border-2 border-brand-lime">
                <p className="font-display font-black text-brand-ink">Mensagem enviada com sucesso!</p>
                <p className="mt-2 text-brand-gray text-sm">Retornaremos em breve. Obrigado pelo contato.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
                <Field label="Nome" error={errors.nome}>
                  <input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-brand-ink/20" />
                </Field>
                <Field label="E-mail" error={errors.email}>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-brand-ink/20" />
                </Field>
                <Field label="Telefone">
                  <input value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-brand-ink/20" />
                </Field>
                <Field label="Assunto">
                  <input value={form.assunto} onChange={(e) => setForm({ ...form, assunto: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-brand-ink/20" />
                </Field>
                <Field label="Motivo do contato">
                  <select value={form.motivo} onChange={(e) => setForm({ ...form, motivo: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-brand-ink/20">
                    {["Informações gerais", "Participar de projeto", "Parcerias", "Imprensa", "Apoio e doações", "Visitas", "Outros"].map((m) => <option key={m}>{m}</option>)}
                  </select>
                </Field>
                <Field label="Mensagem" error={errors.mensagem}>
                  <textarea rows={5} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-brand-ink/20" />
                </Field>
                <label className="flex items-start gap-3 text-sm">
                  <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-1" />
                  <span>Li e concordo com a <a href="#" className="text-brand-red underline">Política de Privacidade</a>.</span>
                </label>
                {errors.consent && <p className="text-brand-red text-sm">{errors.consent}</p>}
                <button type="submit" className="px-6 py-3 rounded-full bg-brand-red text-white font-bold">Enviar mensagem</button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <InfoCard title="Endereço" text={site.address} color="brand-red" />
            <InfoCard title="Telefone / WhatsApp" text={`${site.phone} · WhatsApp: ${site.whatsapp}`} color="brand-cyan" />
            <InfoCard title="E-mail" text={site.email} color="brand-gold" />
            <InfoCard title="Horário de atendimento" text={site.hours} color="brand-orange" />
            <InfoCard title="Acessibilidade" text="Espaço com rampa de acesso, sanitário acessível e sinalização visual." color="brand-lime" />
            <div className="rounded-2xl overflow-hidden aspect-video">
              <iframe title="Mapa" src="https://www.google.com/maps?q=São+Paulo&output=embed" className="w-full h-full border-0" loading="lazy" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-brand-ink mb-1">{label}</label>
      {children}
      {error && <p className="mt-1 text-brand-red text-sm">{error}</p>}
    </div>
  );
}

function InfoCard({ title, text, color }: { title: string; text: string; color: string }) {
  return (
    <div className="p-5 rounded-2xl border-l-4 bg-brand-soft" style={{ borderColor: `var(--${color})` }}>
      <p className="text-xs uppercase tracking-widest font-bold" style={{ color: `var(--${color})` }}>{title}</p>
      <p className="mt-1 text-brand-ink">{text}</p>
    </div>
  );
}
