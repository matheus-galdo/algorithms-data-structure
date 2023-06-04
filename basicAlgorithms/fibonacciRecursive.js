function calcFibonacci(num) {
    
    if (num < 0) {
        return 0;
    }

    if (num === 1 || num === 2) {
        return 1;
    }

    const minusOne = calcFibonacci(num-1);
    const minus2 = calcFibonacci(num-2);
    console.log({num, minusOne, minus2, sum: minusOne + minus2});

    return calcFibonacci(num-1) + calcFibonacci(num-2);
}

const result = calcFibonacci(5);
console.log({result});