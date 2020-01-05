const Marsupial = require('./marsupial').Marsupial;

class Kangaroo extends Marsupial {
    constructor(name, gender, pouchSize) {
        super(name, gender, pouchSize);
        this.genus = 'Kangaroo';
        this.methodOfTravel = 'Hopping';
    }
}

module.exports.Kangaroo = Kangaroo;