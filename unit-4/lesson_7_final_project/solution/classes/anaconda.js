const Snake = require('./snake').Snake;

class Anaconda extends Snake{
    constructor(name, gender) {
        super(name, gender);
        this.genus = 'Anaconda';
        this.venom = 'Non-poisonous';
        this.huntingTime = 'Night';
    }
}

module.exports.Anaconda = Anaconda;