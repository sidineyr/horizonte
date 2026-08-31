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

## Como esse teste foi elaborado: fontes e livros

A seção pública “Como esse teste foi elaborado” está disponível após a entrada inicial, na apresentação e no resultado. O componente `components/questionnaire-method.tsx` reúne a descrição dos blocos, o cálculo, limites de validação, fonte efetivamente consultada e livros recomendados. A seção não aparece entre as perguntas, para preservar o foco na resposta.

### Fonte consultada na criação

NATIONAL CENTER FOR O*NET DEVELOPMENT. **O*NET Interest Profiler.** O*NET Resource Center. Disponível em: https://www.onetcenter.org/IP.html. Consulta inicial durante a criação do Horizonte em 31 ago. 2026. Fonte da organização conceitual das seis áreas de interesse, não dos itens autorais nem dos pesos editoriais.

### Livros recomendados

1. HOLLAND, John L. **Making Vocational Choices: A Theory of Vocational Personalities and Work Environments.** 3. ed. Odessa, FL: Psychological Assessment Resources, 1997. [Registro bibliográfico](https://ndlsearch.ndl.go.jp/books/R100000136-I1971993809750310729). Aprofundamento teórico sobre interesses e ambientes profissionais.
2. SAVICKAS, Mark L. **Career Counseling.** 2. ed. Washington, DC: American Psychological Association, 2019. DOI: [10.1037/0000105-000](https://doi.org/10.1037/0000105-000). [Amostra oficial](https://www.apa.org/pubs/books/Career-Counseling-2e-Chapter-1-Sample.pdf). Leitura complementar sobre construção de trajetórias profissionais; o Horizonte não aplica seu protocolo de aconselhamento.

Dados bibliográficos verificados em 31 ago. 2026, a partir de registro de biblioteca, informações editoriais e amostra oficial. Não houve consulta integral a esses livros na criação das perguntas. Os livros são recomendações de aprofundamento, não fontes retrospectivamente atribuídas à elaboração do questionário. Não foram reproduzidos itens de instrumentos, protocolos, tabelas ou trechos extensos dos livros. A citação não implica endosso dos autores ou validação do Horizonte.
