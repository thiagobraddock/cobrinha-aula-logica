/*
  JOGO DA COBRINHA - AULA 1

  Nesta versão, deixamos apenas o começo do código pronto.
  O restante vira um checklist comentado para construir durante a aula.
*/

// Pegamos do HTML o canvas que será usado como tela do jogo.
const tela = document.getElementById("tela");

// Pegamos o contexto 2D, que é a ferramenta usada para desenhar no canvas.
const contexto = tela.getContext("2d");

/*
  CHECKLIST DA AULA

  1. Criar a constante tamanhoBloco
  Ideia: definir o tamanho de cada quadrado do jogo.

  2. Criar a constante quantidadeDeBlocos
  Ideia: descobrir quantos blocos cabem na largura da tela.

  3. Criar a constante velocidadeDoJogo
  Ideia: definir de quanto em quanto tempo a cobrinha vai se mover.

  4. Criar a variável cobrinha
  Ideia: guardar as partes do corpo em um array.

  5. Criar as variáveis direcaoX e direcaoY
  Ideia: guardar para onde a cobrinha está andando.

  6. Criar a função iniciarJogo
  Ideia: preparar o estado inicial antes do jogo começar.

  7. Criar a função criarCobrinhaInicial
  Ideia: montar a cobrinha com três partes.

  8. Criar a função desenharJogo
  Ideia: centralizar o desenho de tudo que aparece na tela.

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
