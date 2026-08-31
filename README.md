# Horizonte

Exploração vocacional educativa em português brasileiro para estudantes na fase do ENEM. Projeto independente; os arquivos do portal Chemical não foram alterados.

## Experiência

- Entrada minimalista: “Eu quero ser…” e campo livre.
- Orientação inicial e 29 perguntas: 18 de interesse, 6 de habilidades percebidas e 5 de contexto.
- Dashboard com radar, valores acessíveis, 12 grupos de caminhos, cursos, justificativas e atividades de exploração.
- Revisão e edição das respostas; relatório local em texto.
- Respostas apenas em memória, sem cadastro, analytics ou transmissão a APIs. Atualizar a página apaga o progresso.

## Limites pedagógicos

Questionário autoral educativo, não teste psicológico validado. A classificação RIASEC serve como referência conceitual; o instrumento não é o O*NET Interest Profiler. As associações entre grupos de cursos e interesses são editoriais, sem validação preditiva. Não estima aptidão, admissão, salário ou empregabilidade.

Três itens de interesse por dimensão, cada um de 0 a 4. Índice da dimensão = soma / 12 × 100, arredondado. Índice do grupo = 60% da dimensão principal + 40% da secundária. Empates são ordenados alfabeticamente. As habilidades e condições de estudo não penalizam a classificação. O sonho digitado é retomado como reflexão, sem interpretação automática ou IA. Contexto personaliza as orientações de planejamento.

## Referências

- https://www.onetcenter.org/IP.html — referência conceitual das seis áreas de interesse.
- https://acessounico.mec.gov.br/ — consulta aos programas e editais atuais.
- https://emec.mec.gov.br/ — consulta de instituições e cursos superiores.

## Desenvolvimento

Node >= 22.13; pnpm. Scripts: `pnpm dev`, `pnpm build`. Tipos: `pnpm exec tsc --noEmit`. Testes de pontuação: `node --test tests/scoring.test.mjs` (Node com suporte a TypeScript por remoção de tipos).

O ambiente pode exigir autorização explícita dos scripts de instalação de dependências nativas. Não remova controles de segurança para instalar.

## Validação

Build de produção, TypeScript e testes de limites, empates, respostas inválidas, independência de condições financeiras e 100 combinações de respostas. Sem teste visual automatizado em navegador.
