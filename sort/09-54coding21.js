const capitalizeWords = (array) => {
  const newArray = [];

  if (array.length === 0) return newArray;
  console.log(array);
  newArray.push(array[0].toUpperCase());
  console.log(array[0].toUpperCase());

  return newArray.concat(capitalizeWords(array.slice(1)));
};

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
