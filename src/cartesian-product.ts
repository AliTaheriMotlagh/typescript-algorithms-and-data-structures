function cartesianProduct(a: number[], b: number[]): number[] {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    const aElement = a[i];
    for (let j = 0; j < b.length; j++) {
      const bElement = b[j];
      result.push([aElement, bElement]);
    }
  }
  return result;
}

console.log(cartesianProduct([1, 2], [3, 4]));
