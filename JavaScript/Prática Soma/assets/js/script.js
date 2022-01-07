function desafioPratico(numero1, numero2){
    const soma = numero1 + numero2;
    if(numero1 === numero2){
        if(soma < 10){
            console.log(`Os números ${numero1} e ${numero2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
        }else if(soma > 10 && soma < 20){
            console.log(`Os números ${numero1} e ${numero2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
        }else{
            console.log(`Os números ${numero1} e ${numero2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`);
        }
    }else{
        if(soma < 10){
            console.log(`Os números ${numero1} e ${numero2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
        }else if(soma > 10 && soma < 20){
            console.log(`Os números ${numero1} e ${numero2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
        }else{
            console.log(`Os números ${numero1} e ${numero2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`);
        }
    }
}

desafioPratico(6,6);