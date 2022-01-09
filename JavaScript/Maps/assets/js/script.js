function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('João', 'Admin');
usuarios.set('Camila', 'Admin');
usuarios.set('Neusa', 'User');
usuarios.set('Wesley', 'Admin');
usuarios.set('Danielle', 'User');

console.log(getAdmins(usuarios));