// Pseudo-code
//normal < 25
//overweigth 25 - 29
//obese > 30
//grab the values from the inputs from the DOM

const btn = document.getElementById("btn");
const output = document.getElementById("output");

//When btn is clicked -> run function calcBmi
//use BMI formula | weight / (height * height)

btn.addEventListener("click", calcBmi);

function calcBmi() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  let bmi = weight / (height * height);

  if (bmi < 25) {
    output.innerHTML = `Tu BMI es ${bmi}, Your are good to go, comete un pan duro`;
  } else if (bmi >= 25 && bmi <= 29) {
    output.innerHTML = `Tu BMI es ${bmi}, Corre al gym of cierra la boca`;
  } else {
    output.innerHTML = `Tu BMI es ${bmi}, Estas jodio`;
  }
}
