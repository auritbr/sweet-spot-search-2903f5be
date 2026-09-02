// Conteúdo institucional sujeito à validação final da Associação Maggu.
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArcThick, HatchedCircle, Triangle, QuarterCircle } from "@/components/Shapes";
import { Breadcrumbs, LegalToc, LegalSection } from "@/components/Legal";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Privacidade e Proteção de Dados | Associação Maggu" },
      { name: "description", content: "Conheça as orientações da Associação Maggu sobre privacidade, tratamento de dados pessoais e direitos relacionados ao uso de seus canais digitais." },
      { property: "og:title", content: "Privacidade e Proteção de Dados | Associação Maggu" },
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
      <section className="relative flex h-[356px] items-center overflow-hidden bg-brand-soft sm:h-[390px] lg:h-[440px]">
        <QuarterCircle corner="tr" color="#ED1C24" className="absolute top-0 right-0 w-24 md:w-40 opacity-90" />
        <ArcThick color="#00384C" className="absolute -left-10 top-24 w-32 md:w-48 opacity-70" from={200} to={340} />
        <HatchedCircle size={120} color="#08B9E6" className="absolute right-10 bottom-0 opacity-30 hidden md:block" />
        <div className="container-x relative max-w-3xl">
          <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Privacidade" }]} />
          <p className="mt-4 uppercase tracking-[0.22em] text-brand-red text-xs" style={{ fontWeight: 600 }}>Privacidade</p>
          <h1 className="mt-2" style={{ color: "#00384C", fontSize: "clamp(1.75rem, 2.8vw, 2.7rem)", lineHeight: 1.1, fontWeight: 700 }}>
            Privacidade e proteção de dados
          </h1>
          <p className="mt-4 max-w-2xl text-brand-ink" style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", lineHeight: 1.55 }}>
            A Associação Maggu busca tratar dados pessoais com responsabilidade, segurança e respeito aos direitos das pessoas.
          </p>
          <p className="mt-2 max-w-2xl text-sm text-brand-gray" style={{ lineHeight: 1.6 }}>
            Esta página reúne informações sobre o tratamento de dados relacionados ao uso do site, formulários, inscrições, comunicações e demais serviços digitais da Associação.
          </p>
        </div>
      </section>

      <div className="bg-white py-10 md:py-14">
        <div className="container-x grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <LegalToc items={toc} />

          <div className="max-w-2xl">
            <LegalSection id="sobre" title="Sobre esta página">
              <p>
                A Associação Maggu utiliza canais digitais para divulgar suas iniciativas, receber mensagens, organizar atividades e estabelecer comunicação com diferentes públicos.
              </p>
              <p>
                Sempre que houver coleta de dados pessoais, essas informações devem ser utilizadas de acordo com a finalidade apresentada no momento da coleta e com as práticas institucionais aplicáveis.
              </p>
            </LegalSection>

            <LegalSection id="dados" title="Quais informações podem ser coletadas?">
              <p>As informações coletadas dependem do modo como cada pessoa utiliza o site.</p>
              <div className="grid gap-4 sm:grid-cols-2 not-prose">
                <div className="rounded-2xl border border-black/10 p-5">
                  <span className="inline-block w-8 h-1.5 rounded-full" style={{ backgroundColor: "#ED1C24" }} aria-hidden="true" />
                  <h3 className="mt-3 text-brand-ink text-base" style={{ fontWeight: 600 }}>Dados de contato</h3>
                  <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                    <li>nome;</li>
                    <li>e-mail;</li>
                    <li>telefone;</li>
                    <li>outras informações fornecidas voluntariamente em formulários.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-black/10 p-5">
                  <span className="inline-block w-8 h-1.5 rounded-full" style={{ backgroundColor: "#FFB400" }} aria-hidden="true" />
                  <h3 className="mt-3 text-brand-ink text-base" style={{ fontWeight: 600 }}>Dados relacionados à participação</h3>
                  <p className="mt-2 text-sm">
                    Informações necessárias para inscrições em cursos, oficinas, eventos ou outras atividades, quando esses formulários existirem.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 p-5 sm:col-span-2">
                  <span className="inline-block w-8 h-1.5 rounded-full" style={{ backgroundColor: "#08B9E6" }} aria-hidden="true" />
                  <h3 className="mt-3 text-brand-ink text-base" style={{ fontWeight: 600 }}>Dados de navegação</h3>
                  <p className="mt-2 text-sm">
                    Informações técnicas relacionadas ao funcionamento do site e aos cookies efetivamente utilizados.
                  </p>
                </div>
              </div>
            </LegalSection>

            <LegalSection id="uso" title="Como os dados podem ser utilizados">
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

            <LegalSection id="formularios" title="Formulários e comunicações">
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

            <LegalSection id="cookies" title="Cookies e preferências">
              <p>
                O site pode utilizar cookies necessários para seu funcionamento e, quando efetivamente configurados, outras categorias relacionadas a preferências, medição de uso ou serviços externos.
              </p>
              <dl className="space-y-3">
                <div className="rounded-xl bg-brand-soft/60 p-4">
                  <dt className="text-brand-ink text-sm" style={{ fontWeight: 600 }}>Cookies necessários</dt>
                  <dd className="text-sm mt-1">Permitem funções essenciais do site e não podem ser desativados quando indispensáveis ao funcionamento.</dd>
                </div>
                <div className="rounded-xl bg-brand-soft/60 p-4">
                  <dt className="text-brand-ink text-sm" style={{ fontWeight: 600 }}>Cookies de preferências</dt>
                  <dd className="text-sm mt-1">Podem guardar escolhas feitas pelo usuário para melhorar sua experiência.</dd>
                </div>
                <div className="rounded-xl bg-brand-soft/60 p-4">
                  <dt className="text-brand-ink text-sm" style={{ fontWeight: 600 }}>Cookies analíticos</dt>
                  <dd className="text-sm mt-1">Podem ser utilizados para compreender como o site é utilizado, quando esse recurso estiver configurado.</dd>
                </div>
                <div className="rounded-xl bg-brand-soft/60 p-4">
                  <dt className="text-brand-ink text-sm" style={{ fontWeight: 600 }}>Cookies de terceiros</dt>
                  <dd className="text-sm mt-1">Podem existir quando o site utilizar serviços externos que dependam dessa tecnologia.</dd>
                </div>
              </dl>
              <button type="button" onClick={openCookies} className="inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm hover:opacity-90" style={{ backgroundColor: "#00384C", fontWeight: 600 }}>
                Gerenciar preferências de cookies
              </button>
            </LegalSection>

            <LegalSection id="compartilhamento" title="Compartilhamento de informações">
              <p>A Associação não deve disponibilizar dados pessoais de forma incompatível com a finalidade informada ao titular.</p>
              <p>
                Quando algum serviço técnico necessário ao funcionamento dos canais digitais envolver terceiros, o tratamento deverá observar as condições aplicáveis ao serviço e as práticas de proteção de dados adotadas pela Associação.
              </p>
            </LegalSection>

            <LegalSection id="seguranca" title="Segurança">
              <p>
                A Associação busca adotar medidas compatíveis com sua operação para proteger informações contra acesso, alteração, divulgação ou uso inadequado.
              </p>
            </LegalSection>

            <LegalSection id="direitos" title="Direitos relacionados aos dados pessoais">
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

            <LegalSection id="atualizacoes" title="Atualizações desta página">
              <p>
                Esta política poderá ser atualizada à medida que os serviços digitais, formulários e práticas institucionais da Associação forem definidos ou modificados.
              </p>
              <p className="text-sm">
                Última atualização: {ultimaAtualizacao ?? "a definir pela Associação."}
              </p>
            </LegalSection>

            <LegalSection id="contato" title="Contato">
              <p>
                Dúvidas ou solicitações relacionadas a dados pessoais podem ser encaminhadas pelos canais institucionais disponíveis na página de Contato.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link to="/contato" className="inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm hover:opacity-90" style={{ backgroundColor: "#00384C", fontWeight: 600 }}>Ir para Contato</Link>
                <Link to="/termos-de-uso" className="inline-flex items-center px-5 py-2.5 rounded-full border border-brand-ink/20 text-brand-ink text-sm hover:bg-brand-soft" style={{ fontWeight: 600 }}>Termos de Uso</Link>
              </div>
              <Triangle color="#FFB400" size={34} className="mt-6" rotate={12} />
            </LegalSection>
          </div>
        </div>
      </div>
    </main>
  );
}
