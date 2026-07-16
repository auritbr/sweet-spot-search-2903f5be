import { Link } from "@tanstack/react-router";
import { site, partners } from "@/data/site";
import { QuarterCircle, ArcThick, HatchedCircle } from "./Shapes";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 text-white overflow-hidden" style={{ backgroundColor: "#00384C" }}>
      {/* Curved geometric transition */}
      <div className="absolute -top-1 inset-x-0 h-16 bg-white [clip-path:ellipse(90%_100%_at_50%_0%)]" aria-hidden />
      <QuarterCircle corner="tr" color="#ED1C24" className="absolute top-0 right-0 w-40 md:w-56 opacity-95" />
      <ArcThick color="#FFB400" className="absolute left-4 top-24 w-40 opacity-90" from={200} to={340} />
      <HatchedCircle size={200} color="#08B9E6" className="absolute -right-16 bottom-0 opacity-25" />

      <div className="container-x pt-28 pb-12 relative">
        {/* Parceiros */}
        <div className="mb-12">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-bold mb-4">Parceiros e apoiadores</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center">
            {partners.map((p) => (
              <div key={p} className="text-white/70 hover:text-white transition text-xs font-semibold border border-white/15 rounded-xl py-4 px-2 text-center">
                {p}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-red text-white font-display uppercase text-lg">C</span>
              <span className="font-display uppercase text-xl">{site.short}</span>
            </div>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              Ponto de Cultura dedicado ao teatro e às artes cênicas, promovendo formação, criação e participação cultural.
            </p>
            <p className="mt-4 text-xs text-brand-gold uppercase tracking-widest font-bold">Reconhecido como Ponto de Cultura</p>
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
