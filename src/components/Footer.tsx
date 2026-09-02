import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import logoAsset from "@/assets/logo-associacao-maggu.png.asset.json";
import { ArcThick, HatchedCircle, QuarterCircle } from "@/components/Shapes";

const institucional = [
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Equipe", to: "/equipe" },
  { label: "Ecossistema", to: "/ecossistema" },
  { label: "Transparência", to: "/transparencia" },
  { label: "Projetos", to: "/projetos" },
  { label: "Agenda", to: "/agenda" },
];

const navegacao = [
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
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
  return <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold">{children}</h3>;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-petrol text-primary-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-primary-foreground/15" aria-hidden="true" />
      <QuarterCircle corner="tr" color="#08B9E6" className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 opacity-15" />
      <HatchedCircle size={260} color="#FFB400" className="pointer-events-none absolute -bottom-28 -left-24 opacity-[0.12]" />
      <ArcThick color="#ED1C24" className="pointer-events-none absolute -right-10 bottom-16 hidden w-40 opacity-20 lg:block" from={200} to={340} />

      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_.8fr_.9fr_1.2fr] lg:gap-10">
          <div>
            <Link to="/" aria-label="Associação Maggu" className="inline-flex">
              <img src={logoAsset.url} alt="Associação Sócio Cultural Maggu" className="h-auto w-36 object-contain sm:w-40" />
            </Link>
            <div className="mt-7 space-y-2 text-sm leading-relaxed text-primary-foreground/70">
              <p>61.841.454/0001-80</p>
              <p className="font-semibold text-primary-foreground">Associação Sócio Cultural Maggu</p>
            </div>
          </div>

          <div>
            <ColumnTitle>Institucional</ColumnTitle>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              {institucional.map((item) => (
                <li key={item.to}><Link to={item.to} className="transition hover:text-brand-gold">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>Navegação</ColumnTitle>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              {navegacao.map((item) => (
                <li key={item.to}><Link to={item.to} className="transition hover:text-brand-gold">{item.label}</Link></li>
              ))}
              <li><Link to="/contato" className="transition hover:text-brand-gold">Apoie</Link></li>
            </ul>
          </div>

          <div>
            <ColumnTitle>Legal</ColumnTitle>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              {legal.map((item) => (
                <li key={item.to}><Link to={item.to} className="transition hover:text-brand-gold">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnTitle>Contato</ColumnTitle>
            <ul className="space-y-3 text-sm leading-relaxed text-primary-foreground/75">
              <li>
                <a href="mailto:comunicacaomktmaggu@gmail.com" className="flex items-start gap-2.5 transition hover:text-brand-gold">
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" /><span className="break-all">comunicacaomktmaggu@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+5582998067374" className="flex items-center gap-2.5 transition hover:text-brand-gold">
                  <Phone className="size-4 shrink-0" aria-hidden="true" />(82) 99806-7374
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>Rua Em Projeto A, 33<br />Benedito Bentes<br />Maceió - AL, 57084-411</span>
              </li>
            </ul>

            <div className="mt-7 flex gap-2.5" aria-label="Redes sociais">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground/85 shadow-sm backdrop-blur-md transition hover:border-brand-gold/50 hover:bg-primary-foreground/15 hover:text-brand-gold"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-foreground/15 pt-7 text-center text-xs text-primary-foreground/55">
          <p>© {year} Associação Sócio Cultural Maggu. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
