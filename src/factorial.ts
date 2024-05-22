function factorial(n: number) {
  let res = 1;
  for (let index = n; index >= 1; index--) {
    res = res * index;
  }
  return res;
}

// function factorial(num: number) : number {
//     if (num == 0) return 1
//     else return num * factorial(num - 1)
// }

console.log(factorial(4));


