const flatten = (array) => {
  let flattedArray = [];

  while (array.length > 0) {
    if (Array.isArray(array[0])) {
      flattedArray = flattedArray.concat(flatten(array[0]));
      //0번째만 부르면 문제가 됨
      //계속 다음 순서의 원소를 불러야 함
      array.slice(1);
      console.log("next while");
    } else {
      flattedArray.push(array[0]);
      array.slice(1);
    }
    array.slice(1);
    console.log(array);
  }
  return flattedArray;
};

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]

//숫자일 경우 push, 배열일경우 concat

function flatten(array) {
  // add whatever parameters you deem necessary - good luck!
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(flatten(array[i]));
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
