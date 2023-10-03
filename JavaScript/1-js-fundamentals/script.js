/* 
VARIABLES (let | const)
let num = 8
const = 8
Assigment vs declaration


cammelCase


DATA TYPES (Primitives | Non-Primitives)
1-Primitives
Number (8)
String ('Hello')
Boolean (true or false)
Undefined (has not been assigned a value | declared but not assigned)
Null ( has been assigned the value of null | intentional absence of a value.)

2-Non-Primitives
Functions
Loops
Arrays    
Objects


TEMPLATES LITERALS 
let fName = 'Ivan'
let lName = 'Perez'
`Hello, my name is ${fName} ${lName}`   `${}       ${}${}``${}`

`Hello, my name is Ivan Perez`


LOGICAL OPERATORS
x = 3 | assigment
3 == 8 false | value
3 === "3" false | value + type
3 != 8 true | is not
3 !== 3 false 
3 > 8 false | greater than
3 < 8 true | less than
3 >= 8 false | greater or equal
3 <= 8 true | less than or equal






CONDITIONAL SYNTAX (if | else if | else)
let loveCoding = false
let loveJavaScript = true

if(loveCoding === true){
    console.log('JavaScript is cool')
}

if(loveCoding === true){
    console.log('JavaScript is cool')
}else{
    console.log('I better find another job')
}

if(loveCoding === true && loveJavaScript === true){
    console.log('JavaScript is cool')
}else if ( loveCoding === true ){
    console.log(`I'm a web rockstar`)
}else{
    console.log('I better find another job')
}


MULTIPLE CONDITIONALS
&& and (loveCoding === true && loveJavaScript === true)
|| or  (loveCoding === true || loveJavaScript === true)

TERNARY OPERATORS

loveCoding === true ? 'JavaScript is cool' :  'I better find another job'


DOM MANIPULATION
document.querySelector('#select') 
document.getElementById('select')                                       //selects element by id
document.querySelector('.lastName')                                     //selects element by class
document.querySelectorAll('.name')                                      //selects all alement with the same class
document.querySelector('#button').addEventListener('click')             //adds an event listener to all elements with the id name
document.querySelector('#name').value                                   //grabs the value of the element with the id of name
document.querySelector('#name').innerText = `${input}`                   //adds text to the element with the id of name
document.querySelector('#name').style.display = "none"                  //(inline CSS) display = none to the element with the id of name
const name = document.querySelector('#name')                            //stores value of element with #name in variable name
name.classList.add("hidden")                                            //(external CSS) adds class hidden to name
name.classList.toggle("hidden")                                         //adds toggle property to name (on or off)

Ex:
document.querySelector('#nameBtn').addEventListener('click', run) 

function run(){
    const name = document.querySelector('#name').value 
    const displayName = document.querySelector('#displayName')

    displayName.innerText = `${name}`
}

-----------------------------------------------------------------------------------------------
FUNCTIONS
-----------------------------------------------------------------------------------------------
const name = 'Rocio'








function name(word){
    console.log(word)
}


name('Sofia')









1-Function Declaration
2-Function Call
3-Parameter
4-Arguments


DIFFERENCE B/
console.log()
alert()
return()


REGULAR FUNCTION (alert, console.log, return)
function name(parameters){
    function body
}
name(arguments)

Ex:1
function name(word){
    console.log(word)
}
name('hello')

Ex:2
function name(word1, word2){
    alert(`${word1} and ${word2}`)
}
name('hello', 'world')


ARROW FUNCTIONS
let name = (parameters) => function body
name(arguments)

Ex:1
let firstName = word => console.log(word)
firstName('hello')

Ex:2
let randomNum = () => Math.random
}
name('hello')

Ex:3
let name = (word1, word2) => alert(`${word1} and ${word2}`)
}
name('hello', 'world')

----------------------------------------------------------------------------------------------
Ex1: Calculate the Area of a Rectangle
Write a function that takes the width and height of a rectangle as parameters and returns the area.
function calculateRectangleArea(width, height) {
  return width * height;
}

const area = calculateRectangleArea(5, 10);
console.log(area);

Ex2: Convert Fahrenheit to Celsius
Write a function that takes a temperature in Fahrenheit as a parameter and returns the equivalent temperature in Celsius.
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

const celsiusTemp = fahrenheitToCelsius(68);
console.log(celsiusTemp);

Ex3: Check if a Number is Even
Write a function that takes a number as a parameter and returns true if it's even, and false otherwise.
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

-----------------------------------------------------------------------------------------------
LOOPS (for, while, do while)
-----------------------------------------------------------------------------------------------
DIFFERENCES B/ FOR, WHILE, DO-WHILE


FOR LOOP (The "for" loop is suitable when you know the number of iterations in advance or need more control over the loop execution.)

for ([initialExpression]; [condition]; [incrementExpression]){
    statement
}

1
2
3

Ex1:
for (let i = 1; i < 5; i++){
    console.log(i)
}

Ex2:
for (let i = 1; i < 5; i++){
    console.log('Hello World', i)
}


WHILE LOOP (The "while" loop checks the condition first before executing the code block. If the condition is false initially, the code block is skipped entirely.)
let condition = value

while(condition){
    statement
    increment
}

Ex1: iterations
let num = 1;

while (num < 50) {
  console.log(num);
  num++;
}


DO-WHILE LOOP (The "do-while" loop first executes the code block and then checks the condition. It guarantees that the code block executes at least once, even if the condition is initially false.)
let condition = value
do{
    statement
    increment
}
while(condition)

Ex1:
let num = 50
do{
    console.log(num)
    num++
}
while(num < 50)

----------------------------------------------------------------------------------------------
Ex1: Exercise 1: Print Numbers from 1 to 5
Use a loop to print the numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

Ex2: Calculate and print the sum of even numbers from 1 to 10.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

Ex3: Given a string, reverse the order of characters and print the reversed string.
const inputString = "hello";
let reversedString = "";

for (let i = inputString.length - 1; i >= 0; i--) {
  reversedString += inputString[i];
}
console.log(reversedString);

-----------------------------------------------------------------------------------------------
ARRAYS 
-----------------------------------------------------------------------------------------------
- Data Type (Non-Primitives)
- A data type to store ordered collections
- Arrays are 0 indexing [0, 1, 2, 3]
- Array have many methods to manage the order of elemets
- Can be created by constructors or literal notation
- Elements go inside an array
- Elements can be accessed by their index numbers
- Elements can be updated by their index position


CONSOLE THE ELEMENTS (LITERAL NOTATION)
let newArr = [] 
newArr = ['Zebra', , true, 21]


ADDING THINGS TO THE ARRAY
let newArr = ['Zebra', , true, 21]
newArr[1] = 'Bob'
console.log(newArr)


TAKING THINGS OUT
let newArr = ['Zebra', , true, 21]
console.log( newArr[3]) //21
console.log( newArr[0])


REASSIGNING ARRAYS
let cars = ['Honda', 'Toyota', 'Ford']
let num = [1, 2, 3]
cars = num 
console.log(cars) //1, 2, 3


ARRAY LENGTH (how many elements are inside an array .length property)
newArr = ['Zebra', , true, 21]
console.log( newArr.length)


ARRAY ITERATION (FOR LOOP)
let bestColors = ['green', 'blue', 'yellow', 'black']


for( i = 0; i < bestColors.length; i++){
    console.log( bestColors[i] )
}


ARRAY ITERATION (FOR EACH)
let bestColors = ['green', 'blue', 'yellow', 'black']

bestColors.forEach((elem,indx) => console.log(elem))


ARRAY METHODS 


-----------------------------------------------------------------------------------------------
Ex1: Reverse Array
Write a function that takes an array as a parameter and returns a new array with the elements reversed.
function reverseArray(arr) {
  return arr.reverse();
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);


Ex2: Filter Even Numbers
Write a function that takes an array of numbers as a parameter and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbersArray);
console.log(evenNumbers);


-----------------------------------------------------------------------------------------------
OBJECTS 
----------------------------------------------------------------------------------------------

- Objects are a collection of variables and functions
- Objects variables are called properties
- Objects functions are called methods
- Objects represent the attributes and behaviors of something used in a program
- Dot notation is used to add properties and methods
- Key : Value -> Pair

LITERAL NOTATION
let phone = {}


PROPERTIES
let stopwatch = {}
stopwatch.currentTime = 12

let stopwatch = {
  currentTime: 12
}

METHODS
let stopwatch = {}
stopwatch.tellTime = function(time){
    console.log(`The current time is ${time}. )
}
stopwatch.tellTime(stopwatch.currentTime)

PROPERTIES
phone.shape = 'square'
phone.brand = 'Apple'
phone.color = 'green'
phone.type = 'smartphone'

METHODS
phone.rings = function(sound){
    console.log(sound)
}
phone.rings(`RINGGGG`)

phone.light = function(flash){
    console.log(flash)
}
phone.light(`White Light`)

phone.tellBrand = function(brand){
    console.log(`The brand of my phone is ${brand}`)
}
phone.tellBrand(phone.brand)


NEW SYNTAX

const person = { 
  name: "John",
  age: 30,
  gender: "male",
  occupation: "engineer"
  city : 'Miami'
};

const person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log("Hello, my name is " + this.name + ".");
  }
};

person.sayHello(); // Output: "Hello, my name is John."

person.lastName = 'Perez'
person.age = 35
person.name


-----------------------------------------------------------------------
CONSTRUCTORS
-----------------------------------------------------------------------

function MakeCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function(){
        alert('BEEP BEEP`)
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors!`)
    }
}





let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)





function CallFriends(name, age, country, sayName){
  this.name = name
  this.age = age
  this.country = country
  this.sayName = function(){
    alert(`My name is this.name`)
  }
}




let rocio = new CallFriend('Rocio', 30, 'Cuba', sayName)
let susana = new CallFriend('Susana', 53, 'Congo', sayName)







-----------------------------------------------------------------------
CLASES
-----------------------------------------------------------------------

class CallFriends {
  constructor ( name, age, country){
    this.name = name;
    this.age = age;
    this.country = country;
  }
}

let rocio = new CallFriends ('Rocio', 30, 'Cuba');
let susana = new CallFriends ('Susana', 53, 'Congo');


-----------------------------------------------------------------------
PROTOTYPAL INHERITANCE
-----------------------------------------------------------------------

- A prototype is another object that is used as a fallback source of properties 

let teslaRoadster = new MakeCar('Testla', 'Roadster', 'Red', 2)
console.log( teslaRoadster.bluetooth) //undefined

MakeCar.prototype.bluetooth = true
console.log( teslaRoadster.bluettoth) //true

THE GLOBAL OBJECT PROTOTYPE
- Refers to the top-level object in the global scope, and it is accessible from anywhere in your code. The global object provides access to various built-in functions, objects, and properties.

----------------------------------------------------------------------------------------
Ex1: Create an Object and Access Properties
Create an object representing a person with 'name' and 'age' properties. Then, access and print the 'name' and 'age' of the person.
const person = {
  name: "John",
  age: 30
};

console.log(person.name); // Output: "John"
console.log(person.age); // Output: 30

Ex2: Add and Modify Object Properties
Create an object representing a car with 'make' and 'model' properties. Then, add a new 'year' property to the car and modify the 'model' property.


const car = {
  make: "Toyota",
  model: "Camry"
  year: 2022
};


car.year = 2022;
car.model = "Corolla";
console.log(car); // Output: { make: "Toyota", model: "Corolla", year: 2022 }



Ex:3 Calculate Object Property
Create an object representing a rectangle with 'width' and 'height' properties. Then, calculate and store the 'area' property by multiplying 'width' and 'height'.
const rectangle = {
  width: 5,
  height: 10
};
rectangle.area = rectangle.width * rectangle.height;

console.log(rectangle.area); // Output: 50


class Profession {
  constructor(name, salary, years) {
    this.name = name;
    this.salary = salary;
    this.years = years;
    this.description = function () {
      console.log(
        `${this.name} takes ${this.years} of study, and it pays $${this.salary} dollars`
      );
    };
  }
}

let teacher = new Profession("teacher", 60000, "4years");
let doctor = new Profession("doctor", 400000, "12years");
let softwareDeveloper = new Profession("softwareDeveloper", 107422, "2years");


==============================================================================================
Object Oriented Programming (OOP) 
==============================================================================================
Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of "objects," which can be thought of as instances of classes. This paradigm is based on four main principles, often referred to as the four pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism.
------------------------------------------------------------------------------------------
1 - Encapsulation (classes / properties and methods)
Definition: Encapsulation is the bundling of data (properties) and the methods that operate on the data into a single unit (object).
Why: It helps in hiding the internal details of how an object works and only exposes what is necessary. This makes the code more modular, secure, and easy to understand. 
------------------------------------------------------------------------------------------
2 - Abstraction (getter / _private properties)
Definition: Abstraction involves simplifying complex systems by modeling classes based on the essential properties and behaviors they possess.
Why: It provides a clear and simplified interface for interacting with objects, allowing users to focus on what an object does rather than how it achieves its functionality.

Getter methods:
Special type of method in a class that are used to retrieve the value of a specific property
------------------------------------------------------------------------------------------
3 - Inheritance (extent / super)
Definition: Inheritance is a mechanism that allows a new class (subclass or derived class) to inherit properties and behaviors from an existing class (superclass or base class).
Why: It promotes code reuse, allowing you to create a new class based on an existing class, inheriting its features and extending or modifying them as needed.
------------------------------------------------------------------------------------------
4 - Polymorphism
Definition: Polymorphism allows objects of different types to be treated as objects of a common type. It enables a single interface to represent different types of objects.
Why: It promotes flexibility and extensibility in the code. A function or method can work with objects of multiple types, making the code more versatile.
------------------------------------------------------------------------------------------

Ex1: Web Developer Career Paths
DATA
Name: Software Developer
General Description: Software developers design, build, and maintain software and applications.

Name: Front-End Developer
Description: A Front-End Developer specializes in building the client-side portion of web applications, focusing on user interface and user experience.
Core Technology: HTML, CSS, JavaScript, 
Frameworks: React, Angular, Vue
API Integration: REST APIs, GraphQL
Salary: $100.000

Name: Back-End Developer
Description: A Back-End Developer focuses on the server-side development, handling databases, server logic, and ensuring the smooth functioning of web applications.
Core Technology: Node, Python, PHP, C#, Ruby, APIs
Frameworks: Express.js (Node.js), Django (Python), Ruby on Rails (Ruby)
Database: MySQL, Postgre, MongoDB
Salary: $120.000

Name: Freelance Web Developer
Description: A Freelance Web Developer is a self-employed professional who offers web development services on a project basis
Core Technology: HTML, CSS, JavaScript, Wordpress, Wix, Webflow, SEO
Frameworks: React, Angular, Vue
Skills: Marketing, Project Management, Client Communication, Business Development
Salary: $70.000

Name: Mobile Developer
Description: A Mobile Developer creates applications for mobile devices, such as smartphones and tablets.
Core Technology: Java, Kotlin for Android; Swift, Objective-C for iOS
Frameworks: React Native, Flutter
Salary: $120,000

Name: IoT Developer
Description: An IoT Developer specializes in creating software for Internet of Things (IoT) devices, facilitating communication and data exchange among connected devices.
Core Technology: C, C++, Python 
Frameworks: IoT platforms (e.g., AWS IoT, Azure IoT)
Salary: $110,000

Ex1:
class Animal {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }

  makeSound() {}
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this._breed = breed;
  }

  makeSound() {
    return "Woof! Woof!";
  }
}

const myDog = new Dog("Buddy", 3, "Golden Retriever");

---------------------------------------------------------------------------------------------------
*Synchronous | Asynchronous | Callbacks | Promise | Async-Away
---------------------------------------------------------------------------------------------------
It's important to note that JavaScript is a single-threaded synchronous language, meaning it has a single call stack and one operation is executed at a time. 
Problem: It can only execute one function at a time

*1.Synchronous Functions
Synchronous functions run one after the other in the order they are called.

function synchronousFunction() {
    console.log("Start of the function");
    let result = 1 + 1;
    console.log("Result: " + result);
    console.log("End of the function");
}
synchronousFunction();

Start of the function
Result: 2
End of the function
After calling the function

*2.Asynchronous Functions
Asynchronous operations allow other code to continue running while the asynchronous task is being performed. If you need to perform asynchronous operations, such as making an API calls, you would use mechanisms like callbacks, promises, or async/await.

function asynchronousOperation() {
    console.log("Start of the asynchronous operation");
    setTimeout(function() {
        console.log("End of the asynchronous operation");
    }, 2000); // This will execute after a delay of 2000 milliseconds (2 seconds)
}
asynchronousOperation();

console.log("After calling the asynchronous operation");

Start of the asynchronous operation
After calling the asynchronous operation
End of the asynchronous operation (after a 2-second delay)

WEB APIs:
Since our JS is running in a browser, browsers extende the functionality of JS by using web APIs that enable us to do asyncrchronous operations
Common browers APIs: Document Object Model (DOM), FETCH, setTimeout(), setInterval()

---------------------------------------------------------------------------------------------------
RESPONSES
*1.Callbacks
Function that has been passed as an argument in a Higher Order Function
Higher Order Function: Function that takes another function as an argument

function houseOne(){
  console.log('Paper delivered to house 1')
}
function houseTwo(callback){
  setTimeout(() =>{
    console.log('Paper delivered to house 2')
    callback()
  }, 3000)
}
function houseThree(){
  console.log?('Paper delivered to house 3')
}

houseOne()
houseTwo(houseThree)

*2.Promise
An object that represent the evental completion or failure of an async operation and its value (and object that may have a value in the future). A promise can have three possible states (Pending, fulfilled, rejected)

const promise = new Promise((resolve, reject) => {
  const error = false
  if(!error){
    resolve('Promise has been fullfilled')
  }else{
    reject('Error: Operation has failed')
  }
})
console.log(promise)
promise
  .then(data => console.log(data))
  .catch(err => console.log(err))

.then() is an object method that runs after the promise resolves

Ex1: 
fetch("https:/dog.ceo/api/breeds/image/random")
  .then(res => res.json()) //parse response as JSON
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
  

Ex2:
function houseOne(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Paper deliverd to home 1')
    }, 1000)
  })
}
function houseTwo(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Paper deliverd to home 2')
    }, 5000)
  })
}
function houseThree(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Paper deliverd to home 3')
    }, 2000)
  })
}
houseOne()
  .then(data => console.log(data))
  .then(houseTwo)
  .then(data => console.log(data))
  .then(houseThree)
  .then(data => console.log(data))
  catch(err => console.log(err))

*Async/Await
Await waits for an async process to complete inside an Async function. Syntactic sugar on top of promises 

Ex1:
function houseOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Paper deliverd to home 1");
    }, 1000);
  });
}
function houseTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Paper deliverd to home 2");
    }, 5000);
  });
}
function houseThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Paper deliverd to home 3");
    }, 2000);
  });
}
async function getPaid() {
  const houseOneWait = await houseOne();
  const houseTwoWait = await houseTwo();
  const houseThreeWait = await houseThree();
  console.log(houseOneWait);
  console.log(houseTwoWait);
  console.log(houseThreeWait);
}

getPaid();

Ex2:
async function getDogPhoto(){
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await res.json()
  console.log(data)
}
getDogPhoto()
=================================================================================================
*BACKEND / Node.js
=================================================================================================
Node.js is a JavaScript environment that allows us to run JS in servers and local computers. Like brower's Web APIs, Node comes with libraries and collections of functions. Ex: http(network access), fs(file system access), npm(package manager)

Install Node.js (2:36)

*HTTP & FS
const http = require('http')
const fs = require ('fs')
http.createServer((req, res) => {
  fs.readFile('demofile.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
}).listen(8000)
*/
const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8000);
