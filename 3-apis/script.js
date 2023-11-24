/*
//API -> Application Programming Interface
//JSON -> JavaScript Object Notation

---------------------------------------------------
FETCH API
fetch(`https://dog.ceo/api/breed/boxer/images/random`)
  .then((res) => res.json()) //parse response as JSON
  .then((data) => {
    console.log(data);
  })

  .catch((err) => {
    console.log("error ${err");
  });

---------------------------------------------------
ASYNC/AWAY API
document.querySelector("button").addEventListener("click", displayInfo);

async function displayInfo() {
  const countryNames = document.querySelector("input").value;
  try {
    const res = await fetch(
      `https://express-template-server-api.up.railway.app/api/${countryNames}`
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

*/

