const Animal = require('./animal.js').Animal;

class Reptile extends Animal {
    constructor(name, gender) {
        super(name, gender);
        this.classOfAnimal = 'Reptile';
        this.blood = 'Cold-blooded';
    }
}

module.exports.Reptile = Reptile;