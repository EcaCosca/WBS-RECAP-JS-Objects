// Creating an array containing numbers 1 through 5
const arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Creating a new array `newArr` with elements: `arr`, 6, and 7
let newArr = [arr, 6, 7];
console.log(newArr); // Output: [[1, 2, 3, 4, 5], 6, 7]

// Creating two arrays `numbersOne` and `numbersTwo`
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// Using the spread operator to combine elements from `numbersOne` and `numbersTwo` into `numbersCombined`
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined); // Output: [1, 2, 3, 4, 5, 6]

// Creating an array `literallyNumbersCombined` with nested arrays
const literallyNumbersCombined = [1, 2, 3, [4, 5, 6]];
console.log(literallyNumbersCombined); // Output: [1, 2, 3, [4, 5, 6]]

// Creating arrays `alphabet` and `numbers`
const alphabet = ["a", "b", "c", "d", "e"];
const numbers = [1, 2, 3, 4, 5, 6];

// Destructuring assignment: extracting elements `a`, `c`, and `rest` from `alphabet`
const [a, , c, ...rest] = alphabet;
console.log(a); // Output: "a"
console.log(c); // Output: "c"
console.log(rest); // Output: ["d", "e"]

// Creating a new array `newArr` by spreading `numbers` and adding `a` to it
const newNewArr = [...numbers, a];
console.log(newNewArr); // Output: [1, 2, 3, 4, 5, 6, "a"]

// Creating objects `fiatCar` and `teslaCar` using object literals and spread operator
const fiatCar = {
  type: "Fiat",
  model: "500",
  color: "white",
  weight: 850,
  factory: {
    country: "DE",
    city: "Berlin"
  },
  made: 1965
};

const teslaCar = {
  ...fiatCar, // Spread operator to inherit properties from `fiatCar`
  type: "Tesla", // Overriding `type` property in `fiatCar`
  model: "S", // Overriding `model` property in `fiatCar`
  color: "grey", // Overriding `color` property in `fiatCar`
  weight: 1000, // Overriding `weight` property in `fiatCar`
  made: 2016 // Overriding `made` property in `fiatCar`
};

// Extracting keys and values of `fiatCar` object using Object.keys() and Object.values()
let keys = Object.keys(fiatCar); // Output: ["type", "model", "color", "weight", "factory", "made"]
let values = Object.values(fiatCar); // Output: ["Fiat", "500", "white", 850, { country: "DE", city: "Berlin" }, 1965]
