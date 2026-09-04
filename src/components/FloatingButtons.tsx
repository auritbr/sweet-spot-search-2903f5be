import { useEffect, useId, useState, type ReactNode } from "react";
import {
  Accessibility,
  ALargeSmall,
  CaseSensitive,
  Contrast,
  Cookie,
  Link as LinkIcon,
  Minus,
  Plus,
  RotateCcw,
  ScanText,
  X,
} from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

type CookiePrefs = { necessary: true; preferences: boolean; analytics: boolean; marketing: boolean };
const defaultPrefs: CookiePrefs = { necessary: true, preferences: false, analytics: false, marketing: false };
const CK = "cv_cookie_prefs";

export function FloatingButtons() {
  const [cookieOpen, setCookieOpen] = useState(false);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CK);
      if (raw) setPrefs({ ...defaultPrefs, ...JSON.parse(raw) });
      else setCookieOpen(true);
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
    setCookieOpen(false);
  };

  return (
    <>
      <div data-a11y-ui className="fixed bottom-4 left-3 z-40 flex flex-col gap-2.5 md:bottom-6 md:left-4" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <Dialog open={cookieOpen} onOpenChange={setCookieOpen}>
          <DialogTrigger asChild>
            <Button
              type="button"
              size="icon"
              aria-label="Preferências de cookies"
              title="Preferências de cookies"
              className="size-11 rounded-full border border-background/15 bg-brand-petrol/95 text-primary-foreground shadow-lg backdrop-blur-md transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-brand-petrol/85 hover:text-primary-foreground hover:shadow-xl md:size-12"
            >
              <Cookie className="size-5" strokeWidth={2} aria-hidden="true" />
            </Button>
          </DialogTrigger>
          <CookieDialog prefs={prefs} setPrefs={setPrefs} save={save} />
        </Dialog>

        <Dialog open={a11yOpen} onOpenChange={setA11yOpen}>
          <DialogTrigger asChild>
            <Button
              type="button"
              size="icon"
              aria-label="Acessibilidade"
              title="Acessibilidade"
              className="size-11 rounded-full border border-background/15 bg-brand-red/95 text-primary-foreground shadow-lg backdrop-blur-md transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-brand-red/85 hover:text-primary-foreground hover:shadow-xl md:size-12"
            >
              <Accessibility className="size-5" strokeWidth={2} aria-hidden="true" />
            </Button>
          </DialogTrigger>
          <A11yPanel />
        </Dialog>
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

    </>
  );
}

function CookieDialog({ prefs, setPrefs, save }: { prefs: CookiePrefs; setPrefs: (prefs: CookiePrefs) => void; save: (prefs: CookiePrefs) => void }) {
  const analyticsId = useId();
  const marketingId = useId();

  return (
    <DialogContent className="flex max-h-[80dvh] w-[calc(100%-1.5rem)] max-w-[470px] flex-col gap-0 overflow-hidden rounded-xl border-brand-petrol/10 bg-background p-0 shadow-2xl sm:max-h-[70dvh] [&>button.absolute]:hidden">
      <div className="flex shrink-0 items-center gap-2.5 border-b border-brand-petrol/10 px-4 py-2.5 sm:px-5">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-petrol/8 text-brand-petrol" aria-hidden="true">
          <Cookie className="size-[21px]" strokeWidth={2} />
        </span>
        <DialogTitle className="flex-1 text-[18px] font-semibold leading-tight text-brand-ink">Preferências de Cookies</DialogTitle>
        <DialogClose asChild>
          <Button variant="ghost" size="icon" className="size-9 shrink-0 rounded-full text-brand-ink hover:bg-brand-petrol/8 hover:text-brand-ink" aria-label="Fechar preferências de cookies">
            <X className="size-[18px]" aria-hidden="true" />
          </Button>
        </DialogClose>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3.5 sm:px-5">
        <DialogDescription className="text-[14px] leading-[1.5] text-brand-gray">
          Usamos cookies para melhorar sua experiência e entender como o site é utilizado. Você pode aceitar todos os cookies, rejeitar os opcionais ou salvar suas preferências.
        </DialogDescription>

        <div className="mt-3 space-y-2">
          <PreferenceRow
            title="Cookies necessários"
            description="Essenciais para o funcionamento do site. Não podem ser desativados."
            control={<span className="whitespace-nowrap text-xs font-semibold text-brand-petrol">Sempre ativos</span>}
          />
          <PreferenceRow
            title="Cookies de análise"
            description="Ajudam a entender como os visitantes utilizam o site para melhorar navegação, conteúdo e desempenho."
            control={<Switch id={analyticsId} checked={prefs.analytics} onCheckedChange={(checked) => setPrefs({ ...prefs, analytics: checked })} aria-label="Ativar cookies de análise" className="data-[state=checked]:bg-brand-red" />}
            htmlFor={analyticsId}
          />
          <PreferenceRow
            title="Cookies de marketing"
            description="Podem ser usados para personalizar comunicações e campanhas, quando aplicável."
            control={<Switch id={marketingId} checked={prefs.marketing} onCheckedChange={(checked) => setPrefs({ ...prefs, marketing: checked })} aria-label="Ativar cookies de marketing" className="data-[state=checked]:bg-brand-red" />}
            htmlFor={marketingId}
          />
        </div>
      </div>

      <div className="grid shrink-0 gap-2 border-t border-brand-petrol/10 bg-brand-soft/55 px-4 py-3 sm:grid-cols-3 sm:px-5">
        <Button variant="outline" onClick={() => save(defaultPrefs)} className="h-10 border-brand-petrol/15 bg-background px-3 text-[13px] text-brand-ink hover:bg-brand-petrol/8 hover:text-brand-ink">Rejeitar opcionais</Button>
        <Button variant="outline" onClick={() => save(prefs)} className="h-10 border-brand-petrol/20 bg-background/75 px-3 text-[13px] text-brand-ink shadow-sm backdrop-blur-md hover:bg-brand-petrol/8 hover:text-brand-ink">Salvar preferências</Button>
        <Button onClick={() => save({ necessary: true, preferences: true, analytics: true, marketing: true })} className="h-10 bg-brand-red px-3 text-[13px] text-primary-foreground hover:bg-brand-red/90">Aceitar todos</Button>
      </div>

    </DialogContent>
  );
}

function PreferenceRow({ title, description, control, htmlFor }: { title: string; description: string; control: ReactNode; htmlFor?: string }) {
  const content = (
    <>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold leading-snug text-brand-ink">{title}</span>
        <span className="mt-0.5 block text-[13px] leading-snug text-brand-gray">{description}</span>
      </span>
      <span className="shrink-0 self-center">{control}</span>
    </>
  );
  return htmlFor ? <label htmlFor={htmlFor} className="flex cursor-pointer items-start gap-3 rounded-xl border border-brand-petrol/10 bg-brand-soft/45 px-4 py-3">{content}</label> : <div className="flex items-start gap-3 rounded-xl border border-brand-petrol/10 bg-brand-soft/45 px-4 py-3">{content}</div>;

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

const a11yOptions = [
  { key: "highContrast", label: "Alto contraste", Icon: Contrast },
  { key: "grayscale", label: "Escala de cinza", Icon: ScanText },
  { key: "underline", label: "Destacar links", Icon: LinkIcon },
  { key: "readable", label: "Fonte para dislexia", Icon: CaseSensitive },
  { key: "spacing", label: "Espaçamento de texto", Icon: ALargeSmall },
] as const;

function A11yPanel() {
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
  const setFont = (v: number) => setS({ ...s, fontScale: Math.min(130, Math.max(90, v)) });

  return (
    <DialogContent className="flex max-h-[80dvh] w-[calc(100%-2rem)] max-w-[390px] flex-col gap-0 overflow-hidden rounded-xl border-brand-petrol/10 bg-background p-0 shadow-2xl sm:max-h-[70dvh] [&>button.absolute]:hidden">
      <div className="flex shrink-0 items-center gap-2.5 bg-brand-petrol px-4 py-2.5 text-primary-foreground sm:px-5">
        <Accessibility className="size-[21px] shrink-0" strokeWidth={2} aria-hidden="true" />
        <DialogTitle className="flex-1 text-[18px] font-semibold leading-tight text-primary-foreground">Acessibilidade</DialogTitle>
        <DialogDescription className="sr-only">Ajuste a apresentação visual e a legibilidade do site.</DialogDescription>
        <DialogClose asChild>
          <Button variant="ghost" size="icon" className="size-9 shrink-0 rounded-full text-primary-foreground hover:bg-background/10 hover:text-primary-foreground" aria-label="Fechar acessibilidade">
            <X className="size-[18px]" aria-hidden="true" />
          </Button>
        </DialogClose>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-3.5 sm:px-5">
        <div className="rounded-xl border border-brand-petrol/10 bg-brand-soft/45 px-4 py-3">
          <div className="flex items-center gap-2">
            <ALargeSmall className="size-[18px] text-brand-petrol" aria-hidden="true" />
            <p className="text-[14px] font-semibold text-brand-ink">Tamanho da fonte ({s.fontScale}%)</p>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={() => setFont(s.fontScale - 10)} disabled={s.fontScale <= 90} aria-label="Diminuir tamanho da fonte" className="h-10 border-brand-petrol/15 bg-background text-brand-ink shadow-sm hover:bg-brand-petrol/8 hover:text-brand-ink">
              <Minus className="size-4" aria-hidden="true" />
            </Button>
            <Button variant="outline" onClick={() => setFont(s.fontScale + 10)} disabled={s.fontScale >= 130} aria-label="Aumentar tamanho da fonte" className="h-10 border-brand-petrol/15 bg-background text-brand-ink shadow-sm hover:bg-brand-petrol/8 hover:text-brand-ink">
              <Plus className="size-4" aria-hidden="true" />
            </Button>

          </div>
        </div>

        <div className="mt-2.5 space-y-2">
          {a11yOptions.map(({ key, label, Icon }) => {
            const id = `a11y-${key}`;
            return (
            <label key={key} htmlFor={id} className="flex min-h-[54px] cursor-pointer items-center gap-2.5 rounded-xl border border-brand-petrol/10 bg-brand-soft/45 px-4 py-2.5">
              <Icon className="size-[18px] shrink-0 text-brand-petrol" aria-hidden="true" />
              <span className="min-w-0 flex-1 text-[14px] font-medium text-brand-ink">{label}</span>
              <Switch id={id} checked={s[key]} onCheckedChange={() => toggle(key)} aria-label={label} className="scale-90 data-[state=checked]:bg-brand-red" />
            </label>
            );
          })}
        </div>

        <Button variant="outline" onClick={reset} className="mt-3 h-10 w-full border-brand-petrol/15 bg-background text-[13px] text-brand-ink hover:bg-brand-petrol/8 hover:text-brand-ink">
          <RotateCcw className="size-4" aria-hidden="true" />
          Restaurar configurações
        </Button>
      </div>

    </DialogContent>
  );
}
