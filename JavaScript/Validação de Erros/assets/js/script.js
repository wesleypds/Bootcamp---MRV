function validarArray(arr, numero){
    try{
        if(!arr || !numero) throw new ReferenceError("Envie os parâmetros");
        if(typeof arr !== 'object') throw new TypeError("Envie um dado do tipo Object");
        if(typeof numero !== 'number') throw new TypeError("Envie um dado do tipo Number");
        if(arr.length !== numero) throw new RangeError("Tamanho do Array diferente do Numero");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Reference Error!");
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Type Error");
            console.log(e.message);
        }else{
            console.log("Range Error");
            console.log(e.message);
        }
    }
}

const meuArray = 'abs';

console.log(validarArray());
