let nome = 'wesley';
let sobreNome = 'pereira';

// Desta forma irá juntar nome com sobreNome mas irá ficar colada as strings

let fullName = nome.concat(sobreNome);

console.log(fullName);

// Desta forma irá concatenar as strings mas com um espaço entre elas

fullName = nome + ' ' + sobreNome;

console.log(fullName);

// Desta forma irá concatenar as strings mas com um espaço entre elas e sem precisá que operadores aritméticos

fullName = `${nome} ${sobreNome}`;

console.log(fullName);