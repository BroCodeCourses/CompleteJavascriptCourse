class Computer {
    constructor(type) {
        this.type = type
    }

    whatIsThis() {
        console.log(this);
    }

}

let c = new Computer('mac');
c.whatIsThis();
c.que();    