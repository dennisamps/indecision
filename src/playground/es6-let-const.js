var nameVar = 'Dennis';
var nameVar = 'Mike';
console.log('nameVar',nameVar);

let nameLet ='jen';
nameLet = 'Julie';
console.log('nameLet',nameLet);

const nameConst ='Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName ='fred';
    return petName;
}

//blok scoping

var fullName = 'Dennis Ampontuah';

if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName)