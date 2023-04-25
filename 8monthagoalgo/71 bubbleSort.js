function bubbleSort (arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0;  j < i-1; j++) {
      console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j+1]) {
        let temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort2 (arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i-1; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
}

bubbleSort([37, 34, 56, 26, 8, 12, 99, -2])