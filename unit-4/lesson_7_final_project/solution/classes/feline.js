const Mammal = require('./mammal').Mammal;

class Feline extends Mammal {
    constructor(name, gender) {
        super(name, gender);
        this.family = 'Feline';
        this.lives = 9;
    }
}

module.exports.Feline = Feline;