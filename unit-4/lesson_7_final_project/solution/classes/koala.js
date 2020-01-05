const Marsupial = require('./marsupial').Marsupial;

class Koala extends Marsupial {
    constructor(name, gender, pouchSize) {
        super(name, gender, pouchSize);
        this.genus = 'Koala';
        this.endangered = true;
        this.timeOfSleep = 'Day';
    }
}

module.exports.Koala = Koala;