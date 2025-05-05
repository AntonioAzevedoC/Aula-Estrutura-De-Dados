// The "this" keyword allows you to find methods and properties of a class/object while inside the very class/object
// This happens because the "this" keyword points to the class/object itself

const obj1 = {
  name: "Jefferson",
  lastname: "Willians",
  age: 23,
  greet: function () {
    console.log(
      // In here, the "this" keyword is used to call for the method "getFullName()" and the property "age"
      `Hello! My name is ${this.getFullName()}, and I'm ${this.age} years old!`
    );
  },
  getFullName: function () {
    // In here, the "this" keyword is used to call for the properties "name" and "lastname"
    return this.name + " " + this.lastname;
  },
};

obj1.greet();
console.log(obj1.getFullName());
