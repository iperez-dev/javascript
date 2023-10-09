//API -> Application Programming Interface
//JSON -> JavaScript Object Notation
// document.querySelector("img").src = data.message;
// DOG.CEO API
//
/*
https://api-ninjas.com/

APIs Examples
1. Web Speech API:
Web Speech API can also be segregated as a utility API. The purpose of this API is to convert the set of Text into Speech. Users can select the text and the API will Read the text by user-defined voice. It uses different objects for instance it uses a speech recognition object to detect the speech and triggers a result through which it understands the user words and confidence level.

Learn More about this API at the Source Website.
(https://wicg.github.io/speech-api/)

2. Goverment Data
Data.gov doesn’t just catalog raw data, it also includes APIs from across government. You can browse the current catalog for APIs, but expect this listing to grow as agencies include more of their APIs as part of their data.json metadata in Project Open Data.

Learn More about this API at the Source Website.
(https://catalog.data.gov/dataset?q=-aapi+api+OR++res_format%3Aapi)

3. HERE mapping API
Quickly and easily integrate fresh maps and location features into your application. HERE Maps API for JavaScript brings interactivity and rapid customization into your application development, with HERE maps as the foundation. Explore a growing database of 58 million mapped roads and 5 million map changes per day.

Learn More about this API at the Source Website.
(https://developer.here.com/develop/javascript-api)

3. Master of linguistics
Programs dealing with user-generated content can score brownie points by offering an integrated translation service. A client for Twitter or Gab could, for example, translate English texts to Russian to make them easier to handle for that audience.

While "machine-based translation systems" are among the oldest research fields in IT, developing a workable machine translator by hand is difficult. Microsoft's Translation API recently was updated to version 3.0, and is a one-stop shop for all problems of babelese scope. In addition to performing translations between language pairs, the service can also be used to find out which language a specific text is in. You can then use this data to configure lesser APIs such as the spell checker.

Finally, idioms and individual words can also be sent into a dictionary query. The information returned is situation dependent — in some cases, Microsoft can even return dozens of idioms to help understanding.
(https://developer.here.com/develop/javascript-api)

4. Google Computer Vision API

Three computer vision offerings to meet you where you are
Vertex AI Vision
Vertex AI Vision is a fully managed end to end application development environment that lets you easily build, deploy and manage computer vision applications for your unique business needs. Vertex AI Vision includes Streams to ingest real-time video data, Applications that lets you create an application by combining various components and Vision warehouse to store model output and streaming data.

Custom ML models
Automate the training of your own custom machine learning models. Simply upload images and train custom image and video models with AutoML's easy-to-use graphical interface; optimize your models for accuracy, latency, and size; and export them to your application in the cloud or to an array of devices at the edge. Or develop your own custom models using Vertex AI.

Vision API
Vision API offers powerful pre-trained machine learning models through REST and RPC APIs. Assign labels to images and quickly classify them into millions of predefined categories. Detect objects, read printed and handwritten text, and build valuable metadata into your image catalog.

Learn More about this API at the Source Website.
(https://cloud.google.com/vision)


*/

fetch(`https://dog.ceo/api/breed/boxer/images/random`)
  .then((res) => res.json()) //parse response as JSON
  .then((data) => {
    console.log(data);
  })

  .catch((err) => {
    console.log("error ${err");
  });
