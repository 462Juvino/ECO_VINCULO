# Eco Vínculo — versão modular

Esta pasta contém a versão organizada do jogo e as novas técnicas assinatura. O HTML original enviado pelo usuário continua preservado em `/home/ubuntu/upload/index(1).html`.

## Como abrir

Abra `index.html` no navegador. Para hospedar no GitHub Pages, publique a pasta inteira mantendo a estrutura e a ordem dos scripts.

## Organização

| Arquivo | Conteúdo |
|---|---|
| `css/game.css` | Estilos do jogo. |
| `js/01-runtime-react.js` | Runtime React/ReactDOM incluído no jogo. |
| `js/02-icons-foundation.js` | Ícones, afinidades, catálogo inicial, golpes e fundamentos. |
| `js/03-creature-data.js` | Dados dos Pats, evoluções, técnicas e regras. |
| `js/04-creature-art-a.js` | Desenhos dos Pats — primeira parte. |
| `js/05-creature-art-b.js` | Desenhos dos Pats — segunda parte e suporte ao desenho híbrido. |
| `js/06-world-data.js` | Mapas, cavernas, NPCs e estado do jogo. |
| `js/07-ui-systems.js` | Sprites, inventário, loja e áudio. |
| `js/08-overworld.js` | Exploração, tela principal e menus de campo. |
| `js/09-battle.js` | Batalhas, animações de golpes, prévia e execução da Fusão. |
| `js/10-online-app.js` | Toasts, Firebase/online, Dex, título e inicialização. |
| `js/11-signature-attacks.js` | Golpe assinatura por criatura/evolução; catálogo e cores dos golpes híbridos; traços visuais dos dois pais na fusão. |
| `js/external-links.js` | Ajuste original para links externos. |

## Golpes assinatura e Fusão

`11-signature-attacks.js` percorre o catálogo já montado e acrescenta uma técnica com nome e animação assinatura para cada espécie/evolução. A animação usa a afinidade, a forma, o estágio e uma variação determinística por criatura. As técnicas existentes continuam no catálogo.

A Fusão segue os 15 arquétipos já definidos pelas combinações de afinidade. Cada híbrido recebe dois golpes com nomes e efeitos próprios. A arte mistura os traços visuais das criaturas escolhidas; a prévia mostra os dois pais e o resultado. Os dois golpes de Fusão mantêm potência 55 e precisão 100, como os dois golpes genéricos anteriores. A fórmula de dano e as regras de custo/uso da Fusão não foram alteradas.

## Como pedir alterações a outra IA

Envie `index.html` e o arquivo específico que deseja alterar. Para esta nova parte:

- Criar ou ajustar nomes, paletas, estilos e golpes assinatura: `js/11-signature-attacks.js`.
- Ajustar a sequência/efeito visual dos golpes na arena: `js/09-battle.js`.
- Ajustar dados de espécies, afinidades e golpes já existentes: `js/02-icons-foundation.js` ou `js/03-creature-data.js`.
- Ajustar desenhos dos Pats e elementos visuais da mistura: `js/04-creature-art-a.js` e `js/05-creature-art-b.js`.
- Ajustar cores, fontes ou espaçamentos: `css/game.css`.

Peça para preservar a ordem das tags `<script>` no `index.html` e manter todos os arquivos no repositório.
