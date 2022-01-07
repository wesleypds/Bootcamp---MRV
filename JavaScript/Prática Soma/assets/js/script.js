function verificarIguais(numeroUm, numeroDois){
    let saoIguais = "";
    if(numeroUm !== numeroDois) saoIguais = "não";
    return `Os números ${numeroUm} e ${numeroDois} ${saoIguais} são iguais.`
}

function compararNumeros(numeroUm, numeroDois){
    const soma = numeroUm + numeroDois;
    let maiorQueDez = "maior";
    let maiorQueVinte = "maior";
    if(soma < 10) maiorQueDez = "menor";
    if(soma < 20) maiorQueVinte = "menor";
    return `Sua soma é ${soma}, que é ${maiorQueDez} que 10 e ${maiorQueVinte} que 20.`
}

function desafioPratico(numeroUm, numeroDois){
    const stringIguais = verificarIguais(numeroUm, numeroDois);
    const stringComparar = compararNumeros(numeroUm, numeroDois);
    return `${stringIguais} ${stringComparar}`;
}

console.log(desafioPratico(12,12));