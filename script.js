/*
  JOGO DA COBRINHA - AULA 1

  Esta versão representa o ponto em que a turma parou na Aula 1.
  O código foi desenvolvido até o item 14.

  O que já existe:
  - acesso ao canvas
  - configuração do tabuleiro
  - velocidade definida
  - variáveis principais
  - estado inicial da cobrinha
  - desenho da cobrinha na tela
  - funções de movimento
  - função para atravessar as bordas

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

// 8. Função principal para desenhar o jogo.
function desenharJogo() {
  limparTela();
  desenharCobrinha();
}

// 9. Apagar o desenho anterior antes de desenhar o próximo.
function limparTela() {
  contexto.clearRect(0, 0, tela.width, tela.height);
}

// 10. Percorrer o array da cobrinha e desenhar cada parte.
function desenharCobrinha() {
  contexto.fillStyle = "#2e7d32";

  for (let parte of cobrinha) {
    desenharBloco(parte.x, parte.y);
  }
}

// 11. Desenhar um único quadrado da cobrinha.
function desenharBloco(x, y) {
  contexto.fillRect(
    x * tamanhoBloco,
    y * tamanhoBloco,
    tamanhoBloco,
    tamanhoBloco
  );
}

// 12. Criar uma nova cabeça e mover a cobrinha para frente.
function moverCobrinha() {
  const cabecaAtual = cobrinha[0];

  const novaCabeca = {
    x: cabecaAtual.x + direcaoX,
    y: cabecaAtual.y + direcaoY,
  };

  ajustarCabecaNasBordas(novaCabeca);

  cobrinha.unshift(novaCabeca);
  removerUltimaParte();
}

// 13. Remover a última parte para manter o mesmo tamanho.
function removerUltimaParte() {
  cobrinha.pop();
}

// 14. Se sair de um lado, reaparecer no outro.
function ajustarCabecaNasBordas(cabeca) {
  if (cabeca.x >= quantidadeDeBlocos) {
    cabeca.x = 0;
  }

  if (cabeca.x < 0) {
    cabeca.x = quantidadeDeBlocos - 1;
  }

  if (cabeca.y >= quantidadeDeBlocos) {
    cabeca.y = 0;
  }

  if (cabeca.y < 0) {
    cabeca.y = quantidadeDeBlocos - 1;
  }
}

// Chamamos a função inicial para já mostrar a cobrinha na tela.
iniciarJogo();

/*
  ITENS QUE FICAM PARA A AULA 2

  15. Criar a função mudarDirecao
  Ideia: usar o teclado para trocar os valores de direcaoX e direcaoY.

  16. Criar a função atualizarJogo
  Ideia: mover a cobrinha e depois redesenhar a tela.

  17. Ligar o teclado ao jogo
  Ideia: usar addEventListener para chamar mudarDirecao.

  18. Iniciar o jogo
  Ideia: chamar iniciarJogo e depois usar setInterval com atualizarJogo.
*/
