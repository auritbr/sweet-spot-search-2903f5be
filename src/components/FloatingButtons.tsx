import { useEffect, useState } from "react";
import { site } from "@/data/site";

type CookiePrefs = { necessary: true; preferences: boolean; analytics: boolean; marketing: boolean };
const defaultPrefs: CookiePrefs = { necessary: true, preferences: false, analytics: false, marketing: false };
const CK = "cv_cookie_prefs";

export function FloatingButtons() {
  const [cookieOpen, setCookieOpen] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);
  const [decided, setDecided] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CK);
      if (raw) { setPrefs(JSON.parse(raw)); setDecided(true); }
      else { setDecided(false); setCookieOpen(true); }
    } catch { /* noop */ }
  }, []);

  useEffect(() => {
    const handler = () => setCookieOpen(true);
    window.addEventListener("open-cookie-panel", handler);
    return () => window.removeEventListener("open-cookie-panel", handler);
  }, []);

  const save = (p: CookiePrefs) => {
    setPrefs(p);
    try { localStorage.setItem(CK, JSON.stringify(p)); } catch { /* noop */ }
    setDecided(true);
    setCookieOpen(false);
    setCustomize(false);
  };

  return (
    <>
      {/* Left cluster */}
      <div className="fixed left-3 md:left-4 bottom-4 md:bottom-6 z-40 flex flex-col gap-3" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <button
          type="button"
          aria-label="Preferências de cookies"
          title="Preferências de cookies"
          onClick={() => setCookieOpen(true)}
          className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-black/5 flex items-center justify-center hover:scale-105 transition"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#07384A" strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="10" cy="15" r="1"/></svg>
        </button>
        <button
          type="button"
          aria-label="Acessibilidade"
          title="Acessibilidade"
          onClick={() => setA11yOpen(true)}
          className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-brand-petrol shadow-lg flex items-center justify-center hover:scale-105 transition"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="5" r="2"/><path d="M4 9h16"/><path d="M12 9v5"/><path d="M8 20l4-6 4 6"/></svg>
        </button>
      </div>

      {/* Right cluster */}
      <div className="fixed right-3 md:right-4 bottom-4 md:bottom-6 z-40 flex flex-col gap-3" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMsg)}`}
          target="_blank" rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
          title="WhatsApp"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:scale-105 transition"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M20.5 3.5A11 11 0 0 0 3.6 17.2L2 22l4.9-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9 1 1-2.8-.2-.3A9 9 0 1 1 12 20.5Zm5-6.5c-.3-.1-1.7-.8-2-1s-.5-.1-.7.1c-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1a7 7 0 0 1-3.4-3c-.3-.5.3-.5.8-1.6.1-.2 0-.3 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4a3.2 3.2 0 0 0-1 2.4 5.6 5.6 0 0 0 1.2 3 12.7 12.7 0 0 0 4.9 4.3c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.1-1.4 0-.1-.2-.2-.5-.3Z"/></svg>
        </a>
      </div>

      {/* Cookie banner */}
      {cookieOpen && (
        <div role="dialog" aria-labelledby="cookie-title" className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6 pointer-events-none">
          <div className="pointer-events-auto max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-black/5 p-6">
            <h2 id="cookie-title" className="font-display text-xl font-black text-brand-ink">Sua privacidade importa</h2>
            <p className="mt-2 text-sm text-brand-gray">
              Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e analisar o uso do site. Você pode aceitar todos, recusar os não essenciais ou personalizar suas preferências.
              {" "}<a href="#" className="text-brand-red underline">Política de Cookies</a>.
            </p>

            {customize && (
              <div className="mt-4 space-y-3">
                {[
                  { key: "necessary", label: "Necessários", desc: "Essenciais para o funcionamento do site.", locked: true },
                  { key: "preferences", label: "Preferências", desc: "Lembram suas escolhas para uma melhor experiência." },
                  { key: "analytics", label: "Analíticos", desc: "Ajudam a entender como o site é utilizado." },
                  { key: "marketing", label: "Marketing", desc: "Personalizam anúncios e comunicações." },
                ].map((c) => {
                  const k = c.key as keyof CookiePrefs;
                  const checked = c.locked ? true : !!prefs[k];
                  return (
                    <label key={c.key} className="flex items-start gap-3 p-3 rounded-lg border border-black/5">
                      <input
                        type="checkbox"
                        checked={checked}
                        disabled={c.locked}
                        onChange={(e) => setPrefs({ ...prefs, [k]: e.target.checked } as CookiePrefs)}
                        className="mt-1"
                      />
                      <span>
                        <span className="block font-semibold text-brand-ink text-sm">{c.label}{c.locked && " (sempre ativos)"}</span>
                        <span className="block text-xs text-brand-gray">{c.desc}</span>
                      </span>
                    </label>
                  );
                })}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-2 justify-end">
              {!customize && (
                <>
                  <button onClick={() => setCustomize(true)} className="px-4 py-2 rounded-full border border-brand-ink/20 text-brand-ink font-semibold text-sm">Personalizar</button>
                  <button onClick={() => save(defaultPrefs)} className="px-4 py-2 rounded-full border border-brand-ink/20 text-brand-ink font-semibold text-sm">Recusar não essenciais</button>
                  <button onClick={() => save({ necessary: true, preferences: true, analytics: true, marketing: true })} className="px-4 py-2 rounded-full bg-brand-red text-white font-semibold text-sm">Aceitar todos</button>
                </>
              )}
              {customize && (
                <>
                  <button onClick={() => setCustomize(false)} className="px-4 py-2 rounded-full border border-brand-ink/20 text-brand-ink font-semibold text-sm">Voltar</button>
                  <button onClick={() => save(prefs)} className="px-4 py-2 rounded-full bg-brand-red text-white font-semibold text-sm">Salvar preferências</button>
                </>
              )}
            </div>
            {!decided && <p className="mt-2 text-xs text-brand-gray">Ao continuar navegando, você concorda com nossa política.</p>}
          </div>
        </div>
      )}

      {a11yOpen && <A11yPanel onClose={() => setA11yOpen(false)} />}
    </>
  );
}

type A11yState = {
  fontScale: number;
  highContrast: boolean;
  invert: boolean;
  grayscale: boolean;
  underline: boolean;
  readable: boolean;
  spacing: boolean;
  pause: boolean;
  cursor: boolean;
  guide: boolean;
};
const defaultA11y: A11yState = {
  fontScale: 100, highContrast: false, invert: false, grayscale: false,
  underline: false, readable: false, spacing: false, pause: false, cursor: false, guide: false,
};
const AK = "cv_a11y";

function A11yPanel({ onClose }: { onClose: () => void }) {
  const [s, setS] = useState<A11yState>(defaultA11y);

  useEffect(() => {
    try { const raw = localStorage.getItem(AK); if (raw) setS({ ...defaultA11y, ...JSON.parse(raw) }); } catch { /* noop */ }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.fontSize = `${s.fontScale}%`;
    html.classList.toggle("a11y-highcontrast", s.highContrast);
    html.classList.toggle("a11y-invert", s.invert);
    html.classList.toggle("a11y-grayscale", s.grayscale);
    html.classList.toggle("a11y-underline", s.underline);
    html.classList.toggle("a11y-readable", s.readable);
    html.classList.toggle("a11y-spacing", s.spacing);
    html.classList.toggle("a11y-pause", s.pause);
    html.classList.toggle("a11y-cursor", s.cursor);
    try { localStorage.setItem(AK, JSON.stringify(s)); } catch { /* noop */ }
  }, [s]);

  useEffect(() => {
    if (!s.guide) return;
    const el = document.createElement("div");
    el.style.cssText = "position:fixed;left:0;right:0;height:38px;background:rgba(255,181,16,.35);pointer-events:none;z-index:60;border-top:2px solid #FFB510;border-bottom:2px solid #FFB510;";
    document.body.appendChild(el);
    const onMove = (e: MouseEvent) => { el.style.top = `${e.clientY - 19}px`; };
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); el.remove(); };
  }, [s.guide]);

  const reset = () => setS(defaultA11y);
  const toggle = (k: keyof A11yState) => setS({ ...s, [k]: !s[k] } as A11yState);
  const setFont = (v: number) => setS({ ...s, fontScale: Math.min(140, Math.max(80, v)) });

  return (
    <div role="dialog" aria-labelledby="a11y-title" className="fixed inset-0 z-50 flex">
      <button className="flex-1 bg-black/40" onClick={onClose} aria-label="Fechar" />
      <aside className="w-full max-w-sm bg-white h-full overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 id="a11y-title" className="font-display text-xl font-black text-brand-ink">Acessibilidade</h2>
          <button onClick={onClose} aria-label="Fechar" className="p-2 rounded-full hover:bg-brand-soft">✕</button>
        </div>
        <div className="space-y-2 text-sm">
          <div className="p-3 rounded-lg bg-brand-soft">
            <p className="font-semibold text-brand-ink mb-2">Tamanho da fonte ({s.fontScale}%)</p>
            <div className="flex gap-2">
              <button onClick={() => setFont(s.fontScale - 10)} className="px-3 py-2 rounded bg-white border">A-</button>
              <button onClick={() => setFont(100)} className="px-3 py-2 rounded bg-white border">A</button>
              <button onClick={() => setFont(s.fontScale + 10)} className="px-3 py-2 rounded bg-white border">A+</button>
            </div>
          </div>
          {[
            ["highContrast", "Alto contraste"],
            ["invert", "Contraste invertido"],
            ["grayscale", "Escala de cinza"],
            ["underline", "Destacar links"],
            ["readable", "Fonte de alta legibilidade"],
            ["spacing", "Aumentar espaçamento"],
            ["pause", "Pausar animações"],
            ["cursor", "Cursor ampliado"],
            ["guide", "Guia de leitura"],
          ].map(([k, l]) => (
            <label key={k} className="flex items-center justify-between p-3 rounded-lg bg-brand-soft cursor-pointer">
              <span className="text-brand-ink font-medium">{l}</span>
              <input type="checkbox" checked={!!s[k as keyof A11yState]} onChange={() => toggle(k as keyof A11yState)} />
            </label>
          ))}
          <button onClick={reset} className="w-full mt-3 px-4 py-3 rounded-full bg-brand-red text-white font-semibold">Restaurar configurações</button>
        </div>
      </aside>
    </div>
  );
}
