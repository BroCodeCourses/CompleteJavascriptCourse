/**
 * @param SOLUTION - Unit 2: Lesson 5
 * @param OBJECTS 
 */


 /**
  * ACTIVITY: Assign the variable below to be an empty object.
  * HINT: We can create objects by using brackets. 
  */
 const object = {};


 /**
  * ACTIVITY: Assign the variable below to an object containing one key value pairing.
  * HINT: We can create objects with variables the same way as above, but with a key value pairing inside the object creation.
  */
 const oneValueObject = { val: true };

 /**
  * ACTIVITY: Set a key value pairing in the object below
  * HINT: We can set attributes directly in an object.
  */
 const setValue = {};
 setValue.val = true;
 console.log(setValue);

 /**
  * ACTIVITY: Change the 'example' attribute in the object below.
  * HINT: Similar to setting a key value pairing, we can modify a key the same way.
  */
 const changeValue = {
   example: 1,
 };
 changeValue.example = 2;
 console.log(changeValue);


 /**
  * ACTIVITY: Get a list of keys in an object.
  * HINT: We can use the the Object.keys function.
  */
 const getKeys = {
   example: 1,
  };
  console.log(Object.keys(getKeys));


 /**
  * ACTIVITY: Get a list of values in an object.
  * HINT: We can use the the Object.values function.
  */
 const getValues = {
  example: 1,
 };
 console.log(Object.values(getValues));
