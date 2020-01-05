const Feline = require('./feline').Feline;

class Lion extends Feline {
    constructor(name, gender, maneSize) {
        super(name, gender);
        this.maneSize = maneSize;
        this.genus = 'Lion';
    }
}

module.exports.Lion = Lion;