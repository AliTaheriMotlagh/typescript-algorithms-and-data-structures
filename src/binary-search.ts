// function binary(array: number[], targer: number) {
//   const middelOfArray = Math.floor(array.length / 2);
//   let start, end;

//   if (array[middelOfArray] > targer) {
//     start = 0;
//     end = middelOfArray;
//   } else {
//     start = middelOfArray;
//     end = array.length - 1;
//   }

//   for (let index = start; index <= end; index++) {
//     const element = array[index];
//     if (element == targer) {
//       return index;
//     }
//   }
//   return -1;
// }

// function binary(array: number[], targer: number) {
//   let leftIndex = 0;
//   let rightIndex = array.length - 1;

//   while (leftIndex <= rightIndex) {
//     const middelIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (targer === array[middelIndex]) {
//       return middelIndex;
//     }

//     if (targer < array[middelIndex]) {
//       rightIndex = middelIndex - 1;
//     } else {
//       leftIndex = middelIndex + 1;
//     }
//   }
//   return -1;
// }

function search(array: number[], target: number) {
  return binarySearch(array, target, 0, array.length - 1);
}
function binarySearch(
  array: number[],
  target: number,
  LIndex: number,
  RIndex: number
): number {
  if (LIndex > RIndex) {
    return -1;
  }
  const middelIndex = Math.floor((LIndex + RIndex) / 2);
  const middelValue = array[middelIndex];
  if (target == middelValue) {
    return middelIndex;
  }

  if (target > middelValue) {
    return binarySearch(array, target, middelIndex + 1, RIndex);
  } else if (target < middelValue) {
    return binarySearch(array, target, LIndex, middelIndex - 1);
  }
}

console.log(search([-5, 2, 4, 6, 10], 10));
console.log(search([-5, 2, 4, 6, 10], 6));
console.log(search([-5, 2, 4, 6, 10], 20));


// function searchTest(nums: number[], target: number): number {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid] > target) {
//       right = mid - 1;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else if (nums[mid] === target) {
//       return mid;
//     }
//   }
//   return -1;
// }

// console.log(searchTest([-1, 0, 3, 5, 9, 12,9], 9));
