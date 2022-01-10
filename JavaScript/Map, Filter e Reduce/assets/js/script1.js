// Utilização do método filter

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filtrarPares(ar){
    return ar.filter(function(a){
        return a % 2 === 0;
    });
}

console.log(filtrarPares(arr));