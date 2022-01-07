const alunos = [
    {
        nome : "João",
        nota : 7,
        tuma : "1b",
    },
    {
        nome : "Wesley",
        nota : 5,
        tuma : "1b",
    },
    {
        nome : "Camila",
        nota : 6,
        tuma : "1b",
    }
];

function alunosAprov(arr, mediaFinal){
    let alunosAprov = [];
    for(let i = 0; i < arr.length; i++){
        const {nome, nota} = arr[i];
        if(nota >= mediaFinal){
            alunosAprov.push(nome);
        }
    }
    return alunosAprov;
}

console.log(alunosAprov(alunos, 6));