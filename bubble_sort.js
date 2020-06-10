function bubbleSorting(array, firstIndex) {
  for (let i = firstIndex; i < array.length; i++) {
    if (array[firstIndex] > array[i]) {
        let temp = array[firstIndex];
        array[firstIndex] = array[i];
        array[i] = temp;
    }
  }
  if (firstIndex === array.length - 1) {
    return array;
  } else {
    return bubbleSorting(array, firstIndex + 1);
  }
}

// O(n2)

console.log(bubbleSorting([33, 1, 4, 6, 2, 55,23, 103, 22, -3, -10], 0));
