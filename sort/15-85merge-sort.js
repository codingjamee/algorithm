//헬퍼함수임
const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const newArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] >= arr2[j]) {
      newArray.push(arr2[j]);
      j++;
    }
    if (arr1[i] < arr2[j]) {
      newArray.push(arr1[i]);
      i++;
    }
  }
  if (newArray.length < arr1.length + arr2.length) {
    for (let k = i; k < arr1.length; k++) {
      newArray.push(arr1[k]);
    }
    for (let l = j; l < arr2.length; l++) {
      newArray.push(arr2[l]);
    }
  }
  return newArray;
};

const mergeSort = (arr) => {
  //새로운 어레이?
  //혹은 그대로의 어레이?

  //인수 갯수가 1또는 0일 때까지
  //쪼개기

  if (arr.length <= 1) return arr; //재귀 멈춤조건
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([1, 10, 50], [2, 14, 99, 100]));
