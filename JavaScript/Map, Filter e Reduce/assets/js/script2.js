// Utilização do método reduce

const nums = [55, 23, 1, 4];

// 1° Tarefa

function somarNums(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    });
}

// 2° Tarefa

function listaPrecos(arr, saldo){
    return arr.reduce(function(prev, current){
        return prev - current;
    }, saldo);
}

console.log(somarNums(nums));
console.log(listaPrecos(nums, 86));