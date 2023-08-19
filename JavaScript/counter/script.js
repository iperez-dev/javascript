//////////////////////////////////////////////////////

const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const countText = document.getElementById("count");

//decrement
decrementBtn.addEventListener("click", decrement);

function decrement() {
  countText.innerHTML--;
}

incrementBtn.addEventListener("click", increment);
function increment() {
  countText.innerHTML++;
}
