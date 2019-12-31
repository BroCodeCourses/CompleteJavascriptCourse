/**
 * @param SOLUTION - Unit 2: Lesson 4
 * @param MAPS 
 */


 /**
  * ACTIVITY: Assign the variable below to be an empty map.
  * HINT: We can create maps by using the map class. 
  */
 const map = new Map();


 /**
  * ACTIVITY: Assign the variable below to map containing one key value pairing.
  * HINT: We can create maps with variables the same way as above, but with [[KEY, VALUE]] inside the map creation.
  */
 const oneValueMap = new Map([['test', 'test']]);

 /**
  * ACTIVITY: Add a key value pairing to the map below.
  * HINT: We can use the set function that come with maps.
  */
 const setValue = new Map();
 setValue.set('test', true);

 /**
  * ACTIVITY: Check if the map below has key named 'test'.
  * HINT: We can use the has function that come with maps.
  */
 const hasValue = new Map([['test', true]]);
 console.log(hasValue.has('test'));


 /**
  * ACTIVITY: Get the value for the key 'test'.
  * HINT: We can use the get function that come with maps.
  */
 const getValue = new Map([['test', 'pass']]);
 console.log(getValue.get('test'));

 /**
  * ACTIVITY: Get a list of entries in the map below.
  * HINT: We can use the entries function that come with arrays.
  */
 const getEntries = new Map([['hello', true], ['world', true]]);
 console.log(getEntries.entries());

 /**
  * ACTIVITY: Get a list of keys in the map below.
  * HINT: We can use the keys function that come with arrays.
  */
 const getKeys = new Map([['hello', true], ['world', true]]);
 console.log(getKeys.keys());
