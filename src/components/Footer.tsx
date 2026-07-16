import { Link } from "@tanstack/react-router";
import { site, partners } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 text-white" style={{ backgroundColor: "var(--brand-petrol)" }}>
      {/* curved top */}
      <svg className="block w-full -mt-px" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" style={{ height: 60, transform: "translateY(-59px)", color: "var(--brand-petrol)" }}>
        <path fill="currentColor" d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,20 L1440,80 L0,80 Z"/>
      </svg>

      <div className="container-x pt-4 pb-12 -mt-8">
        {/* Parceiros */}
        <div className="mb-12">
          <p className="text-white/70 text-sm uppercase tracking-widest mb-4">Parceiros e apoiadores</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {partners.map((p) => (
              <div key={p} className="text-white/60 hover:text-white transition text-xs font-semibold border border-white/10 rounded-lg py-4 px-2 text-center">
                {p}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 font-display font-black text-2xl">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-brand-red rounded-full -z-10" />
                <span className="text-white px-2">C</span>
              </span>
              <span>{site.short}</span>
            </div>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              Ponto de Cultura dedicado ao teatro e às artes cênicas, promovendo formação, criação e participação cultural.
            </p>
            <p className="mt-4 text-xs text-white/60">Reconhecido como Ponto de Cultura</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quem Somos</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/quem-somos" className="hover:text-brand-gold">Sobre</Link></li>
              <li><Link to="/quem-somos/nossa-historia" className="hover:text-brand-gold">Nossa História</Link></li>
              <li><Link to="/equipe" className="hover:text-brand-gold">Equipe</Link></li>
              <li><Link to="/transparencia" className="hover:text-brand-gold">Transparência</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Projetos</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/projetos" className="hover:text-brand-gold">Todos os projetos</Link></li>
              <li><Link to="/projetos/palco-aberto" className="hover:text-brand-gold">Palco Aberto</Link></li>
              <li><Link to="/projetos/corpo-voz-e-movimento" className="hover:text-brand-gold">Corpo, Voz e Movimento</Link></li>
              <li><Link to="/projetos/cena-no-territorio" className="hover:text-brand-gold">Cena no Território</Link></li>
              <li><Link to="/noticias" className="hover:text-brand-gold">Notícias</Link></li>
              <li><Link to="/galeria" className="hover:text-brand-gold">Galeria</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>{site.address}</li>
              <li><a href={`mailto:${site.email}`} className="hover:text-brand-gold">{site.email}</a></li>
              <li>{site.phone}</li>
              <li>{site.hours}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href={site.social.instagram} aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red flex items-center justify-center transition"><span className="text-xs font-bold">IG</span></a>
              <a href={site.social.facebook} aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red flex items-center justify-center transition"><span className="text-xs font-bold">FB</span></a>
              <a href={site.social.youtube} aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-red flex items-center justify-center transition"><span className="text-xs font-bold">YT</span></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex flex-wrap gap-4">
            <Link to="/transparencia" className="hover:text-brand-gold">Transparência</Link>
            <a href="#" className="hover:text-brand-gold">Política de Privacidade</a>
            <a href="#" className="hover:text-brand-gold">Política de Cookies</a>
          </div>
          <p>© {year} {site.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
