# Galeria direta e páginas individuais de notícias

## Escopo
- Alterar somente `src/routes/galeria/index.tsx` e `src/routes/noticias/$slug.tsx`.
- Preservar heros das páginas principais, filtros de ano, componentes globais, estilos globais e demais rotas.

## Implementação
### Galeria
- Remover o estado e a interface intermediária de abertura de álbum.
- Para o ano selecionado, renderizar cada registro já cadastrado com seu título real seguido diretamente por uma grade organizada de fotos.
- Manter seleção de ano, troca local de conteúdo e lightbox com fechar, anterior/próxima, teclado e gestos de toque.
- Usar grade responsiva de 2 colunas no mobile, 3 no tablet e 4 no desktop, sem cards envolvendo os conjuntos.

### Notícia individual
- Substituir somente o hero da rota individual por um hero fotográfico local, com overlay, link de retorno, tag, data, H1 e resumo existente.
- Fazer o conteúdo iniciar diretamente pelo texto, com corpo local de 15–16px, sem repetir metadados ou retorno.
- Manter a galeria e seu lightbox depois do conteúdo.
- Mover o compartilhamento para depois da galeria e oferecer Facebook, Instagram, LinkedIn, WhatsApp e Copiar link com visual glass leve e feedback de cópia.
- Completar os metadados específicos da rota sem alterar outras páginas.

## Validação
- Conferir build e erros de execução.
- Testar troca de ano, abertura/navegação/fechamento do lightbox e compartilhamento/cópia.
- Verificar visualmente desktop e mobile nas duas rotas.
