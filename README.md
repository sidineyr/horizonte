# Horizonte

Site de exploração vocacional educativa para estudantes na fase do ENEM. A experiência começa com **“Eu quero ser…”** e ajuda a investigar interesses, caminhos de formação e próximos passos — sem definir uma profissão pelo estudante.

- [Repositório oficial](https://github.com/sidineyr/horizonte)
- [Site hospedado](https://horizonte-vocacional.blubier.chatgpt.site) — acesso público.

O Horizonte é um projeto independente do portal Chemical. O código fica na raiz deste repositório; não é necessário instalar ou copiar o Chemical para executá-lo.

## O que está implementado

1. Entrada com campo livre para uma profissão, um sonho ou “ainda não sei”.
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
- [Projeto educativo Chemical](https://sidineyr.github.io/Chemical/)

Os créditos aparecem após a entrada inicial, na apresentação, no questionário e no resultado. Outros perfis só devem ser adicionados com URLs confirmadas pelo autor. As referências educacionais não representam vínculo institucional.

