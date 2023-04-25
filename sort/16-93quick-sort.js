//arr중 아무 요소를 랜덤하게 선택
//해당 요소보다 작은 수는 왼쪽으로, 큰 수는 오른쪽으로 정렬
//pivot helper 함수는 선택한 요소의 정확한 위치를 return
//그 전까지 quickSort를 호출
//그 이후도 quickSort를 호출

const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}; //arr 왼쪽에는 pivot보다 작은수, 오른쪽은 pivot보다 큰수의 배열 위치를 return
//그것과 함께 arr를 변경?? 어떻게 변경해주는거지
//값에의한 전달은 해당값을 변경하지 않지만.
//참조에 의한 전달이므로 해당 배열을 변경해줌
//1개 이하의 배열까지 갈라서 서로 비교해 바꿈ㄴ

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([26, 14, 2, 22, 26, 8, 14, 17, 34, 7, 21]));
