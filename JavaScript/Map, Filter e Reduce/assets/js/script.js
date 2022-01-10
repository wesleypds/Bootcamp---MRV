// Utilização do método map

const arr = [1, 2, 3, 4, 5];
const pessoa = {
    idade : 24,
};

// Usando sem o parâmetro this

function mapSemThis(ar){
    return ar.map(function(item){
        return item * 2;
    });
}

// Usando com o parâmetro this

function mapComThis(ar, thisArg){
    return ar.map(function(item){
        return item * this.idade;
    }, thisArg);
}

console.log(mapSemThis(arr));
console.log(mapComThis(arr, pessoa));