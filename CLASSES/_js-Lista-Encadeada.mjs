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
}
