const enterBtn = document
  .getElementById("button-enter")
  .addEventListener("click", getData);

const nextBtn = document
  .getElementById("button-next")
  .addEventListener("click", nextCard);

const previousBtn = document
  .getElementById("previousBtn")
  .addEventListener("click", previousCard);

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
      title.innerText = data.collection.items[1].data[0].keywords[0];
      image.src = data.collection.items[1].links[0].href;
      description.innerText = data.collection.items[1].data[0].description;
    })
    .catch((err) => {
      console.log("error ${err");
    });
}

let index = 0;
// cards carrousel
function nextCard() {
  let input = document.getElementById("input").value.trim();
  let title = document.querySelector("h2");
  let image = document.querySelector("img");
  let description = document.querySelector("p");

  fetch(`https://images-api.nasa.gov/search?description=${input}`)
    .then((res) => res.json()) //parse response as JSON\
    .then((data) => {
      console.log(data);
      index++; // Increment index
      title.innerText = data.collection.items[index].data[0].keywords[0];
      image.src = data.collection.items[index].links[0].href;
      description.innerText = data.collection.items[index].data[0].description;
    })
    .catch((err) => {
      console.log("error ${err");
    });
}

// cards carrousel
function previousCard() {
  let input = document.getElementById("input").value.trim();
  let title = document.querySelector("h2");
  let image = document.querySelector("img");
  let description = document.querySelector("p");

  fetch(`https://images-api.nasa.gov/search?description=${input}`)
    .then((res) => res.json()) //parse response as JSON\
    .then((data) => {
      console.log(data);
      index--; // Decrement index
      title.innerText = data.collection.items[index].data[0].keywords[0];
      image.src = data.collection.items[index].links[0].href;
      description.innerText = data.collection.items[index].data[0].description;
    })
    .catch((err) => {
      console.log("error ${err");
    });
}
