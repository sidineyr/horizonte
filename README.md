# Horizonte

Site de exploração vocacional educativa para estudantes na fase do ENEM. A experiência começa com **“Eu quero ser…”** e ajuda a investigar interesses, caminhos de formação e próximos passos — sem definir uma profissão pelo estudante.

- [Repositório oficial](https://github.com/sidineyr/horizonte)
- [Site hospedado](https://horizonte-vocacional.blubier.chatgpt.site) — acesso público.

O Horizonte é um projeto independente do portal Chemical. O código fica na raiz deste repositório; não é necessário instalar ou copiar o Chemical para executá-lo.


## Atualizações recentes e comunidade

O Horizonte agora oferece **português, inglês, espanhol, alemão, francês e mandarim (chinês simplificado)** na interface, no questionário e no relatório. Trocar o idioma preserva respostas, etapa e pontuação; as traduções são locais, sem envio das respostas a serviços externos.

As melhorias recentes também incluem sugestões de profissões com animação imediata, uma página inicial com apresentação do questionário, método e bibliografia, créditos e Currículo Lattes, além de um contador agregado de testes concluídos que não armazena respostas.

**O Horizonte está aberto e aguardando contribuições da comunidade para continuar melhorando.** São especialmente bem-vindas revisões das traduções por falantes nativos, melhorias de acessibilidade, correções de problemas e sugestões educacionais fundamentadas.

Veja o [histórico das atualizações](CHANGELOG.md) e o [guia de contribuição](CONTRIBUTING.md). Participe pelas [issues](https://github.com/sidineyr/horizonte/issues) ou envie um pull request.
## O que está implementado

1. Entrada com apresentação breve, aviso de privacidade antes do preenchimento e campo livre para uma profissão, um sonho ou “ainda não sei”.
2. Apresentação do percurso e dos limites da ferramenta.
3. Questionário de 29 perguntas: 18 sobre interesses, 6 sobre habilidades percebidas e 5 sobre contexto.
4. Dashboard com radar e valores textuais dos seis interesses, três sugestões em destaque e lista dos 12 grupos de caminhos.
5. Cursos para investigar, justificativas, atividades de exploração e planejamento conforme as respostas.
6. Revisão e edição das respostas, reinício com confirmação e download do relatório em texto (`.txt`).

O questionário não é um teste psicológico validado. Não estima aptidão, nota de corte, elegibilidade a bolsas, salário ou empregabilidade. Não utiliza IA para interpretar o texto inicial ou gerar recomendações. Veja a [metodologia e os limites](docs/METODOLOGIA.md).

## Executar localmente

Requisitos do projeto: Node.js **22.13 ou superior** e pnpm. A instalação original utilizou pnpm **11.19.0**. Preserve `pnpm-lock.yaml` e respeite as políticas de segurança do seu ambiente.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abra o endereço exibido no terminal. Não abra os arquivos TSX diretamente no navegador.

### Scripts de instalação de dependências

`pnpm-workspace.yaml` contém decisões pendentes de autorização para os scripts de `esbuild`, `sharp` e `workerd`. Conforme a política local, a instalação pode terminar com `ERR_PNPM_IGNORED_BUILDS`. Isso não significa que o ambiente está pronto.

Revise as dependências e, quando permitido pela política do ambiente, utilize `pnpm approve-builds` para registrar a decisão explícita sobre cada uma. Depois, execute novamente a instalação. Não desative verificações de segurança nem aprove scripts indiscriminadamente. Essas autorizações não são necessárias para responder ao questionário; são decisões do ambiente de desenvolvimento.

## Verificações e build

```sh
pnpm test
pnpm typecheck
pnpm build
pnpm start
```

- `test`: testes automatizados da pontuação, validação das respostas e orientações de planejamento.
- `typecheck`: checagem TypeScript sem emitir arquivos.
- `build`: gera o pacote de produção em `dist/`.
- `start`: executa localmente o pacote já construído, com Wrangler; não publica o site.
- `lint` e `format`: ferramentas adicionais de análise e formatação. Não são executadas automaticamente pelos testes.

O build usa Vinext/Vite e produz uma aplicação compatível com Cloudflare Workers. **Não é um pacote estático pronto para GitHub Pages.**

## Documentação

- [Metodologia, pontuação e limites](docs/METODOLOGIA.md)
- [Arquitetura, desenvolvimento e verificações](docs/DESENVOLVIMENTO.md)
- [Privacidade e tratamento das respostas](docs/PRIVACIDADE.md)
- [Repositório, migração e hospedagem](docs/HOSPEDAGEM.md)

## Privacidade

As respostas ficam apenas na memória da página. Não há cadastro próprio, banco de respostas ou envio das respostas a APIs. Atualizar ou fechar a página apaga o progresso. O relatório baixado permanece no dispositivo. O provedor de hospedagem pode autenticar o visitante e registrar dados técnicos de acesso; isso é separado do questionário. Consulte a [documentação de privacidade](docs/PRIVACIDADE.md).

## Referências

- [O*NET Resource Center](https://www.onetcenter.org/IP.html): referência conceitual das seis áreas de interesse, sem transferência de validação para este questionário.
- [Acesso Único — MEC](https://acessounico.mec.gov.br/): consulta de programas de ingresso e editais vigentes.
- [e-MEC](https://emec.mec.gov.br/): consulta de instituições e cursos superiores.

O Horizonte não é vinculado ao MEC ou ao O*NET. Consulte sempre as fontes oficiais para decisões de ingresso e reconhecimento de cursos.

## Créditos e conexões

Idealização, direção e decisões editoriais: **Sidiney Rodrigues**. Desenvolvimento, interface, testes e documentação com apoio do OpenAI Codex, sob direção humana. Imagem social criada com geração de imagem da OpenAI.

- [LinkedIn](https://www.linkedin.com/in/sidineyrodrigues/?locale=pt)
- [GitHub](https://github.com/sidineyr)
- [Currículo Lattes](http://lattes.cnpq.br/6984746568461949)
- [Projeto educativo Chemical](https://sidineyr.github.io/Chemical/)

Os créditos aparecem na página inicial, na apresentação, no questionário e no resultado. Outros perfis só devem ser adicionados com URLs confirmadas pelo autor. As referências educacionais não representam vínculo institucional.


## Como esse teste foi elaborado

A página inicial, a apresentação e o resultado incluem uma seção expansível com o processo de elaboração, os três blocos de perguntas, exemplo de pontuação, limites e bibliografia. Distingue a página do O*NET efetivamente consultada na criação de dois livros recomendados: *Making Vocational Choices*, de John L. Holland (3. ed., 1997), e *Career Counseling*, de Mark L. Savickas (2. ed., 2019). Referências completas e escopo da consulta estão em [Metodologia](docs/METODOLOGIA.md).

### Entrada e sugestões visuais
A página inicial apresenta o questionário, o método e os créditos. Ao entrar na página com o campo vazio, exemplos de profissões aparecem imediatamente com efeito de digitação no placeholder; nunca preenchem ou enviam uma resposta. Digitar cancela o efeito; limpar o campo reinicia as sugestões imediatamente. É possível pausar as sugestões. Com redução de movimento ativada, aparece apenas um exemplo estático. O botão da apresentação permite continuar com “Ainda não sei”.
## Contador público de conclusões
Desde 31/08/2026, o site mantém no D1 apenas um total agregado de questionários concluídos. O navegador envia apenas {"completed":true}, sem profissão, respostas, resultados ou identificador do participante. O serviço recebe dados técnicos inerentes à conexão, sujeitos às condições da hospedagem.
Visitar a página não soma. Voltar para editar respostas não soma novamente na mesma tentativa. Reiniciar e concluir outra tentativa soma novamente; não se mede pessoas únicas. Nenhum histórico anterior foi estimado. Não há cookies ou armazenamento local para deduplicação.
O contador é indicativo, não uma métrica auditada: chamadas automatizadas podem inflar o total e falhas de rede podem causar subcontagem. A API verifica a origem das notificações, mas não comprova por si só que alguém respondeu ao questionário. O questionário continua funcionando se o contador estiver indisponível.
## Idiomas
O seletor oferece português (padrão), inglês, espanhol, alemão, francês e mandarim em chinês simplificado. A preferência fica apenas na memória da página e retorna ao português ao recarregar. Trocar o idioma preserva respostas, etapa e pontuação.
As traduções são locais, em lib/translations.ts. Não há requisições a serviços de tradução, coleta de idioma ou envio das respostas. Interface, 29 perguntas, opções, sugestões, contador, metodologia e relatório baixado são traduzidos. Texto livre do participante não é traduzido. Nomes próprios, títulos originais de livros e URLs são preservados; os sites externos e as imagens não são traduzidos.
ENEM, Sisu, Prouni e as formações continuam no contexto brasileiro. As traduções são de apoio e não representam validação psicométrica ou equivalência de diplomas em outros países. Em empates, mantém-se a ordenação original por nomes portugueses para que mudar o idioma não altere o resultado. Metadados de compartilhamento permanecem em português; o título da aba e o atributo lang acompanham a seleção.
A suíte tests/i18n.test.cjs verifica a cobertura textual e dos dados, a preservação de entradas e controles, e os relatórios sem alterações na pontuação. Não substitui revisão linguística por falantes nativos.