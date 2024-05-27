function fib(n: number) {
  const fiboNumbers = [0, 1];
  for (let index = 1; index < n; index++) {
    fiboNumbers[index + 1] = fiboNumbers[index] + fiboNumbers[index - 1];
    console.log(fiboNumbers[index + 1]);
  }
  return fiboNumbers.length;
}
console.log(fib(7));

function fibonacci(num) {
  if (num == 1) return 0; 
  if (num == 2) return 1;
  console.log(num);
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(7));
