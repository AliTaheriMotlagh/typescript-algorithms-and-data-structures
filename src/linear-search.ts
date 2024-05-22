function linear(array: number[], targer: number) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === targer) {
      return index;
    }
  }
  return -1;
}

console.log(linear([90, -5, 2, 10, 4, 6, 9], 90));
