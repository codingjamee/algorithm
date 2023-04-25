const bubbleSort = (array) => {
  for (i = array.length - 1; i > -1; i--) {
    let noSwaps = true;
    for (j = 0; j < i; j++) {
      console.log(array, array[j], array[j + 1]);
      let cur;
      if (array[j] > array[j + 1]) {
        noSwaps = false;
        cur = array[j + 1];
        array[j + 1] = array[j];
        array[j] = cur;
      } else {
        continue;
      }
    }
    if (noSwaps) return;
  }

  return array;
};

console.log(bubbleSort([24, 5, 7, 3, 65, 9]));

//끝 인수가 가장 큰 수로 먼저 정렬
//그다음 1씩 줄여나가며 루프
//루프안에서 처음부터 순서대로 반복하며 루프
