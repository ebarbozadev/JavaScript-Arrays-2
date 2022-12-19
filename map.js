// Criando array
const notas = [10, 9.5, 8, 7, 6];

// Temos que atribuir o valor do map para um novo array, para que possamos ver a função realizar
// 
const notasAtualizadas = notas.map(
    (nota) => {
        return nota + 1;
    }
)

console.log(notasAtualizadas);