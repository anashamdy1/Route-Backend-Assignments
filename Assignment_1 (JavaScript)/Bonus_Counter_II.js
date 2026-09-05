// ===============================================
// Bonus: Counter II (LeetCode 2665)
// https://leetcode.com/problems/counter-ii/
// ===============================================
//
// Problem:
// Write a function createCounter. It should accept an initial integer init.
// It should return an object with three functions:
//   - increment(): increases the current value by one and returns it.
//   - decrement(): reduces the current value by one and returns it.
//   - reset(): sets the current value to init and returns it.
//
// Example 1:
//   Input: init = 5, calls = ["increment","reset","decrement"]
//   Output: [6,5,4]
//
// Example 2:
//   Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
//   Output: [1,2,1,0,0]
//
// ===============================================

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentValue = init; // current value stored in the closure

  return {
    increment: function () {
      currentValue += 1;
      return currentValue;
    },
    decrement: function () {
      currentValue -= 1;
      return currentValue;
    },
    reset: function () {
      currentValue = init;
      return currentValue;
    },
  };
};

// ===============================================
// Test Cases
// ===============================================

// Test 1: init = 5
const counter1 = createCounter(5);
console.log(counter1.increment()); // 6
console.log(counter1.reset());     // 5
console.log(counter1.decrement()); // 4

console.log("---");

// Test 2: init = 0
const counter2 = createCounter(0);
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.reset());     // 0
console.log(counter2.reset());     // 0
