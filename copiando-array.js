const notas = [7, 7, 8, 9];

//                  spread operator, ou "operador de espalhamento"
// Com ele nós podemos clonar arrays, pois se linkamos um array à outro (novasNotas = notas;) tudo o que for feito em um dos array vai ser alterado em ambos.
//                            podemos adicionar índices também, assim como o .push(), numéricos, string e booleanos
const novasNotas = [...notas, 10, 20, "Emanuel", true];

// Testando se retira o último índice, true
// novasNotas.pop()

console.log(notas);
console.log(novasNotas);