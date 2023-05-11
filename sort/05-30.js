const sumZero = (array) => {
  const first = Number(array[0]);
  for (let i = 0; i < array.length; i++) {
    const second = array[i];
    if (second + first === 0) {
      console.log(first, second);
      return;
    }
  }
};

const sumZeroSolution = (array) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
    return false;
  }
};

sumZero([-3, -2, -1, 0, 1, 2, 3]);
