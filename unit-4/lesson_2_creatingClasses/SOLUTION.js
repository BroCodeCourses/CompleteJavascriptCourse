/**
  * ACTIVITY: Create a Human class that is constructed with a name.
*/

class Human {
    constructor(name) {
        this.name = name;
    }
}


/**
  * ACTIVITY: Create a JackTheCat class that is constructed with a static name 'Jack', and variables meowVolume, weight, eyeColor, mood, and tailLength.
  * HINT: By creating a static variable, you ensure that while there may be many JackTheCat's, they will all be named Jack.
*/

class JackTheCat {
    constructor(meowVolume, weight, eyeColor, mood, tailLength) {
        this.name = 'Jack';
        this.meowVolume = meowVolume;
        this.weight = weight;
        this.eyeColor = eyeColor;
        this.mood = mood;
        this.tailLength = tailLength;
    }
}


/**
  * ACTIVITY: Add a new variable to an instance of your JackTheCat class
  * HINT: You'll need to instantiate the class before you can add variables to it.
*/

let jack = new JackTheCat(14, 25, 'blue', 'angry', '2inch')
jack.appearance = 'chubby';


/**
  * ACTIVITY: Add a new method to your instance of JackTheCat that returns eyeColor.
  * HINT: You'll need to instantiate the class before you can add methods to it.
*/

jack.findEyeColor = function() {
    return this.eyeColor;
}

