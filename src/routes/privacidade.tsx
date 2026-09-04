// Conteúdo institucional sujeito à validação final da Associação Maggu.
import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalContact, LegalIntro, LegalToc, LegalSection } from "@/components/Legal";
import { PageHero } from "@/components/PageHero";
import { CompactFinalCTA } from "@/components/CompactFinalCTA";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Associação Maggu" },
      { name: "description", content: "Conheça as orientações da Associação Maggu sobre privacidade, tratamento de dados pessoais e direitos relacionados ao uso de seus canais digitais." },
      { property: "og:title", content: "Política de Privacidade | Associação Maggu" },
      { property: "og:description", content: "Orientações sobre privacidade, tratamento de dados pessoais e direitos relacionados ao uso dos canais digitais da Associação Maggu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacidade" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: Privacidade,
});

// Data da última atualização: definir junto à Associação (não preencher com data estimada).
const ultimaAtualizacao: string | null = null;

const toc = [
  { id: "sobre", label: "Sobre esta página" },
  { id: "dados", label: "Dados que podem ser coletados" },
  { id: "uso", label: "Como os dados podem ser utilizados" },
  { id: "formularios", label: "Formulários e comunicações" },
  { id: "cookies", label: "Cookies" },
  { id: "compartilhamento", label: "Compartilhamento" },
  { id: "seguranca", label: "Segurança" },
  { id: "direitos", label: "Direitos dos titulares" },
  { id: "atualizacoes", label: "Atualizações desta política" },
  { id: "contato", label: "Contato" },
];

function Privacidade() {
  const openCookies = () => window.dispatchEvent(new Event("open-cookie-panel"));

  return (
    <main id="main">
      <PageHero title="Política de Privacidade" eyebrow="Privacidade" subtitle="Entenda como as informações pessoais são tratadas nos canais digitais da Associação Sócio Cultural Maggu." image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80" accent="cyan" brush="#FFB400" compact decoration="ribbon" />

      <LegalIntro tone="privacy" eyebrow="Transparência e dados" title="Privacidade também faz parte da nossa responsabilidade institucional." text="A Associação Maggu busca tratar informações pessoais com responsabilidade, clareza e respeito. Nesta página estão reunidas as orientações relacionadas à coleta, utilização e proteção de dados nos canais digitais da organização." updated={ultimaAtualizacao} />

      <div className="bg-background py-10 md:py-14">
        <div className="container-x grid gap-10 lg:grid-cols-[220px_minmax(0,880px)] lg:justify-center lg:gap-14">
          <LegalToc items={toc} tone="privacy" />

          <article className="min-w-0 max-w-[880px]">
            <LegalSection id="sobre" title="Sobre esta página" number={1} tone="privacy">
              <p>
                A Associação Maggu utiliza canais digitais para divulgar suas iniciativas, receber mensagens, organizar atividades e estabelecer comunicação com diferentes públicos.
              </p>
              <p>
                Sempre que houver coleta de dados pessoais, essas informações devem ser utilizadas de acordo com a finalidade apresentada no momento da coleta e com as práticas institucionais aplicáveis.
              </p>
            </LegalSection>

            <LegalSection id="dados" title="Quais informações podem ser coletadas?" number={2} tone="privacy">
              <p>As informações coletadas dependem do modo como cada pessoa utiliza o site.</p>
              <div className="space-y-7 border-l border-brand-cyan/30 pl-5 md:pl-7">
                <div>
                  <h3>Dados de contato</h3>
                  <ul className="mt-2">
                    <li>nome;</li>
                    <li>e-mail;</li>
                    <li>telefone;</li>
                    <li>outras informações fornecidas voluntariamente em formulários.</li>
                  </ul>
                </div>
                <div>
                  <h3>Dados relacionados à participação</h3>
                  <p className="mt-2">
                    Informações necessárias para inscrições em cursos, oficinas, eventos ou outras atividades, quando esses formulários existirem.
                  </p>
                </div>
                <div>
                  <h3>Dados de navegação</h3>
                  <p className="mt-2">
                    Informações técnicas relacionadas ao funcionamento do site e aos cookies efetivamente utilizados.
                  </p>
                </div>
              </div>
            </LegalSection>

            <LegalSection id="uso" title="Como os dados podem ser utilizados" number={3} tone="privacy">
              <p>Dependendo do serviço utilizado, as finalidades podem incluir:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>responder solicitações enviadas pelos canais institucionais;</li>
                <li>administrar inscrições ou manifestações de interesse;</li>
                <li>manter comunicação relacionada a atividades;</li>
                <li>melhorar a experiência de uso do site;</li>
                <li>cumprir obrigações institucionais e legais quando aplicáveis;</li>
                <li>proteger a segurança e o funcionamento dos serviços digitais.</li>
              </ul>
            </LegalSection>

            <LegalSection id="formularios" title="Formulários e comunicações" number={4} tone="privacy">
              <p>
                Os formulários do site devem solicitar apenas as informações necessárias para a finalidade apresentada. Antes do envio, o usuário deve ter acesso às informações relevantes sobre o uso dos dados e, quando necessário, às opções de consentimento correspondentes.
              </p>
              <p>
                Mensagens gerais devem ser encaminhadas pelos canais de Contato. Relatos relacionados a ética, integridade ou condutas incompatíveis com os princípios institucionais possuem canal próprio.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link to="/contato" className="inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm hover:opacity-90" style={{ backgroundColor: "#ED1C24", fontWeight: 600 }}>Fale conosco</Link>
                <Link to="/canal-de-denuncias" className="inline-flex items-center px-5 py-2.5 rounded-full border border-brand-ink/20 text-brand-ink text-sm hover:bg-brand-soft" style={{ fontWeight: 600 }}>Canal de Denúncias</Link>
              </div>
            </LegalSection>

            <LegalSection id="cookies" title="Cookies e preferências" number={5} tone="privacy">
              <p>
                O site pode utilizar cookies necessários para seu funcionamento e, quando efetivamente configurados, outras categorias relacionadas a preferências, medição de uso ou serviços externos.
              </p>
              <dl className="divide-y divide-brand-petrol/10 border-y border-brand-petrol/10">
                <div className="py-4">
                  <dt className="text-sm font-semibold text-brand-ink">Cookies necessários</dt>
                  <dd className="mt-1 text-sm">Permitem funções essenciais do site e não podem ser desativados quando indispensáveis ao funcionamento.</dd>
                </div>
                <div className="py-4">
                  <dt className="text-sm font-semibold text-brand-ink">Cookies de preferências</dt>
                  <dd className="text-sm mt-1">Podem guardar escolhas feitas pelo usuário para melhorar sua experiência.</dd>
                </div>
                <div className="py-4">
                  <dt className="text-sm font-semibold text-brand-ink">Cookies analíticos</dt>
                  <dd className="text-sm mt-1">Podem ser utilizados para compreender como o site é utilizado, quando esse recurso estiver configurado.</dd>
                </div>
                <div className="py-4">
                  <dt className="text-sm font-semibold text-brand-ink">Cookies de terceiros</dt>
                  <dd className="text-sm mt-1">Podem existir quando o site utilizar serviços externos que dependam dessa tecnologia.</dd>
                </div>
              </dl>
              <Button type="button" onClick={openCookies} size="sm" className="rounded-full bg-brand-petrol px-5 text-primary-foreground hover:bg-brand-petrol/90">
                Gerenciar preferências de cookies
              </Button>
            </LegalSection>

            <LegalSection id="compartilhamento" title="Compartilhamento de informações" number={6} tone="privacy">
              <p>A Associação não deve disponibilizar dados pessoais de forma incompatível com a finalidade informada ao titular.</p>
              <p>
                Quando algum serviço técnico necessário ao funcionamento dos canais digitais envolver terceiros, o tratamento deverá observar as condições aplicáveis ao serviço e as práticas de proteção de dados adotadas pela Associação.
              </p>
            </LegalSection>

            <LegalSection id="seguranca" title="Segurança" number={7} tone="privacy">
              <p>
                A Associação busca adotar medidas compatíveis com sua operação para proteger informações contra acesso, alteração, divulgação ou uso inadequado.
              </p>
            </LegalSection>

            <LegalSection id="direitos" title="Direitos relacionados aos dados pessoais" number={8} tone="privacy">
              <p>
                De acordo com a legislação aplicável, titulares de dados pessoais podem solicitar informações e exercer direitos relacionados ao tratamento de seus dados.
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>confirmação da existência de tratamento;</li>
                <li>acesso aos dados;</li>
                <li>correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>informações sobre a finalidade do tratamento;</li>
                <li>revogação de consentimento, quando o tratamento se basear nele;</li>
                <li>eliminação de dados, nas hipóteses previstas em lei.</li>
              </ul>
              <Link to="/contato" className="inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm hover:opacity-90" style={{ backgroundColor: "#ED1C24", fontWeight: 600 }}>Entrar em contato</Link>
            </LegalSection>

            <LegalSection id="atualizacoes" title="Atualizações desta página" number={9} tone="privacy">
              <p>
                Esta política poderá ser atualizada à medida que os serviços digitais, formulários e práticas institucionais da Associação forem definidos ou modificados.
              </p>
              <p className="text-sm">
                Última atualização: {ultimaAtualizacao ?? "a definir pela Associação."}
              </p>
            </LegalSection>

            <LegalSection id="contato" title="Contato" number={10} tone="privacy">
              <p>
                Dúvidas ou solicitações relacionadas a dados pessoais podem ser encaminhadas pelos canais institucionais disponíveis na página de Contato.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link to="/contato" className="inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm hover:opacity-90" style={{ backgroundColor: "#00384C", fontWeight: 600 }}>Ir para Contato</Link>
                <Link to="/termos-de-uso" className="inline-flex items-center px-5 py-2.5 rounded-full border border-brand-ink/20 text-brand-ink text-sm hover:bg-brand-soft" style={{ fontWeight: 600 }}>Termos de Uso</Link>
              </div>
            </LegalSection>
            <LegalContact tone="privacy" />
          </article>
        </div>
      </div>
      <CompactFinalCTA variant="privacy" title="Transparência também se constrói com informação clara." text="Conheça os documentos institucionais da Associação Maggu ou fale com a nossa equipe." primary={{ label: "Ver Transparência", to: "/transparencia" }} secondary={{ label: "Entre em contato", to: "/contato" }} />
    </main>
  );
}
