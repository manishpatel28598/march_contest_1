const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const countDisplay = document.getElementById("count-display");
const clearButton = document.getElementById("clear");
const errorMessage = document.getElementById("error-message");
// const btncontainer = document.getElementsByClassName("btn-container");

let count = 0;

decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    btncontainer.innerHTML = `Your Current Count is : ${count}`;
  } else {
    errorMessage.style.display = "block";
  }
});

incrementButton.addEventListener("click", () => {
  count++;
  countDisplay.innerHTML = `Your Current Count is : ${count}`;
  errorMessage.style.display = "none";
  clearButton.style.display = "right";
});

clearButton.addEventListener("click", () => {
  count = 0;
  countDisplay.innerHTML = `Your Current Count is : ${count}`;
  errorMessage.style.display = "none";
  clearButton.style.display = "none";
});

countDisplay.addEventListener("click", () => {
  errorMessage.style.display = "none";
});