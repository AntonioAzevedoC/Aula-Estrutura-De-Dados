import LinkedList from "../CLASSES/_js-Lista-Encadeada.mjs";

const list = new LinkedList();

list.insert(0, "A");
list.insert(1, "B");
list.insert(2, "C");
list.insert(3, "D");
list.insert(4, "E");
console.log(list.print());
list.insert(3, "X");
console.log(list.print());
list.remove(5);
list.removeHead();
list.inserHead("HEAD");
list.removeTail();
list.insertTail("TAIL");
console.log(list.print());
console.log(list.indexOf("X"));
console.log(list.peekPos(2));
console.log(list.peekHead());
console.log(list.peekTail());
