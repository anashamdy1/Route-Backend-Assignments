// Question 8: Write a function that checks if a number is divisible by 3 and 5.
// Input: 15  ->  Output: Divisible by both

function checkDivisibility(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  } else if (num % 3 === 0) {
    return "Divisible by 3 only";
  } else if (num % 5 === 0) {
    return "Divisible by 5 only";
  } else {
    return "Not divisible by 3 or 5";
  }
}

console.log(checkDivisibility(15));
