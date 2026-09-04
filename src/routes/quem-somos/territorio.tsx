import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, BookOpen, GraduationCap, Users, Archive } from "lucide-react";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { HeroButton, PageHero, Section, SectionTitle } from "@/components/PageHero";
import { ArcThick, HatchedCircle, QuarterCircle, Triangle } from "@/components/Shapes";
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
      <HeroButton to="#acoes" tone="gold">Conheça ações no território</HeroButton>
      <HeroButton to="/impacto-memoria" tone="cyan">Explore nossa memória</HeroButton>
    </PageHero>

    <Section className="overflow-hidden bg-background">
      <div className="container-x grid items-center gap-9 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <div><SectionTitle eyebrow="Nosso território" title="Um lugar de relações, memórias, saberes e possibilidades." />
          <div className="space-y-4 leading-relaxed text-brand-gray"><p>O Benedito Bentes não é apenas o endereço da Associação. É território de relações, memórias, desafios, saberes e potências que ajudam a explicar por que e para quem o Ecossistema Maggu existe.</p><p>É parte da identidade da Maggu e do modo como a organização pensa cultura, acesso, memória, formação e participação.</p></div>
        </div>
        <div className="relative"><div className="aspect-[4/3] overflow-hidden rounded-tl-[3rem] rounded-br-[3rem]"><img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="Pessoas reunidas em uma atividade comunitária" className="h-full w-full object-cover" loading="lazy" /></div><ArcThick color="#08B9E6" className="absolute -right-5 -top-5 w-24" from={185} to={330} /><span className="absolute -bottom-2 left-8 size-4 rotate-45 bg-brand-red" /></div>
      </div>
    </Section>

    <Section className="relative overflow-hidden bg-brand-soft/70">
      <HatchedCircle size={150} color="#08B9E6" className="absolute -right-16 top-10 opacity-10" />
      <div className="container-x"><SectionTitle align="center" eyebrow="Relações" title="O território também se constrói nas relações." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{relations.map(({title,text,icon:Icon,accent}) => <article key={title} className="group relative overflow-hidden rounded-2xl border border-brand-petrol/10 bg-background/75 p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-petrol/20"><span className={`absolute inset-x-0 top-0 h-1 ${accent}`} /><Icon className="size-5 text-brand-petrol" aria-hidden="true" /><h3 className="mt-5 text-lg">{title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-gray">{text}</p></article>)}</div>
      </div>
    </Section>

    <Section className="overflow-hidden bg-background">
      <div className="container-x"><div className="grid items-center gap-7 lg:grid-cols-[.7fr_1.3fr]">
        <div><SectionTitle eyebrow="Localização" title="Onde estamos" /><div className="flex gap-3 text-brand-gray"><MapPin className="mt-0.5 size-5 shrink-0 text-brand-red" /><address className="not-italic leading-relaxed">Rua Em Projeto A, 33 — Benedito Bentes — Maceió/AL — CEP 57084-411</address></div><Button asChild className="mt-5 rounded-full bg-brand-petrol text-primary-foreground hover:bg-brand-red"><a href={`https://www.google.com/maps?q=${mapQuery}`} target="_blank" rel="noreferrer">Abrir no mapa</a></Button></div>
        <div className="overflow-hidden rounded-2xl border border-brand-petrol/10"><iframe title="Mapa de referência do Benedito Bentes" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" className="block h-[240px] w-full border-0 md:h-[300px]" /></div>
      </div></div>
    </Section>

    <Section id="acoes" className="relative overflow-hidden bg-brand-soft"><div className="container-x"><SectionTitle eyebrow="Em movimento" title="Ações que ajudam a contar essa relação com o território." text="Esta área está preparada para receber histórias e registros de ações à medida que forem publicados pela Associação." />
      <div className="rounded-2xl border border-dashed border-brand-petrol/25 bg-background/55 px-6 py-10 text-center"><BookOpen className="mx-auto size-7 text-brand-cyan" /><h3 className="mt-4 text-lg">Novos registros serão reunidos aqui.</h3><p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-brand-gray">Histórias, imagens e relações com projetos serão apresentadas quando houver conteúdo institucional validado.</p></div>
    </div></Section>

    <Section className="overflow-hidden bg-background"><div className="container-x"><SectionTitle align="center" title="Projetos conectados ao território" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{territoryProjects.map((project,index) => <Link key={project.slug} to="/projetos/$slug" params={{slug:project.slug}} className="group overflow-hidden rounded-2xl border border-brand-petrol/10 bg-background shadow-sm transition hover:-translate-y-1 hover:border-brand-cyan/40"><div className="aspect-[16/10] overflow-hidden bg-brand-soft"><img src={project.image} alt="" className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" /></div><div className="p-4"><span className={`mb-3 block h-1 w-10 ${index%2 ? "bg-brand-gold" : "bg-brand-red"}`} /><h3 className="text-base leading-snug">{project.name}</h3><span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-petrol">Conheça <ArrowRight className="size-3" /></span></div></Link>)}</div>
      <nav aria-label="Conexões" className="mt-10 flex flex-wrap justify-center gap-3"><Link to="/quem-somos" className="rounded-full border border-brand-petrol/20 px-5 py-2 text-sm font-semibold">Quem Somos</Link><Link to="/ecossistema" className="rounded-full border border-brand-petrol/20 px-5 py-2 text-sm font-semibold">Ecossistema</Link><Link to="/impacto-memoria" className="rounded-full border border-brand-petrol/20 px-5 py-2 text-sm font-semibold">Impacto & Memória</Link></nav>
    </div></Section>

    <CompactFinalCTA title="Conheça outras formas de atuação da Maggu." text="Explore projetos, memórias e iniciativas construídas a partir do território." primary={{label:"Explorar o Ecossistema",to:"/ecossistema"}} secondary={{label:"Ver Impacto & Memória",to:"/impacto-memoria"}} variant="ecosystem" />
  </>;
}
