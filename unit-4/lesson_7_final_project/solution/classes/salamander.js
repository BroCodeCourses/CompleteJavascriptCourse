const Amphibian = require('./amphibian').Amphibian;

class Salamander extends Amphibian {
    constructor(name, gender) {
        super(name, gender, true);
        this.genus = 'Salamander';
    }
}

module.exports.Salamander = Salamander;