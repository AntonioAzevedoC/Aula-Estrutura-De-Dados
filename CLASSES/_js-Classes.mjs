// JS classes (So normal classes, but more annoying)
// A way of creating objects, that is easier to read and debug (That's the whole reason why it exists, it is a programming )
// Classes don't represent a particular "something", for example a "House" class doesn't represent any particular house, they instead represent the concept of a house
// An instance of a class represents a particular "something" (Instances are objects)

// This is an interesting choice of example
class Robot {} // The example wasn't that good, it just used general properties like "name" and "speed", I won't bother copying it

// Start class names with an uppercase letter
class Shape {
  // Attributes! To make them private add a # to the variable
  #width;
  #height;
  #type;
  #pi = 3.1415;

  // You won't believe what the constructor does
  constructor(width, height, type) {
    // Usually you should do it like this, but I'm working with setters
    this.#width = width;
    this.#height = height;
    this.#type = type;
  }

  // Getters, to get private attributes
  get width() {
    return this.#width;
  }
  get height() {
    return this.#height;
  }
  get type() {
    return this.#type;
  }

  // Setter, to set attributes
  set width(width) {
    if (typeof width !== "number" || width < 0)
      throw new Error("ERROR: 'width' must be a number greater than zero.");
    this.#width = width;
  }
  set height(height) {
    if (typeof height !== "number" || height < 0)
      throw new Error("ERROR: 'height' must be a number greater than zero.");
    this.#height = height;
  }
  set type(type) {
    if (!["R", "T", "E"].includes(type))
      throw new Error("ERROR: 'type' must be either R, T or E.");
    this.#type = type;
  }
}

const sh1 = new Shape(10, 20, "E");
