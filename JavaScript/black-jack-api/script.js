document.getElementById("ask-btn1").addEventListener("click", showCard1);
document.getElementById("ask-btn2").addEventListener("click", showCard2);

function showCard1() {
  fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      console.log(data);
      // loop
      document.getElementById("display-card1").src = data.cards[0].image;
      document.getElementById("display-card12").src;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}
function showCard2() {
  fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      console.log(data);
      // loop
      // .map((card) => +card)
      document.getElementById("display-card2").src = data.cards[0].image;
      document.getElementById("display-card22").src;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}
