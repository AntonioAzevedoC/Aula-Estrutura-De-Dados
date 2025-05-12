"use strict";

// Using stacks in classes
// Stacks follow the FIFO structure (First in, first out), that means that whatever is placed in the stack last must be the first thing to be removed from the stack

export default class Stack {
  // Generic "#data" variable
  #data;

  constructor() {
    this.#data = [];
  }

  // method for inserting data in the  "#data" variable
  insertData(val) {
    this.#data.push(val);
  }
}
