"use strict";

// A lista encadeada (Linked list) é uma estrutura de dados formada por unidades de informação cahamadas nodos ou nós
// Cada nodo da lista encadeada tem duas partes: uma que armazena a informação e outra que que guarda o endereço do próximo nodo da sequência
// A qualquer momento, temos um conhecimento apenas limitado de onde se encontram todos os nodos da lista. Sabemos apenas onde está o primeiro e o último nodo da sequência. Os nodos intermediários precisam ser encontrados partindo-se do primeiro e percorrendo a sequência

// Achei um link do github que mostra os pseudocódigos
// https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/linked-list/README.pt-BR.md

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
// let nodo = new Node(110);
// console.log(nodo);

export default class LinkedList {
  #head; // Valor inicial da lista
  #tail; // Valor final da lista (O rabo)
  #count; // Valor final

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#count = 0;
  }

  get isEmpty() {
    return this.#count === 0;
  }

  get count() {
    return this.#count;
  }

  // Método para inserir valores
  insert(pos, val) {
    // pos = posição em que quer inserir o valor (Se "pos" for maior que o número de posições, é colocado no rabo)
    // val = valor a ser colocado na posição

    const inserted = new Node(val); // Criando novo nó para ser inserido

    // 1° Caso - "lista" está vazia
    if (this.isEmpty) {
      this.#head = inserted;
      this.#tail = inserted;
    }

    // 2° Caso - "Lista" não vazia, inserção na primeira posição (head)
    else if (pos === 0) {
      inserted.next = this.#head; // Definindo a atual primeira posição como a próxima de "inserted"
      this.#head = inserted; // Definindo "inserted" como a primeira posição (head)
    }

    // 3° Caso - "Lista" não vazia, inserção na última posição, colocar no rabo (tail)
    else if (pos >= this.#count) {
      this.#tail.next = inserted;
      this.#tail = inserted;
    }

    // 4° Caso - "Lista" não vazia, inserção na posição "pos"
    else {
      let before = this.#head; // Definindo "anterior" como o primeiro item da lista

      // Fazendo loop até a posição requistada
      for (let i = 1; i < pos; i++) {
        before = before.next; // "Before" recebe o item na posição "pos"
      }

      let after = before.next; // "After" recebe o item na posição depois da posição "pos"

      inserted.next = after; // Tornando o item depois de "inserted" o item "After"

      before.next = inserted; // Tornando o item depois de "before" o item "inserted"

      // Exemplo:
      // Inicial: A,B,C,D,E
      // Inserir X na posição 3
      // before: A -> B,C
      // after: D
      // X next: D
      // before next: X
      // Final: A,B,C,X,D,E
    }

    this.#count++;
  }

  // Atalho para inserção na primeira posição (head)
  inserHead(val) {
    this.insert(0, val);
  }

  // Atalho para inserção na última posição (tail)
  insertTail(val) {
    this.insert(this.count, val);
  }

  // Método para remoção de um nó na lista
  remove(pos) {
    // 1° case => In case the position given doesn't exist
    if (this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined;

    let removed;
    // 2° case => In case the desired position is head
    if (pos === 0) {
      removed = this.#head;
      this.#head = this.#head.next;

      // In case there is only one position in the linked list, #tail must also be updated
      if (this.#count === 1) this.#tail = null;
    }

    // 3° case => In case it is any other position
    else {
      let before = this.#head;

      for (let i = 1; i < pos; i++) {
        before = before.next;
      }

      removed = before.next;

      let after = before.next.next;
      before.next = after;

      if (pos === this.#count - 1) {
        this.#tail = before;
      }
    }

    this.#count--;
    return removed;
  }

  // Atalho para remover head
  removeHead() {
    return this.remove(0);
  }

  // Atalho para remover o rabo
  removeTail() {
    return this.remove(this.#count - 1);
  }

  // Method to find the position of a value
  indexOf(val) {
    if (this.isEmpty) return -1; // In case the list is empty

    let node = this.#head;

    // Looping the list
    for (let i = 0; i < this.#count; i++) {
      if (node.data === val) return i; // If value is found
      else node = node.next; // If it isn't
    }
    return -1; // In case the value isn't in the list
  }

  // Method that shows the value of a position
  peekPos(pos) {
    // 1° case => In case the position given doesn't exist
    if (this.isEmpty || pos < 0 || pos > this.#count) return undefined;

    let peek;
    // 2° case => In case the desired position is head
    if (pos === 0) {
      peek = this.#head.data;
    }

    // 3° case => In case it is any other position
    else {
      let node = this.#head;

      for (let i = 1; i < pos; i++) {
        node = node.next;
      }

      peek = node.data;
    }

    return peek;
  }

  // Atalho para encontrar valor em head
  peekHead() {
    return this.peekPos(0);
  }

  // Atalho para encontrar valor em tail
  peekTail() {
    return this.peekPos(this.#count);
  }

  // Method that prints the list
  print() {
    let output = "(\n";
    let node = this.#head;
    for (let i = 0; i < this.#count; i++) {
      output += `[${i}]: ${node.data}\n`;
      node = node.next;
    }
    output += `), count=${this.#count}`;
    return output;
  }
}

// huawei
