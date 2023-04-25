const capitalizeFirst = (inputArray) => {
  const newArray = [];
  if (inputArray.length === 0) return newArray;

  let uppperCase;

  const first = (array) => {
    uppperCase = array[0][0].toUpperCase();
    return next(array.slice(1));
  };

  const next = (array) => {
    if (array.length === 0) return newArray.push(uppperCase);
    uppperCase += array[0];
    return next(array.slice(1));
  };

  first(inputArray[0]);
  return newArray.concat(capitalizeFirst(inputArray.slice(1)));
};

capitalizeFirst(["car", "taco", "banana"]);

function capitalizeFirst(array) {
  // add whatever parameters you deem necessary - good luck!
  let newArray = [];
  let firstS = array[0][0].toUpperCase();
  let remainS = array[0].slice(1);
  newArray.push(firstS + remainS);
  newArray.concat(capitalizeFirst(array.slice(1)));

  return newArray;
}

// // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
