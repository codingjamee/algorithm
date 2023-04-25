const averagePair = (arr, average) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if ((arr[i] + arr[j]) / 2 > average) {
      j--;
    } else if ((arr[i] + arr[j]) / 2 < average) {
      i++;
    } else if ((arr[i] + arr[j]) / 2 === average) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
};

averagePair([1, 2, 3], 2.5);
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
