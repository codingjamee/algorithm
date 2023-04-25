const linearSearch = (array, something) => {
  // add whatever parameters you deem necessary - good luck!
  if (array.length < 1) return;
  if (!something) return;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === something) {
      return i;
    } else if (i === array.length - 1 && array[i] !== something) {
      return -1;
    } else {
      continue;
    }
  }
};

console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
