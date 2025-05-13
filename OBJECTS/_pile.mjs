import Stack from "../CLASSES/_js-Stack.mjs";

let pile = new Stack();
let pile2 = new Stack();
let pile3 = new Stack();

// Messing with pile
// console.log(pile.isEmpty);
// pile.insertData(10);
// pile.insertData(11);
// pile.insertData(12);
// console.log(pile.lastPosition());
// pile.insertData(13);
// console.log(pile.getData);
// console.log(pile.print());
// console.log(pile.removeData());
// console.log(pile.removeData());
// console.log(pile.removeData());
// console.log(pile.getData);
// console.log(pile.isEmpty);

// Messing with pile2
let frase = "Socorram-me, subi no ônibus em Marrocos";
for (const l of frase) {
  pile2.insertData(l);
}
let invertido = "";
// for (let i = pile2.getData.length; i--; i > 0) {
//   invertido += pile2.getData[i];
// }
while (!pile2.isEmpty) invertido += pile2.removeData();

console.log(invertido);
