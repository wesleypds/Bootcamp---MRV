const limite = 5;

function somarMultiplos(li){
    let multPorTres = 0;
    let multPorCinco = 0;
    for(i = 1; i <= li; i++){
        if(i % 3 === 0){
            multPorTres += i;
        }
        else if(i % 5 === 0){
            multPorCinco += i;
        }
    }
    return multPorTres + multPorCinco;
}

console.log(somarMultiplos(limite));