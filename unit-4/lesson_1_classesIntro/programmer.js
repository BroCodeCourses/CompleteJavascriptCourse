String()
Number()
Boolean()
Function()
Object();
Array();
RegExp();
Date();

class Programmer {
    constructor(name) {
        this.name = name
        this.profession = 'Software Engineer';
    }

    isItPossible(difficulty) {
        if(difficulty > 5) {
            return 'no thats impossible are you insane';
        }
        return 'yes, easy peazy'
    }

}

let s = new String('s');
console.log(s.valueOf());

let peteTheNeat = new Programmer('pete');

console.log(peteTheNeat.profession);
console.log(peteTheNeat.isItPossible(4));
console.log(peteTheNeat.isItPossible(10));

module.exports.Programmer = Programmer;