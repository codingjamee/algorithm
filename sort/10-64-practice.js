const naiveString = (str1, str2) =>{
  let count = 0;

  const helper = (s1, s2) => {
    for(let i = 0; i < s1.length; i++ ) {
      //s2가 맨 마지막글자고,
      // console.log("helper start")
      // console.log(i)
      if(i === s2.length-1 && s1[i] === s2[i]) {
        return count += 1
      }
      if(s1[i] === s2[i]) continue; //이때만 for루프 돌림
      else {
        return
      }
    }
  }

  for (let i = 0; i < str1.length; i++) {
    if(str1[i] === str2[0]) {
      console.log("helper call", str1[i], str2[0])
      helper(str1.slice(i), str2)
    }
  }

  return count;
}

console.log(naiveString("aplee dfdfes bdidfkeple pledf", "ple"))