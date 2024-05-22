function quickSort(array: number[]) {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (let index = 0; index < array.length - 1; index++) {
    const element = array[index];
    if (pivot > element) {
      left.push(element);
    } else {
      right.push(element);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([-6, 20, 8, -2, 4]));
