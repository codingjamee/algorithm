// function areThereDuplicates(...variables) {
//   // good luck. (supply any arguments you deem necessary.)

//   let object = {};
//   for (let i = 0; i< variables.length; i++) {
//     object[variables[i]] ? object[variables[i]] += 1 : object[variables[i]] = 1
//   };
//   for (let key in object) {
//     if (object[key] > 1) {
//       return true
//     };
//   };

//   return false
// }

// areThereDuplicates(1, 2, 3) // false

//multiple-pointer
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
