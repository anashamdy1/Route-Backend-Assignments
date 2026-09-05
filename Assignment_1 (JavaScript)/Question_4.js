// Question 4: Create an array of numbers and return only the even numbers using filter method.
// Input: [1, 2, 3, 4, 5]  ->  Output: [2, 4]

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 