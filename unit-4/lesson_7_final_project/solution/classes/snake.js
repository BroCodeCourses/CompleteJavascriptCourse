const Reptile = require('./reptile').Reptile;

class Snake extends Reptile {
    constructor(name, gender) {
        super(name, gender);
        this.family = 'Snake';
        this.legs = 0;
    }
}

module.exports.Snake = Snake;