/**
 * @param STARTER_CODE - Unit 2: Lesson 1
 * @param Variables 
 */

 /** 
  * ================================
  *  ARITHMETIC OPERATORS
  * ================================
  */

/**
  * Starter code for ARITHMETIC OPERATORS.
  * Uncomment the console.log() statements as you go through the exercise.
  */
 const a = 0;
 const b = 1;
 const c = 2;
 const d = 3;
 const e = 4;
 const f = 10;

/**
  * ACTIVITY: Set the variable below to combine variables a and b.
  * HINT: Use the + operator.
  */
const addition = a + b;
console.log(`Addition: ${addition}. Answer is correct: ${addition === 1}`);


/**
  * ACTIVITY: Set the variable below as the output of subtracting variables b from d.
  * HINT: Use the - operator.
  */
const subtraction = d - b;
console.log(`Subtraction: ${subtraction}. Answer is correct: ${subtraction === 2}`);


/**
  * ACTIVITY: Set the variable below as the output of multiplying variables c and f.
  * HINT: Use the * operator.
  */
 const multiplication = c * f;
 console.log(`Multiplication: ${multiplication}. Answer is correct: ${multiplication === 20}`);


/**
  * ACTIVITY: Set the variable below as the output of dividing variables d by b.
  * HINT: Use the / operator.
  */
 const division = d / b;
 console.log(`Division: ${division}. Answer is correct: ${division === 3}`);


/** 
  * ACTIVITY: Set the variable below as the output of moderating variables f by e.
  * Moderators return the remainder of the second number divided by the first. If we moderate 5 by 3, we are left with 2.
  * HINT: Use the % operator.
  */
 const moderator = f % e;
 console.log(`Moderator: ${moderator}. Answer is correct: ${moderator === 2}`);


 /** 
  * ACTIVITY: Increase the variable below by 1.
  * Quickly incrementing values by one will help us later when we introduce loops.
  * HINT: Use the ++ operator.
  */
 let increment = 0;
 increment++;
 console.log(`Increment: ${increment}. Answer is correct: ${increment === 1}`);

 /** 
  * ACTIVITY: Decrease the variable below by 1.
  * Quickly decreasing values by one will help us later when we introduce loops, or creating countdowns.
  * HINT: Use the -- operator.
  */
 let decrement = 0;
 decrement--;
 console.log(`Decrement: ${decrement}. Answer is correct: ${decrement === -1}`);

/** 
  * ================================
  *  COMPARISON OPERATORS
  * ================================
  */
 
/** 
  * ACTIVITY: Compare two values without considering about their types.
  * == Is used to check whether two things equal each other without checking type. For example -1 == '-1' would return true.
  * HINT: Use the == operator.
  */
 const doubleEqualsTrue = (1 == '1');
 const doubleEqualsFalse = (1 == '2');
 console.log(`doubleEqualsTrue: ${doubleEqualsTrue}. Answer is correct: ${doubleEqualsTrue === true}`);
 console.log(`doubleEqualsFalse: ${doubleEqualsFalse}. Answer is correct: ${doubleEqualsFalse === false}`);

 
 /** 
  * ACTIVITY: Compare two values while considering about their types.
  * === Is used to check whether two things equal each other without checking type. For example -1 === '-1' would return false.
  * HINT: Use the === operator.
  */
 const tripleEqualsTrue = (1 === 1);
 const tripleEqualsFalse = (1 === '1');
 console.log(`tripleEqualsTrue: ${tripleEqualsTrue}. Answer is correct: ${tripleEqualsTrue === true}`);
 console.log(`tripleEqualsFalse: ${tripleEqualsFalse}. Answer is correct: ${tripleEqualsFalse === false}`);


 /** 
  * ACTIVITY: Check that two values do not equal each other.
  * != is used to compare two values. If they do not equal each other then we are returned a true value. If they do, then
  * we are returned a false value
  * HINT: Use the != operator.
  */
 const doesNotEqualTrue = (1 != 4);
 const doesNotEqualFalse = (1 != 1);
 console.log(`doesNotEqualTrue: ${doesNotEqualTrue}. Answer is correct: ${doesNotEqualTrue === true}`);
 console.log(`doesNotEqualFalse: ${doesNotEqualFalse}. Answer is correct: ${doesNotEqualFalse === false}`);


/** 
  * ACTIVITY: Set the variable below to return true when one number is greater than another 
  * > is used to compare two values. if the value before the operator is greater than the second, we are returned true.
  * HINT: Use the > operator.
  */
 const greaterThanTrue = (10 > 1);
 const greaterThanFalse = (1 > 10);
 console.log(`greaterThanTrue: ${greaterThanTrue}. Answer is correct: ${greaterThanTrue === true}`);
 console.log(`greaterThanFalse: ${greaterThanFalse}. Answer is correct: ${greaterThanFalse === false}`);


 /** 
  * ACTIVITY: Set the variable below to return true when one number is less than another 
  * < is used to compare two values. if the value before the operator is less than the second, we are returned true.
  * HINT: Use the < operator.
  */
 const lessThanTrue = (1 < 10);
 const lessThanFalse = (10 < 1);
 console.log(`lessThanTrue: ${lessThanTrue}. Answer is correct: ${lessThanTrue === true}`);
 console.log(`lessThanFalse: ${lessThanFalse}. Answer is correct: ${lessThanFalse === false}`);


 /** 
  * ACTIVITY: Set the variable below to return true when one number is less than or equal to another 
  * <= is used to compare two values. if the value before the operator is less than or equal to the second, we are returned true.
  * HINT: Use the <= operator.
  */
 const lessThanOrEqualTrue = (1 <= 1);
 const lessThanOrEqualFalse = (2 <= 1);
 console.log(`lessThanOrEqualTrue: ${lessThanOrEqualTrue}. Answer is correct: ${lessThanOrEqualTrue === true}`);
 console.log(`lessThanOrEqualFalse: ${lessThanOrEqualFalse}. Answer is correct: ${lessThanOrEqualFalse === false}`);

 /** 
  * ACTIVITY: Set the variable below to return true when one number is greater than or equal to another 
  * >= is used to compare two values. if the value before the operator is greater than or equal to the second, we are returned true.
  * HINT: Use the >= operator.
  */
 const greaterThanOrEqualTrue = (1 >= 1);
 const greaterThanOrEqualFalse = (1 >= 2);
 console.log(`greaterThanOrEqualTrue: ${greaterThanOrEqualTrue}. Answer is correct: ${greaterThanOrEqualTrue === true}`);
 console.log(`greaterThanOrEqualFalse: ${greaterThanOrEqualFalse}. Answer is correct: ${greaterThanOrEqualFalse === false}`);


 /** 
  * ================================
  *  LOGICAL OPERATORS
  * ================================
  */


/** 
  * ACTIVITY: Use the && operator to make two comparisons and have it return true and to have it return false.
  * && is used to check if the comparisons on each side are true. If they aren't, false is returned.
  * HINT: Use the && operator.
  */
 const andTrue = (2 <= 2) && (1 === 1);
 const andFalse = (1 === 2) && (true === false);
 console.log(`andTrue: ${andTrue}. Answer is correct: ${andTrue === true}`);
 console.log(`andFalse: ${andFalse}. Answer is correct: ${andFalse === false}`);


 /** 
  * ACTIVITY: Use the || operator to make two comparisons and have it return true and to return false.
  * || is used to check if the comparisons on either side are true. If both are false, false is returned.
  * HINT: Use the || operator.
  */
 const orTrue = (1 === 10) || (2 > 0);
 const orFalse = (100 < 0) || (0 > 100);
 console.log(`orTrue: ${orTrue}. Answer is correct: ${orTrue === true}`);
 console.log(`orFalse: ${orFalse}. Answer is correct: ${orFalse === false}`);


/** 
  * ACTIVITY: Use the ! operator to return false on a true value and to return a true value on a false variable;
  * ! is used to return the opposite of the current true/false value
  * HINT: Use the ! operator.
  */
 const returnFalse = !true;
 const returnTrue = !false;
 console.log(`returnFalse: ${returnFalse}. Answer is correct: ${returnFalse === true}`);
 console.log(`returnTrue: ${returnTrue}. Answer is correct: ${returnTrue === false}`);
 

 /** 
  * ================================
  *  ASSIGNMENT OPERATORS
  * ================================
  */


/** 
  * ACTIVITY: Increase the value of our variable below by 5;
  * += is used to increase the current variable by a number specified by the programmer.
  * HINT: Use the += operator.
  */
 let plusEqual = 5;
 plusEqual += 5;
 console.log(`Plus equals: ${plusEqual}. Answer is correct: ${plusEqual === 10}`);


 /** 
  * ACTIVITY: Decrease the value of our variable below by 5;
  * -= is used to decrease the current variable by a number specified by the programmer.
  * HINT: Use the -= operator.
  */
 let minusEqual = 10;
 minusEqual -= 5;
 console.log(`Minus equals: ${minusEqual}. Answer is correct: ${minusEqual === 5}`);


 /** 
  * ACTIVITY: Multiply the value of our variable below by 5;
  * *= is used to decrease the current variable by a number specified by the programmer.
  * HINT: Use the *= operator.
  */
 let multiplyEqual = 5;
 multiplyEqual *= 5;
 console.log(`Multiply equals: ${multiplyEqual}. Answer is correct: ${multiplyEqual === 25}`);


 /** 
  * ACTIVITY: Divide the value of our variable below by 5;
  * /= is used to divide the current variable by a number specified by the programmer.
  * HINT: Use the /= operator.
  */
 let divideEqual = 30;
 divideEqual /= 5;
 console.log(`Divide equals: ${divideEqual}. Answer is correct: ${divideEqual === 6}`);