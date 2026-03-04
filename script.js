/*
  JOGO DA COBRINHA - AULA 1

  Esta versão representa o ponto em que a turma parou na Aula 1.
  O código foi desenvolvido até o item 8.

  O que já existe:
  - acesso ao canvas
  - configuração do tabuleiro
  - velocidade definida
  - variáveis principais
  - estado inicial da cobrinha
  - desenho da cobrinha na tela

  O restante fica para a Aula 2.
*/

// Pegamos do HTML o canvas que será usado como tela do jogo.
const tela = document.getElementById("tela");

// Pegamos o contexto 2D, que é a ferramenta usada para desenhar no canvas.
const contexto = tela.getContext("2d");

// 1. Tamanho de cada quadrado do jogo.
const tamanhoBloco = 20;

// 2. Quantidade de blocos que cabem na largura do canvas.
const quantidadeDeBlocos = tela.width / tamanhoBloco;

// 3. Velocidade do jogo.
// Ainda não vamos usar nesta aula, mas ela já fica definida.
const velocidadeDoJogo = 200;

// 4. Array com as partes da cobrinha.
let cobrinha = [];

// 5. Direção inicial da cobrinha.
// Também ainda não vamos usar neste momento, mas já deixamos preparado.
let direcaoX = 1;
let direcaoY = 0;

// 6. Função principal para montar o estado inicial do jogo.
function iniciarJogo() {
  criarCobrinhaInicial();
  desenharJogo();
}

// 7. Criamos a cobrinha com três partes.
function criarCobrinhaInicial() {
  cobrinha = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ];
}

/*
  8. Desenhar o jogo.

  Nesta etapa ainda não vamos separar em muitas funções.
  Por isso, o desenho já acontece todo aqui:
  - limpamos a tela
  - escolhemos a cor verde
  - percorremos o array da cobrinha
  - desenhamos cada parte com fillRect
*/
function desenharJogo() {
  contexto.clearRect(0, 0, tela.width, tela.height);
  contexto.fillStyle = "#2e7d32";

  for (let parte of cobrinha) {
    contexto.fillRect(
      parte.x * tamanhoBloco,
      parte.y * tamanhoBloco,
      tamanhoBloco,
      tamanhoBloco
    );
  }
}

// Chamamos a função inicial para já mostrar a cobrinha na tela.
iniciarJogo();

/*
  ITENS QUE FICAM PARA A AULA 2

  9. Criar a função limparTela
  Ideia: apagar o quadro anterior antes de desenhar o próximo.

  10. Criar a função desenharCobrinha
  Ideia: percorrer o array da cobrinha e desenhar cada parte.

  11. Criar a função desenharBloco
  Ideia: desenhar um único quadrado na posição x e y.

  12. Criar a função moverCobrinha
  Ideia: criar uma nova cabeça e remover a última parte.

  13. Criar a função removerUltimaParte
  Ideia: manter o tamanho da cobrinha enquanto ela ainda não cresce.

  14. Criar a função ajustarCabecaNasBordas
  Ideia: se sair de um lado, aparecer no outro.

  15. Criar a função mudarDirecao
  Ideia: usar o teclado para trocar os valores de direcaoX e direcaoY.

  16. Criar a função atualizarJogo
  Ideia: mover a cobrinha e depois redesenhar a tela.

  17. Ligar o teclado ao jogo
  Ideia: usar addEventListener para chamar mudarDirecao.

  18. Iniciar o jogo
  Ideia: chamar iniciarJogo e depois usar setInterval com atualizarJogo.
*/
