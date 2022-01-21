function fizzBuzz(valor) {
    if(typeof valor !== 'number'){
        return 'Não é um número';
    }else{
        if(valor % 3 === 0 && valor % 5 === 0){
            return 'FizzBuzz';
        }
        else if(valor % 3 === 0){
            return 'Fizz';
        }
        else if(valor % 5 === 0){
            return 'Buzz';
        }
        return valor;
    }
}

console.log(fizzBuzz('string'));