function mergeSort(array: number[]) {
  if (array.length < 2) {
    return array;
  }

  const midIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midIndex);
  const rightArray = array.slice(midIndex);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left: number[], right: number[]) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}
console.log(mergeSort([4,2,3]));
