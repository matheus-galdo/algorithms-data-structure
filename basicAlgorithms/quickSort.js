let cont = 0;
function quickSort(list) {
    cont++;
    if (list.length < 2) {
        return list;
    }

    const pivot = list.length > 2 ? randomPivot(list.length - 2) : 0; //índice aleatorio que é < list.length e maior que 0
    // const pivot = 0;

    console.log([list[pivot]], pivot);
    const listLeft = list.filter((item) => {
        cont++;
        return item < list[pivot];
    });
    console.log('listLeft', listLeft);

    const listRight = list.filter((item) => {
        cont++;
        return item > list[pivot];
    });
    console.log('listRight', listRight);

    // return({listLeft, pivot, pivotElement: [list[pivot]], listRight})
    return [...quickSort(listLeft), list[pivot], ...quickSort(listRight)];
}

function randomPivot(max) {
    let num = 0;
    
    do {
        num = Math.round(Math.random() * 10);
    } while (num === 0 || num > max);

    return num;
}


// console.log(quickSort([10, 2, 3, 4, 5]))
console.log(quickSort([21, 37, 25, 10, 6, 9, 2]));
console.log('cont', cont);

// console.log(quickSort([33, 15, 10]))
// console.log(quickSort([33, 15, 10])) 