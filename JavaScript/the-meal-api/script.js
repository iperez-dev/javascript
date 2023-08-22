// Lookup full meal details by id
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

const searchButton = document.getElementById("searchButton");
const ingredientInput = document.getElementById("ingredientInput");
const recipeList = document.getElementById("recipeList");

searchButton.addEventListener("click", searchRecipes);

function searchRecipes() {
  const ingredient = ingredientInput.value.trim();

  if (ingredient !== "") {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        displayRecipes(data.meals);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
}

function displayRecipes(meals) {
  recipeList.innerHTML = "";

  if (meals) {
    meals.forEach((meal) => {
      const recipeDiv = document.createElement("div");
      recipeDiv.className = "recipe";
      recipeDiv.innerHTML = `
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            `;
      recipeList.appendChild(recipeDiv);
    });
  } else {
    recipeList.innerHTML = "<p>No recipes found for this ingredient.</p>";
  }
}
