/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "This" allows us to use constructor functions.
* 2. "This" allows us to reuse functions.
* 3. "This" allows us to bind to the prototype and save on memory storage.
* 4. "This" works with the "new" keyword to implicitely return the desired object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)

// Principle 2

// code example for Implicit Binding

const cowboyObj = {
    greeting: "Howdy",
    saysHello: function(name) {
        console.log(`${this.greeting} partner, my name is ${name}.`);
    }
}

cowboyObj.saysHello('Alejandro');

// Principle 3

// code example for New Binding

function cowboyRides(animal) {
    this.greeting = "Howdy";
    this.animal = animal;
    this.rides = function() {
        console.log(`${this.greeting}, I am riding a ${this.animal}.`);
    };
}

const pig = new cowboyRides('pig')
const horse = new cowboyRides('horse')

pig.rides();
horse.rides();

// Principle 4

// code example for Explicit Binding

const secondCowboyObj = {
    name: 'Roberto',
    city: 'Alamo',
}

const thingsToDo = ['shoot', 'riot', 'loot']

function chargingTheAlamo(toDo1, toDo2, toDo3) {
    return `Howdy, my name is ${this.name}. I am coming up on ${this.city} to ${toDo1}, ${toDo2}, and ${toDo3}.`
}

console.log(chargingTheAlamo.apply(secondCowboyObj, thingsToDo));