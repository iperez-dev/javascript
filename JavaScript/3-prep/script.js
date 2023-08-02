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
//return .split("").reverse().join("");
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

/////////////////////////////////////////////////////////////
// Question29 | ky8 | Parse nice int from char problem

/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/

//input -> function girlAge(x) ->
//return -> "x year old" (random num 0 <= x <= 9)
//possible sol -> random number between 0 and 9? | if else

//example
function girlAge(x) {
  let randomNum = Math.floor(Math.random(x) * 10);
  if (randomNum > 1) {
    return `${randomNum} years old`;
  } else {
    return `${randomNum} year old`;
  }
}

//test cases
console.log(girlAge(0));

/////////////////////////////////////////////////////////////
// Question30 | ky8 | Twice as old

/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/
