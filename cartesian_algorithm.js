function cartesianMerge(setA, setB) {
    const resultArray = [];

    for(let elA of setA) {
        for(let elB of setB) {
            resultArray.push([elA, elB])
        }
    }
    return resultArray;
}

// todo add multiple sets version

console.log(cartesianMerge(['blue', 'red'], ['M', 'L']));