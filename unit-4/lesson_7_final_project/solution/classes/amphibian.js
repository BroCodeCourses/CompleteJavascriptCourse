const Reptile = require('./reptile').Reptile;

class Amphibian extends Reptile{
    constructor(name, gender, hasGills) {
        super(name, gender);
        this.hasGills = hasGills;
        this.family = 'Amphibian';
        this.skinType = 'Permeable';
    }
}

module.exports.Amphibian = Amphibian;