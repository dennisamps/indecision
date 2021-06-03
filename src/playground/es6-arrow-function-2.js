//arguments objects - nolonger bound with arrow functions

const add = (a,b) =>  {
    //console.log(arguments);
    return a+b;

};

console.log(add(55,1, 2));



// this keyword - no longer bounf with arrow functions

const user = {
    name: 'Andrew',
    cities: ['reading', 'london', 'lsibon'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

    }
};
console.log(user.printPlacesLived());

// this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });

const multiplier = {
    numbers: [12, 36, 56, 12],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((digits) => digits * this.multiplyBy)
    }
};
console.log(multiplier.multiply());