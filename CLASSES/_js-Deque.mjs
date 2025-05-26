"use strict";

// A DEQUE (Double-Ended Queue, at first I thougth this was a portugesação of the term)
// A line with two ends (So the removed entries can come both from the start and from the end!)
// So, the methods might be InsertFront/InsertBack and RemoveFront/RemoveBack
// DEQUE applications are used to handle priorities and withdraws from the last item
// All of this means that DEQUE methods don't follow FIFO (First In, First Out)

export default class Deque {
  #data; // Generic private variable for inputed data

  constructor() {
    this.#data = [];
  }

  // Method to insert data at the start of the structure
  insertFront(val) {
    this.#data.unshift(val);
  }

  // Method to insert data at the end of the structure
  insertBack(val) {
    this.#data.push(val);
  }

  // Method to removw data at the start of the structure
  removeFront() {
    return this.#data.shift();
  }

  // Method to removw data at the end of the structure
  removeBack() {
    return this.#data.pop();
  }

  // Method to peek at the first position of the data
  peekFront() {
    return this.#data[0];
  }

  // Method to peek at the last position of the data
  peekBack() {
    return this.#data[this.#data.length - 1];
  }

  // Method that returns True/False if the data array is empty
  get isEmpty() {
    return this.#data.length === 0;
  }

  // Method that prints the data
  print() {
    let output = "[ ";
    for (let i = 0; i < this.#data.length; i++) {
      // Adding commas if the output isn't equal to what it is at the start
      // I added the \n, so that's why I removed this line
      //   if (output !== "[ \n") output += ", ";
      if (output === "[ ") output += "\n";
      // Adding line to the output
      output += `(${i}): ${this.#data[i]},\n`;
    }
    return output + "]";
  }
}

// const a = new Deque();
// a.insertFront("a");
// a.insertFront("b");
// a.insertFront("c");
// console.log(a.print("a"));
