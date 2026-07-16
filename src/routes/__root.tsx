import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingButtons } from "../components/FloatingButtons";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <p className="text-brand-red font-bold uppercase tracking-widest text-sm">Erro 404</p>
        <h1 className="text-6xl font-black text-brand-ink font-display mt-2">Página não encontrada</h1>
        <p className="mt-3 text-brand-gray">A página que você procura não existe ou foi movida.</p>
        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <Link to="/" className="inline-flex items-center px-5 py-3 rounded-full bg-brand-red text-white font-semibold">Ir para o início</Link>
          <Link to="/contato" className="inline-flex items-center px-5 py-3 rounded-full border border-brand-ink/20 text-brand-ink font-semibold">Fale conosco</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-black text-brand-ink font-display">Esta página não carregou</h1>
        <p className="mt-2 text-brand-gray">Algo deu errado. Tente novamente ou volte para o início.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="px-5 py-3 rounded-full bg-brand-red text-white font-semibold">Tentar novamente</button>
          <a href="/" className="px-5 py-3 rounded-full border border-brand-ink/20 text-brand-ink font-semibold">Ir para o início</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cena Viva — Ponto de Cultura de Teatro e Artes Cênicas" },
      { name: "description", content: "Ponto de Cultura dedicado ao teatro e às artes cênicas: formação, criação e circulação cultural em diálogo com a comunidade." },
      { name: "author", content: "Ponto de Cultura Cena Viva" },
      { property: "og:site_name", content: "Cena Viva" },
      { property: "og:title", content: "Cena Viva — Ponto de Cultura de Teatro e Artes Cênicas" },
      { property: "og:description", content: "Formação, criação e circulação cultural em diálogo com a comunidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      { src: "https://vlibras.gov.br/app/vlibras-plugin.js", defer: true },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        {/* VLibras */}
        <div dangerouslySetInnerHTML={{ __html: `<div vw class="enabled"><div vw-access-button class="active"></div><div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div></div>` }} />
        <script dangerouslySetInnerHTML={{ __html: `window.addEventListener('load',function(){try{new window.VLibras.Widget('https://vlibras.gov.br/app');}catch(e){}});` }} />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main" className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </QueryClientProvider>
  );
}
