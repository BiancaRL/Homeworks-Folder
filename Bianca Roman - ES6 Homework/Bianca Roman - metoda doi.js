//1. Sum of All Arguments (Folosind Arrow Functions si reduce):

const sumOfAll = (...args) => args.reduce((acc, current) => acc + current, 0);

console.log(sumOfAll(2, 5, 1, 3, 4));

//2. Sum of Numbers Only  (Folosind Arrow Functions și isNaN):

const sumOfNumbersOnly = (...args) =>
  args.filter((arg) => !isNaN(arg)).reduce((acc, current) => acc + current, 0);

console.log(sumOfNumbersOnly(3, "four", 7, "eight", 9));

//3. Combine Two Arrays  (Folosind Arrow Functions și Spread Operator):

const combineArrays = (array1, array2) => [...array1, ...array2];

const arrayA = [1, 2, 3, 4];
const arrayB = [5, 6, 7];
console.log(combineArrays(arrayA, arrayB));

//4. Sum of Every Other Argument  (Folosind Arrow Functions și reduce cu un index):

const sumOfEveryOther = (...args) =>
  args.reduce(
    (acc, current, index) => (index % 2 === 0 ? acc + current : acc),
    0
  );

console.log(sumOfEveryOther(1, 2, 3, 4, 5));

//5. Unique Arguments  (Folosind Arrow Functions, Spread Operator și Set):

const uniqueArguments = (...args) => [...new Set(args)];

console.log(uniqueArguments(3, 4, 5, 3, 4, 5, 1));

//6. Combine Multiple Arrays (Folosind Arrow Functions, Spread Operator și concat):

const combineMultipleArrays = (...arrays) => [].concat(...arrays);

const arrayC = [8, 9 ,10];
console.log(combineMultipleArrays(arrayA, arrayB, arrayC));
