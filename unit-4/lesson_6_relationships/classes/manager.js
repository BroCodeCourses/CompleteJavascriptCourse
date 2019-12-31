const Employee = require('./employee').Employee;

class Manager extends Employee {
    constructor(name, yearsExperience, company) {
        super(name, 'Manager', yearsExperience, company);
        this.subordinates = [];
    }

    addEmployeeToSubordinates(engineer) {
        this.subordinates.push(engineer);
    }
}

module.exports.Manager = Manager;