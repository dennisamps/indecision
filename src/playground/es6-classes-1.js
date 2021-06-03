class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        // return 'HI I am ' + this.name + '!';
        return `Hi. I am ${this.name}`;  //template strings
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`

    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()){
            description += `, their major is ${this.major}`
        }
        
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasLocation(){
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasLocation){
            greeting +=`. Im visiting from ${this.homeLocation}`;

        }

        return greeting;
    }
}

const me = new Traveller('Dennis Ampontuah', 16, 'London');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getDescription());