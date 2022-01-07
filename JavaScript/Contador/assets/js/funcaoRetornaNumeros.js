function returnEvenValues(array){
    let listNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            listNums.push(array[i]);
        }
    }
    console.log(listNums);
}

let array = [1,2,3,4,5,6,7,8,9,10];

returnEvenValues(array)