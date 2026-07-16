import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/PageHero";
import { timeline, indicators } from "@/data/site";

export const Route = createFileRoute("/quem-somos/nossa-historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — Cena Viva" },
      { name: "description", content: "A trajetória do Ponto de Cultura Cena Viva ao longo dos anos." },
      { property: "og:title", content: "Nossa História — Cena Viva" },
      { property: "og:description", content: "Trajetória, marcos e memórias do Ponto de Cultura." },
      { property: "og:url", content: "/quem-somos/nossa-historia" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/nossa-historia" }],
  }),
  component: NossaHistoria,
});

function NossaHistoria() {
  return (
    <>
      <PageHero
        title="Nossa história"
        subtitle="Uma trajetória construída em coletivo, com cultura, arte e território."
        image="https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Nossa História" }]}
        accent="brand-gold"
      />

      <Section className="bg-white">
        <div className="container-x max-w-3xl">
          <p className="text-lg text-brand-gray leading-relaxed">
            Nossa história começa em uma sala de ensaio pequena, com poucos recursos e muito desejo de compartilhar teatro com a comunidade. Ao longo dos anos, expandimos as ações, formamos novas turmas, apresentamos espetáculos, ocupamos espaços públicos e construímos parcerias que fortaleceram o nosso trabalho.
          </p>
          <p className="mt-4 text-brand-gray leading-relaxed">
            Nesta página apresentamos alguns dos marcos que consideramos mais importantes na construção coletiva do Ponto de Cultura.
          </p>
        </div>
      </Section>

      {timeline.map((t, i) => (
        <Section key={t.year} className={i % 2 === 0 ? "bg-brand-soft" : "bg-white"}>
          <div className="container-x grid md:grid-cols-2 gap-10 items-center">
            <div className={i % 2 === 0 ? "" : "md:order-2"}>
              <p className="text-brand-red font-display font-black text-5xl">{t.year}</p>
              <h3 className="mt-2 font-display font-black text-3xl text-brand-ink">{t.title}</h3>
              <p className="mt-3 text-brand-gray text-lg">{t.text}</p>
            </div>
            <div className={`relative ${i % 2 === 0 ? "" : "md:order-1"}`}>
              <img
                src={`https://images.unsplash.com/photo-${["1518834107812-67b0b7c58434","1523207911345-32501502db22","1470229722913-7c0e2dbbafd3","1507676184212-d03ab07a01bf","1517048676732-d65bc937f952","1533158307587-828f0a76ef46"][i % 6]}?auto=format&fit=crop&w=1200&q=80`}
                alt={t.title}
                className="rounded-3xl aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full hatched-circle text-brand-cyan" aria-hidden />
            </div>
          </div>
        </Section>
      ))}

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundColor: "var(--brand-petrol)" }} />
        <div className="container-x">
          <SectionTitle invert eyebrow="Impacto" title="Marcos e reconhecimentos" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {indicators.map((n, i) => (
              <div key={i} className="text-white">
                <p className="font-display text-5xl font-black text-brand-gold">{n.value}</p>
                <p className="text-white/85">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
