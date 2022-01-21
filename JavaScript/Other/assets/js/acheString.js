const mercadorias = ['Detergente',6.99,'Sabão em Pó',14.99];
const filmes = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Irmãos Russos',
    personagem: 'Thor'
};

function acheStringArray(arr){
    for(index of arr){
        if(typeof index === 'string'){
            console.log(index);
        }
    }
}

function acheStringObj(obj){
    for(chave in obj){
        if(typeof obj[chave] === 'string'){
            console.log(chave,':',obj[chave]);
        }
    }
}

acheStringArray(mercadorias);
console.log('');
acheStringObj(filmes);