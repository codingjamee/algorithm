function reverse(string) {
  const reverse = [];
  const stringArray = string.split("");
  console.log("string");
  console.log(stringArray);

  const helperReverse = (inputString) => {
    if (inputString.length === 0) {
      return;
    }

    while (inputString.length > 0) {
      reverse.push(inputString[inputString.length - 1]);
      inputString.splice(-1, 1);
      helperReverse(inputString);
    }
  };

  helperReverse(stringArray);
  const answer = reverse.join("");

  console.log(answer);
  return answer;
}

reverse("abcde");

// let revS = "";
//   if(string.length === 0) return ""
//   revS = string[string.length-1] + reverse(string.slice(0, -1))
//   return revS
