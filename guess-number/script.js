const inputNum = document.getElementById("input_num");
const btn = document.getElementById("btn");
const restartBtn = document.getElementById("restart");
const prevGuess = document.getElementById("prev_guess_record");
const remainGuess = document.getElementById("guess_remain");
const result = document.getElementById("result");
const warn = document.getElementById("warn");

let totalGuess;
let previousGuesses;
let num;

initializeGame();

function initializeGame() {
  totalGuess = 10;
  previousGuesses = [];

  remainGuess.textContent = totalGuess;
  const max = 100;
  const min = 1;
  num = Math.floor(Math.random() * (max - min + 1)) + min;

  btn.addEventListener("click", handleButtonClick);
  restartBtn.addEventListener("click", restartGame);
}

function handleButtonClick() {
  const inputValue = +inputNum.value;

  if (isNaN(inputValue) || inputValue > 100 || inputValue < 1) {
    warn.textContent = "Warning: Don't become smart";
    totalGuess--;
    remainGuess.textContent = totalGuess;
    isGameOver();
  } else if (inputValue === num) {
    result.textContent = `You guessed the right number ${num}. Congrats 🥳`;
    disableGame();
  } else {
    warn.textContent = "";
    previousGuesses.push(inputValue);
    totalGuess--;
    remainGuess.textContent = totalGuess;
    prevGuess.textContent = previousGuesses.join(", ");
    isGameOver();
  }
}

function isGameOver() {
  if (totalGuess === 0) {
    result.textContent = `Game Over! Number is: ${num}`;
    disableGame();
    return true;
  }
}

function disableGame() {
  btn.disabled = true;
  restartBtn.style.display = "block";
}

function restartGame() {
  inputNum.value = "";
  previousGuesses = [];
  totalGuess = 10;
  result.textContent = "";
  prevGuess.textContent = "";
  remainGuess.textContent = totalGuess;
  btn.disabled = false;
  restartBtn.style.display = "none";
  warn.textContent = "";
}
