// On binary search we can use only sorted arrays of data
// We always divide array by half and continue to search to the element we are looking for

function findElement(sortedArray, element) {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;
    while (startIndex <= endIndex) {
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (element === sortedArray[middleIndex]) {
            return middleIndex;
        }

        if (sortedArray[middleIndex] < element) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }
}

// O(log n)

console.log(findElement([1, 5, 7, 10], 7));

/// recursive binary search


function recursiveBinarySearch(sortedArray, element) {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    const middleIndex = Math.floor((endIndex - startIndex) / 2);
    if(element === sortedArray[middleIndex]) {
        return middleIndex;
    }
    if (sortedArray[middleIndex] < element) {
        
    } else {

    }
}


recursiveBinarySearch([1, 4, 6, 10, 30, 50, 90, 100], 90);