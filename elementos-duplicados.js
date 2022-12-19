const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//             novo Set (vem com lógicas internas que dizem que os elementos de um Set não podem se repetir)
// Dessa forma ele nos retorna também uma mensagem "Set(número de índices)", para que ele não apareça, fazemos:
const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);