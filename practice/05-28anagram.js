//----------1. ---------------------

// const anagram = (str1, str2) => {
//   //글자의 배열 두개
//   //한 배열을 돌면서 다른 한 배열에 같은 글자가 있으면 지운다.

//   const str1Arr = str1.split("");
//   const str2Arr = str2.split("");
//   console.log(str1Arr);
//   console.log(str2Arr);

//   for (let i = 0; i < str1Arr.length; i++) {
//     for (let j = 0; j < str2Arr.length; j++) {
//       if (str1Arr[i] === str2Arr[j]) {
//         str1Arr.splice(i, 1);
//         str2Arr.splice(j, 1);
//         console.log(`${str1Arr[i]}와 ${str2Arr[j]}를 지웁니다`);
//         console.log(str1Arr);
//         console.log(str2Arr);
//       }
//     }
//   }
//   if (str1Arr.length !== 0 || str2Arr.length !== 0) {
//     return false;
//   } else {
//     return true;
//   }
// };
// //이렇게 하면 안되는 이유
// //점점 배열수는 줄어드는데 for루프는 똑같이 입력시의 길이대로 돌고있으므로

//-------------2.---------------- 솔루션!

//해당 키값이 있으면 +1 없으면 1
//그다음 string의 값이 있으면 -1 없으면 false
const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const anagram1 = {};

  for (i = 0; i < str1.length; i++) {
    let letter = str1[i];
    anagram1[letter] ? (anagram1[letter] += 1) : (anagram1[letter] = 1);
    console.log(anagram1);
  }
  //부족한 부분 : key와 value를 넣는 부분

  for (j = 0; j < str2.length; j++) {
    let letter = str2[j];
    if (!anagram1[letter]) {
      //anagram1에서 str2[j]를 찾지 못한다면
      return false;
    } else {
      //anagram1에서 str2[j]를 찾았다면 해당 값을 -1한다
      anagram1[letter] -= 1;
    }
  }
  return true;
};

console.log(anagram("aaz", "zza"));
console.log(anagram("", ""));
console.log(anagram("anagram", "nagaram"));

//배운점
//객체에 키를 추가할 때는 object["키"] = 밸류 (숫자일때는 그냥, 문자일때는 따옴표)
//object["키"] ? object["키"] += 1 : object["키"] = 1
//위의 말은, object["키"] 의 값이 있으면 거기에 1을 더하고
//없으면 키와 1인 값을 추가하라.

//추가
//for...of  vs for ...in
//of 는 배열 array (배열의 값을 지칭)
//in 은 객체 object (객체의 키를 지칭)

// for (let key in object_A) {
//   if (object_A[key] !== object_B[key]) {
//     return false
//   }
// }
