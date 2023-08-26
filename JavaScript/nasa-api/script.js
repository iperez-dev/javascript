const enterBtn = document
  .getElementById("button-enter")
  .addEventListener("click", getData);

const nextBtn = document
  .getElementById("button-next")
  .addEventListener("click", nextCard);

//fetch data from NASA API

function getData() {
  const input = document.getElementById("input").value.trim();
  const title = document.querySelector("h2");
  const image = document.querySelector("img");
  const description = document.querySelector("p");

  fetch(`https://images-api.nasa.gov/search?description=${input}`)
    .then((res) => res.json()) //parse response as JSON\
    .then((data) => {
      console.log(data);
      title.innerText = data.collection.items[3].data[0].keywords[0];
      image.src = data.collection.items[3].links[0].href;
      description.innerText = data.collection.items[3].data[0].description;
    })
    .catch((err) => {
      console.log("error ${err");
    });
}

// cards carrousel
function nextCard() {}
//pseudo-code
