/**
 * @param STARTER_CODE - Unit 2: Lesson 7
 * @param CONDITIONALS
 */

 /**
  * ACTIVITY: Use conditionals to return true if the parameter is greater than 5 and false if not.
  * HINT: We can use if/else statements to return our expected value.
  */
  const isGreaterThan5 = (num) => {
    if (num > 5) {
      return true;
    } else {
      return false;
    }
  };

  console.log(isGreaterThan5(0));
  console.log(isGreaterThan5(6));

 /**
  * ACTIVITY: Use conditionals to return 'length === 0', 'length is > 0 && < 10' and 'length > 10' from the string passed.
  * HINT: We can use if/else if/ else statements to do multiple checks.
  */
  const lengthOfString = (str) => {
    if (str.length === 0) {
      return 'length === 0';
    } else if (str.length <= 10) {
      return 'length is > 0 && < 10';
    } else {
      return 'length > 10';
    }
  };

  console.log(lengthOfString(''));
  console.log(lengthOfString('hello'));
  console.log(lengthOfString('hello world!'));

 /**
  * ACTIVITY: Use a switch statement with cases 'pizza', 'ice cream', 'burgers' that print that food item to the console.
  * HINT: We can create a switch statement on the parameters and then use normal strings in the case statements.
  */
  const foodType = (food) => {
    switch (food) {
      case 'pizza':
        console.log('you have selected pizza.');
        break;
      case 'ice cream':
        console.log('you have selected ice cream.');
        break;
      case 'burgers':
        console.log('you have selected burgers');
        break;
      default: 
        console.log('Invalid option.');
        break;
    }
  }

  foodType('burgers');
  foodType('ramen');

 /**
  * ACTIVITY: Create a ternary statement that sets the variable true if the parameter is greater than 10.
  * HINT: Ternaries are created by x > VALUE ? DO SOMETHING TRUE : DO SOMETHING FALSE
  */
  const isGreaterThan10 = (num) => {
    const isGreater = num > 10 ? true : false;
    return isGreater;
  }

  console.log(isGreaterThan10(15));
  console.log(isGreaterThan10(0));

