// Criando array e variável média
const notas = [10, 8, 5.5, 6];
let media = 0;

// Fazendo o laço com for of
// O for-of faz com que possamos dizer o que tem dentro do array, ou seja, dentro do array "notas" tem nota
for (let nota of notas){
    media += nota;
}
media = media / notas.length;
console.log(media);