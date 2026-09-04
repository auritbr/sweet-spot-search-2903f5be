import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";
import logoAsset from "@/assets/logo-maggu.png";
import { HatchedCircle, QuarterCircle } from "@/components/Shapes";

const institucional = [
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Equipe", to: "/equipe" },
  { label: "Ecossistema", to: "/ecossistema" },
  { label: "Transparência", to: "/transparencia" },
  { label: "Projetos", to: "/projetos" },
  { label: "Agenda", to: "/agenda" },
  { label: "ODS / Maggu 2030", to: "/ods-maggu-2030" },

];

const navegacao = [
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
  { label: "Sala de Imprensa", to: "/imprensa" },
  { label: "Contato", to: "/contato" },

];

const legal = [
  { label: "Política de Privacidade", to: "/privacidade" },
  { label: "Termos de Uso", to: "/termos-de-uso" },
  { label: "Canal de Denúncias", to: "/canal-de-denuncias" },
];

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/5582998067374", icon: MessageCircle },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold">{children}</h3>;
}

function ContactTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-1 text-xs font-semibold text-primary-foreground">{children}</h3>;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-petrol text-primary-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-primary-foreground/15" aria-hidden="true" />
      <QuarterCircle corner="tr" color="#08B9E6" className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 opacity-10" />
      <HatchedCircle size={180} color="#FFB400" className="pointer-events-none absolute -bottom-20 -left-20 opacity-[0.08]" />

      <div className="container-x relative pb-4 pt-6 md:pb-5 md:pt-7">
        <div className="grid items-start gap-x-8 gap-y-7 sm:grid-cols-2 md:grid-cols-[1.45fr_1fr_.8fr_1.15fr] md:gap-x-8 lg:gap-x-12">
          <div className="self-start">
            <Link
              to="/"
              aria-label="Associação Maggu"
              className="relative block h-[64px] w-32 overflow-hidden sm:h-[72px] sm:w-36"
            >
              <img
                src={logoAsset}
                alt="Associação Sócio Cultural Maggu"
                className="absolute -top-1/2 left-0 h-auto w-full max-w-none object-contain"
              />
            </Link>
          </div>

          <div>
            <ColumnTitle>Institucional</ColumnTitle>
            <ul className="space-y-1.5 text-sm text-primary-foreground/75">
              {institucional.map((item) => (
                <li key={item.to}><Link to={item.to} className="transition hover:text-brand-gold">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>Navegação</ColumnTitle>
            <ul className="space-y-1.5 text-sm text-primary-foreground/75">
              {navegacao.map((item) => (
                <li key={item.to}><Link to={item.to} className="transition hover:text-brand-gold">{item.label}</Link></li>
              ))}
              <li><Link to="/contato" className="transition hover:text-brand-gold">Apoie</Link></li>
            </ul>
          </div>

          <div>
            <ColumnTitle>Legal</ColumnTitle>
            <ul className="space-y-1.5 text-sm text-primary-foreground/75">
              {legal.map((item) => (
                <li key={item.to}><Link to={item.to} className="transition hover:text-brand-gold">{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-5 h-px bg-primary-foreground/15" aria-hidden="true" />

        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1.25fr_.8fr] lg:gap-x-10">
          <div>
            <ContactTitle>E-mail</ContactTitle>
            <a href="mailto:comunicacaomktmaggu@gmail.com" className="break-all text-sm text-primary-foreground/70 transition hover:text-brand-gold">
              comunicacaomktmaggu@gmail.com
            </a>
          </div>

          <div>
            <ContactTitle>Telefone / WhatsApp</ContactTitle>
            <a href="tel:+5582998067374" className="text-sm text-primary-foreground/70 transition hover:text-brand-gold">
              (82) 99806-7374
            </a>
          </div>

          <div>
            <ContactTitle>Endereço</ContactTitle>
            <address className="text-sm not-italic leading-snug text-primary-foreground/70">
              Rua Em Projeto A, 33<br />Benedito Bentes<br />Maceió - AL, 57084-411
            </address>
          </div>

          <div>
            <ContactTitle>Conecte-se</ContactTitle>
            <div className="flex gap-1.5" aria-label="Redes sociais">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex size-7 items-center justify-center rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.08] text-primary-foreground/80 shadow-sm backdrop-blur-sm transition hover:border-brand-gold/40 hover:bg-primary-foreground/[0.14] hover:text-brand-gold"
                >
                  <Icon className="size-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-primary-foreground/15 pt-4 text-center text-xs text-primary-foreground/55">
          <p className="font-semibold text-primary-foreground/70">
            CNPJ: 61.841.454/0001-80 - Associação Sócio Cultural Maggu
          </p>
          <p>© {year} Associação Sócio Cultural Maggu. Todos os direitos reservados.</p>
          <p className="pt-1.5">
            Desenvolvido por{" "}
            <a
              href="https://www.aurit.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-foreground/75 underline decoration-primary-foreground/25 underline-offset-2 transition hover:text-brand-gold hover:decoration-brand-gold/50"
            >
              Aurit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
