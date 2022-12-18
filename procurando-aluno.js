const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeAlunoENota(aluno){
    // Estamos crianso dentro da função, caso criássemos fora daria problema
    const [alunos, medias] = listaDeAlunosEMedias;
    
    // Verificamos no íncide 0 (alunos) se o aluno que foi passado como parâmetro está incluso (include) e essa verificação faz retorna um valor, true ou false
    if(alunos.includes(aluno)){
    // if(listaDeAlunosEMedias[0].includes(aluno)){
    // Criamos uma variável para guardar o número que vai ser gerado com o "indexOf"
    // indexOf é para procurarmos o índice de algo, "índice de" (index of) e ele nos retorna um número
        const indice = alunos.indexOf(aluno);
        console.log(`A nota do(a) ${aluno} é ${medias[indice]}`);
    } else{
        console.log(`O(a) ${aluno} não foi encontrado na nossa lista de aluno!`);
    }
}

exibeAlunoENota("Ana");
exibeAlunoENota("Emanuel");