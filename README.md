# Eco Vínculo — versão modular

Esta pasta contém o jogo dividido em módulos, com uma saga pós-jogo, novas espécies e trilhas musicais. O HTML original enviado permanece preservado em `/home/ubuntu/upload/index(1).html`.

## Como abrir e publicar no GitHub Pages

- Para testar localmente, abra `index.html` em um navegador. Se o navegador bloquear áudio ao abrir como arquivo, sirva a pasta por um servidor local.
- Para publicar, envie **o projeto inteiro**, preservando `index.html`, `css/`, `js/` e `assets/`. O arquivo `index.html` deve ficar na raiz que o GitHub Pages publica, ou na pasta escolhida nas configurações do Pages.
- Os caminhos de scripts e músicas são relativos ao `index.html`, portanto funcionam em páginas estáticas como GitHub Pages.
- Não envie somente `index.html`: ele referencia os outros arquivos e as trilhas MP3.

## Organização

| Arquivo/pasta | Conteúdo |
|---|---|
| `index.html` | Página que carrega o jogo e os módulos, na ordem necessária. |
| `css/game.css` | Estilos do jogo. |
| `assets/audio/` | Trilhas originais do menu, batalhas comuns, chefes e PvP. |
| `js/01-runtime-react.js` | Runtime React/ReactDOM incluído no jogo. |
| `js/02-icons-foundation.js` | Ícones, afinidades, catálogo inicial, golpes e fundamentos. |
| `js/03-creature-data.js` | Dados dos Pets, evoluções, técnicas e regras. |
| `js/04-creature-art-a.js` | Desenhos dos Pets — primeira parte. |
| `js/05-creature-art-b.js` | Desenhos dos Pets — segunda parte e suporte ao desenho híbrido. |
| `js/06-world-data.js` | Mapas existentes, cavernas, NPCs, saves e estado do jogo. |
| `js/07-ui-systems.js` | Sprites, inventário, loja, áudio regional e jingle da mochila. |
| `js/audio-manager.js` | Troca de música conforme tela, tipo de batalha e retorno à exploração. |
| `js/08-overworld.js` | Exploração, troca de mundos, telas e menus de campo. |
| `js/09-battle.js` | Batalhas, animações dos golpes, Fusão e transições de música. |
| `js/10-online-app.js` | Firebase/online, Dex, título, save e inicialização. |
| `js/11-signature-attacks.js` | Golpes assinatura do catálogo e identidade visual das fusões. |
| `js/12-postgame-worlds.js` | Dados da nova saga, mapas, biomas, espécies, encontros, NPCs e chefes. |
| `js/13-postgame-creature-art.js` | Silhuetas exclusivas dos 13 Pets da saga, com anatomias e paletas próprias. |
| `js/external-links.js` | Ajuste original para links externos. |

**Preserve a ordem dos `<script>` em `index.html`.** `12-postgame-worlds.js` deve vir depois de `11-signature-attacks.js`; `13-postgame-creature-art.js` deve vir depois dos dados do mundo e antes de a aplicação renderizar.

## Saga pós-jogo: Terras do Grande Eco

A campanha e os mapas existentes foram mantidos. Depois de vencer o Tatá Alfa, fale com a **Navegadora Cora**, no Arquipélago do Tatá, para iniciar a nova rota:

1. **Mata Ancestral e Ruínas do Sol** — biomas Mata Ancestral e Ruínas do Sol; guardiã Araci, níveis 57–60.
2. **Serra dos Ecos** — Serra Cristalina e Vale das Nuvens; titã Oruã, níveis 66–68.
3. **Delta Lunar** — Mangue Lunar e Abismo das Marés; guardião Aruanã, níveis 75–78.

Cada mundo tem mapa próprio de 64×44, encontros e personagens. Os guardiões vencidos abrem as rotas seguintes. Há **13 espécies novas**: seis Pets-base, seis evoluções e o lendário Eco Supremo. O Arquivista do Grande Eco entrega a recompensa final depois da vitória contra Aruanã.

O progresso usa `worldId` e posições salvas por mundo. Saves antigos são migrados automaticamente: saves do continente continuam no continente; saves que já estavam na expansão continuam no Arquipélago do Tatá. As vitórias de treinadores agora também são registradas no save, habilitando o desaparecimento de treinadores vencidos e os portões da nova saga.

## Música e áudio

- `menu-theme.mp3`: tema retrô do menu.
- `battle-common.mp3`: batalhas comuns, incluindo encontros selvagens e treinadores sem marcação de chefe.
- `battle-boss.mp3`: confrontos contra chefes e guardiões.
- `battle-pvp.mp3`: batalhas online entre jogadores.

As faixas de batalha e menu repetem em loop. Na exploração continuam as trilhas regionais sintetizadas que o jogo já possuía. A mochila conserva o jingle sintetizado de abrir/fechar — não é uma faixa longa separada. Os volumes das trilhas usam nível moderado e os caminhos relativos foram testados por HTTP.

## Golpes assinatura e Fusão

`11-signature-attacks.js` acrescenta uma técnica com nome e animação assinatura para cada espécie/evolução. A animação usa afinidade, forma, estágio e uma variação determinística por criatura. As técnicas existentes continuam no catálogo.

A Fusão mantém os 15 arquétipos pelas combinações de afinidade. Cada híbrido recebe dois golpes com nomes e efeitos próprios; a arte mistura traços dos dois pais. Os golpes conservam potência 55 e precisão 100, como os dois ataques genéricos que substituíram. A fórmula de dano e as regras de custo/uso da Fusão não foram alteradas.

## Arte exclusiva dos Pets da saga

Os 13 Pets da expansão agora passam por `js/13-postgame-creature-art.js` antes do fallback genérico. Cada espécie tem uma silhueta corporal própria: réptil de raízes e guardiã-arbórea; filhote de cristal e aríete; cerva aquática e cervo de coral; falcão e fênix tempestuosa; morcego lunar e touro de eclipse; ave de brasa, fênix solar e dragão primordial. As evoluções e o lendário ganham proporção maior e detalhes de estágio, com paleta, rosto, extremidades e adornos desenhados para a sua afinidade.

## Onde pedir mudanças a outra IA

Envie `index.html` **e** o módulo da funcionalidade que pretende alterar. Para uma tarefa que cruza vários sistemas, envie a pasta inteira ou o ZIP do projeto; o jogo não pode rodar com apenas um módulo isolado.

- Criar regiões, encontros, espécies ou chefes pós-jogo: `js/12-postgame-worlds.js`.
- Alterar rotas, movimentação ou telas dos mapas: `js/08-overworld.js`.
- Alterar a migração e os campos do save: `js/06-world-data.js` e, para vitórias de treinador, `js/10-online-app.js`.
- Alterar seleção de músicas: `js/audio-manager.js`.
- Alterar a síntese de áudio/jingle da mochila: `js/07-ui-systems.js`.
- Ajustar nomes e animações de golpes assinatura/fusão: `js/11-signature-attacks.js`.
- Ajustar a sequência visual na arena: `js/09-battle.js`.
- Redesenhar as 13 espécies da saga pós-jogo: `js/13-postgame-creature-art.js`.
- Alterar os dados das espécies existentes: `js/02-icons-foundation.js` ou `js/03-creature-data.js`.
- Ajustar desenhos: `js/04-creature-art-a.js` e `js/05-creature-art-b.js`.
- Ajustar estilos: `css/game.css`.

Peça à outra IA para preservar os saves existentes, os caminhos relativos, a ordem de carregamento dos scripts e os arquivos não relacionados à mudança.

## Validação desta versão

- `node --check` passou em todos os módulos JavaScript.
- Teste em Chromium carregou a página sem erros de JavaScript e montou a tela do jogo.
- Testes confirmaram os três mapas, seis biomas, encontros, as 13 espécies, os links de evolução e a migração dos dois tipos de save antigo.
- Os 13 Pets novos foram renderizados pelo dispatcher real de sprites, cada um com silhueta própria; nenhum cai mais no corpo genérico de gosma.
- Os quatro arquivos de áudio responderam com HTTP 200.
