// Argument Objects - no longer bound with arrow functions

const add = (a, b) => {
  //  console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Stuart',
    cities: ['New York', 'San Francisco', 'Los Angeles'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    number: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.number.map((triple) => this.multiplyBy * triple);
    }
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
};

console.log(multiplier.multiply());