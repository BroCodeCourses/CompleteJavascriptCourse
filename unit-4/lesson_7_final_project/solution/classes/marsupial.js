const Mammal = require('./mammal').Mammal;

class Marsupial extends Mammal {
    constructor(name, gender, pouchSize) {
        super(name, gender);
        this.family = 'Marsupial';
        this.pouchSize = pouchSize;
    }
}

module.exports.Marsupial = Marsupial;