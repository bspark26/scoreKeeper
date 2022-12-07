const playerOne = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Digit"),
};
const playerTwo = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Digit"),
};

const resetBtn = document.querySelector("#reset");
const maxScore = document.querySelector("#maxScore");

let winningScore = 0;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

function reset() {
  isGameOver = false;
  for (let p of [playerOne, playerTwo]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

playerOne.button.addEventListener("click", function () {
  updateScore(playerOne, playerTwo);
});

playerTwo.button.addEventListener("click", function () {
  updateScore(playerTwo, playerOne);
});

maxScore.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener("click", reset);
