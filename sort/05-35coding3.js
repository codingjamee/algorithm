const sameFrequency = (num1, num2) => {
  const num_1 = num1.toString();
  const num_2 = num2.toString();
  const numberObject = {};

  for (let i = 0; i < num_1.length; i++) {
    numberObject[num_1[i]]
      ? numberObject[num_1[i]]++
      : (numberObject[num_1[i]] = 1);
  }

  for (let i = 0; i < num_2.length; i++) {
    if (numberObject[num_2[i]]) {
      numberObject[num_2[i]]--;
    } else {
      return false;
    }
  }

  return true;

  //객체로 만들어서?
  //
};

// function sameFrequency(num1, num2){
//   // good luck. Add any arguments you deem necessary.
//   let number1 = num1.toString()
//   let number2 = num2.toString()
//   let numbers = {}
//   if (number1.length !== number2.length) {
//         return false
//     }

//   for(let i = 0; i <number1.length; i++) {
//       let N1 = number1[i]
//       numbers[N1] ? numbers[N1] += 1 : numbers[N1] = 1;
//   }
//   for (let i = 0; i<number2.length; i++) {
//       let N2 = number2[i];
//       if (!(numbers[N2])) {
//           return false
//       } else {
//           numbers[N2] -=1;
//       }
//       return true
//   }
// }
