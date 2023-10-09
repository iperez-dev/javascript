const quote = [
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "The best way to predict the future is to create it.",
  "Your time is limited, don't waste it living someone else's life.",
  "It always seems impossible until it's done.",
  "In the garden of life, resilience is the most beautiful flower that never fades.",
  "Wisdom is the compass that guides us through the labyrinth of uncertainty.",
  "Stars shine not because of their perfection, but because of their persistent flicker in the darkest of skies.",
  "Embrace change as the sculptor of your better self, molding you with each twist of fate.",
  "Kindness is the language that echoes in the hearts of humanity, transcending all barriers.",
  "The pages of yesterday may be written, but the chapters of tomorrow are still ours to author.",
  "Happiness dances to the rhythm of gratitude, and its melody is found in the simplest of moments.",
  "The mirror of self-reflection shows us who we are, but our actions paint the masterpiece of who we can become.",
];
//Pseudo-code
//select btn-generate-quote -> .eventListener -> function randomQuote
document
  .getElementById("generateButton")
  .addEventListener("click", randomQuote);

//function randomQuote  Math.random() Math.floor -> generate a randomQuote -> innnerHTML id="quote" -> call function
function randomQuote() {
  const randomIndex = Math.floor(Math.random() * quote.length);
  const randomQuote = quote[randomIndex];
  document.getElementById("quote").innerHTML = randomQuote;
}
randomQuote();
