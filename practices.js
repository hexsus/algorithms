function minimalInArray(arrayOfNumbers) {
    let minimalNumber = arrayOfNumbers[0];
    for (let i = 0; i < arrayOfNumbers.length; i ++) {
        if  (arrayOfNumbers[i] < minimalNumber) {
            minimalNumber = arrayOfNumbers[i];
        }
    }
    return minimalNumber;
}
// O(n)

function evenOrOddNumber(number) {
    return number % 2 == 0;
}
// O(1);


function isPowerOfTwo(number) {
    return number % 2 == 0;
}
// O(1) Constant time complexity