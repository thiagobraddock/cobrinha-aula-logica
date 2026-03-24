/*
  JOGO DA COBRINHA - AULA 3

  Esta aula continua do ponto em que a Aula 2 terminou.
  Até a função iniciarJogo, o código é o mesmo da aula anterior.

  Nesta aula, o foco será:
  - detectar quando a cobrinha encosta na comida
  - gerar uma nova posição aleatória para a comida
  - fazer a cobrinha crescer ao comer
  - mostrar a pontuação na tela
*/

const tela = document.getElementById("tela");
const contexto = tela.getContext("2d");

const tamanhoBloco = 20;
const quantidadeDeBlocos = tela.width / tamanhoBloco;
const velocidadeDoJogo = 200;

let cobrinha = [];
let direcaoX = 1;
let direcaoY = 0;
let comida = { x: 5, y: 5 };

function criarCobrinhaInicial() {
  cobrinha = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ];
}

function limparTela() {
  contexto.clearRect(0, 0, tela.width, tela.height);
}

function desenharBloco(x, y) {
  contexto.fillRect(
    x * tamanhoBloco,
    y * tamanhoBloco,
    tamanhoBloco,
    tamanhoBloco,
  );
}

function desenharComida() {
  contexto.fillStyle = "#d32f2f";
  desenharBloco(comida.x, comida.y);
}

function desenharCobrinha() {
  contexto.fillStyle = "#2e7d32";

  for (let parte of cobrinha) {
    desenharBloco(parte.x, parte.y);
  }
}

function desenharJogo() {
  limparTela();
  desenharComida();
  desenharCobrinha();
}

function removerUltimaParte() {
  cobrinha.pop();
}

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

function mudarDirecao(evento) {
  if (evento.key === "ArrowUp" && direcaoY !== 1) {
    direcaoX = 0;
    direcaoY = -1;
  }

  if (evento.key === "ArrowDown" && direcaoY !== -1) {
    direcaoX = 0;
    direcaoY = 1;
  }

  if (evento.key === "ArrowLeft" && direcaoX !== 1) {
    direcaoX = -1;
    direcaoY = 0;
  }

  if (evento.key === "ArrowRight" && direcaoX !== -1) {
    direcaoX = 1;
    direcaoY = 0;
  }
}

function atualizarJogo() {
  moverCobrinha();
  desenharJogo();
}

function iniciarJogo() {
  criarCobrinhaInicial();
  desenharJogo();
}

// A PARTIR DAQUI COMECA A AULA 3
// Até aqui é o código da Aula 2. O fundo quadriculado é feito no CSS.

// 22. Criar a variável pontuacao
// Guardar quantas comidas a cobrinha já comeu. Começa em zero.
// Exemplo: let pontuacao = 0;

// 23. Criar a variável placar
// Pegar o elemento do HTML que vai mostrar a pontuação.
// Exemplo: const placar = document.getElementById("placar");

// 24. Criar a função comeuComida
// Comparar a posição da cabeça com a posição da comida.
// Se as duas estiverem no mesmo lugar, a cobrinha comeu!
// Exemplo:
// function comeuComida() {
//   const cabeca = cobrinha[0];
//   return cabeca.x === comida.x && cabeca.y === comida.y;
// }

// 25. Criar a função numeroAleatorio
// Gerar um número inteiro entre 0 e a quantidade de blocos do tabuleiro.
// Math.random() gera um número entre 0 e 1 (ex: 0.73)
// Math.floor() arredonda para baixo (ex: 14.6 vira 14)
// Exemplo:
// function numeroAleatorio() {
//   return Math.floor(Math.random() * quantidadeDeBlocos);
// }

// 26. Criar a função criarNovaComida
// Trocar a posição da comida para um ponto aleatório do tabuleiro.
// Exemplo:
// function criarNovaComida() {
//   comida = {
//     x: numeroAleatorio(),
//     y: numeroAleatorio(),
//   };
// }

// 27. Criar a função atualizarPlacar
// Mostrar a pontuação no HTML usando o elemento "placar".
// Exemplo:
// function atualizarPlacar() {
//   placar.textContent = "Pontuação: " + pontuacao;
// }

// 28. Alterar a função moverCobrinha para a cobrinha crescer
// A função moverCobrinha já existe lá em cima no código.
// Trocar o removerUltimaParte() por esta lógica:
//
// if (comeuComida()) {
//   criarNovaComida();
//   pontuacao = pontuacao + 1;
//   atualizarPlacar();
// } else {
//   removerUltimaParte();
// }

document.addEventListener("keydown", mudarDirecao);
iniciarJogo();
setInterval(atualizarJogo, velocidadeDoJogo);
