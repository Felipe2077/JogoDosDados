let listaDados = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

function setDices() {
  let diceOneRandon = Math.floor(Math.random() * listaDados.length);
  let diceTwoRandon = Math.floor(Math.random() * listaDados.length);
  let diceOne = document
    .querySelector(".diceOne")
    .setAttribute("src", listaDados[diceOneRandon]);

  let diceTwo = document
    .querySelector(".diceTwo")
    .setAttribute("src", listaDados[diceTwoRandon]);

  checkWinner(diceOneRandon, diceTwoRandon);
}

function checkWinner(diceOne, diceTwo) {
  diceOneScore = 0;
  diceTwoScore = 0;
  aTie = 0;

  if (diceOne === diceTwo) {
    document.querySelector(".resultado").innerText = `Empate! 😐`;
  } else if (diceOne > diceTwo) {
    document.querySelector(
      ".resultado"
    ).innerHTML = `Vencedor: <span class="firstPlayer-result">Primeiro</span> Jogador 🥳`;
  } else if (diceTwo > diceOne) {
    document.querySelector(
      ".resultado"
    ).innerHTML = `Vencedor: <span class="secondPlayer-result">Segundo</span> Jogador 🥳`;
  }
}
