
function HappyNumber(num: number, usedNum: number[] = []): boolean {
  let digits = num.toString().split("");
  let sum = 0;
  for (let index = 0; index < digits.length; index++) {
    const digit = digits[index];
    sum = sum + Math.pow(+digit, 2);
  }
  const isRepeat = usedNum.filter((item) => item === sum).length !== 0;
  if (isRepeat) {
    return false;
  } else if (sum == 1) {
    return true;
  } else {
    usedNum.push(sum);
    return HappyNumber(sum, usedNum);
  }
}
console.log(HappyNumber(19));
console.log(HappyNumber(46));
