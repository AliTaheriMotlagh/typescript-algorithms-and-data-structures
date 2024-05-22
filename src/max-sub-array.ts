function bozogtarinSubArry(arry) {
    let a = arry[0];
    let b = arry[0];
    for (let i = 1; i < arry.length; i++) {
      a = Math.max(arry[i], a + arry[i]);
      if (a > b) {
        b = a;
      }
    }
    return b
}

console.log(bozogtarinSubArry([-2, -3, 4, -1, -2, 1, 5, -3]));
