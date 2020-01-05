class Zoo {
    constructor(location) {
        this.location = location;
        this.size = 'Small';
        this.numAnimals = 0;
        this.animals = [];
    }

    addAnimal(animal) {
        this.numAnimals++;
        this.animals.push(animal);
        if(this.numAnimals > 10) {
            this.size = 'Medium'
        } else if(this.numAnimals > 20) {
            this.size = 'Large';
        }
    }
}

module.exports.Zoo = Zoo;