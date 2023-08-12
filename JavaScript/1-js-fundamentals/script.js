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
- function
- loop
- array 
- object

- Objects are a collection of variables and functions
- Objects variables are called properties
- Objects functions are called methods
- Objects represent the attributes and behaviors of something used in a program
- Dot notation is used to add properties and methods
- Key : Value -> Pair


PROPERTIES
let stopwatch = {}
stopwatch.currentTime = 12

METHODS
let stopwatch = {}
stopwatch.tellTime = function(time){
    console.log(`The current time is ${time}. )
}
stopwatch.tellTime(stopwatch.currentTime)





Ex1
LITERAL NOTATION
let phone = {}

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
};



const person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log("Hello, my name is " + this.name + ".");
  }
};

person.sayHello(); // Output: "Hello, my name is John."


CONSTRUCTORS
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


PROTOTYPAL INHERITANCE
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
*/

// Ex2: Calculate and print the sum of even numbers from 1 to 10.

// Write a function that takes the width and height of a rectangle as parameters and returns the area.
