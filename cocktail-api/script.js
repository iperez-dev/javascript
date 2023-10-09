document.getElementById("btn").addEventListener("click", showDrink);

function showDrink() {
  const title = document.getElementById("title");
  const image = document.getElementById("image");
  const instructions = document.getElementById("instructions");

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      console.log(data);
      title.innerText = data.drinks[0].strDrink;
      image.src = data.drinks[0].strDrinkThumb;
      instructions.innerText = data.drinks[0].strInstructions;
    })

    .catch((err) => {
      console.log("error ${err");
    });
}
