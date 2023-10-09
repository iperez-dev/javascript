let deckId = "";
let cardValue = 0;
//grabs deckID
fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
  .then((res) => res.json()) //parse response as JSON
  .then((data) => {
    console.log(data);
    deckId = data.deck_id; //gets id out of the api
  })

  .catch((err) => {
    console.log(`error ${err}`);
  });

document.getElementById("ask-btn1").addEventListener("click", showCard1);

// get one card from the API call
function showCard1() {
  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      console.log(data);
      // add a <img> element to the DOM
      let img = document.createElement("img");
      img.setAttribute("class", "display-card1");
      img.setAttribute("src", data.cards[0].image);
      document.getElementById("ImgContainer").appendChild(img);

      // gets the cards value
      let returnValue = data.cards[0].value;
      let num = 0; // Initialize num

      if (
        returnValue === "JACK" ||
        returnValue === "QUEEN" ||
        returnValue === "KING"
      ) {
        num = 10; //add value
      } else if (returnValue === "ACE") {
        num = 1; //add value
      } else {
        num = Number(data.cards[0].value); //add value
      }
      // Update the cardValue variable
      cardValue += num;

      // Update the displayed cardValue
      document.getElementById("displayValue").innerHTML = cardValue;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//skip
document.getElementById("skip-btn1").addEventListener("click", skipCard);

function skipCard() {
  const selectPlayer = document.getElementById("selectPlayer");
}

//determines winning or loosing
