// const factorial = (num) => {
//   //1보다 작을 때 return
//   //1일때 return 1
//   if (num < 1) return;
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// };
// factorial(10);

// const power = (num1, num2) => {
//   if (num2 < 1) return 1;
//   num2--;

//   return num1 * power(num1, num2);
// };

// power(2, 4);

// const reverse = (string) => {
//   const stringArray = string.split("");
//   const reversedArray = [];

//   while (stringArray.length > 0) {
//     reversedArray.push(stringArray[stringArray.length - 1]);
//     stringArray.pop();
//   }

//   const reversedString = reversedArray.join("");
//   console.log(reversedString);
//   return reversedString;
// };

const reverse = (string) => {
  const stringArray = string.split("");
  const reversedArray = [];

  const recurse = (array) => {
    if (array.length === 0) return;
    reversedArray.push(array[array.length - 1]);
    return reversedArray.concat(recurse(array.slice(0, -1)));
  };

  recurse(stringArray);
  const reversedString = reversedArray.join("");
  console.log(reversedString);
  return reversedString;
};

reverse("abcde");
