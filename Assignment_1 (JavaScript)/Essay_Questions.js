// ============================================================
// Assignment 1 - Part 2: Essay Questions (2.5 Grade)
// ============================================================

// ------------------------------------------------------------
// Q1: What is the difference between forEach and for...of?
//     When would you use each? (0.5 Grade)
// ------------------------------------------------------------

// forEach is a method that lives on arrays, while for...of is a real loop
// that works on anything iterable (arrays, strings, Maps, Sets...).
//
// The main practical differences from my experience:
// - You can't stop a forEach with break/continue, but for...of handles both fine.
// - forEach can't be used with async/await properly (it won't wait for the await),
//   but for...of works with await without any problem.
//
// Simple example:
//
// const numbers = [1, 2, 3, 4, 5];
//
// numbers.forEach((num) => console.log(num)); // forEach
//
// for (const num of numbers) {                // for...of
//   console.log(num);
// }
//
// When to use each one (my rule of thumb):
// - forEach: for a quick simple operation on every element, like logging
//   or a small update, when I don't need to stop the loop.
// - for...of: when I need break or continue, when I'm dealing with
//   async/await, or when I'm looping over something that's not an array
//   (like a string or a Map).

// ------------------------------------------------------------
// Q2: What is hoisting and what is the Temporal Dead Zone (TDZ)?
//     Explain with examples. (0.5 Grade)
// ------------------------------------------------------------

// Hoisting is a JavaScript behavior where variable and function
// declarations get moved to the top of their scope before the code runs.
//
// How each declaration behaves:
// - var: gets hoisted and initialized with undefined, so accessing it
//   early gives undefined (not an error).
// - function declarations: get hoisted completely (body included),
//   so you can call them before they are written.
// - let / const: they ARE hoisted, but they are NOT initialized.
//   Accessing them before their line throws a ReferenceError.
//
// Example:
//
// console.log(a);        // undefined (hoisted var)
// var a = 5;
//
// sayHello();            // "Hello!" (works before declaration)
// function sayHello() {
//   console.log("Hello!");
// }
//
// console.log(b);        // ReferenceError
// let b = 10;
//
// The Temporal Dead Zone (TDZ) is the period between the start of the
// scope and the actual line where the let/const variable is declared.
// The variable exists in memory during that time, but it's still not
// initialized, so any access to it throws a ReferenceError.
//
// Example:
//
// {
//   // TDZ for 'x' starts here ----
//   console.log(x);      // ReferenceError: Cannot access 'x' before initialization
//   // ---- TDZ ends here
//   let x = 10;
//   console.log(x);      // 10 - fine now
// }
//
// To sum it up: let and const are safer than var because instead of
// silently giving you undefined, they throw an error so you catch the
// bug immediately.

// ------------------------------------------------------------
// Q3: What are the main differences between == and ===? (0.5 Grade)
// ------------------------------------------------------------

// The main difference is type coercion.
//
// == (loose equality):
// - Compares values only, after converting their types to match.
// - This conversion can lead to surprising results.
//
// === (strict equality):
// - Compares both value AND type, with no conversion at all.
//
// Examples:
//
// // == with coercion
// 5 == "5";           // true  (string gets converted to a number)
// 0 == false;         // true  (false gets converted to 0)
// null == undefined;  // true
//
// // === without coercion
// 5 === "5";          // false (different types)
// 0 === false;        // false (different types)
// null === undefined; // false
//
// My takeaway: I always use === in my code. It avoids the weird
// unexpected results that come from == doing silent type conversion.

// ------------------------------------------------------------
// Q4: Explain how try-catch works and why it is important
//     in async operations. (0.5 Grade)
// ------------------------------------------------------------

// How try-catch works:
// - try: contains the code that might throw an error.
// - catch: if any error happens inside the try block, the execution
//   jumps there immediately instead of crashing the whole program.
// - finally (optional): always runs whether an error happened or not,
//   which is useful for cleanup like closing a file or a connection.
//
// Example:
//
// try {
//   const data = JSON.parse("{ invalid json }");
// } catch (error) {
//   console.log("Error:", error.message);
// } finally {
//   console.log("Done"); // always runs
// }
//
// Why it matters in async operations:
// In async code (like fetch or setTimeout) errors don't happen right
// away - they happen later in the future. Without proper handling,
// those errors just fail silently and the app keeps running in a
// broken state.
//
// Example with a promise:
//
// fetch("https://invalid-url.com")
//   .then((res) => res.json())
//   .catch((error) => console.log("Failed:", error.message));
//
// Example with async/await:
//
// async function getData() {
//   try {
//     const res = await fetch("https://api.example.com/data");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Failed:", error.message); // network error, bad json...
//   }
// }
//
// In short: try-catch gives us a clean, structured way to handle
// errors instead of letting the app crash, and that's essential in
// async code because errors can happen at any point in the future.

// ------------------------------------------------------------
// Q5: What is the difference between conversion and coercion?
//     Provide examples of each. (0.5 Grade)
// ------------------------------------------------------------

// Both are type conversions, but the difference is WHO does it.
//
// Conversion (explicit): I convert the type myself, on purpose,
// using built-in functions like Number(), String(), Boolean().
//
// // Explicit conversion
// let num = Number("123");   // 123   - I did it manually
// let text = String(456);    // "456"
// let bool = Boolean(1);     // true
// let toNum = +"99";         // 99    (using unary +)
//
// Coercion (implicit): JavaScript converts the type automatically
// behind the scenes while running an operation.
//
// // Implicit coercion
// "5" * 2;            // 10    (string converted to number)
// "5" + 2;            // "52"  (number converted to string because of +)
// if ("") {}          // "" coerced to false (falsy value)
// 1 == "1";           // true  (coercion in loose comparison)
//
// The core difference in one line:
// - Conversion = I did it on purpose, so the result is predictable.
// - Coercion = the language did it silently, which can surprise you
//   if you don't know its rules.

// ============================================================
// End of Essay Questions
// ============================================================

