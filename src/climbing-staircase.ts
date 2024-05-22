function climbingStair(n: number) {
  const numberOfWay = [1, 2];
  for (let index = 2; index <= n; index++) {
    numberOfWay[index] = numberOfWay[index-1] + numberOfWay[index - 2];
  }

  return numberOfWay[n - 1];
}
console.log(climbingStair(4));
