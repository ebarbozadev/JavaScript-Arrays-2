const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// Splice é um comando que utilizamos para retirarmos um nome a partir de um índice, e até dele, tirarmos mais, no caso, queremos que ele tire o índice 1 (Ana), e a partir dali, quer que tire 2 índices contando com ele
nomes.splice(1, 2);

// Ou apenas 1
// nomes.splice(1, 1);
console.log(nomes);

// Vimos que conseguimos remover índices do array, agora vamos adicionar
nomes.push("Rodrigo");
console.log(nomes);
// Dessa forma vemos que adicionamos, concluindo o desafio, mas, o que não sabemos é que o método splice aceita mais um parâmetro, que é colocar algo no lugar daqueles índices que retiramos, veja:

const nomesTurma = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
nomesTurma.splice(1, 2, "Emanuel", "Carlos", "Daiane");
console.log(nomesTurma);