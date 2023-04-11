// Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Constructor function for Employee
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inheriting Person prototype in Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
