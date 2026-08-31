# Rastreamento e indexação

O site público oferece robots.txt, sitemap.xml e URL canônica para a página inicial. O sitemap lista somente URLs públicas reais; idiomas e etapas do questionário não têm URLs próprias. Não foram inventadas versões alternativas por idioma.

A API do contador não integra o sitemap, é desaconselhada para rastreamento em robots.txt e responde com X-Robots-Tag: noindex, nofollow. As respostas do participante nunca são páginas públicas.

A metatag google-site-verification corresponde à propriedade por prefixo de URL do Horizonte no Google Search Console do mantenedor. Preserve-a após verificar a propriedade. Ela não é um código de analytics e não transmite respostas.

O arquivo público indexnow-key.txt prova o controle do site para o protocolo IndexNow. Não é senha da conta. Após publicar e verificar os arquivos, execute node scripts/submit-indexnow.mjs para avisar os buscadores participantes sobre uma alteração real na página inicial. Não execute a cada visita ou conclusão de questionário.

No Google Search Console, envie sitemap.xml e use a inspeção da URL inicial para solicitar indexação. Não utilize os antigos endpoints de ping do Google, que foram descontinuados.

Respostas HTTP 200 ou 202 do IndexNow indicam recebimento (202 pode aguardar validação da chave), não inclusão no índice. O protocolo compartilha notificações entre buscadores participantes. Google e outros serviços podem usar procedimentos diferentes. Envio e rastreabilidade não garantem indexação, posição ou prazo.

Fontes oficiais:
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://www.indexnow.org/documentation