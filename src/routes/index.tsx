import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { slides, indicators, projects, news, albums, site } from "@/data/site";
import { Section, SectionTitle } from "@/components/PageHero";
import { HatchedCircle, ArcThick, BrushStroke, DiamondsCluster, QuarterCircle, Triangle } from "@/components/Shapes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cena Viva — Ponto de Cultura de Teatro e Artes Cênicas" },
      { name: "description", content: "Formação, criação e circulação cultural em diálogo com a comunidade." },
      { property: "og:title", content: "Cena Viva — Ponto de Cultura" },
      { property: "og:description", content: "Formação, criação e circulação cultural." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroCarousel />
      <IntroSection />
      <IndicatorsSection />
      <ProjectsBands />
      <NewsPreview />
      <GalleryPreview />
      <SupportCTA />
    </>
  );
}

function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [opened, setOpened] = useState(false);
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("curtainShown")) {
      setShowCurtain(false);
      setOpened(true);
      return;
    }
    const t = setTimeout(() => {
      setOpened(true);
      if (typeof sessionStorage !== "undefined") sessionStorage.setItem("curtainShown", "1");
      setTimeout(() => setShowCurtain(false), 2200);
    }, 250);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const go = (n: number) => setI((n + slides.length) % slides.length);
  const s = slides[i];

  return (
    <section
      className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrossel"
    >
      {slides.map((sl, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <img src={sl.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-ink/50" />
        </div>
      ))}

      {showCurtain && (
        <>
          <div className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 z-20 shadow-2xl ${opened ? "animate-curtain-left" : ""}`}
            style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(0,0,0,.45) 0 3px, transparent 3px 30px), linear-gradient(90deg,#5c0709,#a51218 40%,#c81e24 55%,#7a0d10 90%)" }}
            aria-hidden="true"
          />
          <div className={`pointer-events-none absolute inset-y-0 right-0 w-1/2 z-20 shadow-2xl ${opened ? "animate-curtain-right" : ""}`}
            style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(0,0,0,.45) 0 3px, transparent 3px 30px), linear-gradient(90deg,#7a0d10,#c81e24 45%,#a51218 60%,#5c0709)" }}
            aria-hidden="true"
          />
        </>
      )}

      {/* Composition shapes */}
      <QuarterCircle corner="tr" color="#00384C" className="absolute -top-4 -right-4 w-64 md:w-96 z-10" />
      <ArcThick color="#FFB400" className="absolute left-8 top-24 w-48 md:w-72 z-10" from={200} to={340} />
      <div className="absolute bottom-24 right-16 z-10 hidden md:block"><DiamondsCluster color="#08B9E6" size={80} /></div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <HatchedCircle size={520} color="#ED1C24" className="opacity-60 max-w-[80vw]" />
      </div>

      <div className="relative z-10 h-full container-x flex flex-col justify-center items-center text-center pt-16">
        <div className="max-w-4xl text-white animate-fade-up" key={i}>
          <p className="uppercase tracking-[0.3em] text-brand-gold font-bold text-xs md:text-sm mb-4">Ponto de Cultura</p>
          <h1 className="font-display uppercase leading-[0.95]" style={{ fontSize: "clamp(2.4rem, 8vw, 6.5rem)", textShadow: "0 6px 30px rgba(0,0,0,.4)" }}>
            {s.title}
          </h1>
          <BrushStroke color="#FFB400" className="mx-auto mt-6 w-56" />
          <p className="mt-6 text-lg md:text-xl text-white/95 font-medium max-w-2xl mx-auto">{s.text}</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {s.buttons.map((b, k) => (
              <Link key={k} to={b.to} className={`px-7 py-3.5 rounded-full font-semibold text-sm md:text-base uppercase tracking-wider ${k === 0 ? "bg-brand-red text-white hover:bg-brand-red/90" : "bg-white text-brand-ink hover:bg-brand-gold"} transition`}>
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <button aria-label="Slide anterior" onClick={() => go(i - 1)} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-brand-petrol/60 backdrop-blur text-white items-center justify-center hover:bg-brand-petrol">‹</button>
      <button aria-label="Próximo slide" onClick={() => go(i + 1)} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-brand-petrol/60 backdrop-blur text-white items-center justify-center hover:bg-brand-petrol">›</button>

      <div className="absolute bottom-8 inset-x-0 z-30 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => go(idx)} aria-label={`Slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-12 bg-brand-gold" : "w-2 bg-white/60"}`} />
        ))}
      </div>

      <div className="pointer-events-none absolute -bottom-1 inset-x-0 h-16 md:h-24 bg-white [clip-path:ellipse(90%_100%_at_50%_100%)] z-20" aria-hidden />
    </section>
  );
}

function IntroSection() {
  return (
    <Section className="bg-white overflow-hidden">
      <div className="container-x grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square w-full max-w-md mx-auto rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80" alt="Grupo em oficina teatral" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <ArcThick color="#00384C" className="absolute -top-6 -left-6 w-40" from={100} to={260} />
          <ArcThick color="#ED1C24" className="absolute -bottom-4 -right-4 w-36" from={300} to={80} />
          <HatchedCircle size={110} color="#08B9E6" className="absolute -bottom-8 left-8 opacity-70" />
          <Triangle color="#FFB400" size={60} className="absolute top-8 -right-4" rotate={20} />
        </div>
        <div className="relative">
          <p className="uppercase tracking-[0.3em] text-brand-red font-bold text-xs mb-4">Nossa essência</p>
          <h2 className="font-display uppercase leading-[1] text-brand-ink" style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}>
            Cultura, expressão<br/>e transformação social
          </h2>
          <BrushStroke color="#FFB400" className="mt-6 w-40" />
          <p className="mt-6 text-lg text-brand-gray leading-relaxed">
            Somos um Ponto de Cultura dedicado ao teatro e às artes cênicas. Criamos oportunidades de formação, convivência e participação cultural com crianças, jovens e comunidades.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quem-somos" className="px-6 py-3 rounded-full bg-brand-red text-white font-semibold uppercase tracking-wider text-sm hover:bg-brand-red/90">Quem somos</Link>
            <Link to="/equipe" className="px-6 py-3 rounded-full border-2 border-brand-ink text-brand-ink font-semibold uppercase tracking-wider text-sm hover:bg-brand-soft">Nossa equipe</Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

function IndicatorsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#00384C" }}>
      <QuarterCircle corner="tl" color="#ED1C24" className="absolute -top-2 -left-2 w-40 md:w-56 opacity-90" />
      <HatchedCircle size={280} color="#FFB400" className="absolute -right-16 bottom-0 opacity-25" />
      <DiamondsCluster color="#08B9E6" className="absolute top-10 right-24 opacity-60" size={70} />
      <div className="container-x relative text-white">
        <p className="uppercase tracking-[0.3em] text-brand-gold font-bold text-xs mb-3">Impacto</p>
        <h2 className="font-display uppercase leading-[1] text-white max-w-3xl" style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}>
          Números que contam<br/>nossa trajetória
        </h2>
        <BrushStroke color="#ED1C24" className="mt-6 w-40" />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {indicators.map((n, i) => (
            <div key={i} className={`${i > 0 ? "md:border-l md:border-white/20 md:pl-6" : ""}`}>
              <p className="font-display text-5xl md:text-7xl text-brand-gold leading-none">{n.value}</p>
              <p className="mt-3 text-white/85 text-sm md:text-base">{n.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsBands() {
  const bandColors = [
    { bg: "#ED1C24", text: "#ffffff", pill: "#FF7A00", accent: "#FFB400", arc: "#00384C" },
    { bg: "#08B9E6", text: "#ffffff", pill: "#ED1C24", accent: "#FFB400", arc: "#00384C" },
    { bg: "#FFB400", text: "#00384C", pill: "#ED1C24", accent: "#00384C", arc: "#ED1C24" },
  ];
  return (
    <section className="bg-white">
      <div className="container-x py-16 md:py-20 text-center">
        <p className="uppercase tracking-[0.3em] text-brand-red font-bold text-xs mb-3">Projetos</p>
        <h2 className="font-display uppercase leading-[1] text-brand-ink mx-auto" style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)" }}>Nossos projetos</h2>
        <BrushStroke color="#FFB400" className="mx-auto mt-5 w-40" />
      </div>
      {projects.map((p, idx) => {
        const c = bandColors[idx % bandColors.length];
        const reverse = idx % 2 === 1;
        return (
          <div key={p.slug} className="relative overflow-hidden" style={{ backgroundColor: c.bg, color: c.text }}>
            <QuarterCircle corner={reverse ? "br" : "bl"} color={c.arc} className="absolute -bottom-4 -left-4 w-48 md:w-64 opacity-90" />
            <ArcThick color={c.accent} className="absolute top-6 right-8 w-40 md:w-56 opacity-90" from={200} to={340} />
            <HatchedCircle size={260} color={c.accent} className="absolute -right-16 -bottom-8 opacity-30" />
            <div className={`container-x py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <p className="uppercase tracking-[0.3em] font-bold text-xs mb-3 opacity-90">{p.category}</p>
                <h3 className="font-display uppercase leading-[1]" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>{p.name}</h3>
                <p className="mt-5 text-lg opacity-95 max-w-lg">{p.short}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: c.pill, color: "#fff" }}>{p.audience}</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: c.pill, color: "#fff" }}>{p.period}</span>
                </div>
                <Link to="/projetos/$slug" params={{ slug: p.slug }} className="mt-8 inline-flex px-6 py-3 rounded-full bg-white text-brand-ink font-semibold uppercase tracking-wider text-sm hover:bg-brand-gold">
                  Conheça o projeto
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden max-w-md mx-auto">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <DiamondsCluster color={c.accent} className="absolute -top-6 -right-2" size={60} />
                <Triangle color={c.pill} size={70} className="absolute -bottom-6 left-6" rotate={-15} />
              </div>
            </div>
          </div>
        );
      })}
      <div className="text-center py-10 bg-white">
        <Link to="/projetos" className="inline-flex px-8 py-4 rounded-full bg-brand-ink text-white font-semibold uppercase tracking-wider text-sm hover:bg-brand-red">Ver todos os projetos</Link>
      </div>
    </section>
  );
}

function NewsPreview() {
  const [main, ...rest] = news.slice(0, 3);
  return (
    <Section className="bg-brand-soft overflow-hidden">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <SectionTitle eyebrow="Novidades" title="Últimas notícias" />
          <Link to="/noticias" className="mb-4 text-brand-red font-semibold uppercase tracking-wider text-sm">Ver todas →</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/noticias/$slug" params={{ slug: main.slug }} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <img src={main.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
              <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-red text-white">{main.category}</span>
            </div>
            <time className="mt-4 block text-sm text-brand-gray">{new Date(main.date).toLocaleDateString("pt-BR")}</time>
            <h3 className="mt-2 font-display uppercase text-2xl md:text-3xl leading-tight text-brand-ink group-hover:text-brand-red transition">{main.title}</h3>
            <p className="mt-3 text-brand-gray">{main.excerpt}</p>
          </Link>
          <div className="space-y-6">
            {rest.map((n) => (
              <Link key={n.slug} to="/noticias/$slug" params={{ slug: n.slug }} className="group flex gap-4">
                <div className="relative w-32 md:w-40 aspect-square overflow-hidden rounded-2xl shrink-0">
                  <img src={n.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">{n.category}</span>
                  <h4 className="mt-1 font-display uppercase text-lg md:text-xl leading-tight text-brand-ink group-hover:text-brand-red transition">{n.title}</h4>
                  <time className="mt-2 block text-xs text-brand-gray">{new Date(n.date).toLocaleDateString("pt-BR")}</time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function GalleryPreview() {
  const items = albums.slice(0, 4);
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
        <img src="https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-ink/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h2 className="font-display uppercase text-white leading-[0.95]" style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}>
              <span className="block">Nossa</span>
              <span className="block text-brand-cyan">Galeria</span>
            </h2>
            <BrushStroke color="#FFB400" className="mx-auto mt-5 w-40" />
          </div>
        </div>
        <QuarterCircle corner="tr" color="#ED1C24" className="absolute -top-2 -right-2 w-40 md:w-56" />
      </div>
      <div className="container-x py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((a) => (
            <Link key={a.slug} to="/galeria/$slug" params={{ slug: a.slug }} className="group relative aspect-square overflow-hidden rounded-2xl">
              <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs uppercase tracking-widest text-brand-gold">{a.year}</p>
                <p className="font-display uppercase text-sm md:text-base leading-tight">{a.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/galeria" className="inline-flex px-8 py-4 rounded-full bg-brand-ink text-white font-semibold uppercase tracking-wider text-sm hover:bg-brand-red">Ver galeria completa</Link>
        </div>
      </div>
    </section>
  );
}

function SupportCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#ED1C24" }}>
      <QuarterCircle corner="tr" color="#00384C" className="absolute -top-2 -right-2 w-48 md:w-72 opacity-90" />
      <ArcThick color="#FFB400" className="absolute -left-6 top-10 w-56 opacity-90" from={200} to={340} />
      <HatchedCircle size={280} color="#FFB400" className="absolute -left-16 bottom-0 opacity-30" />
      <DiamondsCluster color="#FFB400" className="absolute top-16 right-32 hidden md:block" size={70} />
      <div className="container-x relative text-white text-center max-w-3xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-brand-gold font-bold text-xs mb-4">Apoie</p>
        <h2 className="font-display uppercase leading-[1] text-white" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          Ajude a manter a cultura em movimento
        </h2>
        <BrushStroke color="#FFB400" className="mx-auto mt-6 w-40" />
        <p className="mt-6 text-lg text-white/95">Seu apoio contribui para a continuidade das oficinas, apresentações e ações culturais.</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href={`https://wa.me/${site.whatsapp}`} className="px-7 py-3.5 rounded-full bg-brand-gold text-brand-ink font-bold uppercase tracking-wider text-sm hover:bg-white">Quero apoiar</a>
          <Link to="/contato" className="px-7 py-3.5 rounded-full border-2 border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-brand-red">Entre em contato</Link>
        </div>
      </div>
    </section>
  );
}
