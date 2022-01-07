function calculadora(){
    const op = Number(prompt("Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Divisão\n4 - Multiplicação"));
    if(!op || op > 4){
        alert("ERROR - Operação Inválida");
        calculadora();
    }else{
        let entrada1 = Number(prompt("Digite o primeiro número:"));
        let entrada2 = Number(prompt("Digite o segundo número:"));
        let resultado;
        function soma(){
            resultado = entrada1 + entrada2;
            alert(`${entrada1} + ${entrada2} = ${resultado}`);
        }
        function subtracao(){
            resultado = entrada1 - entrada2;
            alert(`${entrada1} - ${entrada2} = ${resultado}`);
        }
        function divisao(){
            resultado = entrada1 / entrada2;
            alert(`${entrada1} / ${entrada2} = ${resultado}`);
        }
        function multiplicacao(){
            resultado = entrada1 * entrada2;
            alert(`${entrada1} * ${entrada2} = ${resultado}`);
        }
        if(!entrada1 || !entrada2){
            alert("ERROR - Número Inválido");
            calculadora();
        }else{
            switch(op){
                case 1:
                    soma();
                break;
                case 2:
                    subtracao();
                break;
                case 3:
                    divisao();
                break;
                case 4:
                    multiplicacao();
                break;
            }
        }
    }
}

do{
    calculadora();
    aux = Number(prompt("Escolha uma opção:\n1 - Continuar Calculando\n0 - Sair do Programa"));
}while(aux != 0);
