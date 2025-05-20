let countNumber = 0;

const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", function() {
  countNumber += 1;
  document.getElementById("count").textContent = countNumber;
});

const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", function() {
  countNumber -= 1;
  document.getElementById("count").textContent = countNumber;
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
  countNumber = 0;
  document.getElementById("count").textContent = countNumber;
});