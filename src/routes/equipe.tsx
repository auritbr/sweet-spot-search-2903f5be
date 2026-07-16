import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { team } from "@/data/site";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Cena Viva" },
      { name: "description", content: "Conheça as pessoas que constroem o Ponto de Cultura Cena Viva." },
      { property: "og:title", content: "Equipe — Cena Viva" },
      { property: "og:description", content: "As pessoas por trás do nosso trabalho." },
      { property: "og:url", content: "/equipe" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
  }),
  component: Equipe,
});

function Equipe() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <>
      <PageHero
        title="Nossa Equipe"
        subtitle="Um time multidisciplinar que sustenta a formação, a criação e a circulação cultural."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]}
        accent="brand-cyan"
      />

      <Section className="bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <article key={m.name} className="group relative rounded-3xl overflow-hidden text-white" style={{ backgroundColor: `var(--${m.color})` }}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition duration-500" loading="lazy" />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/20" aria-hidden />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-black text-xl">{m.name}</h3>
                  <p className="text-white/85 text-sm">{m.role}</p>
                  {openIdx === i && <p className="mt-3 text-sm text-white/95">{m.bio}</p>}
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    className="mt-3 text-sm font-semibold underline"
                    aria-expanded={openIdx === i}
                  >
                    {openIdx === i ? "Fechar" : "Conheça"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
