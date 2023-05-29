const insertionSort = (array) => {
  for (i = 1; i < array.length; i++) {
    //원래 위치가 현재인덱스라고 가정
    //j가 끝났을 때도 correctIndex를 사용해야하므로
    //j루프 밖에 위치
    let correctIndex = i;
    let select = array[i];

    for (j = 0; j < i; j++) {
      if (j === array.length) return;
      if (array[j] >= select) {
        //선택한 것이 더 클때
        correctIndex = j;
        console.log(correctIndex);
      }
      console.log(i, j);
    }

    // console.log(i, select, correctIndex);
    // console.log(array);
    //j루프 다 돌고
    //select를 올바른 index에 끼워넣음
    //해당 array[i]는 삭제해야함

    if (select !== array[correctIndex]) {
      array.splice(i, 1); //array[i]삭제
      array.splice(correctIndex, 0, select);
      console.log("*****insertion");
      console.log(array);
    }
  }
  return array;
};

console.log(insertionSort([2, 13, 4, 5, 2, 8, 52, 87, 23, 1]));
console.log(insertionSort([5, 3, 4, 1, 2]));

//j가 끝났을 때도 correctIndex를 사용해야 하므로
//j루프 밖에 위치
