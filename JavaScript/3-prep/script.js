//P.R.E.P
//Parameters (thinks that are comming in to a problem)
//Return
//Example (test cases)
//Pseudo Code

//1-Brute Force (Function, Loop, Array, Objects)
//2-Strings and Arrays Methods Questions
//3-Data Structures and Algorithms
//replit.com
////////////////////////////////////////////////////////////////////////////////
//return newArr.split("").reverse().join("");
//return .split("").map((c) => c + c).join("");
//return x.filter((elem) => elem === "good").length;
//return String(Number(strNum1) + Number(strNum2));
//return newArr.push()
//return arr.reverse()
//return array.sort((a, b) => a.length - b.length);
//return for (let i = int; i <= limit; i += int) result.push(i);
//return `Hello ${name}`
//return arrPowersOfTwo.push(Math.pow(2, i));
//return n % 2 === 0;
//return .split(" ").map((item) => `${item.substr(1)}${item[0]}ay`).join(" ");
//return return str === str.toUpperCase()
//return Math.floor(Math.random(x) * 10)
//result newArr.push(Math.pow(2, i));
//return a.length < b.length ? a + b + a : b + a + b; //ternary operator (? is true)(: else)
//return Math.floor(n / 2);
//return let square = (n) => n * n;
//return string.toUpperCase();
//return arr.filter((elem, index) => index % 2 === 0))
//return Math.max(wait + on - cap, 0);
//return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false
//return stringToNum.parseInt('42')
//return Math.abs(dadYearsOld - 2 * sonYearsOld);
//return str.split("!").joint("");
//factor -> numbers that divide the given number without leaving a remainder ( the factors of 12 are 1, 2, 3, 4, 6, and 12)
//even   -> Even numbers are integers that are divisible by 2 without leaving a remainder. (2, 4, 6, 8...)
//odd    -> Integers that are not divisible by 2 without leaving a remainder. (1, 3, 5, 7, 9 ...)
//return arr.filter((num) => num % 2 !== 0);
//return arr.reduce((acc, curr) => acc + curr, 0);
////////////////////////////////////////////////////////////
// Question34 | ky8 | Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

const doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");

////////////////////////////////////////////////////////////
// Question40 | ky8 | Third Angle of a Triangle
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - (a + b);
}

////////////////////////////////////////////////////////////
// Question41 | ky8 | Remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function RemoveExclamationMarks(str) {
  return str.split("!").joint("");
}

function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}

////////////////////////////////////////////////////////////
// Question25 | ky8 | Removing Elements

// This function should test if the numbers in the array are even or odd. If they are odds, add them into a new array. Then sum all the numbers together to get one final value.

//filter((elem) => elem % 2 !== 0) | reduce((acc, num) => acc + num, 0)

function sumOfOddNumbers(arr) {
  const oddNumbers = arr.filter((num) => num % 2 !== 0);
  const sum = oddNumbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

////////////////////////////////////////////////////////////
