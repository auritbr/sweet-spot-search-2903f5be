// Conteúdo institucional sujeito à validação final da Associação Maggu.
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArcThick, DiamondsCluster, Triangle, HatchedCircle } from "@/components/Shapes";
import { Breadcrumbs, LegalToc, LegalSection } from "@/components/Legal";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Associação Maggu" },
      { name: "description", content: "Consulte as condições gerais de utilização do site institucional da Associação Maggu." },
      { property: "og:title", content: "Termos de Uso | Associação Maggu" },
      { property: "og:description", content: "Condições gerais de utilização do site institucional da Associação Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/termos-de-uso" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: TermosDeUso,
});

// Data da última atualização: definir junto à Associação (não preencher com data estimada).
const ultimaAtualizacao: string | null = null;

const toc = [
  { id: "sobre-o-site", label: "Sobre o site" },
  { id: "uso-do-conteudo", label: "Uso do conteúdo" },
  { id: "informacoes", label: "Informações publicadas" },
  { id: "links", label: "Links externos" },
  { id: "propriedade", label: "Propriedade intelectual" },
  { id: "formularios", label: "Formulários e interações" },
  { id: "disponibilidade", label: "Disponibilidade do site" },
  { id: "privacidade", label: "Privacidade" },
  { id: "alteracoes", label: "Alterações" },
  { id: "contato", label: "Contato" },
];

function TermosDeUso() {
  return (
    <main id="main">
      <PageHero title="Termos de Uso" eyebrow="Legal" subtitle="Estas orientações apresentam condições gerais para utilização do site institucional da Associação Maggu e de seus conteúdos digitais." image="https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1920&q=80" breadcrumb={[{ label: "Início", to: "/" }, { label: "Termos de Uso" }]} accent="gold" brush="#08B9E6" compact decoration="constellation" />

      <div className="bg-white py-10 md:py-14">
        <div className="container-x grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <LegalToc items={toc} accent="#ED1C24" />

          <div className="max-w-2xl">
            <LegalSection id="sobre-o-site" title="Sobre este site">
              <p>
                O site da Associação Maggu é um canal institucional destinado à apresentação de sua atuação, iniciativas, projetos, atividades, conteúdos, documentos públicos e formas de contato.
              </p>
            </LegalSection>

            <LegalSection id="uso-do-conteudo" title="Uso das informações">
              <p>As informações disponíveis neste site possuem finalidade institucional, informativa e cultural.</p>
              <p>
                A reprodução de conteúdos, fotografias, documentos, marcas e materiais deve observar autoria, créditos, direitos aplicáveis e eventuais orientações específicas apresentadas junto ao conteúdo.
              </p>
            </LegalSection>

            <LegalSection id="informacoes" title="Atualização das informações">
              <p>
                A Associação busca manter as informações institucionais atualizadas. Conteúdos relacionados a atividades, inscrições, horários, vagas, projetos e outras informações dinâmicas podem ser modificados ao longo do tempo.
              </p>
              <p>
                Quando uma informação atual depender de confirmação, consulte a página correspondente ou entre em contato pelos canais oficiais.
              </p>
            </LegalSection>

            <LegalSection id="links" title="Links e serviços externos">
              <p>
                O site pode disponibilizar links para plataformas, redes sociais, mapas, serviços de inscrição ou outros ambientes externos. Ao acessar esses serviços, o usuário passa a utilizar ambientes com regras e políticas próprias.
              </p>
            </LegalSection>

            <LegalSection id="propriedade" title="Marcas, imagens e conteúdos">
              <p>
                Logos, marcas institucionais, fotografias, textos, vídeos, produções artísticas e demais conteúdos presentes no site podem estar protegidos por direitos autorais, direitos de imagem, direitos de marca ou outras regras aplicáveis.
              </p>
            </LegalSection>

            <LegalSection id="formularios" title="Formulários e interações">
              <p>
                Ao utilizar formulários do site, o usuário deve fornecer informações verdadeiras e relacionadas à finalidade apresentada.
              </p>
              <p>
                Dados pessoais enviados por esses canais devem ser tratados conforme as orientações disponíveis na página de Privacidade.
              </p>
              <Link to="/privacidade" className="inline-flex items-center px-5 py-2.5 rounded-full border border-brand-ink/20 text-brand-ink text-sm hover:bg-brand-soft" style={{ fontWeight: 600 }}>
                Consulte nossa página de Privacidade
              </Link>
            </LegalSection>

            <LegalSection id="disponibilidade" title="Funcionamento do site">
              <p>A Associação pode realizar atualizações, ajustes ou manutenções em suas páginas e recursos digitais.</p>
            </LegalSection>

            <LegalSection id="privacidade" title="Privacidade">
              <p>
                O tratamento de dados pessoais relacionados ao uso do site é apresentado na página de Privacidade e Proteção de Dados.
              </p>
              <Link to="/privacidade" className="inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm hover:opacity-90" style={{ backgroundColor: "#00384C", fontWeight: 600 }}>
                Privacidade e proteção de dados
              </Link>
            </LegalSection>

            <LegalSection id="alteracoes" title="Atualizações destes Termos">
              <p>
                Estas orientações podem ser atualizadas quando houver mudanças no site, em seus serviços ou nas práticas institucionais relacionadas à sua utilização.
              </p>
              <p className="text-sm">Última atualização: {ultimaAtualizacao ?? "a definir pela Associação."}</p>
            </LegalSection>

            <LegalSection id="contato" title="Contato">
              <p>Dúvidas sobre estas orientações podem ser encaminhadas pelos canais institucionais.</p>
              <Link to="/contato" className="inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm hover:opacity-90" style={{ backgroundColor: "#ED1C24", fontWeight: 600 }}>Ir para Contato</Link>
              <Triangle color="#08B9E6" size={34} className="mt-6" rotate={-15} />
            </LegalSection>
          </div>
        </div>
      </div>
    </main>
  );
}
