# Privacidade e respostas

Este documento descreve o comportamento implementado; não é uma certificação de conformidade legal.

## Dentro do questionário

O site recebe um texto livre sobre o que o estudante deseja ser e 29 respostas sobre interesses, habilidades percebidas e contexto. Não solicita nome, e-mail, CPF, nota do ENEM, renda exata ou documentos.

O texto livre pode conter informações pessoais se o visitante decidir digitá-las. Recomenda-se escrever apenas a profissão, a aspiração ou “ainda não sei”, sem identificação pessoal.

As respostas permanecem em estado React, na memória da página. A aplicação não as envia para APIs, não as registra em banco de dados e não as salva em armazenamento persistente do navegador. Não há integração de publicidade nem rastreamento individual. Há apenas um contador agregado de conclusões, descrito abaixo.

Atualizar, fechar ou sair da página pode apagar o progresso. Não há recuperação nem sincronização entre dispositivos. Voltar pelo botão interno do questionário preserva as respostas da sessão atual.

## Relatório baixado

O relatório `.txt` é gerado no navegador e salvo no dispositivo por iniciativa do visitante. Inclui todas as respostas e o texto inicial. O visitante controla sua guarda, exclusão e compartilhamento. Reiniciar o questionário não apaga arquivos já baixados.

## Hospedagem e links externos

A publicação no Sites pode exigir autenticação e autorização para entrar. O provedor pode tratar identificadores de conta e dados técnicos de acesso, conforme suas próprias condições. Isso é diferente de um cadastro ou banco de respostas implementado pelo Horizonte. Não se promete anonimato absoluto da navegação.

Ao abrir links para MEC, e-MEC ou O*NET, o visitante acessa serviços externos com práticas próprias. O Horizonte não envia respostas nesses links.

## Código público não significa respostas públicas

O repositório GitHub contém código, conteúdo editorial, imagens, testes e configurações não secretas. Não deve receber respostas de estudantes, relatórios pessoais, tokens, senhas ou arquivos de ambiente. Exemplos em issues e pull requests devem ser fictícios ou desidentificados.

Qualquer inclusão futura de contas próprias, analytics, armazenamento ou processamento externo exige revisar este documento e os avisos exibidos antes da coleta.

## Contador público de conclusões
Desde 31/08/2026, o site mantém no D1 apenas um total agregado de questionários concluídos. O navegador envia apenas {"completed":true}, sem profissão, respostas, resultados ou identificador do participante. O serviço recebe dados técnicos inerentes à conexão, sujeitos às condições da hospedagem.
Visitar a página não soma. Voltar para editar respostas não soma novamente na mesma tentativa. Reiniciar e concluir outra tentativa soma novamente; não se mede pessoas únicas. Nenhum histórico anterior foi estimado. Não há cookies ou armazenamento local para deduplicação.
O contador é indicativo, não uma métrica auditada: chamadas automatizadas podem inflar o total e falhas de rede podem causar subcontagem. A API verifica a origem das notificações, mas não comprova por si só que alguém respondeu ao questionário. O questionário continua funcionando se o contador estiver indisponível.