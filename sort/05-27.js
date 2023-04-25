// const same = (array1, array2) => {
//   //input : two arrays
//   //compare to array1 with array2
//   //nested array?
//   //1. are two arrays length same? if not, return false
//   //2. if it were not array, return false

//   const isArray = (array) => {
//     if (typeof array !== "object") {
//       console.log(false);
//       return;
//     }
//   };

//   isArray(array1);
//   isArray(array2);

//   if (array1.length !== array2.length) {
//     console.log("line19: " + false);
//     return;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     // console.log("for문");
//     // console.log(a, b);
//     const correctIndex = array2.indexOf(array1[i] ** 2);
//     if (correctIndex === -1) {
//       console.log(false);
//       return;
//     }
//     array2.splice(correctIndex, 1);
//     // console.log(array1);
//     // console.log(array2);
//   }

//   console.log(true);
// };

// same([6, 2, 4, 2], [4, 16, 36, 4]);

const something = (a, b) => {
  for (let i in a) {
    //in is key
    console.log("in");
    console.log(i);
  }
  for (let i of b) {
    //of is variable
    console.log("of");
    console.log(i);
  }
};

console.log(something([11, 12, 13, 14], [15, 16, 17, 18]));
