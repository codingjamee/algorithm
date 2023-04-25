const isSubsequence = (str1, str2) => {
  let i = 0;
  let j = 0;

  while (j < str1.length) {
    if (str1[i] === str2[j]) {
      i++; //i와 j가 같을 때 다음 문자를 본다.
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }

  return false;

  // return boolean
};

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

false;
algorithm;
