// super class
class Holiday {
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        alert(`${this.destination} will take ${this.days} days`);
    }
}

// sub class
class Expendition extends Holiday {
    constructor(destination, days, gear){
        super(destination, days);
        this.gear = gear;
    }

    info() {
        super.info();
        alert(`Bring your ${this.gear.join(' and your ')}`);
    }
}

const tripWithGear = new Expendition('Semeru', 10, ['Sunglasses', 'Flags', 'Camera']);
tripWithGear.info();