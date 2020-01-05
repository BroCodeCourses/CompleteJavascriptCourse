const Animal = require('./animal').Animal

class Mammal extends Animal {
    constructor(name, gender) {
        super(name, gender);
        this.classOfAnimal = 'Mammal';
        this.limbs = 4;
        this.blood = 'Warm-blooded';
    }
}

module.exports.Mammal = Mammal;