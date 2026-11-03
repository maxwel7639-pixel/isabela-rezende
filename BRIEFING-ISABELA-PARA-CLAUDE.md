# Briefing de continuidade — site Isabela Rezende

Atualizado em 02/11/2026. Documento para o Claude continuar sem repetir a análise já realizada.

## 1. Pedido e decisão mais recente do Maxwel

Isabela Carvalho Rezende enviou fotos, textos na conversa com Bianca e três ou possivelmente quatro vídeos para seu site. Quer o mesmo modelo do site de Cristiana Stringhi. Usar textos enviados pela cliente como fonte principal dos serviços; evitar gastar trabalho analisando posts para descobrir informações que já estejam nesses textos. Hospedar os vídeos no Supabase, como no site de Cristiana, sem MP4 no HTML/repositório e sem carregar todos os vídeos na abertura da página.

Maxwel pediu divisão de tarefas e duas revisões de código. Ambas as revisões aconteceram, com limites descritos abaixo.

**Última orientação: deixar a base exatamente como está para terminar com o Claude. Este documento não representa aprovação de publicação ou merge.** Nenhuma mudança no código foi feita após essa orientação; apenas este briefing foi criado.

## 2. Estado real e caminhos

- Workspace da base: `C:/Users/manoe/orca/workspaces/isabela/site-isabela`.
- Branch: `tarefa/site-isabela-conteudo-20261102`.
- Base estática: `index.html`, `styles.css`, `videos.js`, `assets/` e `scripts/prepare-images.py`.
- Prévia iniciada em http://127.0.0.1:4173 . Se não estiver rodando: executar `python -m http.server 4173 --bind 127.0.0.1` na raiz do workspace.
- Os arquivos criados estão sem commit. Não houve push, PR, merge, deploy ou upload ao Supabase nesta tarefa.
- Pasta de materiais fora do Git: `C:/Maxwel/isabela-insumos`.
- ZIP original: `C:/Users/manoe/Downloads/WhatsApp  isabela.zip`.
- Cérebro efetivamente encontrado e atualizado por `git pull`: `C:/Maxwel/cerebri-claude`. O caminho informado `C:/Maxwel/cerebri-Codex` não existia neste PC nesta consulta. Não criar outro clone só por isso.

**Não chamar a análise de completa:** imagens, modelo de referência, perfil público e três Reels foram analisados; a conversa e os textos anexados do WA-AKG não foram lidos. A fala integral dos vídeos não foi transcrita.

## 3. WA-AKG — situação e próximo passo prioritário

- URL existente: https://wa-notebook.mxdigital-ops.uk/dashboard/sessions
- Maxwel confirmou que já havia uma sessão autenticada no Chrome.
- A imagem fornecida por ele foi inspecionada: confirma painel autenticado, sessão selecionada `bianca`, identificador `ap9jmr`, status CONNECTED. Há também outra sessão conectada, `meu whatsapp mx`.
- Screenshot recebido: `C:/Users/manoe/AppData/Local/Temp/orca-paste-1793666675925-70e0302b-383f-4831-a8a2-ab9184b7c4d7.png`. Arquivo temporário: não depender dele como único registro.
- O menu **Chat** está visível no painel. Usar a sessão existente da Bianca para localizar a conversa de Isabela Rezende e obter os textos/anexos, sem enviar mensagens.
- A sessão nova de agent-browser desta tarefa abriu sem autenticação. Isso NÃO significa que a sessão do Maxwel esteja deslogada.
- Conector de navegador indisponível nesta execução; tentativa de conexão automática ao Chrome não encontrou instância com interface de depuração. Controle nativo foi interrompido porque não conseguiu verificar com segurança a URL atual do navegador. Não copiar cookies, ler banco de credenciais ou contornar essa interrupção.
- Não ler `.env`, não pedir chaves ou senhas no chat e não instalar chaves de produção neste PC.

### Extrair da conversa antes de finalizar o conteúdo

1. Textos completos e documentos anexados enviados pela Isabela, preservando originais fora do Git.
2. Lista e nomes exatos dos serviços, descrições, diferenciais e eventual ordem desejada.
3. Biografia, formação/registro profissional se enviados, cidade/endereço e modalidades.
4. Preferências específicas em relação ao modelo da Cristiana.
5. Confirmar se existe um quarto vídeo e se é depoimento, apresentação ou serviço.
6. Conferir contato e detalhes atuais, priorizando a cliente caso difiram do perfil público.

Não inventar informações ausentes. Não confundir esta cliente com Julia Rezende ou Cristiana Stringhi.

## 4. Instagram — dados verificados

Perfil: https://www.instagram.com/terapiaholistica_isarezende/

- Nome exibido: Isabela Rezende | Terapias Holística • Acupuntura • Constelação.
- Bio informa 7 anos e atendimento on-line e presencial.
- WhatsApp profissional publicado: https://wa.me/5537998761478 . Os botões da base usam esse número.
- Destaques visíveis: Mesa Radionica, Constelação, Massagem, Acupuntura, Lojinha, Auriculo, Aromaterapia, Consultoria, Reiki e Florais.
- Esses destaques não foram automaticamente tratados como catálogo atual completo. Confirmar oferta nos textos da conversa.
- Identidade visual observada: bege/creme, traços finos lilás/ameixa, motivos geométricos e florais. Fotos do consultório mostram plantas, madeira, branco e iluminação quente; parte do espaço tem parede lilás.
- A base usa ameixa, lilás e bege com estrutura de Cristiana; não é reprodução integral de todas as seções do site dela.
- A bio e legendas têm alegações de cura/transformação e comparação com medicina. A base não reproduziu essas promessas. Não transformar depoimentos individuais em garantia de resultado.
- Capturas do perfil: `instagram-perfil.png` e `instagram-completo.png` em `C:/Maxwel/isabela-insumos`.

A consulta pública cobriu perfil, destaques visíveis e os três Reels solicitados. Não foi feita auditoria integral de todos os posts, nem de todos os stories dos destaques.

## 5. ZIP — análise de todas as imagens

ZIP de 1.310.055 bytes. Extração com validação dos caminhos, em `C:/Maxwel/isabela-insumos`. Contém exatamente **10 JPEGs**, total descompactado de **1.321.318 bytes**. Nenhum texto, documento ou vídeo.

Todos os nomes abaixo têm prefixo `WhatsApp Image 2026-11-01 at `.

| Sufixo do arquivo | Dimensões | Conteúdo e uso sugerido |
|---|---|---|
| `12.25.11.jpeg` | 1024 × 1536 | Isabela de branco em pé no consultório. Escolhida para hero em arco. |
| `12.25.11 (1).jpeg` | 1067 × 1600 | Isabela com caixa de frascos coloridos. Nome da técnica depende do texto. Convertida para assets `frascos`, mas não exibida na galeria atual. |
| `12.25.12 (1).jpeg` | 1086 × 1448 | Pêndulo em mesa temática dourada e cristais. Confirmar nome exato da mesa. |
| `12.25.12.jpeg` | 1067 × 1600 | Isabela com mesa azul e cristais. Não nomear técnica só pela imagem. |
| `16.00.59 (1).jpeg` | 1200 × 1600 | Aplicação de agulhas na região do pescoço. Foto de serviço, sem promessa clínica. |
| `16.00.59 (2).jpeg` | 1066 × 1600 | Atendimento na orelha com cartaz auricular ao fundo. |
| `16.00.59.jpeg` | 1536 × 1024 | Mãos acima de paciente em maca. Única horizontal, usada como destaque de atendimento. Não afirmar técnica sem fonte textual. |
| `16.01.00 (1).jpeg` | 725 × 1004 | Frascos de Florais de Bach. Menor resolução; não ampliar artificialmente. |
| `16.01.00 (2).jpeg` | 1080 × 1350 | Isabela de óculos com pêndulo e parede lilás. Usada na apresentação. |
| `16.01.00.jpeg` | 900 × 1600 | Ventosas nas costas de paciente. Contexto de serviço. |

Materiais auxiliares: `inventario.json`, `contact-sheet.jpg` e `ANALISE-MIDIAS.md`. Alguns relatórios auxiliares foram gravados com caracteres acentuados substituídos por `?`; este briefing concentra a descrição legível em UTF-8. Os nomes reais dos arquivos e dados técnicos podem ser conferidos no inventário.

As dez fotos geraram vinte WebPs (variantes de até 480 e até 960 px), total de 960.990 bytes. A nomenclatura da variante não garante largura real se o original for menor; ver revisão 2. O script remove metadados ao converter para RGB/WebP e preserva proporção.

## 6. Vídeos — análise dos três links

Os três Reels foram abertos publicamente e baixados com yt-dlp, sem cookies nem credenciais. Foram inspecionadas legendas da publicação e seis quadros distribuídos por vídeo. **Não houve transcrição integral nem análise auditiva completa da fala.**

| Pessoa / uso editorial sugerido | Fonte | Arquivo original | Duração e resolução | Tamanho |
|---|---|---|---|---|
| Gabriela — atendimento à distância | https://www.instagram.com/reel/DRdR3LiDVD_/ | `reel-DRdR3LiDVD_.mp4` | 60,05 s; 360 × 640 | 2.033.964 bytes |
| Iasmim — acolhimento e escuta | https://www.instagram.com/reel/DQ7oodrj3k0/ | `reel-DQ7oodrj3k0.mp4` | 68,75 s; 720 × 1280 | 6.978.230 bytes |
| Rafaela — análise radiestésica | https://www.instagram.com/reel/DQoexbLjazm/ | `reel-DQoexbLjazm.mp4` | 61,79 s; 720 × 1280 | 6.669.426 bytes |

- Gabriela: nome confirmado pela legenda embutida inicial. A publicação apresenta experiência de atendimento à distância. Publicado em 24/11/2025.
- Iasmim: nome identificado no agradecimento escrito por Isabela; quadros com legendas indicam atenção, carinho e ambiente seguro para conversar. Publicado em 11/11/2025.
- Rafaela: nome e análise radiestésica confirmados pela legenda da publicação. Não inventar citação da fala, pois os quadros não oferecem transcrição suficiente. Publicado em 04/11/2025.
- São três depoimentos; o quarto vídeo continua sem confirmação.

### Arquivos prontos e escolha de compressão

Tudo em `C:/Maxwel/isabela-insumos`:

- Originais: os três `reel-<id>.mp4` da tabela.
- **Versões selecionadas para upload: pasta `videos-web-remux`**, com inventário. H.264/AAC e faststart, preservando imagem/áudio originais.
- Posters WebP: pasta `videos-web`.
- A tentativa H.264/AAC CRF24 em `videos-web` aumentou os tamanhos: aproximadamente 3,29 MB, 8,40 MB e 7,87 MB. Por isso foi preferido remux sem recodificação; não subir automaticamente os arquivos maiores dessa pasta.
- Legendas escritas: `reel-<id>-caption.txt`.
- Screenshots: `reel-<id>.png`; folhas de quadros: `reel-<id>-frames.jpg`.
- Relatório: `ANALISE-REELS.md`; metadados: `reels-inventario.json`.

### Supabase — não executado

Não foi criado bucket nem feito upload. Nenhuma URL de Isabela foi configurada. Usar armazenamento próprio dela, sem reutilizar depoimentos ou bucket da Cristiana. Preparar legendas/transcrição acessível antes de entregar vídeos com fala.

Na base, `videos.js` tem `const videos = []` e oculta a seção enquanto não houver entradas válidas. O formato atual é `{title, src, poster}`. Aceita URLs HTTPS de Storage público `.supabase.co`, cria elementos por DOM, escreve títulos com `textContent`, usa `controls`, `playsInline` e `preload = 'none'`, sem autoplay.

Hospedagem externa sozinha não reduz os bytes reproduzidos. Posters leves, reprodução manual e controle de preload evitam o download inicial dos três MP4. Validar a rede depois de configurar URLs reais.

## 7. Referência Cristiana — código e site comparados

- Repositório próprio: https://github.com/maxwel7639-pixel/site-cristiana-stringhi
- Vercel: https://site-cristiana-stringhi.vercel.app/
- Domínio: https://cristianastringhi.com.br/ redireciona 308 para https://www.cristianastringhi.com.br/ . Destino e Vercel responderam 200, com HTML idêntico byte a byte.
- GitHub corresponde ao publicado após normalizar quebras de linha.
- Cópias e análise: `C:/Maxwel/isabela-insumos/referencia-cristiana/` (`ANALISE.md`, `index-github.html`, `index-vercel.html`, `index-dominio.html`, `support.js`, `image-slot.js`). Não foi necessário REA porque o código próprio estava acessível.

### Modelo visual

Header creme translúcido fixo, nome serifado, CTA arredondado. Hero centralizado, fundo escuro tipo nebulosa, retrato em arco e borda ornamental. Cormorant Garamond + Mulish. Roxo/lavanda/creme, gradientes quentes e motivos florais geométricos. Seções extensas, fotografias, artigos largos brancos arredondados e vídeos verticais. Larguras máximas de aproximadamente 900–1100 px.

Ordem do site de referência: hero; explicação da terapia; atendimentos; cartomancia; divórcio energético com vídeo; alquimia; curso; livro; como funciona; depoimentos; FAQ; sobre; rodapé e WhatsApp flutuante.

**Essa é a estrutura de Cristiana, não a lista de serviços de Isabela.** Adaptar quantidade e seções aos textos reais, sem importar curso, livro, títulos, registros, estatísticas ou serviços da outra cliente.

### Vídeos e erros que não devem ser copiados

Cristiana usa Storage público Supabase em bucket `videos-cristiana`, com MP4 externo, poster, controls e preload none. Endpoint de um depoimento testado retornou 200, Content-Type video/mp4 e suporte a intervalos de bytes.

Não copiar runtimes DCLogic/x-dc/image-slot: dependem de estado auxiliar. A base de Isabela foi reescrita em HTML/CSS/JS padrão. A referência possui atributos preload malformados em dois vídeos, metadados incompletos, links genéricos YouTube e conteúdo que depende de JS para aparecer. Não reproduzir esses problemas.

## 8. O que a base atual contém e o que falta

Contém hero com foto real, apresentação curta factual, indicação on-line/presencial e 7 anos de atuação, destaque de atendimento, seis imagens na galeria, contato, WhatsApp flutuante e Instagram. Nove fotos aparecem; a décima foi otimizada e está disponível para encaixe com o serviço correto.

Não contém ainda o catálogo detalhado, a biografia enviada pela cliente, FAQ específico, depoimentos publicados ou metadados de URL definitiva. Esses conteúdos dependem da conversa ou da configuração final. Não publicar como entrega concluída.

Documentação complementar na base: `docs/plano-e-fontes.md`, `docs/implementacao-base.md` e `docs/videos-supabase.md`. Alguns checklists desses documentos refletem o início da tarefa; o estado consolidado mais recente está neste briefing.

## 9. Testes e duas revisões de código

### Verificação da base

- `node --check videos.js` passou.
- `git diff --check` passou.
- Navegador: sem rolagem horizontal em 375 px e 1440 px, e nenhuma imagem concluída quebrada.
- Fotos da galeria usam lazy loading; em screenshot de página inteira sem rolar, podem aparecer áreas vazias porque ainda não foram carregadas. Após rolagem, as imagens foram exibidas e inspecionadas.
- Capturas em `C:/Maxwel/isabela-insumos`: `previa-desktop.png`, `previa-mobile.png`, `previa-mobile-galeria-carregada.png` e `previa-desktop-hero.png`.
- Não foi testada reprodução real de vídeos no site, porque não há URLs configuradas.

### Revisão 1 — realizada por agente independente

Sem achados críticos no escopo da base. P2: galeria sempre carregava a variante 480, embora 960 estivesse disponível. **Corrigido antes da orientação de congelar a base:** seis itens receberam srcset/sizes.

Legendas/transcrição para futuros vídeos foram registradas como pendência. Serviços, FAQ, WA-AKG e URLs finais eram limitações conhecidas, não itens concluídos.

### Revisão 2 — realizada por outro agente independente

**P2 pendente, não corrigido para respeitar a orientação de deixar a base como está:** `index.html` declara `960w` em duas variantes cuja largura real é menor:

- `assets/florais-960.webp`: largura real 725 px. Trocar descritor para `725w`.
- `assets/ventosas-960.webp`: largura real 900 px. Trocar descritor para `900w`.

Causa: `thumbnail()` em `scripts/prepare-images.py` preserva originais menores. Não ampliar os originais para resolver; usar o descritor real ou gerar manifesto de dimensões.

Revisão 2 também verificou mobile/desktop sem overflow, imagens sem falhas e ausência de segredos, scripts destrutivos ou injeção de HTML. Axe: 32 verificações passaram; recomendação sobre WhatsApp flutuante fora de landmark. Gradientes impediram parte da avaliação automática de contraste: não afirmar conformidade integral de acessibilidade.

## 10. Sequência recomendada para o Claude

1. Preservar a base e conferir estado do Git antes de editar.
2. Acessar o Chrome já autenticado, sessão Bianca, e extrair os textos/anexos da conversa de Isabela. Não repetir pedido de senha ou de login por presumir sessão desconectada.
3. Montar catálogo e biografia com os textos reais, mantendo o modelo solicitado da Cristiana e a identidade da Isabela.
4. Conferir eventual quarto vídeo e completar legendas/transcrição dos depoimentos.
5. Corrigir os dois descritores srcset pendentes.
6. Subir as versões selecionadas e posters para Supabase pelo acesso autorizado, sem importar chaves de produção para o PC; configurar URLs públicas e testar reprodução manual e carga inicial.
7. Completar FAQ, Open Graph e URL definitiva com dados verificados.
8. Testar as mudanças finais em desktop/celular, revisar novamente o conteúdo adicionado e preparar PR. Merge somente com OK do Maxwel; não publicar nem enviar mensagens para a cliente sem autorização.

## Limite do trabalho realizado

Este briefing entrega todas as análises efetivamente feitas e a localização dos materiais. Não substitui os textos da conversa ainda não extraídos. Não há confirmação de quarto vídeo, aprovação da cliente, upload, produção, PR ou merge nesta execução.
