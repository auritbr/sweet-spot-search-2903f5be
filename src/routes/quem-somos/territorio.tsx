import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, BookOpen, GraduationCap, Users, Archive } from "lucide-react";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { HeroButton, PageHero, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, HatchedCircle, QuarterCircle } from "@/components/Shapes";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/site";

export const Route = createFileRoute("/quem-somos/territorio")({
  head: () => ({ meta: [
    { title: "Território | Associação Maggu" },
    { name: "description", content: "Conheça a relação da Associação Maggu com o Benedito Bentes, em Maceió." },
    { property: "og:title", content: "Território | Associação Maggu" },
    { property: "og:description", content: "Memória, formação e participação no território onde a Maggu constrói sua trajetória." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Territorio,
});

const relations = [
  { title: "Memória", text: "Histórias, pessoas, acontecimentos e processos ajudam a formar a identidade do território.", icon: Archive, accent: "bg-brand-red" },
  { title: "Formação", text: "Oficinas, encontros e experiências ampliam repertórios e possibilidades.", icon: GraduationCap, accent: "bg-brand-gold" },
  { title: "Participação", text: "A cultura cria espaços de convivência, expressão e participação comunitária.", icon: Users, accent: "bg-brand-cyan" },
  { title: "Continuidade", text: "Registrar e fortalecer iniciativas ajuda a preservar o que foi construído ao longo do tempo.", icon: BookOpen, accent: "bg-brand-lime" },
] as const;

const selectedSlugs = ["infanciar", "teatro-escola-maggu", "esporte-na-comunidade", "jardim-literario-maggu"];
const territoryProjects = projects.filter((project) => selectedSlugs.includes(project.slug));

function Territorio() {
  const mapQuery = encodeURIComponent("Rua Em Projeto A, 33, Benedito Bentes, Maceió, AL, 57084-411");
  return <>
    <PageHero eyebrow="Território" title="Benedito Bentes: território de onde partimos e com quem construímos." subtitle="O Benedito Bentes é mais do que a localização da sede. É parte da identidade da Maggu e do modo como a organização pensa cultura, acesso, memória, formação e participação." image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80" accent="cyan" brush="#FFB400" decoration="orbit">
      <HeroButton to="#projetos-territorio" tone="gold">Conheça ações no território</HeroButton>
      <HeroButton to="/impacto-memoria" tone="cyan">Explore nossa memória</HeroButton>
    </PageHero>

    <Section className="overflow-hidden bg-background">
      <HatchedCircle size={90} color="#FFB400" className="pointer-events-none absolute -left-8 bottom-8 opacity-[0.1]" />
      <div className="container-x grid items-center gap-9 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
        <div className="relative"><span className="pointer-events-none absolute -left-5 top-2 hidden h-12 w-1 rounded-full bg-brand-red lg:block" aria-hidden="true" /><SectionTitle eyebrow="Nosso território" title="Um lugar de relações, memórias, saberes e possibilidades." />
          <div className="space-y-4 leading-relaxed text-brand-gray"><p>O Benedito Bentes não é apenas o endereço da Associação. É território de relações, memórias, desafios, saberes e potências que ajudam a explicar por que e para quem o Ecossistema Maggu existe.</p><p>É parte da identidade da Maggu e do modo como a organização pensa cultura, acesso, memória, formação e participação.</p></div>
        </div>
        <div className="relative mx-auto w-full max-w-md"><div className="aspect-[5/4] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem]"><img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="Pessoas reunidas em uma atividade comunitária" className="h-full w-full object-cover" loading="lazy" /></div><ArcThick color="#08B9E6" className="absolute -right-5 -top-5 w-20" from={185} to={330} /><span className="absolute -bottom-2 left-8 size-3 rotate-45 bg-brand-red" /><span className="absolute -right-3 bottom-8 h-px w-10 bg-brand-gold" /></div>
      </div>
    </Section>

    <Section className="relative overflow-hidden bg-brand-soft/70">
      <HatchedCircle size={150} color="#08B9E6" className="absolute -right-16 top-10 opacity-10" />
      <div className="container-x"><SectionTitle align="center" eyebrow="Relações" title="O território também se constrói nas relações." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{relations.map(({title,text,icon:Icon,accent}, index) => <article key={title} className="group relative min-h-52 overflow-hidden rounded-[14px] border border-brand-petrol/10 bg-background/85 p-5 shadow-[0_14px_30px_-28px_rgba(0,56,76,0.6)] transition hover:-translate-y-1 hover:border-brand-cyan/30"><span className={`absolute inset-x-0 top-0 h-0.5 ${accent}`} />{index % 2 === 0 ? <span className={`absolute -right-5 -top-5 size-14 rounded-full ${accent} opacity-10`} aria-hidden="true" /> : <span className={`absolute right-5 top-5 size-2 rotate-45 ${accent}`} aria-hidden="true" />}<span className={`inline-flex size-10 items-center justify-center rounded-full ${index % 2 === 0 ? "bg-brand-soft" : "bg-brand-gold/12"}`}><Icon className="size-5 text-brand-petrol" aria-hidden="true" /></span><span className={`mt-5 block h-0.5 w-8 ${accent}`} aria-hidden="true" /><h3 className="mt-3 text-lg">{title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-gray">{text}</p></article>)}</div>
      </div>
    </Section>

    <Section className="overflow-hidden bg-background">
      <ArcThick color="#FFB400" className="pointer-events-none absolute -left-12 top-16 w-20 opacity-[0.14]" from={210} to={335} />
      <div className="container-x text-center"><SectionTitle align="center" eyebrow="Localização" title="Onde estamos" /><div className="mx-auto flex max-w-2xl items-start justify-center gap-3 text-brand-gray"><MapPin className="mt-0.5 size-5 shrink-0 text-brand-red" /><address className="not-italic leading-relaxed">Rua Em Projeto A, 33 — Benedito Bentes — Maceió/AL — CEP 57084-411</address></div><Button asChild className="mt-5 rounded-full bg-brand-petrol text-primary-foreground hover:bg-brand-red"><a href={`https://www.google.com/maps?q=${mapQuery}`} target="_blank" rel="noreferrer">Abrir no mapa</a></Button>
        <div className="relative mx-auto mt-8 max-w-4xl"><span className="pointer-events-none absolute -right-3 -top-3 size-8 rounded-full border-[6px] border-brand-cyan/20" aria-hidden="true" /><span className="pointer-events-none absolute -bottom-2 left-8 size-3 rotate-45 bg-brand-gold" aria-hidden="true" /><div className="overflow-hidden rounded-[16px] border border-brand-petrol/10 bg-brand-soft p-1.5 shadow-[0_18px_38px_-32px_rgba(0,56,76,0.65)]"><iframe title="Mapa de referência do Benedito Bentes" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" className="block h-[220px] w-full rounded-[11px] border-0 md:h-[260px]" /></div></div>
      </div>
    </Section>

    <Section id="projetos-territorio" className="overflow-hidden bg-brand-soft"><HatchedCircle size={100} color="#08B9E6" className="pointer-events-none absolute -right-10 top-8 opacity-[0.11]" /><div className="container-x"><SectionTitle align="center" title="Projetos conectados ao território" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{territoryProjects.map((project,index) => <Link key={project.slug} to="/projetos/$slug" params={{slug:project.slug}} className="group relative flex h-full flex-col overflow-hidden rounded-[14px] border border-brand-petrol/10 bg-background shadow-[0_14px_30px_-28px_rgba(0,56,76,0.65)] transition hover:-translate-y-1 hover:border-brand-cyan/40"><span className={`absolute right-4 top-4 z-10 size-2 rotate-45 ${index%2 ? "bg-brand-gold" : "bg-brand-red"}`} aria-hidden="true" /><div className="aspect-[16/10] overflow-hidden bg-brand-soft"><img src={project.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" /></div><div className="flex flex-1 flex-col p-4"><span className={`mb-3 block h-0.5 w-10 ${index%2 ? "bg-brand-gold" : "bg-brand-red"}`} /><h3 className="text-base leading-snug">{project.name}</h3><span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold text-brand-petrol">Conheça <ArrowRight className="size-3 transition group-hover:translate-x-1" /></span></div></Link>)}</div>
      <nav aria-label="Conexões" className="mt-9 flex flex-col justify-center gap-2.5 sm:flex-row sm:flex-wrap"><Link to="/quem-somos" className="inline-flex min-h-11 items-center justify-center rounded-full border border-brand-petrol/15 bg-background px-6 py-2.5 text-sm font-semibold text-brand-petrol shadow-[0_10px_24px_-22px_rgba(0,56,76,0.8)] transition hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:bg-brand-cyan/8">Quem Somos</Link><Link to="/ecossistema" className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-petrol px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-20px_rgba(0,56,76,0.8)] transition hover:-translate-y-0.5 hover:bg-brand-red">Ecossistema</Link><Link to="/impacto-memoria" className="inline-flex min-h-11 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/12 px-6 py-2.5 text-sm font-semibold text-brand-petrol transition hover:-translate-y-0.5 hover:bg-brand-gold/20">Impacto & Memória</Link></nav>
    </div></Section>

    <CompactFinalCTA title="Conheça outras formas de atuação da Maggu." text="Explore projetos, memórias e iniciativas construídas a partir do território." primary={{label:"Explorar o Ecossistema",to:"/ecossistema"}} secondary={{label:"Ver Impacto & Memória",to:"/impacto-memoria"}} variant="ecosystem" />
  </>;
}
