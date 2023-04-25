//Write a function called maxSubarraySum
//which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements in the array.

const maxSubarraySum = (array, n) => {
  for (let i = 0; i < array.length - n + 1; i++) {
    let temp = 0;
    let max = -Infinity;

    for (let j = 0; j < n; j++) {
      temp += array[j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;

  //i부터 i+n-1까지 더한다
  //더한 값을 max값과 비교

  //가장 큰값을 max에 저장, return
};

maxSubarraySum([1, 2, 5, 2, 8, 1, 4], 2);

// function a(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
