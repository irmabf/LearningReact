class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi. I am ${this.name}`;
  }
  getDescription(){
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person{
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();

    if (this.hasMajor()) {
      description+=  ` ${this.name} major is ${this.major}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation(){
    return !!this.homeLocation;
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` and I live in ${this.homeLocation}`;
    }
    return greeting;
  }

}

// const jane = new Person('Jane Doe', 29, 'Law');
// console.log(jane.getDescription());

// const jon = new Student('Jon Snow', 30, 'Computer Science');
// console.log(jon.getGreeting());
// console.log(jon.hasMajor());
// console.log(jon.getDescription());

// const other = new Student();
// console.log(other.getGreeting());
// console.log(other.hasMajor());
// console.log(other);

// console.log(other.getDescription());

const paige = new Traveller('Paige', 20);
console.log(paige);
console.log(paige.getGreeting());

const elizabeth = new Traveller('Elizabeth', 45, 'Moscow');
console.log(elizabeth);
console.log(elizabeth.getGreeting());