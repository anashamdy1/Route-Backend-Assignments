// Question 11: Write a function that accepts multiple parameters (two or more) and returns their sum.
// Input: 1, 2, 3, 4, 5  ->  Output: 15

function sum(...numbers) { // rest operator to accept multiple parameters
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));
