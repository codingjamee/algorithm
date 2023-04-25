//recursion

const selectionSort = (array) => {
  const newArray = [];
  if (array.length < 1) return array;
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  console.log(min);
  const sliceIndex = array.findIndex((arr) => arr === min);
  array.splice(sliceIndex, 1);
  console.log(array);
  newArray.push(min);
  return newArray.concat(selectionSort(array));
};
//이건 새로운배열을 만들어서 작은 수대로 차례차레 넣은것
//최솟값을 맨 왼쪽에 차례차례 넣기
//for loop

const selectionSort2 = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    let cur;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      cur = array[minIndex];
      array[minIndex] = array[i];
      array[i] = cur;
    }
  }
  return array;
};
//이건 계속 앞의것과 비교해서 더 작은것을 맨앞으로 바꾸는것...

//내가 하고자 하는것은
//처음부터 끝까지 보고
//가장 작은 수를 찾아서
//맨 앞자리 배열과 바꾸는것

console.log(selectionSort2([5, 4, 2, 3, 1, 2]));
