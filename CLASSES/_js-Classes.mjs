// JS classes (So normal classes, but more annoying)
// A way of creating objects, that is easier to read and debug (That's the whole reason why it exists, it is a programming )
// Classes don't represent a particular "something", for example a "House" class doesn't represent any particular house, they instead represent the concept of a house
// An instance of a class represents a particular "something" (Instances are objects)

// This is an interesting choice of example
class Robot {} // The example wasn't that good, it just used general properties like "name" and "speed", I won't bother copying it

// Start class names with an uppercase letter
export default class Shape {
  // Attributes! To make them private add a # to the variable
  #width;
  #height;
  #type;
  #pi = 3.1415;
  area;

  // You won't believe what the constructor does
  constructor(width, height, type) {
    // Usually you should do it like this, but I'm working with setters
    this.#width = width;
    this.#height = height;
    this.#type = type;
  }

  // Getters, to get private attributes
  get getWidth() {
    return this.#width;
  }
  get getHeight() {
    return this.#height;
  }
  get getType() {
    return this.#type;
  }
  get getArea() {
    return this.area;
  }

  // Setter, to set attributes
  set setWidth(width) {
    if (typeof width !== "number" || width < 0)
      throw new Error("ERROR: 'width' must be a number greater than zero.");
    this.#width = width;
  }
  set setHeight(height) {
    if (typeof height !== "number" || height < 0)
      throw new Error("ERROR: 'height' must be a number greater than zero.");
    this.#height = height;
  }
  set setType(type) {
    if (!["R", "T", "E"].includes(type))
      throw new Error("ERROR: 'type' must be either R, T or E.");
    this.#type = type;
  }

  // Calculating #area property
  calcArea() {
    switch (this.#type) {
      case "R":
        this.area = this.#width * this.#height;
        break;
      case "T":
        this.area = (this.#width * this.#height) / 2;
        break;
      case "E":
        this.area = (this.#width / 2) * (this.#height / 2) * this.#pi;
        break;
    }
  }
}
