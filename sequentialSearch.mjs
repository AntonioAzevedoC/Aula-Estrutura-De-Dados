console.log('Hello world')

// Armazenando dados de maneira estruturada
// Por exemplo, um array é um armazenamento estruturado, um BD organizado é um estrutura de dados

// Buscas binárias e buscas sequênciais são algoritmos para fazer buscas em estruturas de dados 
// I'll start doing my notes in english now
// Deciding witch searching algorithm to apply will have to be in a case by case basis, as they all have their strengths and weaknesses, they depend on the context

// BUSCA SEQUÊNCIAL
// Sequential search
// This type of search algorithm searches in each possible value, this makes it a bad search system when you are searching for only one value (as it could be the last one),
// or when you are searching in a big list of data (because that would consume a lot of )
// When a match is not found, the default is to return -1, but you can do whatever you want

// Data Structures that will be used in the examples
import {nomesDesordenados} from "./data/nomes-desord.mjs"
import {nomes} from "./data/vetor-nomes.mjs"
import {objNomes} from "./data/vetor-obj-nomes.mjs"

const arr1 = [1, 9, 2, 3, 4, 5, 6, 7, 8, 8, 9, 0, 23, 4, 5, 6, 1, 7, 6, 5, 4, 3, 2, 4, 7, 2, 23, 5, 999, -500]

// Example:

// Finding the first X in the array and returning its position
const findX = function(arr, x) {
    // Loop through array length
    for (let i = 0; i < arr.length; i++) {
        // if array position value is equal to x, return the position
        if (arr[i] === x) return i
    }
    // If value isn't found, return -1 (default)
    return -1
}

// console.log(findX(arr1, 45)) // This value is not in the array, so this returns -1
// console.log(findX(arr1, 23))
// console.log(findX(arr1, 1))
// console.log(findX(arr1, 5))
// console.log(findX(arr1, -500))
// console.log(findX(nomesDesordenados, "LELINDA"))
// console.log(findX(nomes, "ABADIO"))

// I just want to say, Alexandre (the professor) wrote exactly what I did after I wrote it, I love knowing things

//
//
// Searching in an array of objects
//
//

// To not have to write a bunch of loops for the Object, you can call specific functions that parse through the desired data, like this

// Searching for first_name
const findName = function(obj, fName) {
    return obj.first_name === fName
}

// Searching for alternative_names
const altName = function(obj, fName) {
    return obj.alternative_names === fName
}

// Search function
const findInObject = function(arr, fnComp, fName) {
    // Loop through array length
    for (let i = 0; i < arr.length; i++) {
        // if function call returns "true", return the position
        if (fnComp(arr[i], fName.toUpperCase()    )) return i
    }
    // If value isn't found, return -1 (default)
    return -1
}

// You can then search for different values, and different keys
console.log(findInObject(objNomes, findName, "ABISAIR"))
console.log(findInObject(objNomes, findName, "qyfbcwhkajeyhfak"))
console.log(findInObject(objNomes, altName, "AABRAO|ABRAHAO|ABRAO|ABRHAO|ABRRAO|ADRAAO|ADRAO|HABRAAO|HABRAO"))
