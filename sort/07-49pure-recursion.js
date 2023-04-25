const collectOddValue = (arr) => {
  const newArray = [];

  if (arr.length === 0) return newArray;
  if (arr[0] % 2 !== 0) {
    newArray.push(arr[0]);
  } //홀수일 때

  return newArray.concat(collectOddValue(arr.slice(1)));
};
