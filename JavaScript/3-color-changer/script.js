document.getElementById("btn").addEventListener("click", changeColor);
let index = 0;

function changeColor() {
  let colors = ["green", "red", "blue", "green", "orange", "purple"];

  document.getElementsByTagName("body")[0].style.background = colors[index++];
}
