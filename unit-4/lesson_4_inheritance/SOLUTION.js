/**
  * ACTIVITY: Create an appliance class that is constructed with a height and width
*/

class Appliance {
    constructor(brand) {
        this.brand = brand;
        this.functional = true;
    }

/**
  * ACTIVITY: Add a function to your appliance class that returns whether the appliance is functioning or not. Instantiate the class with functional = true;
*/

    
    isFunctioning() {
        return this.functional;
    } 
}


/**
  * ACTIVITY: Create a fridge class that extends Appliance, and is constructed with numShelves, temperature, and a static of type = fridge.
*/

class Fridge extends Appliance {
    constructor(numShelves, temperature, brand) {
        super(brand);
        this.type = 'fridge';
        this.numShelves = numShelves;
        this.temperature = temperature;
    }


/**
  * ACTIVITY: Create the method run() in your fridge class that first checks whether the fridge is functional, and if so, console.logs('your fridge is running').
*/

    run() {
        if(this.isFunctioning()) {
            console.log('your fridge is running');
        }
    }

}


/**
  * ACTIVITY: Create a microwave class that extends Appliance, and is constructed with wattage and a static of type = microwave.
*/

class Microwave extends Appliance {
    constructor(wattage, brand) {
        super(brand);
        this.type = 'microwave';
        this.wattage = wattage;
    }

/**
  * ACTIVITY: Create a method overHeat() in your microwave class that reassigns your this.functional to false.
  * HINT: Try calling isFunctioning() on your microwave instance before and after calling your overHEart() method.
*/

    overHeat() {
        this.functional = false;
    }

/**
  * ACTIVITY: Create a method cookFood() on your microwave class that first checks whether the microwave is functioning, and if so, console.log('your food is cooking')
    If it isn't functioning, console.log('microwave broken, send help').
    HINT: Try calling cookFood() on a new microwave, and then try calling it after calling your overHeat() method. See what happens.
*/

    cookFood() {
        if(this.isFunctioning()) {
            console.log('your food is cooking');
        } else {
            console.log('microwave broken, send help');
        }
    }
}


