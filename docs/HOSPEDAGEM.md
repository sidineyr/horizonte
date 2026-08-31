# Repositório, migração e hospedagem

## Repositório do projeto

O destino do código é [sidineyr/horizonte](https://github.com/sidineyr/horizonte). Os arquivos da aplicação ficam na raiz, sem uma pasta externa `Chemical/` ou uma camada adicional `horizonte/`.

A migração separa a pasta local que inicialmente estava dentro do checkout do Chemical. O histórico próprio do Horizonte é preservado. A pasta local de destino é `horizonte`, irmã de `Chemical`. O portal Chemical, seus arquivos e seu remoto permanecem inalterados.

São versionados o código, o conteúdo do questionário, imagens, configurações, lockfile, testes e documentação. `node_modules`, builds, caches, relatórios e arquivos de ambiente não fazem parte da distribuição pelo GitHub. O arquivo `tsconfig.tsbuildinfo`, presente no primeiro commit histórico, foi retirado do estado atual e está ignorado.

## Publicação existente

[Horizonte no Sites](https://horizonte-vocacional.blubier.chatgpt.site) é a publicação existente. Seu acesso permanece privado no momento da migração. Tornar o código público no GitHub não altera esse acesso e não habilita hospedagem automática.

`.openai/hosting.json` identifica o projeto existente do Sites. Esse identificador não é senha e não concede acesso administrativo. Preserve-o ao manter esta publicação; não crie outro projeto para uma simples atualização. Não armazene credenciais de envio nesse arquivo, em URLs de remotos ou no histórico Git.

## GitHub e Sites são destinos diferentes

O remoto `origin` aponta para o GitHub. A infraestrutura Sites possui seu próprio repositório de publicação e usa credenciais temporárias. Um push ao GitHub, isoladamente, não atualiza a versão hospedada. Não há workflow de publicação automática neste repositório.

Para atualizar a publicação existente pelo fluxo Sites:

1. Verifique os testes, os tipos e o build de produção.
2. Preserve o identificador de hospedagem e envie o estado exato do código ao destino de publicação, usando autenticação temporária por comando.
3. Empacote o build com o helper oficial do Sites e salve uma versão associada ao commit enviado.
4. Confira a política de acesso antes de publicar. Uma publicação pública ou compartilhada exige a autorização correspondente.
5. Aguarde a confirmação de sucesso e verifique o endereço retornado.

Credenciais não devem ser incluídas no arquivo compactado nem mantidas na documentação. A migração para GitHub não requer republicar o site quando apenas documentação e organização do repositório mudam.

## Execução e limitações

`pnpm build` produz saída de servidor e arquivos do cliente em `dist/`. `pnpm start` executa esse build localmente com Wrangler; não o envia para a internet.

Não basta habilitar GitHub Pages: a aplicação atual possui saída de servidor compatível com Workers, não uma exportação estática. Outra hospedagem exige configuração compatível e uma validação própria.

Não há banco D1, bucket R2, chave de IA ou segredo de aplicação necessário ao questionário atual. Não configure serviços adicionais apenas por existirem opções no scaffold.

Os metadados em `app/layout.tsx` utilizam o domínio existente, incluindo a imagem `public/og.png`. Ao alterar o endereço do site, atualize essas referências e valide o build novamente.
