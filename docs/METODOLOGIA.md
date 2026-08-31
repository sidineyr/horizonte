# Metodologia e limites

## Finalidade

O Horizonte oferece exploração educativa e autorreflexão, especialmente na transição entre o Ensino Médio, o ENEM e a formação posterior. Não substitui orientação profissional individual, avaliação psicológica ou pesquisa sobre instituições e profissões.

O conteúdo é autoral, inspirado nas seis áreas de interesse RIASEC. Não reproduz o O*NET Interest Profiler, não foi validado psicometricamente e não herda a evidência de validade daquele instrumento. [Referência conceitual](https://www.onetcenter.org/IP.html).

## Estrutura do questionário

| Bloco | Quantidade | Uso |
| --- | ---: | --- |
| Interesses | 18 | Calcula seis índices, com três atividades por dimensão |
| Habilidades percebidas | 6 | Descreve o ponto de partida declarado, sem alterar o ranking |
| Contexto | 5 | Exibe preferências e personaliza orientações de planejamento |

Dimensões: prático (R), investigativo (I), criativo (A), social (S), empreendedor (E) e organizador (C).

As perguntas de interesse alternam as seis dimensões em três rodadas. A escala vai de “Não gostaria” a “Gostaria muito”. As habilidades usam outra escala, de “Ainda não explorei” a “Tenho muita facilidade”. Autopercepção não é medida objetiva de desempenho.

## Cálculo

1. Cada resposta de interesse recebe um valor inteiro de 0 a 4.
2. Somam-se os três itens de cada dimensão.
3. O índice é `arredondar(soma / 12 × 100)`.
4. Cada grupo de caminhos associa editorialmente duas dimensões: `arredondar(0,6 × índice principal + 0,4 × índice secundário)`.
5. Os grupos são ordenados pelo índice decrescente; empates usam ordem alfabética em português, sem preferência adicional.

O índice de 0 a 100 não é probabilidade, percentil, comparação com outros estudantes ou previsão de sucesso. As associações e pesos são heurísticas editoriais, não um modelo preditivo validado.

Todos os 29 itens precisam ter respostas válidas para calcular o resultado. A implementação está em `lib/vocational.ts`; a apresentação e o relatório estão em `app/page.tsx`.

## Papel de cada informação

- **Texto “Eu quero ser…”:** reaparece como convite à reflexão; não é interpretado por IA e não altera os índices. Não há correspondência automática entre esse texto e uma profissão.
- **Interesses:** determinam os índices e a ordenação dos caminhos.
- **Habilidades:** aparecem separadamente como habilidades em desenvolvimento; não excluem cursos.
- **Área escolar e prioridade no trabalho:** aparecem no resumo de contexto, mas não recalculam o ranking.
- **Rotina, prioridade de apoio e sentimento sobre a escolha:** personalizam o planejamento. Necessidade de trabalhar ou buscar apoio não penaliza os interesses.

## Resultado e casos especiais

O dashboard destaca três dos 12 grupos cadastrados e permite consultar os demais. Cada grupo apresenta exemplos de cursos, uma justificativa, uma atividade de exploração e aspectos a comparar nos currículos. Os cursos agrupados não são equivalentes nem possuem necessariamente as mesmas exigências profissionais.

Quando todos os interesses empatam, uma mensagem explica que nenhum se destaca. Quando o maior índice de interesse é inferior a 50, o site informa que as respostas ainda não indicam interesses intensos nas atividades propostas. A regra de 50 é editorial, não um limiar clínico ou estatístico validado.

## Limitações e uso responsável

O catálogo não cobre todas as profissões, formações ou realidades regionais. As sugestões não incluem vagas, salários, notas de corte, probabilidade de admissão ou garantia de emprego. Menções a tecnologia, automação e IA são temas de exploração curricular, não previsões do mercado.

Antes de decidir, compare matrizes curriculares, reconhecimento, modalidade, estágios, custos, deslocamento, apoios à permanência e atividades profissionais. Consulte os editais e as instituições. Conversas com profissionais, estudantes e orientadores complementam o roteiro.

Ao alterar perguntas, pesos ou catálogo, revise também os testes, o texto explicativo do dashboard, o relatório baixado e esta documentação. Mudanças não devem introduzir afirmações de validação sem evidências apropriadas.
