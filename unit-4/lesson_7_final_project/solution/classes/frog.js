const Amphibian = require('./amphibian').Amphibian;

class Frog extends Amphibian {
    constructor(name, gender) {
        super(name, gender, false);
        this.genus = 'Frog';
        this.feet = 'Webbed';
        this.jump = 'Baller';
    }
}

module.exports.Frog = Frog;