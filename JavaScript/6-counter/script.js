const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const countSpan = document.getElementById("count");

let count = 0;

function updateCount() {
  countSpan.innerHTML = count;
}

decrementBtn.addEventListener("click", () => {
  count--;
  updateCount();
});

incrementBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

updateCount();
