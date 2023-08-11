document.getElementById("btn_quote").addEventListener("click", genQuote);
const quote = document.getElementById("quote");
const author = document.getElementById("author");

function genQuote() {
  let quotes = {
    " Jules Renard":
      "The truly free man is the one who can turn down an invitation to dinner without giving an excuse.",
    " Albert Einstein":
      "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.",
    "Lana Del Rey": `“Who are you?
        Are you in touch with all of your darkest fantasies?
        Have you created a life for yourself where you can experience them?
        I have. I am fucking crazy.
        But I am free.”`,
    "Alysha Speer": `You never really know what's coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.`,
    "Aaron Lauritsen": `The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.`,
  };
  let authors = Object.keys(quotes);
  let randomAuthor = authors[Math.floor(Math.random() * authors.length)];

  let randomQuote = quotes[randomAuthor];

  quote.innerText = randomQuote;
  author.innerText = randomAuthor;
}
