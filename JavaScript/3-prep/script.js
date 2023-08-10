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
//return arr.slice().sort((a, b) => a - b);
//return sortedArr.slice(1, -1).reduce((acc, num) => acc + num, 0);
//return Math.min(...array) - Math.max(...array) / The spread operator (...arr) is used to expand the elements of the array into individual arguments.
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//Question43 | ky8 | Sum without highest and lowest number

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// .sort().slice(1, arr.length ) | reduce((acc, num) => acc + num)

let arr = [3, 5, 7, 1, 9];

function sumArr(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const sum = sortedArr.slice(1, -1).reduce((acc, num) => acc + num, 0);

  return sum;
}

// test-cases
console.log(sumArr([3, 5, 7, 1, 9]), 15);
console.log(sumArr([1, 5, 9, 1, 9]), 15);
console.log(sumArr([9, 5, 9, 1, 9]), 23);
console.log(sumArr([9, 5, 9, 1, 10, 4, 3, 71, 54, 9]), 103);

////////////////////////////////////////////////////////////
