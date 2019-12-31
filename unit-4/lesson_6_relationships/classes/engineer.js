const Employee = require('./employee').Employee;

class Engineer extends Employee {
    constructor(name, yearsExperience, manager, company) {
        super(name, 'Engineer', yearsExperience, company);
        this.manager = manager;
    }
}

module.exports.Engineer = Engineer;