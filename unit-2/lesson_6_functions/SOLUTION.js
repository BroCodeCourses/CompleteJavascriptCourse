/**
 * @param SOLUTION - Unit 2: Lesson 6
 * @param FUNCTIONS
 */


 /**
  * ACTIVITY: Assign the variable below to be an empty function expression.
  * HINT: We can create functions using the () => {};
  */
 const funcOne = () => {};


 /**
  * ACTIVITY: Create a declarative function below.
  * HINT: We can use the function funcName() {} syntax.
  */
 function funcTwo() {};


 /**
  * ACTIVITY: Create a function that takes in a single paramter and returns that parameter. Call that function and print the return to the console.
  * HINT: Inside a function we can create a return statement to return any value we want.
  */
 const paramFunc = (param1) => {
   return param1;
 }
 console.log(paramFunc(5));

 /**
  * ACTIVITY: Create a function that accepts a number as a paramater and returns that number plus one.
  * HINT: Above the return we can create a new variable that stores the parameter + 1 and return it.
  */
 const plusOne = (num) => {
   const addOne = num + 1;
   return addOne;
 };
 console.log(plusOne(10));


 /**
  * ACTIVITY: Create an immediately invoked function expression that prints 'Hello World!' to the console.
  * HINT: We caa create a IIFE by wrapping the function in parentheses and attaching another pair at the end. (FUNC DEC)();
  */
 const printHelloWorld = (() => {
   console.log('Hello World!');
 })();


 /**
  * ACTIVITY: Create a closure function. A function that returns another function that has reference to the variables defined in the outer scope.
  * HINT: We can return another function inside our outer function.
  * const x = () => {
  *   let y = 1;
  *   return () => {
  *     return y + 1;
  *   }
  * }
  */

  const closureAddNum = () => {
    let newNum = 10;
    return (numToAdd) => {
      newNum += numToAdd;
      return newNum;
    }
  }

  const returnedFunc = closureAddNum();
  console.log(returnedFunc(10));
  console.log(returnedFunc(10));
  console.log(returnedFunc(10));
 

