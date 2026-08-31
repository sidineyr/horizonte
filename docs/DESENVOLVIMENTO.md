# Desenvolvimento

## Estrutura

| Caminho | Responsabilidade |
| --- | --- |
| `app/page.tsx` | Entrada, apresentação, perguntas, dashboard, revisão e relatório |
| `app/layout.tsx` | Idioma, título, descrição, ícone e metadados sociais |
| `app/globals.css` | Tema, layouts responsivos e estilos de interação |
| `lib/vocational.ts` | Perguntas, dimensões, catálogo, cálculos e planejamento |
| `components/ui/` | Componentes de interface fornecidos pelo scaffold shadcn |
| `hooks/` e `lib/utils.ts` | Utilitários da interface |
| `public/` | Ícone e imagem social do Horizonte |
| `tests/scoring.test.mjs` | Testes da lógica de resultados |
| `vite.config.ts` | Integração Vinext, Vite, Sites e Cloudflare |
| `.openai/hosting.json` | Identificador da publicação existente no Sites |
| `docs/` | Documentação do projeto |

## Fluxo e estado

Há uma única rota (`/`), com estados React para entrada, introdução, questionário e resultado. Não há rotas individuais por pergunta ou relatório. Os botões internos controlam o percurso; o histórico do navegador não corresponde às etapas do questionário.

O estado contém o texto inicial, o índice da pergunta, as respostas e a visualização selecionada no resultado. Não utiliza `localStorage`, cookies de respostas ou persistência no servidor. Editar uma resposta preserva as demais, mas é necessário avançar novamente até a última pergunta para retornar ao resultado. Reiniciar pede confirmação e limpa o estado.

O download é um arquivo de texto gerado no navegador com `Blob`. Não é PDF. O arquivo inclui o texto inicial, índices, três sugestões, planejamento, respostas, método e referências.

## Dependências e instalação

React, TypeScript e Vinext compõem a aplicação; Vite realiza o build, Recharts desenha o radar, Lucide fornece ícones e componentes shadcn/Base UI compõem os controles. O scaffold inclui componentes que não são todos utilizados pela página. A mera presença de um componente não significa que sua funcionalidade esteja implementada no produto.

Use o procedimento de instalação do README, preserve o lockfile e revise as decisões pendentes em `pnpm-workspace.yaml`. Não copie `node_modules` de outra máquina para distribuir o projeto.

## Verificação

Execute `pnpm test`, `pnpm typecheck` e `pnpm build`. Os testes usam o executor nativo do Node e remoção experimental de tipos para importar `lib/vocational.ts`; o script inclui a opção necessária para o Node mínimo declarado no projeto.

A suíte cobre rejeição de respostas ausentes ou inválidas, extremos dos índices, empates, independência das habilidades e do contexto em relação ao ranking, personalização do planejamento, quantidade equilibrada de itens e 100 combinações aleatórias. As combinações aleatórias verificam invariantes; não são uma avaliação estatística da validade do instrumento.

Build e TypeScript não substituem teste de interação no navegador. A criação original e a migração não incluem uma suíte automatizada de ponta a ponta nem certificação de acessibilidade.

### Roteiro manual sugerido

- Abrir a página em tela estreita e larga; verificar campo inicial e textos longos.
- Navegar com teclado, responder e voltar sem perder respostas.
- Concluir as 29 perguntas e conferir índices, caminhos e mensagens de empate.
- Editar uma resposta e retornar ao resultado; testar download e reinício.
- Conferir que atualizar a página limpa as respostas.
- Verificar labels, foco, legibilidade, contraste, leitor de tela e preferência por movimento reduzido.

Este roteiro descreve verificações recomendadas; não afirma que todas foram realizadas.

## Alterações

Mantenha a interface em português brasileiro. Separe interesse de habilidade e de condições de acesso. Evite coletar informações pessoais desnecessárias. Não adicione telemetria de respostas ou persistência sem revisar a arquitetura, a informação ao usuário e os controles de privacidade.

Alterações de domínio exigem revisar as URLs absolutas de imagem social e `metadataBase` em `app/layout.tsx`.

## Persistência do contador
A interface continua na rota /. GET /api/completions lê o total e POST /api/completions incrementa atomicamente uma única linha no binding D1 DB. Não aceita respostas, perfis ou identificadores. A deduplicação de revisões é em memória por tentativa, sem retry automático de POST.
O esquema está em db/schema.ts; scripts/generate-counter-migration.mjs gera drizzle/0000_completion_counter.sql e seu journal. O helper lib/counter.ts inicializa a mesma tabela com CREATE TABLE IF NOT EXISTS. A publicação inclui as migrações e o binding lógico em .openai/hosting.json. O banco local do Wrangler é separado do banco de produção.
Verifique localmente: GET não incrementa; POST com origem autorizada e corpo exato soma um; POST com outra origem ou respostas no corpo é rejeitado; incrementos concorrentes não se perdem. Não envie eventos de teste ao contador de produção.