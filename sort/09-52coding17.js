// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true
// when passed to the callback. Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = (val) => val % 2 !== 0;
const someRecursive = (array, callback) => {
  // if (callback(array[0])) {
  //   return true;
  // }

  // if (!array || !callback || array.length === 0) {
  //   //array 길이 0이면 return false
  //   return false;
  // }

  // if (array.length === 1) {
  //   //array가 1이라면 callback의 return 값을 return.
  //   console.log(callback(array[0]));
  //   return callback(array[0]);
  // }

  // someRecursive(array.slice(1), callback);
  console.log(true);
  return true;
};

const someRecursive = (array, callback) => {
  console.log("start---------");
  console.log(array);

  if (callback(array[0]) === true) {
    console.log("callback(array[0] is true");
    console.log(callback(array[0]));
    return true;
  }

  if (array.length === 0) {
    console.log(false);
    //array 길이가 0이면 return false
    return false;
  }

  if (array.length === 1) {
    //array 길이가 1이라면 callback의 return 값을 return.
    console.log(callback(array[0]));
    return callback(array[0]);
  }
  array.shift();
  console.log("shift");
  console.log(array);
  someRecursive(array, callback);
  return false;
};

someRecursive([1, 2, 3, 4], isOdd);

//array의 각 값을 callback 에 넣었을 때 return true 하면 true를 return

// function someRecursive(array, callback){
//   // add whatever parameters you deem necessary - good luck!
//   if (array.length === 0) return false
//   if (callback(array[0])) {
//       return true
//   }
//   return someRecursive(array.slice(1), callback)

// }

function someRecursive(array, callback) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) return false;
  if (callback(array[0])) {
    return true;
  }
  return someRecursive(array.slice(1), callback);
}
