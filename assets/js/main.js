const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const numberEl = document.getElementById("number");

let score = 5;

function btnclick() {
  let inputval = Number(inputEl.value);
  const random = Math.floor(Math.random() * 10) + 1;
  if (inputval == 0) {
    alert("Enter The Number...😡");
  }
  if (random == inputval) {
    resultEl.textContent = "WIN";
    scoreEl.textContent = `SCORE : ${(score += 1)}`;
    numberEl.textContent = `My Number : ${random}`;
  } else {
    resultEl.textContent = "LOOSE";
    scoreEl.textContent = `SCORE : ${(score -= 1)}`;
    numberEl.textContent = `My Number : ${random}`;
  }
  if (score == 0) {
    alert("You Are Fail Try Again...🥺");
    location.reload();
  }
  if (score == 10) {
    alert("Congratulation You Win...🤓");
  }
}
