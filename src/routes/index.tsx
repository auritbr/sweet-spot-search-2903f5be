import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { slides, indicators, projects, news, albums, site } from "@/data/site";
import { Section, SectionTitle } from "@/components/PageHero";

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
      <ProjectsPreview />
      <MethodologySection />
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

  useEffect(() => {
    const t = setTimeout(() => setOpened(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  useEffect(() => {
    let x0 = 0;
    const el = document.getElementById("hero-carousel");
    if (!el) return;
    const s = (e: TouchEvent) => (x0 = e.touches[0].clientX);
    const en = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) setI((v) => (dx < 0 ? (v + 1) % slides.length : (v - 1 + slides.length) % slides.length));
    };
    el.addEventListener("touchstart", s); el.addEventListener("touchend", en);
    return () => { el.removeEventListener("touchstart", s); el.removeEventListener("touchend", en); };
  }, []);

  const go = (n: number) => setI((n + slides.length) % slides.length);
  const s = slides[i];

  return (
    <section
      id="hero-carousel"
      className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrossel"
      aria-label="Destaques"
    >
      {slides.map((sl, idx) => (
        <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <img src={sl.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/60 via-brand-ink/40 to-brand-ink/80" />
        </div>
      ))}

      {/* Theater curtains */}
      <div className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 z-20 bg-gradient-to-r from-[#7a0d10] via-[#c81e24] to-[#7a0d10] shadow-2xl ${opened ? "animate-curtain-left" : ""}`}
        style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(0,0,0,.35) 0 2px, transparent 2px 24px), linear-gradient(90deg,#7a0d10,#c81e24,#7a0d10)" }}
        aria-hidden="true"
      />
      <div className={`pointer-events-none absolute inset-y-0 right-0 w-1/2 z-20 shadow-2xl ${opened ? "animate-curtain-right" : ""}`}
        style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(0,0,0,.35) 0 2px, transparent 2px 24px), linear-gradient(90deg,#7a0d10,#c81e24,#7a0d10)" }}
        aria-hidden="true"
      />

      {/* geometric marks */}
      <div className="absolute right-8 top-32 w-40 h-40 rounded-full border-4 border-brand-gold/70 z-10 animate-float-slow" aria-hidden="true" />
      <div className="absolute left-10 bottom-32 w-24 h-24 hatched-circle text-brand-cyan opacity-80 z-10" aria-hidden="true" />

      <div className="relative z-10 h-full container-x flex flex-col justify-center pt-16">
        <div className="max-w-3xl text-white animate-fade-up" key={i}>
          <p className="uppercase tracking-widest text-brand-gold font-bold text-sm mb-3">Ponto de Cultura</p>
          <h1 className="font-display font-black text-4xl md:text-7xl leading-[1.02] drop-shadow">
            {s.title}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/95 max-w-2xl">{s.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {s.buttons.map((b, k) => (
              <Link key={k} to={b.to} className={`px-6 py-3 rounded-full font-semibold ${k === 0 ? "bg-brand-red text-white hover:bg-brand-red/90" : "bg-white/95 text-brand-ink hover:bg-white"} transition`}>
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* controls */}
      <button aria-label="Slide anterior" onClick={() => go(i - 1)} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur text-white items-center justify-center hover:bg-white/40">‹</button>
      <button aria-label="Próximo slide" onClick={() => go(i + 1)} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur text-white items-center justify-center hover:bg-white/40">›</button>

      <div className="absolute bottom-6 inset-x-0 z-30 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => go(idx)} aria-label={`Ir para slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-10 bg-brand-gold" : "w-2 bg-white/60"}`} />
        ))}
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <Section className="bg-white">
      <div className="container-x grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square w-full max-w-md mx-auto rounded-full overflow-hidden ring-8 ring-brand-gold/20">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80" alt="Grupo de participantes em oficina teatral" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-brand-red -z-0" aria-hidden="true" />
          <div className="absolute -bottom-4 -right-2 w-32 h-32 hatched-circle text-brand-cyan opacity-80" aria-hidden="true" />
          <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-tr-full bg-brand-lime" aria-hidden="true" />
        </div>
        <div>
          <p className="uppercase tracking-widest text-brand-red font-bold text-sm mb-3">Nossa essência</p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-brand-ink leading-tight">
            Cultura, expressão e <span className="brush-underline">transformação</span> social
          </h2>
          <p className="mt-5 text-lg text-brand-gray leading-relaxed">
            Somos um Ponto de Cultura dedicado ao teatro e às artes cênicas. Desenvolvemos ações que aproximam pessoas, territórios e diferentes formas de expressão, criando oportunidades de formação, convivência, criatividade e participação cultural.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/quem-somos/nossa-historia" className="px-5 py-3 rounded-full bg-brand-ink text-white font-semibold hover:bg-brand-petrol">Conheça nossa história</Link>
            <Link to="/equipe" className="px-5 py-3 rounded-full border-2 border-brand-ink text-brand-ink font-semibold hover:bg-brand-soft">Nossa equipe</Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

function IndicatorsSection() {
  return (
    <Section className="relative overflow-hidden" >
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: "var(--brand-petrol)" }} />
      <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full border-8 border-brand-red/40 -z-0" aria-hidden />
      <div className="absolute -right-16 bottom-0 w-72 h-72 hatched-circle text-brand-gold opacity-30 -z-0" aria-hidden />
      <div className="container-x relative">
        <SectionTitle invert eyebrow="Impacto" title="Números que contam nossa trajetória" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {indicators.map((n, i) => (
            <div key={i} className="text-white">
              <p className="font-display text-5xl md:text-6xl font-black text-brand-gold">{n.value}</p>
              <p className="mt-2 text-white/85">{n.label}</p>
              <div className="mt-4 w-12 h-1 bg-brand-red rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProjectsPreview() {
  return (
    <Section className="bg-brand-soft">
      <div className="container-x">
        <SectionTitle eyebrow="Projetos" title="Projetos que colocam histórias em movimento" text="Conheça algumas das iniciativas desenvolvidas pelo Ponto de Cultura." />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.slug} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white`} style={{ backgroundColor: `var(--${p.color})` }}>{p.category}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl font-black text-brand-ink">{p.name}</h3>
                <p className="mt-2 text-brand-gray">{p.short}</p>
                <p className="mt-3 text-sm text-brand-gray"><strong>Público:</strong> {p.audience}</p>
                <Link to="/projetos/$slug" params={{ slug: p.slug }} className="mt-auto pt-5 inline-flex items-center gap-2 font-semibold" style={{ color: `var(--${p.color})` }}>
                  Conheça o projeto →
                </Link>
              </div>
              <span className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: `var(--${p.color})` }} aria-hidden />
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/projetos" className="inline-flex px-6 py-3 rounded-full bg-brand-ink text-white font-semibold">Ver todos os projetos</Link>
        </div>
      </div>
    </Section>
  );
}

function MethodologySection() {
  const blocks = [
    { key: "Formação", text: "Trilhas formativas em teatro, corpo e voz, com foco na convivência e no desenvolvimento humano.", color: "brand-cyan" },
    { key: "Criação", text: "Processos de criação coletiva, valorizando diferentes vozes, culturas e territórios.", color: "brand-red" },
    { key: "Apresentação", text: "Compartilhamento das produções com a comunidade em espaços culturais e públicos.", color: "brand-gold" },
  ];
  return (
    <Section className="bg-white">
      <div className="container-x">
        <SectionTitle eyebrow="Como fazemos" title="Uma metodologia em três atos" />
        <div className="grid md:grid-cols-3 gap-6">
          {blocks.map((b) => (
            <div key={b.key} className="relative p-8 rounded-3xl border-2 border-brand-ink/10 hover:border-brand-ink/30 transition">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-display font-black text-2xl mb-4" style={{ backgroundColor: `var(--${b.color})` }}>
                {b.key[0]}
              </div>
              <h3 className="font-display text-2xl font-black text-brand-ink">{b.key}</h3>
              <p className="mt-3 text-brand-gray">{b.text}</p>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full hatched-circle text-brand-ink/40" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function NewsPreview() {
  const items = news.slice(0, 3);
  return (
    <Section className="bg-brand-soft">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Novidades" title="Últimas notícias" />
          <Link to="/noticias" className="mb-4 text-brand-red font-semibold">Ver todas →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((n) => (
            <article key={n.slug} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition">
              <div className="aspect-video overflow-hidden"><img src={n.image} alt="" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-brand-gray"><span className="px-2 py-1 rounded-full bg-brand-red/10 text-brand-red font-bold">{n.category}</span><time>{new Date(n.date).toLocaleDateString("pt-BR")}</time></div>
                <h3 className="mt-3 font-display font-black text-xl text-brand-ink">{n.title}</h3>
                <p className="mt-2 text-brand-gray text-sm">{n.excerpt}</p>
                <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-4 inline-block font-semibold text-brand-red">Leia mais →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function GalleryPreview() {
  const items = albums.slice(0, 6);
  return (
    <Section className="bg-white">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Registros" title="Prévia da galeria" text="Momentos das oficinas, apresentações e encontros." />
          <Link to="/galeria" className="mb-4 text-brand-red font-semibold">Acessar galeria →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((a, idx) => (
            <Link key={a.slug} to="/galeria/$slug" params={{ slug: a.slug }} className={`group relative overflow-hidden rounded-2xl ${idx === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]"}`}>
              <img src={a.cover} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs uppercase tracking-widest text-brand-gold">{a.year}</p>
                <p className="font-display font-black text-lg">{a.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SupportCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "var(--brand-red)" }}>
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full border-8 border-white/20" aria-hidden />
      <div className="absolute -left-16 bottom-0 w-72 h-72 hatched-circle text-brand-gold opacity-40" aria-hidden />
      <div className="container-x relative text-white text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-black">Ajude a manter a cultura em movimento</h2>
        <p className="mt-4 text-lg text-white/90">Seu apoio contribui para a continuidade das oficinas, apresentações e ações culturais realizadas com a comunidade.</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href={`https://wa.me/${site.whatsapp}`} className="px-6 py-3 rounded-full bg-white text-brand-red font-bold hover:bg-brand-gold hover:text-brand-ink transition">Quero apoiar</a>
          <Link to="/contato" className="px-6 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-brand-red transition">Entre em contato</Link>
        </div>
      </div>
    </section>
  );
}
