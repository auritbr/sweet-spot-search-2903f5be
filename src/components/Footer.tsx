import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo-associacao-maggu.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { label: "YouTube", href: "https://youtube.com", icon: Youtube },
    { label: "Facebook", href: "https://facebook.com", icon: Facebook },
    { label: "Instagram", href: "https://instagram.com", icon: Instagram },
    { label: "WhatsApp", href: "https://wa.me/5582998067374", icon: MessageCircle },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-petrol text-primary-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-primary-foreground/15" aria-hidden="true" />
      <div className="container-x relative py-14 md:py-16">
        <div className="grid gap-11 md:grid-cols-2 lg:grid-cols-[1.45fr_.7fr_.7fr_1.25fr] lg:gap-14">
          <div>
            <Link to="/" aria-label="Associação Maggu" className="inline-flex">
              <img src={logoAsset.url} alt="Associação Sócio Cultural Maggu" className="h-auto w-32 object-contain sm:w-36" />
            </Link>
            <div className="mt-6 space-y-2 text-sm leading-relaxed text-primary-foreground/75">
              <p>61.841.454/0001-80</p>
              <p className="font-semibold text-primary-foreground">Associação Sócio Cultural Maggu</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">Institucional</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li><Link to="/quem-somos" className="transition hover:text-brand-gold">Quem Somos</Link></li>
              <li><Link to="/equipe" className="transition hover:text-brand-gold">Equipe</Link></li>
              <li><Link to="/transparencia" className="transition hover:text-brand-gold">Transparência</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">Legal</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li><Link to="/privacidade" className="transition hover:text-brand-gold">Política de Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="transition hover:text-brand-gold">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">Contato</h3>
            <ul className="space-y-3 text-sm leading-relaxed text-primary-foreground/75">
              <li><a href="mailto:comunicacaomktmaggu@gmail.com" className="flex items-start gap-2.5 transition hover:text-brand-gold"><Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" /><span className="break-all">comunicacaomktmaggu@gmail.com</span></a></li>
              <li><a href="tel:+5582998067374" className="flex items-center gap-2.5 transition hover:text-brand-gold"><Phone className="size-4 shrink-0" aria-hidden="true" />(82) 99806-7374</a></li>
              <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" /><span>Rua Em Projeto A, 33 - Benedito Bentes, Maceió - AL, 57084-411</span></li>
            </ul>
            <div className="mt-6 flex gap-2.5" aria-label="Redes sociais">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Button key={label} asChild variant="ghost" size="icon" className="rounded-full border border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground shadow-sm backdrop-blur-sm hover:border-brand-gold/50 hover:bg-primary-foreground/15 hover:text-brand-gold">
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><Icon aria-hidden="true" /></a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55">
          <p>© {year} Associação Sócio Cultural Maggu. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
