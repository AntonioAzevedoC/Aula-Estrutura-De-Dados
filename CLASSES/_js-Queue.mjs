"use strict";

// Lanes! They work like lanes! The first one to cet in is the first one to go out
// FIFO - First in, first out
// There are some structures, such as DEQUE, that assign priorities to lanes, so that certaing values may be removed from the lane first

export default class Queue {
  // Generic "#data" variable
  #data;

  constructor() {
    this.#data = [];
  }

  insertData(val) {
    this.#data.push(val);
  }

  removeData() {
    return this.#data.shift();
  }

  // method that returns "#data" as a JSON string
  print() {
    let output = "[ ";
    for (let i = 0; i++; i < this.#data.length) {
      console.log("a");
      if (output !== "[ ") output += ", ";
      output += `${i}: ${this.#data[i]}`;
    }
    return output + " ]";
  }

  get getData() {
    return this.#data;
  }

  get isEmpty() {
    return this.#data.length === 0;
  }
}

let queue = new Queue();

console.log(queue.isEmpty);
queue.insertData(1);
queue.insertData(2);
queue.insertData(3);
queue.insertData(4);
console.log(queue.print());
console.log(queue.isEmpty);
