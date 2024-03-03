//1. Write a function that can take in any number of arguments, and returns the sum of all of the arguments

function sumOfAll() {
  return [...arguments].reduce((acc, current) => acc + current, 0);
}

console.log(sumOfAll(3, 4, 5));
console.log(sumOfAll(7, 8, 9, 10));

//2. Write a function that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.

function sumOfNumbersOnly() {
  return [...arguments]
    .filter((arg) => typeof arg === "number")
    .reduce((acc, current) => acc + current, 0);
}

console.log(sumOfNumbersOnly(3, "four", 5, "seven"));
console.log(sumOfNumbersOnly(4, 5, "seven", "eight"));

//3. Write a function that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).

function combineArrays(array1, array2) {
  return [...array1, ...array2];
}

const arrayA = [1, 2, 3, 4];
const arrayB = [5, 6, 7];
console.log(combineArrays(arrayA, arrayB));

//4. Write a function that takes in any amount of arguments, and returns the sum of every other argument

function sumOfEveryOther() {
  return [...arguments]
    .filter((_, index) => index % 2 === 0)
    .reduce((acc, current) => acc + current, 0);
}

console.log(sumOfEveryOther(1, 2, 3, 4, 5));

//5. Write a function that can take in any number of arguments, and returns an array of only the unique arguments.

function uniqueArguments() {
  return [...new Set([...arguments])];
}

console.log(uniqueArguments(3, 4, 5, 4, 5, 7, 3));

//6. Write a function that takes in any number of arrays as arguments and combines all of them into one array.

function combineMultipleArrays(...arrays) {
  return [].concat(...arrays);
}

const arrayC = [8, 9, 10];
console.log(combineMultipleArrays(arrayA, arrayB, arrayC));
