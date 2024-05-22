function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = numberToInsert;
  }
  return array;
}

console.log(insertionSort([1, 2, 3, 4]));
