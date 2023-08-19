document.getElementById("myButton").addEventListener("click", changeText);

function changeText() {
  const button = document.getElementById("myButton");
  if (button.textContent === "Click Me") {
    button.textContent = "Clicked";
  } else if (button.textContent === "Clicked") {
    button.textContent = "Click Me";
  }
}
