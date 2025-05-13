"use strict";

// Using stacks in classes
// Stacks follow the FIFO structure (First in, first out), that means that whatever is placed in the stack last must be the first thing to be removed from the stack

export default class Stack {
  // Generic "#data" variable
  #data;

  constructor() {
    this.#data = [];
  }

  // method for inserting data in the "#data" variable
  insertData(val) {
    this.#data.push(val);
  }

  // method for removing data in the "#data" variable
  removeData(val) {
    return this.#data.pop(val); // Returning the removed value
  }

  // method that returns "#data" as a JSON string
  print() {
    return JSON.stringify(this.#data);
  }

  // method that returns the last position in "#data"
  lastPosition() {
    return this.#data[this.#data.length - 1];
  }

  get getData() {
    return this.#data;
  }

  get isEmpty() {
    return this.#data.length === 0;
  }
}
