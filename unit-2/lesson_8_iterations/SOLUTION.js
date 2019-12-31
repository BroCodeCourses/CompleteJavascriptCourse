/**
 * @param SOLUTION - Unit 2: Lesson 8
 * @param ITERATIONS
 */

const ARR_NUM = [0, 1, 2, 3, 4, 5, 6, 7];
const ARR_STR = ['one', 'two', 'three', 'four', 'five', 'six'];


 /**
  * ACTIVITY: Create a for loop that goes through all of the indexes in one of the arrays above.
  * HINT: Use the array.length attribute to cover all indexes.
  */
  for (let i = 0; i < ARR_STR.length; i++) {
    console.log(`index: ${i}`);
  }


 /**
  * ACTIVITY: Print each value in one of the arrays above.
  * HINT: We can use array look ups like so array[i];
  */
  for (let i = 0; i < ARR_STR.length; i++) {
    console.log(`value: ${ARR_STR[i]}`);
  }


 /**
  * ACTIVITY: Print each value in one of the arrays above using a for of loop.
  * HINT: Instead of declaring indexes, we can directly grab the variable using for (let  i of array).
  */
  for (let val of ARR_STR) {
    console.log(val);
  }

  
 /**
  * ACTIVITY: Create a while loop that goes until the variable below reaches 10. Increase the variable in every iteration.
  * HINT: Increase the variable every time to ensure we don't run into infinite loops
  */
  let count = 0;
  while (count < 10) {
    console.log(`while: ${count}`);
    count++;
  }

 /**
  * ACTIVITY: Create a do while loop that prints the value of the counter until it reaches 10.
  * HINT: Similar to above except we have our functional code in the do code.
  */
  let doWhileCount = 0;
  do {
    console.log(`do while: ${doWhileCount}`);
    doWhileCount++;
  } while (doWhileCount < 10);
  