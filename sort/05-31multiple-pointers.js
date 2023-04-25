// const countUniqueValues = (array) => {
//   const a = {};
//   for (let i = 0; i < array.length; i++) {
//     a[array[i]] = 1;
//     if (a[array[i]]) {
//       continue;
//     }
//   }

//   console.log(Object.keys(a).length);
// };

// countUniqueValues([1, 1, 1, 1, 1, 1, 4]);
// countUniqueValues([]);
// countUniqueValues([1, 2, 3, 4, 5, 4, 4, 7, 12, 13]);
// countUniqueValues([-2, 1, 0, 1, -1]);

const countUniqueValues = (inputArray) => {
  let i = 0;
  let j = 0;
  if (inputArray.length === 0) {
    console.log(0);
    return;
  }
  while (j < inputArray.length) {
    if (inputArray[i] !== inputArray[j]) {
      //i와 j가 다르다면 i에 j를 대입하고 i++
      i++;
      inputArray[i] = inputArray[j];
    } else if (inputArray[i] === inputArray[j]) {
      //i와 j가 같다면
      j++;
    }
  }

  console.log(i + 1);
  console.log(inputArray);
};

countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([-2, -1, -1, 0, 1]);
