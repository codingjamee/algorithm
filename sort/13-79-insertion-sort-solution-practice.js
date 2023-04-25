function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    //currentVal은 arr 1번째부터 끝까지 하나씩 선택
    let j = i - 1;
    //j는 배열에서 i보다 하나 왼쪽의 인수부터
    //왼쪽으로 한번씩 줄어들어감
    while (j >= 0 && arr[j] > currentVal) {
      //currentVal이 arr[j]보다 작으면 루프를 돈다.
      arr[j + 1] = arr[j];
      //arr[j]보다 크므로 하나씩 오른쪽으로 보냄
      //currentVal에 넣을 인수가 할당되어있음
      j--;
      //하나씩 j를 줄여서 무한반복 방지
    }
    //루프가 끝날때는 arr[j]보다 currentVal이 큼
    //그러므로 arr[j]가 아닌 arr[j+1]에 currentVal을 넣음
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
