function substituirPares(arr){
    if(!arr) return -1;
    if(arr.length === 0) return -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            arr[i] = 0;
        }
    }
    return arr;
}

let array = [1,2,3,4];
console.log(substituirPares(array));