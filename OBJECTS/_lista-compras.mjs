"use strict";

import Deque from "../CLASSES/_js-Deque.mjs";

const listaCompras = new Deque();
// listaCompras.insertBack("Item");

console.log(
  `A lista de compras ${listaCompras.isEmpty ? "" : "não "}está vazia.`
);

console.log(listaCompras.print());

// Alimentício -> Início
listaCompras.insertFront("Arroz");
listaCompras.insertFront("Feijão");
listaCompras.insertFront("Macarrão");

// Higiene -> Final
listaCompras.insertBack("Sabão em pó");
listaCompras.insertBack("Desodorante");
listaCompras.insertBack("Água sanitária");

console.log(listaCompras.print());

// Alimentício -> Início
listaCompras.insertFront("Café");
listaCompras.insertFront("Açucar");

// Higiene -> Final
listaCompras.insertBack("Amaciante");
listaCompras.insertBack("Shampoo");

console.log(listaCompras.print());

// Fazendo remoções
let removido = listaCompras.removeBack();
console.log(removido);

removido = listaCompras.removeFront();
console.log(removido);

console.log(listaCompras.print());

// Peeking
console.log(
  `Item na frente: ${listaCompras.peekFront()}\nItem no fim: ${listaCompras.peekBack()}`
);
