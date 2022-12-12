// Nota errada
const nota = [10, 6, 8];
let media = 0;
let i;
console.log(`Nota errada ${nota}`);

// Media errada
for(i = 0; i < nota.length; i++){
    media += nota[i];
}
media = media / nota.length;
console.log(`Média errada ${media}`);

// Nota certa
media = 0;
nota.push(7);
console.log(`Nota certa ${nota}`);

// Media certa
for(i = 0; i < nota.length; i++){
    media += nota[i];
}
media = media / nota.length;
console.log(`Média certa ${media}`);