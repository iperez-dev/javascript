//P.R.E.P
//Parameters (thinks that are comming in to a problem)
//Return
//Example (test cases)
//Pseudo Code

//1-Brute Force (Function, Loop, Array, Objects) Strings and Arrays Methods Questions
//2-Data Structures and Algorithms
//replit.com
////////////////////////////////////////////////////////////////////////////////
//Ex1: Write a function that return true if the word is a palindrome
// .split("").reverse().join("");

//1-Brute Force (Function, Loop, Array, Objects)
//P word -> string, !empty string, no num, no caps, 1 word
//R return true || false
//E P
//  racecar -> true
//  bob -> true
//  tacos -> false

function isPalindrome(word) {
  //word -> reverse that word - split reverse join
  let reversedWord = word.split("").reverse().join("");
  //revWord === word
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("racecar"), "true");
console.log(isPalindrome("bob"), "true");
console.log(isPalindrome("tacos"), "false");
////////////////////////////////////////////////////////////////////////////////
// Question1 | ky8
//if else

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function. checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below. The function receives one parameter health which will always be a whole number between -10 and 10.

//function checkAlive(health) -> whole num b/ -10 and 10 (inclusive),
//return -> health > 0 = true, health < 0 = false, health = 0?,
//edge cases? -> is 0 false?

//examples
//pseudo-code
function checkAlive(health) {
  //check if player's health is greater than 0 or false if it is 0 or below
  if (health > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAlive(8), "true");
console.log(checkAlive(-4), "false");
console.log(checkAlive(0), "false");
////////////////////////////////////////////////////////////////////////////////
// Question2 | ky8
//x.filter((elem) => elem === "good").length;

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//function checkArr() -> check for 'good' and 'bad' ideas
//return ->'Publish!' if 1 || 2 'good', 'I smell a series' if 'good' > 2, 'Fail!' good === 0

//example
function checkArr(x) {
  //checks if there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
  const checkForTrue = x.filter((elem) => elem === "good").length;
  if (checkForTrue > 2) {
    return "I smell a series";
  } else if (checkForTrue === 1 || checkForTrue === 2) {
    return "Publish!";
  } else {
    return "Fail!";
  }
}

//test cases
console.log(
  checkArr(["good", "bad", "bad", "good", "good", "good"]),
  "I smell a series!"
);
console.log(
  checkArr(["good", "bad", "bad", "good", "good"]),
  "I smell a series!"
);
console.log(checkArr(["good", "bad", "bad", "good"]), "Publish!");
console.log(checkArr(["good", "bad", "bad"]), "Publish!");
console.log(checkArr(["bad", "bad"]), "Fail");

////////////////////////////////////////////////////////////////////////////////
// Question3 | ky8
/*Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string): 

Example: (Input1, Input2 -->Output)
"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"*/
////////////////////////////////////////////////////////////////////////////////
// Question4 | ky8
/*Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!*/
////////////////////////////////////////////////////////////////////////////////
// Question5 | ky8
/*I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that*/
////////////////////////////////////////////////////////////////////////////////
// Question6 | ky8
/*You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!*/
////////////////////////////////////////////////////////////////////////////////
// Question7 | ky8
/*I love you, a little , a lot, passionately ... not at all

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.*/
////////////////////////////////////////////////////////////////////////////////
// Question8 | ky8
/*Sort array by string length

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.of petals is always greater than 0.*/
////////////////////////////////////////////////////////////////////////////////

// Question9 | ky8 | Find Multiples of a Number
//.push(i)

/*In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.*/

//initialValue, finalValue -> num, positive, whole num, !0, initialValue < finalValue
//return -> list of numbers multiples of finalValue <= finalValue

function findMultiples(int, limit) {
  //store values in arrays
  let result = [];

  //iterate from init to limit, pushing num multiple of init -> for loop
  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
}

//test cases
console.log(findMultiples(2, 6), 2, 4, 6);
console.log(findMultiples(2, 4), 2, 4);
console.log(findMultiples(2, 10), 2, 4, 6, 8, 10);
////////////////////////////////////////////////////////////////////////////////
// Question10 | ky8 | Grasshopper - Debug sayHello

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. Concatenate the greetting with the visitor's name
// Example output:
// Hello, Mr. Spock

//function (name) ->
// function call ('Hello ${name}')

function greet(name) {
  console.log(`Hello ${name}`);
}

console.log(greet("Mr. Spock"), "Mr. Spock");
console.log(greet("Sofia"), "Sofia");
console.log(greet("Abdiel"), "Abdiel");
////////////////////////////////////////////////////////////////////////////////
// Question11 | ky8 | Powers of 2
//.push(Math.pow(2, i))

/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]*/

//function (n) -> non-negative integer, num
//returns -> list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive )

function listPowerOfTwo(n) {
  //list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive )
  let arrPowersOfTwo = [];
  for (let i = 0; i <= n; i++) {
    arrPowersOfTwo.push(Math.pow(2, i));
  }
  return arrPowersOfTwo;
}
console.log(listPowerOfTwo(4));
////////////////////////////////////////////////////////////////////////////////
// Question12 | ky8 | What is between?
//.push(i);

/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
For example:
a = 1
b = 4
--> [1, 2, 3, 4]*/

//function (num1, num2) -> num1 < num2
//return [] -> integres between num1 - num2 (inclusive)

function integesBetween(num1, num2) {
  //return an array of all integers between the input parameters, including them.
  let newArr = [];
  for (let i = num1; i <= num2; i++) {
    newArr.push(i);
  }
  return newArr;
}

//test cases
console.log(integesBetween(1, 4), 1, 2, 3, 4);
console.log(integesBetween(5, 7), 5, 6, 7);
console.log(integesBetween(2, 3), 2, 3);
////////////////////////////////////////////////////////////////////////////////
// Question13 | ky8 | Is it even?
//even or odd

/*In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.*/

//function(n) -> positive or negative, integers or floats
//return -> if even true - else false

//test case
function evenOrOdd(n) {
  //determine if the number passed is even (or not)
  return n % 2 === 0;
}
console.log(evenOrOdd(2), "true");
console.log(evenOrOdd(3), "false");
console.log(evenOrOdd(-5), "false");
console.log(evenOrOdd(-4), "true");
console.log(evenOrOdd(0), "true");
console.log(evenOrOdd(2.45), "false");
////////////////////////////////////////////////////////////////////////////////
// Question14 | ky5 | Simple Pig Latin
//.split(" ").map((item) => `${item.substr(1)}${item[0]}ay`).join(" ");

/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/

//function(str) -> words, empty string
//console.log(newStr) -> string

//test cases
function pigIt(str) {
  return str
    .split(" ")
    .map((item) => `${item.substr(1)}${item[0]}ay`)
    .join(" ");
}
console.log(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
console.log(pigIt("Hello world !"), "elloHay orldway !");
////////////////////////////////////////////////////////////////////////////////
