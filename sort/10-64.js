const naiveString = (str1, str2) => {
  let count = 0;
  const helper = (helpS1, helpS2) => {
    for (let j = 0; j < helpS2.length; j++) {
      if (j === helpS2.length - 1 && helpS1[j] === helpS2[j]) {
        return (count += 1);
        //중요 먼저 count++를 해주고 count를 return해준다.
        //count += count는 안됨. 왜냐하면 0일땐 0을 더하는꼴이되어버리므로..
      }
      if (helpS1[j] === helpS2[j]) {
        continue;
      } else {
        return;
      }
    }
  };
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[0]) {
      helper(str1.slice(i), str2);
    }
    //같을때만 str2의 루프를 돌리고
    //아니면 계속 넘어간다....
  }
  return count;
};

console.log(naiveString("aplee dfdfes bdidfkeple pledf", "pop"));
