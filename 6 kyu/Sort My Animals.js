/* Description:

Consider the following class:

var Animal = { 
    name: "Cat", 
    numberOfLegs: 4 
}

Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If null is passed, the method should return null. If an empty list is passed, it should return an empty list back.
 */

//////////////////////Solution///////////////////////////

function sortAnimal(animal) {
    if (animal === null) {
        return null;
    }
    return animal.sort((a, b) => {
        if (a['numberOfLegs'] < b['numberOfLegs']) {
            return -1;
        } else if (a['numberOfLegs'] > b['numberOfLegs']) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    });
}
console.log(sortAnimal([
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 }]));
console.log(sortAnimal(null));