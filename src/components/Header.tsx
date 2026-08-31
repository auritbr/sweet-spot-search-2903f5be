import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const nav = [
  { label: "Início", to: "/" },
  {
    label: "Quem Somos", to: "/quem-somos",
    children: [
      { label: "Quem Somos", to: "/quem-somos" },
      { label: "Equipe", to: "/equipe" },
      { label: "Transparência", to: "/transparencia" },
    ],
  },
  { label: "Ecossistema", to: "/ecossistema" },
  { label: "Projetos", to: "/projetos" },
  { label: "Agenda", to: "/agenda" },
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
  { label: "Contato", to: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setOpenSub(null); }, [pathname]);

  const solid = scrolled || !isHome;
  const textColor = solid ? "text-brand-ink" : "text-white";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        solid ? "bg-white/95 backdrop-blur border-b border-black/5 shadow-sm" : "bg-transparent"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-brand-gold focus:text-brand-ink focus:px-4 focus:py-2 focus:rounded-md focus:z-50">
        Pular para o conteúdo
      </a>
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className={`flex items-center gap-3 ${textColor}`}>
          <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-red text-white" style={{ fontWeight: 700 }}>M</span>
          <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{site.short}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Menu principal">
          {nav.map((item) => (
            <div key={item.to} className="relative group">
              <Link
                to={item.to}
                className={`relative px-3 py-2 ${textColor} transition-colors duration-200 hover:text-brand-red after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-200 hover:after:scale-x-100`}
                style={{ fontSize: "0.95rem", fontWeight: 500 }}
                activeProps={{ className: "text-brand-red after:scale-x-100" }}
                activeOptions={{ exact: item.to === "/" }}
                aria-current={pathname === item.to ? "page" : undefined}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition">
                  <div className="min-w-60 bg-white rounded-2xl shadow-xl border border-black/5 p-2">
                    {item.children.map((c) => (
                      <Link key={c.to} to={c.to} className="block px-3 py-2.5 text-sm text-brand-ink transition-colors duration-200 hover:text-brand-red" activeProps={{ className: "text-brand-red" }} aria-current={pathname === c.to ? "page" : undefined} style={{ fontWeight: 500 }}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/contato" className="ml-2 inline-flex items-center px-5 py-2 rounded-full bg-brand-red text-white text-sm hover:bg-brand-red/90 transition" style={{ fontWeight: 600 }}>
            Apoie
          </Link>
        </nav>

        <button
          className={`lg:hidden p-2 rounded-md ${textColor}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (<><path d="M6 6l12 12" /><path d="M6 18L18 6" /></>) : (<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>)}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-black/5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container-x py-4 space-y-1">
            {nav.map((item) => (
              <div key={item.to}>
                <div className="flex items-center">
                  <Link to={item.to} className="flex-1 px-3 py-3 font-semibold text-brand-ink transition-colors duration-200 hover:text-brand-red" activeProps={{ className: "text-brand-red" }} activeOptions={{ exact: item.to === "/" }} aria-current={pathname === item.to ? "page" : undefined}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <button className="p-3 text-brand-ink" onClick={() => setOpenSub(openSub === item.to ? null : item.to)} aria-label={`Abrir submenu ${item.label}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: openSub === item.to ? "rotate(180deg)" : "none" }}><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                  )}
                </div>
                {item.children && openSub === item.to && (
                  <div className="pl-4 py-1 space-y-1">
                    {item.children.map((c) => (
                      <Link key={c.to} to={c.to} className="block px-3 py-2 text-sm text-brand-gray transition-colors duration-200 hover:text-brand-red" activeProps={{ className: "text-brand-red" }} aria-current={pathname === c.to ? "page" : undefined}>{c.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contato" className="block text-center mt-3 px-5 py-3 rounded-full bg-brand-red text-white font-semibold uppercase tracking-wider text-sm">
              Apoie
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
