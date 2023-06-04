function findNumber(num, list, tryNumber = 0) {
    const tries = tryNumber + 1;

    const halfSize = Math.floor(list.length/2);
    
    console.log('check atual ', halfSize, ' - ', list[halfSize-1]);
    //caso base
    if (list[halfSize-1] === num) {
        return `O número ${num} foi encontrado em ${tries} tentativas no indice ${halfSize-1}`;
    }


    //caso recursivo
    if (list[halfSize-1] > num) {
        const newList = list.slice(0, halfSize-1);
        console.log('nova lista pequena', newList);
        return findNumber(num, newList, tries);
    }

    if (list[halfSize-1] < num) {
        const newList = list.slice(halfSize, list.length);
        console.log('nova lista grande', newList);
        return findNumber(num, newList, tries);
    }
}



const lista = [];
for (let i = 0; i < 100; i++) {
    lista.push(i);
}

const num = 57;

console.log(findNumber(num, lista));