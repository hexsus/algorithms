function factorialOfNumber(number) {
    let result = 1;
    for(let i = 2; i <= number; i++) {
            result = result * i;
    }

    return result;
}

// O(n)
console.log(factorialOfNumber(8));

function recursiveFactorial(number) {
    if(number === 1) {
        return 1;
    }
    return number * recursiveFactorial(number - 1);
}

// O(n)
console.log(factorialOfNumber(8));