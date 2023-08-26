//API -> Application Programming Interface
//JSON -> JavaScript Object Notation
// document.querySelector("img").src = data.message;
// DOG.CEO API

fetch(`https://dog.ceo/api/breed/boxer/images/random`)
  .then((res) => res.json()) //parse response as JSON
  .then((data) => {
    console.log(data);
  })

  .catch((err) => {
    console.log("error ${err");
  });
