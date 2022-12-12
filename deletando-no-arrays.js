// Nota e media errada
let nota = [10, 6, 8, 5.5, 10];
let somaNotas = 0;
let media = 0;

console.log(`Nota errada ${nota}`);

for (let i = 0; i < nota.length; i++){
    somaNotas += nota[i];
}
media = somaNotas / nota.length;
console.log(`Media errada ${media}`);

// Nota e media certa, removida
nota.pop();
console.log(`Nota certa ${nota}`);

somaNotas = 0;
media = 0;

for (i = 0; i < nota.length; i++){
    somaNotas += nota[i];
}
media = somaNotas / nota.length;
console.log(`Media certa ${media}`);