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
| `css/game.css` | Estilos do jogo, contraste e keyframes das novas coreografias. |
| `assets/audio/` | Trilhas originais do menu, batalhas comuns, chefes e PvP. |
| `js/01-runtime-react.js` | Runtime React/ReactDOM incluído no jogo. |
| `js/02-icons-foundation.js` | Ícones, afinidades, catálogo inicial, golpes e fundamentos. |
| `js/03-creature-data.js` | Dados dos Pets, evoluções, técnicas e regras. |
| `js/04-creature-art-a.js` | Desenhos dos Pets — primeira parte. |
| `js/05-creature-art-b.js` | Desenhos dos Pets — segunda parte e suporte ao desenho híbrido. |
| `js/06-world-data.js` | Mapas existentes, cavernas, NPCs, saves e estado do jogo. |
| `js/07-ui-systems.js` | Sprites, inventário, loja, áudio regional e jingle da mochila. |
| `js/audio-manager.js` | Música contextual, crossfade entre telas e cue de Ressonância. |
| `js/08-overworld.js` | Exploração, troca de mundos, telas e menus de campo. |
| `js/09-battle.js` | Batalhas, placas de status, coreografias, Fusão e sincronismo de impacto/HP. |
| `js/10-online-app.js` | Firebase/online, fila visual PvP, Dex com Modo de Ensaio, título e save. |
| `js/11-signature-attacks.js` | Golpes assinatura do catálogo e identidade visual das fusões. |
| `js/12-postgame-worlds.js` | Dados da nova saga, mapas, biomas, espécies, encontros, NPCs e chefes. |
| `js/13-postgame-creature-art.js` | Silhuetas exclusivas dos 13 Pets da saga, com anatomias e paletas próprias. |
| `js/14-attack-choreography.js` | Planejador/renderer compartilhado das coreografias por Pet e golpe. |
| `js/15-bond-resonance.js` | Regras compartilhadas de alinhamento, carga e bônus de Ressonância. |
| `js/16-safe-spawn.js` | Busca tiles caminháveis e distribui seguidores sem empilhá-los no spawn. |
| `tests/bond-resonance.test.js` | Testes automatizados do núcleo de alinhamento, carga e dano. |
| `tests/attack-choreography.test.js` | Testes do renderer das camadas visuais e do impacto sincronizado. |
| `tests/world-spawn.test.js` | Testes da recuperação de posição e da formação inicial dos seguidores. |
| `js/external-links.js` | Ajuste original para links externos. |

**Preserve a ordem dos `<script>` em `index.html`.** `12-postgame-worlds.js` deve vir depois de `11-signature-attacks.js`; `13-postgame-creature-art.js` deve vir depois dos dados do mundo; `14-attack-choreography.js`, `15-bond-resonance.js` e `16-safe-spawn.js` devem carregar antes dos módulos de batalha e da aplicação.

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

As faixas de batalha e menu repetem em loop. Na exploração continuam as trilhas regionais sintetizadas que o jogo já possuía. A mochila conserva o jingle sintetizado de abrir/fechar — não é uma faixa longa separada. O menu permanece em 34%; batalha comum em 11%, chefes em 13% e PvP em **4%**, bem abaixo dos efeitos e falas. Os caminhos relativos foram testados por HTTP.

## Golpes assinatura e Fusão

`11-signature-attacks.js` acrescenta uma técnica com nome e animação assinatura para cada espécie/evolução. A animação usa afinidade, forma, estágio e uma variação determinística por criatura. As técnicas existentes continuam no catálogo.

A Fusão mantém os 15 arquétipos pelas combinações de afinidade. Cada híbrido recebe dois golpes com nomes e efeitos próprios; a arte mistura traços dos dois pais. Os golpes conservam potência 55 e precisão 100, como os dois ataques genéricos que substituíram. A fórmula de dano e as regras de custo/uso da Fusão não foram alteradas.

## Modo de Ensaio no Dex

Abra os detalhes de um Pet no Dex e escolha **TESTAR GOLPES**. A prévia usa a mesma coreografia de batalha contra um alvo de treino, sem iniciar combate, causar dano, gastar usos, dar experiência ou alterar o save. A seleção fica em `js/10-online-app.js`; o planejador compartilhado está em `js/14-attack-choreography.js`.

Na batalha, as placas de status agora têm fundos distintos para o adversário e o Pet do jogador, com plaquetas de nome em texto escuro de alto contraste.

## Coreografias dos ataques

As animações foram reformuladas sem adicionar técnicas, mudar seus nomes, potência, precisão ou regras. A família visual varia de forma determinística por espécie, afinidade, estágio e golpe; combinações diferentes podem selecionar coreografias distintas e recebem tamanho, cor e silhueta adaptados ao atacante.

O repertório visual inclui investida do próprio Pet até o alvo, múltiplos projéteis, cuspe em sequência, pedras caindo do céu, espinhos/raízes que emergem do chão, onda que varre e colore a arena, feixe, ciclone orbital e eclipse elemental. Batalha normal, PvP e Ensaio do Dex usam o mesmo planejador. Nos combates locais, o HP só é descontado no impacto e o desmaio acontece depois; no PvP, cada cliente recebe os eventos do turno, reproduz a coreografia e segura a barra antiga até o impacto correspondente.

Edite o mapeamento e as formas visuais em `js/14-attack-choreography.js` e `css/game.css`; ajuste a integração de impacto/HP em `js/09-battle.js` e `js/10-online-app.js`. O volume da trilha PvP está em `js/audio-manager.js`.

### Camadas visuais acrescentadas

As coreografias agora incluem uma aura curta de preparação junto ao atacante, um halo cromático no alvo e partículas direcionais no impacto, com intensidade escalada por estágio e acerto crítico. Esses elementos usam a mesma marca temporal em que o combate local desconta HP; nenhum nome, golpe, dano, precisão ou regra foi alterado. O `prefers-reduced-motion` continua respeitado.

## Spawn seguro e compatibilidade de saves

Novos treinadores começam em **(8,10)**, na praça aberta da Vila Vínculo, próximos ao Professor Verdelho e fora das construções. O ponto legado (8,9) é reposicionado para a praça quando o save ainda está no início da aventura; qualquer save cujo tile atual tenha ficado bloqueado por uma construção ou obstáculo procura automaticamente o tile caminhável mais próximo. A correção atualiza somente posição/direção no save, sem migração de schema. Os seguidores também começam em tiles livres distintos, atrás do jogador, em vez de empilhados sobre o personagem.

## Arte exclusiva dos Pets da saga

Os 13 Pets da expansão agora passam por `js/13-postgame-creature-art.js` antes do fallback genérico. Cada espécie tem uma silhueta corporal própria: réptil de raízes e guardiã-arbórea; filhote de cristal e aríete; cerva aquática e cervo de coral; falcão e fênix tempestuosa; morcego lunar e touro de eclipse; ave de brasa, fênix solar e dragão primordial. As evoluções e o lendário ganham proporção maior e detalhes de estágio, com paleta, rosto, extremidades e adornos desenhados para a sua afinidade.

## Onde pedir mudanças a outra IA

Envie `index.html` **e** o módulo da funcionalidade que pretende alterar. Para uma tarefa que cruza vários sistemas, envie a pasta inteira ou o ZIP do projeto; o jogo não pode rodar com apenas um módulo isolado.

- Criar regiões, encontros, espécies ou chefes pós-jogo: `js/12-postgame-worlds.js`.
- Alterar rotas, movimentação ou telas dos mapas: `js/08-overworld.js`.
- Alterar a migração e os campos do save: `js/06-world-data.js` e, para vitórias de treinador, `js/10-online-app.js`.
- Alterar seleção de músicas: `js/audio-manager.js`.
- Ajustar o Modo de Ensaio do Dex: `js/10-online-app.js`; o visual dos projéteis fica em `js/09-battle.js` e `css/game.css`.
- Ajustar famílias, paletas, formas e ritmo das coreografias: `js/14-attack-choreography.js` e `css/game.css`.
- Ajustar cores/contraste das placas de batalha: `js/09-battle.js` e `css/game.css`.
- Alterar a síntese de áudio/jingle da mochila: `js/07-ui-systems.js`.
- Ajustar nomes e animações de golpes assinatura/fusão: `js/11-signature-attacks.js`.
- Ajustar a sequência visual na arena: `js/09-battle.js`.
- Redesenhar as 13 espécies da saga pós-jogo: `js/13-postgame-creature-art.js`.
- Alterar os dados das espécies existentes: `js/02-icons-foundation.js` ou `js/03-creature-data.js`.
- Ajustar desenhos: `js/04-creature-art-a.js` e `js/05-creature-art-b.js`.
- Ajustar estilos: `css/game.css`.

Peça à outra IA para preservar os saves existentes, os caminhos relativos, a ordem de carregamento dos scripts e os arquivos não relacionados à mudança.

## Ressonância do Vínculo e sinais de chefe

`js/15-bond-resonance.js` concentra as regras da mecânica e é carregado antes dos módulos de batalha. Golpes alinhados ao tipo do Pet ou à afinidade do jogador acumulam carga no HUD; ao completar 100%, o próximo golpe alinhado consome a carga e recebe **+18% de dano**, com um acorde curto e uma luz de impacto dedicados. A carga existe apenas durante a batalha local; não altera nem migra dados de save.

No PvP, a carga é armazenada por ID de participante dentro do estado sincronizado da partida, replicada nos dois clientes e exibida nos dois medidores. Partidas antigas sem esse campo começam em zero e recebem o campo na próxima resolução de turno. Os sinais prévios dos chefes avisam o nome e a afinidade do golpe antes da animação de ataque; esse aviso é informativo e não muda precisão, dano ou regras dos golpes.

Os testes não exigem dependências externas: `node --test tests/*.test.js`.

## Validação desta versão

- `node --check` passou em todos os módulos JavaScript.
- Teste em Chromium carregou a página sem erros de JavaScript e montou a tela do jogo.
- Galeria isolada em Chromium renderizou as 10 famílias: investida, rajada, cuspe, chuva de pedras, erupção, inundação, feixe, raízes, ciclone e eclipse.
- Revisão do fluxo e checagem sintática confirmaram HP local no impacto e fila PvP antes da atualização visual; não foi iniciada uma partida online real de ponta a ponta.
- Testes confirmaram os três mapas, seis biomas, encontros, as 13 espécies, os links de evolução e a migração dos dois tipos de save antigo.
- Os 13 Pets novos foram renderizados pelo dispatcher real de sprites, cada um com silhueta própria; nenhum cai mais no corpo genérico de gosma.
- Os quatro arquivos de áudio responderam com HTTP 200.
- O Modo de Ensaio foi testado no Chromium em tamanho móvel: abriu o Dex, exibiu os cinco golpes de Embercub e renderizou um projétil comum e o golpe assinatura sem iniciar batalha.
- Os volumes foram verificados em teste isolado: menu 34%, batalha comum 11%, chefe 13% e PvP 4%.
- Nesta integração, os testes de ressonância e spawn foram executados com `node --test tests/*.test.js`; `node --check` passou em todos os módulos, e as referências HTML/MP3 foram conferidas.
- Smoke test no navegador Chromium via HTTP confirmou carregamento da página, montagem do menu/mapa, runtime de coreografias, núcleo da Ressonância e gerenciador de áudio; a coreografia teste marcou corretamente a cena como ressonante.
- Em batalha local real no Chromium (Embercub Nv 5 contra Leafit Nv 4), quatro golpes alinhados preencheram a barra até 100%; o golpe seguinte consumiu a carga, aplicou o multiplicador e zerou o medidor, com HP atualizado após o impacto.
- Em desafio local real contra o Guardião do Bosque, o HUD mostrou “SINAL DO CHEFE” e anunciou “Leafit prepara Chicote Vinha (Flora)!” antes da resposta inimiga.
- A nova partida foi verificada na Vila em (8,10); o antigo início (8,9) migrou para a praça, e um save legado de QA dentro de uma casa foi recuperado para (4,2), preservando o Pet e atualizando `worldPositions.main`/`expHome`. Os seguidores também têm teste automatizado contra sobreposição e tiles bloqueados.
- O renderer da coreografia emitiu a aura de preparação, o halo e as partículas no teste de ensaio; o fluxo de dano e o PvP não foram alterados nesta atualização.
- Testes adicionais cobrem as camadas de preparação/impacto e o valor visual de dano/crítico, sem mudar o cálculo do combate.
- Não foi iniciada uma partida PvP real nesta rodada; nenhuma alteração foi feita no modo online durante esta etapa.
