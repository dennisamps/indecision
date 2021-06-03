
//ES5
// function square(x) {
//     return x * x;
// };

// console.log(square(2));

// //ES6

// const squareArrow = (x) => x * x


// // const squareArrow = (x) => {
// //     return x * x;
// // };


// console.log(squareArrow(9));
const getFirstNameLong = (fullName) => {
    return fullName.split(' ')[0]
}

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameLong('Dennis Ampontuah'));
console.log(getFirstName('Mike smith'));