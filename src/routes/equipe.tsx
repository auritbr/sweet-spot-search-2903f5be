import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/PageHero";
import { HatchedCircle, ArcThick, BrushStroke, Triangle } from "@/components/Shapes";
import { team } from "@/data/site";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Nossa Equipe — Cena Viva" },
      { name: "description", content: "Conheça as pessoas que constroem o Ponto de Cultura Cena Viva." },
      { property: "og:title", content: "Nossa Equipe — Cena Viva" },
      { property: "og:description", content: "As pessoas por trás do nosso trabalho." },
      { property: "og:url", content: "/equipe" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
  }),
  component: Equipe,
});

const palette = ["#08B9E6", "#ED1C24", "#FFB400", "#FF7A00", "#B8DC4B", "#00384C", "#ED1C24", "#08B9E6"];

function Equipe() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <>
      <section className="relative flex h-[310px] items-center overflow-hidden bg-brand-soft sm:h-[330px] lg:h-[370px]">
        <HatchedCircle size={100} color="#08B9E6" className="absolute top-10 left-10 opacity-50" />
        <ArcThick color="#ED1C24" className="absolute bottom-10 right-10 w-32 opacity-80" from={200} to={340} />
        <Triangle color="#FFB400" size={54} className="absolute top-20 right-24 hidden md:block" rotate={20} />
        <Triangle color="#08B9E6" size={40} className="absolute bottom-20 left-24 hidden md:block" rotate={-15} />
        <div className="container-x relative text-center">
          <p className="uppercase tracking-[0.22em] text-brand-red text-xs mb-3" style={{ fontWeight: 600 }}>Time</p>
          <h1 style={{ fontSize: "clamp(1.75rem, 2.7vw, 2.75rem)", lineHeight: 1.06, fontWeight: 700, color: "#00384C" }}>
            Nossa Equipe
          </h1>
          <BrushStroke color="#FFB400" className="mx-auto mt-4 w-32" />
          <p className="mt-4 text-brand-gray max-w-xl mx-auto" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", lineHeight: 1.55 }}>
            Um time multidisciplinar que sustenta a formação, a criação e a circulação cultural.
          </p>
        </div>
      </section>

      <Section className="bg-white overflow-hidden">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m, i) => {
              const color = palette[i % palette.length];
              const textColor = color === "#FFB400" || color === "#B8DC4B" ? "#00384C" : "#ffffff";
              const isOpen = openIdx === i;
              return (
                <article
                  key={m.name}
                  className="group relative overflow-hidden aspect-[4/5] cursor-pointer rounded-2xl"
                  style={{ backgroundColor: color, color: textColor }}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  {i % 3 === 0 && <ArcThick color={i % 2 ? "#FFB400" : "#08B9E6"} className="absolute -top-4 -right-4 w-24 opacity-80 z-10" from={200} to={340} />}
                  {i % 3 === 1 && <HatchedCircle size={90} color={i % 2 ? "#FFB400" : "#FFFFFF"} className="absolute -bottom-6 -left-6 opacity-30 z-10" />}
                  {i % 3 === 2 && <Triangle color={i % 2 ? "#FFB400" : "#ED1C24"} size={54} className="absolute top-4 right-4 z-10" rotate={20} />}

                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    style={{ filter: "brightness(1.05) saturate(1.02)" }}
                  />
                  {/* subtle color wash */}
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: color, opacity: 0.18 }} />
                  {/* bottom gradient only */}
                  <div className="absolute inset-x-0 bottom-0 p-4 z-10" style={{ background: `linear-gradient(to top, ${color} 0%, ${color}D9 45%, transparent 100%)`, paddingTop: "3rem" }}>
                    <h3 style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.2, fontWeight: 700, color: textColor }}>{m.name}</h3>
                    <p className="text-xs opacity-95 mt-1">{m.role}</p>
                    {isOpen && <p className="mt-2 text-xs opacity-95">{m.bio}</p>}
                    <button
                      className="mt-2 inline-block text-[11px] uppercase tracking-widest underline underline-offset-4 opacity-0 group-hover:opacity-100 transition"
                      style={{ fontWeight: 600 }}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "Fechar" : "Conheça"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
