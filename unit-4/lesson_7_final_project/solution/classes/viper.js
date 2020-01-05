const Snake = require('./snake').Snake;

class Viper extends Snake {
    constructor(name, gender) {
        super(name, gender);
        this.genus = 'Viper';
        this.venom = 'fatal';
        this.huntingTime = 'day';
    }
}

module.exports.Viper = Viper;