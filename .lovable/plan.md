# Ajustes locais em Projetos, Ecossistema e Transparência

## Escopo
- Alterar somente a paginação de `/projetos`, a seção “Os eixos se conectam na prática.” de `/ecossistema` e os dois links editoriais ao final de `/transparencia`.
- Preservar integralmente heros, cards de projetos, documentos, textos não citados, componentes compartilhados e estilos globais.

## Implementação
1. **Projetos**
   - Manter a paginação funcional com 3 projetos por página e rolagem suave.
   - Substituir apenas o controle visual por uma base única, compacta e translúcida, com setas pequenas e números `01`, `02`, `03`.
   - Destacar a página ativa em vermelho institucional e remover completamente o contador “Página X de Y”.
2. **Ecossistema**
   - Remover integralmente os seis cards atuais da seção de conexões.
   - Criar uma linha contínua horizontal no desktop, atravessando seis estações geométricas pequenas com os conceitos existentes.
   - No mobile, transformar a mesma composição em fluxo vertical, sem rolagem horizontal e sem cards tradicionais.
   - Usar somente os tokens locais da paleta já existente e glass apenas como acabamento discreto do conjunto ou dos marcadores.
3. **Transparência**
   - Remover apenas os dois cards atuais de Privacidade e Canal de Denúncias.
   - Criar dois blocos editoriais horizontais alternados, sem borda ou sombra de card: formas abstratas de um lado e conteúdo/CTA textual do outro.
   - No mobile, ordenar cada bloco como visual, texto e CTA, mantendo formas afastadas do conteúdo.

## Validação
- Confirmar a troca real das três páginas e ausência do contador textual em Projetos.
- Conferir fluxo horizontal/vertical da conexão em desktop e mobile.
- Conferir os dois blocos editoriais e seus links em Transparência.
- Verificar build, runtime e responsividade sem alterações globais.
