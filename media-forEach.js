const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
let media = 0;

notas.forEach(
    function(nota, indice){
        somaDasNotas += nota;
        console.log(`A nota "${nota}" que está no índice ${indice} foi adicionada à média!`);
    }
)

media = somaDasNotas / notas.length;
console.log(`A média entre às notas é ${media}`);