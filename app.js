const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Digit = document.querySelector("#p1Digit");
const p2Digit = document.querySelector("#p2Digit");

let p1Score = 0;

p1Button.addEventListener("click", function () {
  p1Score += 1;
  p2Digit.textContent = p1Score;
});
