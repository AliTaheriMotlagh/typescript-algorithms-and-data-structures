function fib(n: number) {
  const fiboNumbers = [0, 1];
  for (let index = 1; index < n; index++) {
    fiboNumbers[index + 1] = fiboNumbers[index] + fiboNumbers[index - 1];
  }
  return fiboNumbers.length;
}
console.log(fib(7));
