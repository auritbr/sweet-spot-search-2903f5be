import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import logoAsset from "@/assets/logo-maggu.png";

type NavChild = { label: string; to: string; hash?: string };
type NavItem = { label: string; to: string; children?: NavChild[]; match?: string[] };

const nav: NavItem[] = [
  { label: "Início", to: "/" },
  {
    label: "Quem Somos",
    to: "/quem-somos",
    match: ["/quem-somos", "/equipe"],
    children: [
      { label: "Quem Somos", to: "/quem-somos" },
      { label: "Equipe", to: "/equipe" },
      { label: "Território", to: "/quem-somos/territorio" },
    ],
  },
  {
    label: "Ecossistema",
    to: "/ecossistema",
    match: ["/ecossistema", "/projetos"],
    children: [
      { label: "Ecossistema", to: "/ecossistema" },
      { label: "Projetos & Ações", to: "/projetos" },
    ],
  },
  { label: "Agenda", to: "/agenda", match: ["/agenda"] },
  {
    label: "Impacto & Memória",
    to: "/impacto-memoria",
    match: ["/impacto-memoria", "/galeria"],
    children: [
      { label: "Impacto & Memória", to: "/impacto-memoria" },
      { label: "Galeria", to: "/galeria" },
    ],
  },
  {
    label: "Transparência",
    to: "/transparencia",
    match: ["/transparencia", "/ods-maggu-2030", "/canal-de-denuncias", "/privacidade", "/termos-de-uso"],
    children: [
      { label: "Transparência", to: "/transparencia" },
      { label: "Governança e Integridade", to: "/transparencia/governanca-integridade" },
      { label: "ODS / Maggu 2030", to: "/ods-maggu-2030" },
      { label: "Canal de Denúncias", to: "/canal-de-denuncias" },
      { label: "Política de Privacidade", to: "/privacidade" },
      { label: "Termos de Uso", to: "/termos-de-uso" },
    ],
  },
];

const participe: NavItem = {
  label: "Participe",
  to: "/participe",
  match: ["/participe", "/contato"],
  children: [
    { label: "Participe", to: "/participe" },
    { label: "Apoie", to: "/participe", hash: "apoie" },
    { label: "Contato", to: "/contato" },
  ],
};

function Chevron({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""} ${className}`}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function isActive(item: NavItem, pathname: string) {
  if (item.to === "/") return pathname === "/";
  return (item.match ?? [item.to]).some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setOpenSub(null); setDesktopOpen(null); }, [pathname]);

  const scheduleClose = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDesktopOpen((cur) => (cur === label ? null : cur)), 180);
  };
  const cancelClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };

  const solid = scrolled || open;
  const textColor = solid ? "text-brand-ink" : "text-white";

  const linkClass = `relative px-2.5 py-2 ${textColor} transition-colors duration-200 hover:text-brand-red after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-200 hover:after:scale-x-100`;

  const renderDropdown = (item: NavItem, alignRight = false) => (
    <div
      className={`absolute ${alignRight ? "right-0" : "left-0"} top-full pt-2 transition duration-150 ${desktopOpen === item.label ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}
      onMouseEnter={cancelClose}
      onMouseLeave={() => scheduleClose(item.label)}
    >
      <div className="min-w-56 rounded-xl border border-black/5 bg-white/95 p-1.5 shadow-lg backdrop-blur-sm">
        {item.children!.map((c) => (
          <Link
            key={`${c.to}-${c.label}`}
            to={c.to}
            hash={c.hash}
            className="block rounded-lg px-3 py-2 text-sm text-brand-ink transition-colors duration-200 hover:bg-brand-soft hover:text-brand-red"
            activeProps={{ className: "text-brand-red" }}
            style={{ fontWeight: 500 }}
          >
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ${
        solid ? "border-b border-black/5 bg-white/95 shadow-sm backdrop-blur" : "border-b border-transparent bg-transparent shadow-none"
      }`}
      onKeyDown={(e) => { if (e.key === "Escape") setDesktopOpen(null); }}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-brand-gold focus:text-brand-ink focus:px-4 focus:py-2 focus:rounded-md focus:z-50">
        Pular para o conteúdo
      </a>
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" aria-label={site.short} className="flex h-12 w-20 shrink-0 items-center justify-center overflow-hidden md:h-14 md:w-24">
          <img src={logoAsset} alt="Associação Maggu" className="h-20 w-20 max-w-none shrink-0 object-contain md:h-24 md:w-24" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Menu principal">
          {nav.map((item) => {
            const active = isActive(item, pathname);
            const expanded = desktopOpen === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => { cancelClose(); if (item.children) setDesktopOpen(item.label); }}
                onMouseLeave={() => { if (item.children) scheduleClose(item.label); }}
              >
                <div className="flex items-center">
                  <Link
                    to={item.to}
                    className={`${linkClass} ${active ? "text-brand-red after:scale-x-100" : ""}`}
                    style={{ fontSize: "13.5px", fontWeight: 500 }}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      className={`-ml-1.5 p-1 ${active ? "text-brand-red" : textColor} transition-colors hover:text-brand-red`}
                      aria-expanded={expanded}
                      aria-haspopup="true"
                      aria-label={`Abrir submenu ${item.label}`}
                      onClick={() => setDesktopOpen(expanded ? null : item.label)}
                    >
                      <Chevron open={expanded} />
                    </button>
                  )}
                </div>
                {item.children && renderDropdown(item)}
              </div>
            );
          })}

          <div
            className="relative ml-2"
            onMouseEnter={() => { cancelClose(); setDesktopOpen(participe.label); }}
            onMouseLeave={() => scheduleClose(participe.label)}
          >
            <div className="flex items-center gap-1 rounded-full bg-brand-red/95 pl-4 pr-2 py-2 text-white shadow-sm backdrop-blur-sm transition hover:-translate-y-px hover:bg-brand-red">
              <Link to="/participe" className="text-[13.5px]" style={{ fontWeight: 600 }}>Participe</Link>
              <button
                type="button"
                className="p-0.5 text-white/90 transition hover:text-white"
                aria-expanded={desktopOpen === participe.label}
                aria-haspopup="true"
                aria-label="Abrir submenu Participe"
                onClick={() => setDesktopOpen(desktopOpen === participe.label ? null : participe.label)}
              >
                <Chevron open={desktopOpen === participe.label} />
              </button>
            </div>
            {renderDropdown(participe, true)}
          </div>
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
            {[...nav, participe].map((item) => {
              const active = isActive(item, pathname);
              const subOpen = openSub === item.label;
              return (
                <div key={item.label}>
                  <div className="flex items-center">
                    <Link
                      to={item.to}
                      className={`flex-1 px-3 py-3 text-[15px] font-semibold transition-colors duration-200 hover:text-brand-red ${active ? "text-brand-red" : "text-brand-ink"}`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        className="p-3 text-brand-ink"
                        onClick={() => setOpenSub(subOpen ? null : item.label)}
                        aria-expanded={subOpen}
                        aria-haspopup="true"
                        aria-label={`Abrir submenu ${item.label}`}
                      >
                        <Chevron open={subOpen} className="size-[18px]" />
                      </button>
                    )}
                  </div>
                  {item.children && subOpen && (
                    <div className="pl-5 py-1 space-y-0.5">
                      {item.children.map((c) => (
                        <Link
                          key={`${c.to}-${c.label}`}
                          to={c.to}
                          hash={c.hash}
                          className="block px-3 py-2.5 text-sm text-brand-gray transition-colors duration-200 hover:text-brand-red"
                          activeProps={{ className: "text-brand-red" }}
                          onClick={() => setOpen(false)}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
