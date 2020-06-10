function sort(arr) {
    if(arr.length < 2) {
        return arr;
    }

    if(arr.length == 2) {
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);
    
    const sortedLeftArray = sort(leftArray);
    const sortedRightArray = sort(rightArray);

    const mergeArray = [];
    let leftArrayIndex = 0;
    let rightArrayIdex = 0;

    while(leftArrayIndex < sortedLeftArray.length || rightArrayIdex < sortedRightArray.length) {
        if(leftArrayIndex >= sortedLeftArray.length || sortedLeftArray[leftArrayIndex] > sortedRightArray[rightArrayIdex]) {
            mergeArray.push(sortedRightArray[rightArrayIdex]);
            rightArrayIdex++;
        } else {
            mergeArray.push(sortedLeftArray[leftArrayIndex]);
            leftArrayIndex++;
        }
    }
    return mergeArray;
}


const sortedArray = sort([0, 3, 1, 5]);
console.log(sortedArray);