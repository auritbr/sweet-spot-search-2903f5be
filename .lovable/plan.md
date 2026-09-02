# Ajustes locais em notícia, galeria e transparência

## Escopo
- Alterar somente `src/routes/noticias/$slug.tsx`, `src/routes/galeria/index.tsx` e `src/routes/transparencia.tsx`.
- Preservar fontes, tokens globais, header, footer, componentes compartilhados, demais páginas e fluxos existentes.

## Implementação
1. **Notícia individual**
   - Reduzir localmente o `min-height`, os espaçamentos verticais e o H1 do hero em aproximadamente 10% a 15%, mantendo imagem, overlays, metadados, retorno e alinhamento.
   - Manter o compartilhamento na sequência vertical do conteúdo e da galeria já aprovada.
   - Trocar as pills por cinco controles compactos, quadrados e acessíveis, com ícones, tooltips, glass discreto e hover usando detalhes institucionais.
   - Preservar os comportamentos atuais de Facebook, Instagram, LinkedIn, WhatsApp e cópia de link, incluindo feedback.

2. **Galeria**
   - Manter filtro, registros, grades e lightbox intactos.
   - Reformular somente o cabeçalho de cada registro com eyebrow “REGISTRO”, marcador numérico discreto, título e um pequeno detalhe gráfico orgânico em cor institucional.

3. **Transparência**
   - Reduzir localmente os dois cards em cerca de 10% a 15% por meio de altura mínima, padding, espaçamento e formas decorativas.
   - Manter composição, conteúdo, CTA e cores atuais, garantindo que as formas permaneçam afastadas dos textos em desktop e mobile.

## Validação
- Conferir build e erros de execução.
- Verificar notícia, galeria e transparência em desktop e mobile.
- Testar compartilhamento, filtro por ano e lightbox sem alterar outras rotas.
