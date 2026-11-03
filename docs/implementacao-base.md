# Base visual

Base estática com a mesma linguagem da referência da Cristiana: tipografia Cormorant Garamond + Mulish, retrato em arco, roxo profundo, fundos em pêssego/lilás, geometria floral e chamadas para WhatsApp. Código novo, sem o runtime exportado do site antigo e sem os dados pessoais dela.

Nenhuma biografia, formação, serviço detalhado ou depoimento foi inventado. A galeria usa apenas registros das fotos. Substituir a apresentação curta e completar os serviços após leitura dos textos da Isabela no WA-AKG. Não publicar essa base como entrega final.

Imagens WebP geradas dos originais via `python scripts/prepare-images.py C:/Maxwel/isabela-insumos` (Pillow necessário somente para regenerar). Imagens sem metadados EXIF. Duas larguras para os retratos e foto horizontal.

## Pendências antes da prévia final

- Incorporar textos anexados, confirmar técnicas e revisar tom com o conteúdo real.
- Verificar cidade/endereço, credenciais e serviços, caso informados pela cliente.
- Confirmar conteúdo dos três Reels e se existe um quarto vídeo.
- Baixar originais, comprimir, gerar posters e publicar vídeos próprios em bucket da Isabela no Supabase pelo fluxo autorizado.
- Configurar `videos` em `videos.js` com objetos `{title, src, poster}`. Sem configuração a seção permanece oculta. O player usa `preload=none`, `controls` e `playsInline`.
- Inserir URL definitiva/canonical, `og:url` e URL absoluta de `og:image` após definir domínio de prévia/produção.
- Validar visualmente em localhost e realizar as duas revisões independentes solicitadas.

## Executar localmente

Sem build ou dependências de navegador: `python -m http.server 4173 --bind 127.0.0.1` na raiz e abrir http://127.0.0.1:4173 .
