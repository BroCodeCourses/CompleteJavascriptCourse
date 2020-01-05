const Feline = require('./feline').Feline;

class Tiger extends Feline {
    constructor(name, gender) {
        super(name, gender);
        this.genus = 'Tiger';
        this.furColor = 'Black and white stripes';
    }
}

module.exports.Tiger = Tiger;