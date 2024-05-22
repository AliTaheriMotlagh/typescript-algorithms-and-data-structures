function bubbleSort(array: number[]) {
  let isChangeHappend;
  do {
    isChangeHappend = false;
    for (let index = 0; index < array.length-1; index++) {
      if (array[index] > array[index + 1]) {
        const smallerItemTemp = array[index + 1];
        array[index + 1] = array[index];
        array[index] = smallerItemTemp;
        isChangeHappend = true;
      }
    }
  } while (isChangeHappend);
  return array;
}

console.log(bubbleSort([500, -8, 17, 14, 0]));
