// Criando arrays
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

// Juntando arrays e criando uma matriz
const listaDeAlunosEMedias = [alunos, medias];

// Apresentando na tela utilizando template string
console.log(`O aluno(a) ${listaDeAlunosEMedias[0][1]} tirou ${listaDeAlunosEMedias[1][1]}`);

// Para treinar, criando vários arrays com diferentes tipos
const patrocinador = ['Tigrara', 'Osmoze', 'Morena Rosa'];
const idade = [8, 10, 12];
const patrimonio = [12000000, 4000000, 40000000];
const donos = ['Júlio', 'João', 'Marcos'];
const funcionando = [true, false, true]

// Criando um grande array
const patrocinadores = [patrocinador, idade, patrimonio, donos, funcionando];

// Apresentando na tela a matriz com vários arrays utilizando template string
console.log(`Agradecemos o nosso patrocinador ${patrocinadores[0][2]} que já está no mercado há ${patrocinadores[1][2]} com o patrimônio de ${patrocinadores[2][2]} reais liderado por ${patrocinadores[3][2]} e que ainda está funcionando! (${patrocinadores[4][2]})`);