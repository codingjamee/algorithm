const maxSubarraySum = (array, num) => {
  //첫번째 배열을 더한다.
  //두번째부터는 첫번째원소를 빼고 마지막 원소를 더한다.
  //계속 비교해서 큰 수를 return 한다.
  let curSum = 0;
  let firstSum = 0;
  let maxSum = -Infinity;
  let j = 0;
  console.log(typeof num);

  if (array.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    firstSum += array[i];
    curSum = firstSum;
  }

  while (j < array.length - num) {
    if (j + num > array.length) return;
    curSum += array[j + num] - array[j];
    maxSum = Math.max(curSum, maxSum);
    j++;
  }

  return maxSum;
};

console.log("execute 1");
maxSubarraySum([100, 200, 300, 400], 2); // 700
console.log("execute 2");
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
console.log("execute 3");
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
console.log("execute 4");
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
console.log("execute 5");
maxSubarraySum([2, 3], 3); // null
