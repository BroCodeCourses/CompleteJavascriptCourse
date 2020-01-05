//Zoo import
const Zoo = require('./classes/zoo.js').Zoo

//Animals Import
const Tiger = require('./classes/tiger.js').Tiger
const Lion = require('./classes/lion.js').Lion;
const Viper = require('./classes/viper.js').Viper;
const Anaconda = require('./classes/anaconda.js').Anaconda;
const Frog = require('./classes/frog.js').Frog;
const Salamander = require('./classes/salamander.js').Salamander;
const Kangaroo = require('./classes/kangaroo.js').Kangaroo;
const Koala = require('./classes/koala.js').Koala;


let zoo = new Zoo('Detroit');

zoo.addAnimal(new Tiger('Terry', 'Male'));
zoo.addAnimal(new Lion('Mufasa', 'Male', 'LoudAF'));
zoo.addAnimal(new Viper('Sneckity', 'Female'));
zoo.addAnimal(new Anaconda('Annie', 'Female'));
zoo.addAnimal(new Frog('Ribbed', 'Male'));
zoo.addAnimal(new Salamander('Sally', "Female"));
zoo.addAnimal(new Kangaroo('Roo', 'Female', 'Average'));
zoo.addAnimal(new Koala('Kelvin', 'Male', 'Tiny'));
zoo.addAnimal(new Kangaroo('Roo', 'Female', 'Average'));
zoo.addAnimal(new Koala('Kelvin', 'Male', 'Tiny'));
zoo.addAnimal(new Kangaroo('Roo', 'Female', 'Average'));
zoo.addAnimal(new Koala('Kelvin', 'Male', 'Tiny'));

console.log(zoo);