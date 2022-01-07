// 1° Forma de fazer
function verificarPalindromo(string1){
    if(!string1) return "String inexistente!";

    // Função split irá separar as letras de uma string fazendo com que a variável se torne um array
    // Função reverse irá reverter todos os elementos de um array
    // Função join irá juntar todos os elementos de um array

    return (string1.split("").reverse().join("") === string1) ? "String é um palíndromo" :"String não é um palíndromo";
}

// 2° Forma de fazer
function verificarPalindromo2(string){
    if(!string) return "String inexistente!";
    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]) return "String não é um palíndromo";
    }
    return "String é um palíndromo";
}

console.log(verificarPalindromo("pipa"));
console.log(verificarPalindromo2("ovo"));