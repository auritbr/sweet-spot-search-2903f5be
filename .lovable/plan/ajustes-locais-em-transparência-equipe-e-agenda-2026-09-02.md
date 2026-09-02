# Ajustes locais em Transparência, Equipe e Agenda

## Escopo
- Alterar somente `src/routes/transparencia.tsx`, `src/routes/equipe.tsx` e `src/routes/agenda/$slug.tsx`.
- Preservar heros, estilos globais, conteúdo existente, cards da equipe, estrutura da Agenda, compartilhamento, navegação, footer e demais seções.

## Implementação
1. Substituir exclusivamente os adornos da introdução “Nosso jeito de fazer” por uma composição abstrata e institucional: documento contornado com canto dobrado e linhas organizadas no alto à esquerda, moldura parcial com selo/círculos e pontos embaixo à direita, além de um marcador mínimo junto ao título. Os elementos periféricos serão reduzidos ou ocultados no mobile para nunca cruzarem o texto.
2. Inserir logo após essa introdução uma seção compacta e centralizada “Acervo institucional”, com o texto fornecido e uma linguagem gráfica própria de folhas sobrepostas, pequeno grid e linhas de arquivo; sem card pesado. O conteúdo atual de documentos permanecerá imediatamente abaixo.
3. Organizar os cards existentes da Equipe em grupos derivados exclusivamente dos cargos cadastrados: “Direção e produção” (Direção artística, Produção executiva e Cenografia), “Formação e mediação” (Coordenação pedagógica, Preparação corporal, Preparação vocal e Mediação cultural) e “Comunicação” (Comunicação). Cada grupo terá um separador leve, e o componente visual interno de cada card será mantido sem alterações.
4. Transformar apenas o link “Fale com a Associação” em um botão compacto azul-petróleo com cor translúcida, blur suave, borda e sombra discretas, mantendo texto, destino e posição.

## Validação
- Conferir build e erros de execução.
- Verificar as três páginas em desktop e mobile.
- Confirmar que adornos não cobrem textos, grupos respeitam os cargos atuais, cards permanecem visualmente idênticos e o botão mantém o link para `/contato`.
