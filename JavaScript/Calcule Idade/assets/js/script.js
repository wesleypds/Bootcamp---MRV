const pessoa1 = {
    nome : "Wesley",
    idade : 24,
};

const pessoa2 = {
    nome : "Camila",
    idade : 21,
};

const pessoa3 = {
    nome : "Neusa",
    idade : 47,
};

const pessoa4 = {
    nome : "Danielle",
    idade : 26,
};

function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

console.log(calcularIdade.call(pessoa2, 10));