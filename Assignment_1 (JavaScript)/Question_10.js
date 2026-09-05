// Question 10: Write a function that destructures an object to extract values and returns a formatted string.
// Input: {name: 'John', age: 25}  ->  Output: 'John is 25 years old'

const person = { name: 'John', age: 25 };

function formatPerson(obj) {
  const { name, age } = obj; // destructuring the object
  return `${name} is ${age} years old`;
}

console.log(formatPerson(person));
