//API -> Application Programming Interface
//JSON -> JavaScript Object Notation
// DOG.CEO API

fetch("https://dog.ceo/api/breed/husky/images/random")
  .then((res) => res.json()) //parse response as JSON
  .then((data) => {
    console.log(data);
    document.querySelector("img").src = data.message;
  })

  .catch((err) => {
    console.log("error ${err");
  });
