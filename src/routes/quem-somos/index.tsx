import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, BrushStroke, DiamondsCluster, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos | Associação Maggu" },
      { name: "description", content: "Conheça a trajetória da Associação Maggu, sua relação com o Benedito Bentes, sua missão e a história cultural que deu origem ao Ecossistema Maggu." },
      { property: "og:title", content: "Quem Somos | Associação Maggu" },
      { property: "og:description", content: "Conheça a trajetória da Associação Maggu, sua relação com o Benedito Bentes, sua missão e a história cultural que deu origem ao Ecossistema Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quem-somos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

const milestones = [
  { year: "1999", title: "O início de uma trajetória", text: "Nasce a Companhia de Teatro Cortina, iniciando uma trajetória de criação, formação artística e mobilização cultural." },
  { year: "2001", title: "A cultura amplia sua presença no território", text: "A Paixão de Cristo fortalece a relação com artistas, moradores e comunidade do Benedito Bentes." },
  { year: "2025", title: "Nasce a Associação Sócio Cultural Maggu", text: "A trajetória construída ao longo dos anos ganha uma nova estrutura institucional com a formalização da Associação." },
  { year: "2025", title: "Reconhecimento como Ponto de Cultura", text: "O Teatro Escola Maggu é certificado como Ponto de Cultura." },
  { year: "2026", title: "Um ecossistema de iniciativas", text: "A Associação fortalece sua governança e organiza suas diferentes frentes de atuação como parte do Ecossistema Maggu." },
];

const process = [
  { number: "01", title: "Escutar", text: "Compreender pessoas, contextos, necessidades, histórias e possibilidades presentes no território." },
  { number: "02", title: "Formar", text: "Criar oportunidades de aprendizagem, experimentação e desenvolvimento por meio da cultura." },
  { number: "03", title: "Criar", text: "Transformar experiências, ideias e repertórios em processos, obras, ações e novas formas de expressão." },
  { number: "04", title: "Circular", text: "Compartilhar produções, conhecimentos e experiências com diferentes públicos e espaços." },
  { number: "05", title: "Registrar", text: "Preservar processos, resultados e memórias para reconhecer trajetórias e fortalecer a continuidade." },
];

function QuemSomos() {
  return (
    <>
      <PageHero
        title="Uma organização feita de arte, território e possibilidades."
        subtitle="A Associação Maggu reúne uma trajetória cultural construída no Benedito Bentes e transforma essa experiência em formação, criação, memória, participação e novas oportunidades."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Quem Somos" }]}
        accent="cyan"
        brush="#FFB400"
      />

      <Section className="bg-white overflow-hidden">
        <div className="container-x grid gap-12 md:grid-cols-[1.05fr_.95fr] items-center">
          <div className="max-w-2xl">
            <SectionTitle eyebrow="Quem somos" title="Uma trajetória que ganhou uma nova estrutura para continuar crescendo." />
            <div className="space-y-5 text-brand-gray leading-relaxed">
              <p>A Associação Sócio Cultural Maggu é uma organização da sociedade civil sediada no Benedito Bentes, em Maceió. Formalizada em 2025, ela organiza e amplia uma trajetória cultural construída ao longo de décadas por meio do teatro, da formação artística e da mobilização comunitária.</p>
              <p>Hoje, a Associação articula iniciativas de cultura, educação, audiovisual, leitura, memória, comunicação, infância, esporte, sustentabilidade e desenvolvimento comunitário.</p>
              <p>São diferentes formas de atuação conectadas por um mesmo compromisso: ampliar o acesso à cultura, fortalecer vínculos, formar pessoas, preservar memórias e criar novas possibilidades.</p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-md">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="Pessoas reunidas em atividade cultural" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <ArcThick color="#ED1C24" className="absolute -left-8 -top-7 w-32" from={100} to={260} />
            <HatchedCircle size={116} color="#08B9E6" className="absolute -bottom-8 -right-5 opacity-60" />
            <Triangle color="#FFB400" size={46} className="absolute right-2 top-14" rotate={18} />
          </div>
        </div>
      </Section>

      <section id="nossa-historia" className="scroll-mt-24 bg-brand-soft py-14 md:py-20 overflow-hidden">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] items-start">
            <div className="lg:sticky lg:top-28">
              <SectionTitle eyebrow="Nossa história" title="Nossa história começou antes da Associação." />
            </div>
            <div className="space-y-4 text-brand-gray leading-relaxed">
              <p>A história da Maggu começa antes da atual estrutura institucional.</p>
              <p>Em 1999, nasce a Companhia de Teatro Cortina, dando início a uma trajetória de criação, formação e mobilização cultural.</p>
              <p>Em 2001, a realização da Paixão de Cristo amplia essa relação com artistas, moradores e diferentes gerações do Benedito Bentes.</p>
              <p>Com o passar dos anos, essa experiência se desdobra em novas iniciativas, linguagens e formas de participação.</p>
              <p>Em 2025, a trajetória passa a contar com uma nova estrutura institucional com a formalização da Associação Sócio Cultural Maggu.</p>
              <p>No mesmo ano, o Teatro Escola Maggu é certificado como Ponto de Cultura.</p>
              <p>Em 2026, a Associação fortalece sua governança e passa a organizar suas diferentes iniciativas como parte do Ecossistema Maggu.</p>
            </div>
          </div>

          <div className="mt-14 hidden md:block" aria-label="Linha do tempo da Associação Maggu">
            <ol className="relative grid grid-cols-5 gap-5 min-h-[410px]">
              <span className="absolute left-[9%] right-[9%] top-1/2 h-0.5 bg-brand-red/30" aria-hidden="true" />
              {milestones.map((item, index) => {
                const above = index % 2 === 0;
                return (
                  <li key={`${item.year}-${item.title}`} className="relative min-w-0">
                    <span className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red ring-4 ring-brand-soft" />
                    <span className={`absolute left-1/2 h-10 w-px -translate-x-1/2 bg-brand-red/40 ${above ? "bottom-1/2 mb-2" : "top-1/2 mt-2"}`} aria-hidden="true" />
                    <div className={`absolute inset-x-0 text-center ${above ? "bottom-[calc(50%+3.5rem)]" : "top-[calc(50%+3.5rem)]"}`}>
                      <p className="text-xl font-bold text-brand-red">{item.year}</p>
                      <h3 className="mt-2 text-base leading-snug text-brand-ink">{item.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-brand-gray">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <ol className="relative mt-12 ml-2 space-y-8 border-l-2 border-brand-red/30 pl-7 md:hidden">
            {milestones.map((item) => (
              <li key={`${item.year}-${item.title}`} className="relative">
                <span className="absolute -left-[2.18rem] top-1 h-4 w-4 rounded-full bg-brand-red ring-4 ring-brand-soft" />
                <p className="text-xl font-bold text-brand-red">{item.year}</p>
                <h3 className="mt-1 text-base text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section className="bg-white overflow-hidden">
        <div className="container-x">
          <SectionTitle eyebrow="Princípios" title="Missão e filosofia" text="Referências que orientam a atuação da Associação e conectam suas diferentes iniciativas." />
          <div className="grid gap-6 lg:grid-cols-[1.12fr_.88fr]">
            <article className="relative min-h-[340px] overflow-hidden rounded-md bg-brand-petrol p-8 md:p-11 flex flex-col justify-end">
              <QuarterCircle corner="tr" color="#ED1C24" className="absolute -right-2 -top-2 w-36 opacity-90" />
              <HatchedCircle size={160} color="#08B9E6" className="absolute -left-12 top-8 opacity-25" />
              <div className="relative max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Missão</p>
                <h2 className="mt-4 text-white text-2xl md:text-3xl leading-snug">Transformar a exclusão cultural em obra-prima, antes que a criatividade seja uma relíquia do passado. Incluir, inspirar, criar.</h2>
              </div>
            </article>
            <article className="relative min-h-[340px] overflow-hidden rounded-md bg-brand-gold p-8 md:p-11 flex flex-col justify-end">
              <ArcThick color="#ED1C24" className="absolute -right-8 -top-8 w-32" from={120} to={280} />
              <DiamondsCluster color="#00384C" className="absolute left-8 top-8 opacity-35" size={52} />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">Filosofia</p>
                <h2 className="mt-4 text-brand-petrol text-2xl md:text-3xl leading-snug">A arte como instrumento de transformação social.</h2>
                <p className="mt-4 leading-relaxed text-brand-petrol">É a partir dessa compreensão que a Associação desenvolve experiências de formação, criação, convivência, memória e participação cultural.</p>
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-soft overflow-hidden">
        <div className="container-x">
          <SectionTitle eyebrow="Forma de atuação" title="Como transformamos" text="A atuação da Maggu acontece por meio de um processo contínuo que conecta escuta, formação, criação, circulação e memória." />
          <ol className="relative grid gap-5 md:grid-cols-5">
            <span className="absolute left-[8%] right-[8%] top-9 hidden h-px bg-brand-petrol/25 md:block" aria-hidden="true" />
            {process.map((item, index) => (
              <li key={item.title} className="relative bg-white p-5 rounded-md border-t-4 border-brand-red">
                <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-bold ${index % 2 === 0 ? "bg-brand-red text-white" : "bg-brand-gold text-brand-petrol"}`}>{item.number}</div>
                <h3 className="mt-5 text-lg text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-brand-petrol py-14 md:py-20">
        <HatchedCircle size={210} color="#08B9E6" className="absolute -bottom-20 -right-12 opacity-20" />
        <ArcThick color="#FFB400" className="absolute -left-6 top-8 w-32" from={210} to={340} />
        <div className="container-x grid gap-10 lg:grid-cols-[1.08fr_.92fr] items-center">
          <div className="relative overflow-hidden rounded-md aspect-[16/10]">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80" alt="Pessoas compartilhando uma atividade comunitária" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-brand-petrol/20" />
          </div>
          <div className="relative text-white">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Território</p>
            <h2 className="mt-3 text-white text-2xl md:text-3xl leading-tight">Benedito Bentes: território de onde partimos e com quem construímos.</h2>
            <p className="mt-5 leading-relaxed text-white/90">O Benedito Bentes não é apenas o endereço da Associação. É território de relações, memórias, desafios, saberes e potências que ajudam a explicar por que e para quem o Ecossistema Maggu existe.</p>
            <p className="mt-4 leading-relaxed text-white/90">É parte da identidade da Maggu e do modo como a organização pensa cultura, acesso, memória, formação e participação.</p>
            <Link to="/ecossistema" className="mt-7 inline-flex rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-white">Conheça o Ecossistema</Link>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] items-start">
          <SectionTitle eyebrow="Governança" title="Uma estrutura para cuidar da continuidade." text="A formalização da Associação fortalece a organização institucional, a definição de responsabilidades e a continuidade das iniciativas desenvolvidas." />
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="border-l-4 border-brand-red bg-brand-soft p-6 rounded-md">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Diretor Geral</p>
                <h3 className="mt-3 text-lg text-brand-ink">Cristiano Alcides da Silva Paes</h3>
              </article>
              <article className="border-l-4 border-brand-cyan bg-brand-soft p-6 rounded-md">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Diretora Administrativo-Financeira</p>
                <h3 className="mt-3 text-lg text-brand-ink">Rafaela da Silva Leite</h3>
              </article>
            </div>
            <Link to="/transparencia" className="mt-6 inline-flex rounded-full border-2 border-brand-petrol px-6 py-2.5 text-sm font-bold text-brand-petrol transition hover:bg-brand-soft">Conheça nossa transparência</Link>
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-brand-petrol py-16 md:py-20">
        <QuarterCircle corner="br" color="#ED1C24" className="absolute -bottom-2 -right-2 w-36 opacity-90" />
        <HatchedCircle size={150} color="#08B9E6" className="absolute -left-12 top-0 opacity-25" />
        <div className="container-x relative mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl text-white">Conheça as diferentes formas de atuação da Maggu.</h2>
          <BrushStroke color="#FFB400" className="mx-auto mt-5 w-28" />
          <p className="mt-5 leading-relaxed text-white/90">Arte, educação, audiovisual, leitura, infância, esporte, sustentabilidade e outras iniciativas se encontram em um mesmo ecossistema.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/ecossistema" className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-petrol transition hover:bg-white">Conheça o Ecossistema</Link>
            <Link to="/contato" className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Entre em contato</Link>
          </div>
        </div>
      </section>
    </>
  );
}