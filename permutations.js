// function permutationWithoutRepetiotion(array) {
//     const result = [];
//     for(let i = 0; i < array.length; i++) {

//     }
// }

// const arrayWithValues = ['Make a meal', 'Do exercises', 'Drink water'];
// const result = permutationWithoutRepetiotion(arrayWithValues);
// console.log(result);



/// Permutation with repetitions
function getPermutations(options, length) {
    const permutations = [];
    if(length === 1) {
        return options.map(option => [option]);
    }

    const subPermutations = getPermutations(options, length - 1);
    console.log(subPermutations);

    for(const option of options) {
        for(const permutation of subPermutations) {
            permutations.push([option].concat(permutation));
        }
    }

    return permutations;
}


const options = [1,2,3];
const length = 3;


console.log(getPermutations(options, length));