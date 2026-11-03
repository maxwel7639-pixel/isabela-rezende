# Site Isabela Rezende

Análise iniciada em 02/11/2026. Implementação autorizada pelo Maxwel nesta conversa. Merge depende de aprovação dele.

## Tarefas e critérios de conclusão

- [x] Atualizar e consultar cérebro disponível no PC (`C:/Maxwel/cerebri-claude`). O caminho informado `cerebri-Codex` não existe neste PC.
- [x] Inventariar e inspecionar as 10 imagens do ZIP; não contém textos ou vídeos.
- [x] Localizar código próprio de referência: `maxwel7639-pixel/site-cristiana-stringhi`.
- [x] Consultar perfil público da Isabela.
- [ ] Ler conversa de Isabela com Bianca no WA-AKG e baixar anexos de texto.
- [ ] Analisar os três Reels enviados e verificar se existe um quarto vídeo na conversa.
- [ ] Adaptar o modelo da Cristiana aos textos e imagens reais da Isabela.
- [ ] Preparar vídeos no Supabase, com carregamento sob demanda e sem MP4 no repositório.
- [ ] Testar em localhost em celular e desktop.
- [ ] Revisão independente de código 1 e correções.
- [ ] Revisão independente de código 2 e correções.
- [ ] Entregar prévia local e PR para aprovação, sem merge automático.

## Fontes

- ZIP: `C:/Users/manoe/Downloads/WhatsApp  isabela.zip`. Dez JPEGs, total descompactado 1.321.318 bytes. Originais, inventário e contact sheet em `C:/Maxwel/isabela-insumos` (fora do repositório).
- Instagram: https://www.instagram.com/terapiaholistica_isarezende/
- Referência: https://cristianastringhi.com.br e https://github.com/maxwel7639-pixel/site-cristiana-stringhi
- Reels: https://www.instagram.com/reel/DRdR3LiDVD_/ ; https://www.instagram.com/reel/DQ7oodrj3k0/ ; https://www.instagram.com/reel/DQoexbLjazm/

## Dados verificados no perfil público

Nome exibido: Isabela Rezende, Terapias Holística, Acupuntura, Constelação. Bio informa sete anos e atendimento on-line e presencial. Contato publicado: https://wa.me/5537998761478 . Destaques visíveis: Mesa Radionica, Constelação, Massagem, Acupuntura, Lojinha, Auriculo, Aromaterapia, Consultoria, Reiki e Florais. Não transformar automaticamente cada destaque em serviço atual: priorizar textos enviados pela cliente.

Não reproduzir promessas de cura ou superioridade a atendimento médico. Não inventar avaliações, formação, preços, endereço ou depoimentos. Fotos específicas de pacientes devem manter contexto de atendimento.

## Vídeos

Referência utiliza URLs públicas de Supabase Storage, `controls`, `poster` e `preload="none"`. Isso evita baixar os vídeos na carga inicial; hospedagem externa sozinha não resolve o peso sem controlar o carregamento. Não reutilizar bucket nem vídeos da Cristiana para Isabela. Não ler `.env` ou solicitar chaves de produção.

## Acesso pendente

WA-AKG acessível, porém exige login na sessão de navegador desta tarefa. Conector do navegador indisponível; fallback via agent-browser com sessão própria e janela visível. Login solicitado ao Maxwel, sem solicitar senha no chat. Textos e anexos ainda não foram lidos.
