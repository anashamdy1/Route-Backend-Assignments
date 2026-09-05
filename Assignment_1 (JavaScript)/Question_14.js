// Question 14: Write a function that takes an object and returns an array containing only its keys.
// Input: {name: "John", age: 30}  ->  Output: ["name", "age"]

function getKeys(obj) {
  return Object.keys(obj);
}

const user = { name: "John", age: 30 };

console.log(getKeys(user));
