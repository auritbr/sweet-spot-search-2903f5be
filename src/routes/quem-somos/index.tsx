import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/PageHero";
import { timeline } from "@/data/site";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Cena Viva" },
      { name: "description", content: "Conheça o Ponto de Cultura Cena Viva: história, missão, visão e valores." },
      { property: "og:title", content: "Quem Somos — Cena Viva" },
      { property: "og:description", content: "História, missão, visão e valores." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <>
      <PageHero
        title="Quem Somos"
        subtitle="Um Ponto de Cultura dedicado à formação teatral e à transformação social."
        image="https://images.unsplash.com/photo-1519683384663-1de1a1e3f6a7?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Quem Somos" }]}
      />

      <Section className="bg-white">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div>
            <SectionTitle eyebrow="Institucional" title="Uma organização a serviço da cultura" />
            <p className="text-lg text-brand-gray leading-relaxed">
              Somos uma organização cultural criada para promover o encontro entre pessoas e o universo do teatro. Atuamos em territórios diversos, oferecendo formação, criação e circulação de espetáculos com foco na democratização do acesso à cultura.
            </p>
            <p className="mt-4 text-brand-gray leading-relaxed">
              Reconhecidos como Ponto de Cultura, sustentamos um trabalho contínuo com crianças, jovens, adultos, educadores e coletivos culturais, sempre com atenção à diversidade, à acessibilidade e ao compromisso social.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Território", "Formação", "Criação", "Comunidade"].map((k, i) => (
              <div key={k} className="p-6 rounded-2xl text-white font-display font-black text-xl" style={{ backgroundColor: ["var(--brand-red)","var(--brand-cyan)","var(--brand-gold)","var(--brand-petrol)"][i] }}>
                {k}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-brand-soft">
        <div className="container-x">
          <SectionTitle eyebrow="Trajetória" title="Nossa linha do tempo" />
          <ol className="relative border-l-2 border-brand-red/30 pl-8 space-y-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-brand-red ring-4 ring-white" />
                <p className="font-display font-black text-brand-red text-2xl">{t.year}</p>
                <h3 className="font-display font-black text-xl text-brand-ink">{t.title}</h3>
                <p className="text-brand-gray">{t.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Link to="/quem-somos/nossa-historia" className="inline-flex px-6 py-3 rounded-full bg-brand-ink text-white font-semibold">Ver nossa história completa</Link>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="Diretrizes" title="Missão, Visão e Valores" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Missão", text: "Promover formação, acesso à cultura e desenvolvimento humano por meio do teatro e das artes cênicas.", color: "var(--brand-red)" },
              { title: "Visão", text: "Ser referência em formação cultural, criação artística e participação comunitária.", color: "var(--brand-cyan)" },
              { title: "Valores", text: "Respeito, diversidade, ética, criatividade, transparência, inclusão, cooperação e compromisso social.", color: "var(--brand-gold)" },
            ].map((c) => (
              <div key={c.title} className="relative p-8 rounded-3xl text-white overflow-hidden" style={{ backgroundColor: c.color }}>
                <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full border-8 border-white/25" aria-hidden />
                <div className="absolute right-6 top-6 w-16 h-16 hatched-circle text-white/30" aria-hidden />
                <h3 className="font-display font-black text-2xl relative">{c.title}</h3>
                <p className="mt-3 relative">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
