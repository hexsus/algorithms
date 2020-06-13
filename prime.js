function isPrimeNumber(number) {
    for(let i = 2; i < Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

// ___Time complexity for this algorithm___
// Best case [1,2] => O(1)
// Average case: O(n), Improved case => O(sqrt(n))
// Worst case = 100,000 => O(n), Improved case => O(sqrt(n))
// In most cases average case will be a worst case...