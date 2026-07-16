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
      <section className="relative bg-brand-soft py-32 md:py-40 overflow-hidden">
        <HatchedCircle size={140} color="#08B9E6" className="absolute top-10 left-10 opacity-70" />
        <ArcThick color="#ED1C24" className="absolute bottom-10 right-10 w-48" from={200} to={340} />
        <Triangle color="#FFB400" size={70} className="absolute top-20 right-24 hidden md:block" rotate={20} />
        <Triangle color="#08B9E6" size={50} className="absolute bottom-20 left-24 hidden md:block" rotate={-15} />
        <div className="container-x text-center pt-16 relative">
          <p className="uppercase tracking-[0.3em] text-brand-red font-bold text-xs mb-4">Time</p>
          <h1 className="font-display uppercase leading-[0.95]" style={{ fontSize: "clamp(2.6rem, 8vw, 6rem)", color: "#FF7A00" }}>
            Nossa Equipe
          </h1>
          <BrushStroke color="#FFB400" className="mx-auto mt-6 w-48" />
          <p className="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
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
                  className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
                  style={{ backgroundColor: color, color: textColor }}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  {/* Decorative shapes per card */}
                  {i % 3 === 0 && <ArcThick color={i % 2 ? "#FFB400" : "#08B9E6"} className="absolute -top-4 -right-4 w-32 opacity-90" from={200} to={340} />}
                  {i % 3 === 1 && <HatchedCircle size={120} color={i % 2 ? "#FFB400" : "#FFFFFF"} className="absolute -bottom-6 -left-6 opacity-40" />}
                  {i % 3 === 2 && <Triangle color={i % 2 ? "#FFB400" : "#ED1C24"} size={70} className="absolute top-4 right-4" rotate={20} />}

                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-x-0 bottom-0 w-full h-[80%] object-cover object-top mix-blend-multiply opacity-90 group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 z-10" style={{ background: `linear-gradient(to top, ${color} 20%, transparent)` }}>
                    <h3 className="font-display uppercase text-xl leading-tight">{m.name}</h3>
                    <p className="text-sm opacity-90 mt-1">{m.role}</p>
                    {isOpen && <p className="mt-2 text-sm opacity-95">{m.bio}</p>}
                    <button
                      className="mt-3 inline-block text-xs font-bold uppercase tracking-wider underline underline-offset-4"
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
