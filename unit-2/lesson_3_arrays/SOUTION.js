/**
 * @param SOLUTION 2: Lesson 3
 * @param Arrays 
 */


 /**
  * ACTIVITY: Assign the variable below to be an empty array.
  * HINT: We can create arrays by assigning a variable to empty square brackets.
  */
 const array = [];


 /**
  * ACTIVITY: Assign the variable below to an array containing two strings.
  * HINT: We can create arrays with variables the same way as above, but put values in them.
  */
 const twoStringArray = ['hello', 'world'];


 /**
  * ACTIVITY: Print the first index in the array below to the console.
  * HINT: We can grab a value by using array[index].
  */
 const getFirstIndex = [10, 11, 12];
 console.log(getFirstIndex[0]);


 /**
  * ACTIVITY: Print the first index in the array below to the console.
  * HINT: We can use the length attribute.
  */
 const getLength = [10, 11, 12];
 console.log(getLength.length);

 /**
  * ACTIVITY: Loop over the values in the array and print each value to the console
  * HINT: We can use the forEach function that come with arrays.
  */
 const loopArray = [10, 11, 12, 13, 14];
 loopArray.forEach((item) => {
   console.log(item);
 });


 /**
  * ACTIVITY: Attach a value to the end of the array below.
  * HINT: We can use the push function that come with arrays.
  */
 const pushArray = [];
 pushArray.push('value');


 /**
  * ACTIVITY: Remove the value at the end of the array below.
  * HINT: We can use the pop function that come with arrays.
  */
 const popArray = ['hello', 'world', 'removeMe'];
 popArray.pop();
 console.log(popArray);

 /**
  * ACTIVITY: Remove the value at the beginning of the array below.
  * HINT: We can use the shift function that come with arrays.
  */
 const shiftArray = ['removeMe', 'hello', 'world'];
 shiftArray.shift();
 console.log(shiftArray);

 /**
  * ACTIVITY: Add a value at the beginning of the array below.
  * HINT: We can use the unshift function that come with arrays.
  */
 const unshiftArray = ['hello', 'world'];
 unshiftArray.unshift('insertedValue');
 console.log(unshiftArray);

 /**
  * ACTIVITY: Get the index of 'world' in the array below.
  * HINT: We can use the indexOf function that come with arrays.
  */
 const getIndexArray = ['hello', 'space', 'world'];
 console.log(getIndexArray.indexOf('space'));

 /**
  * ACTIVITY: Remove an item in the array below.
  * HINT: We can use the splice function that come with arrays.
  */
 const removeIndexArray = [0, 1, 2];
 removeIndexArray.splice(0, 1);
 console.log(removeIndexArray);

 /**
  * ACTIVITY: Remove the first two indexes in the array below.
  * HINT: We can use the splice function that come with arrays.
  */
 const removeTwoIndexesArray = [0, 1, 2];
 removeTwoIndexesArray.splice(0, 2);
 console.log(removeTwoIndexesArray);

  