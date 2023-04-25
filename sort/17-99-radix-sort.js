//기수정렬 radix sort
//숫자여야 함
//숫자 크기에 대한 정보를 자릿수로 인코딩
//자릿수가 더 큰 수가 큰 수

//10개의 버킷을 만들고
//1의자리부터 비교해서 맞는 버킷에 넣고
//다시 배열로 순서대로 집어넣음
//그다음 10의 자리 비교해서 맞는 버킷에 넣고
//다시 배열로 순서대로 집어넣음
//그다음 100의 자리 //그다음 1000의 자리 (모든 수가 0에 들어갈 때까지 반복)
//해당 배열을 return

//-----helper 1: getDigit---------
//num 과 place를 넣어 그 place의 숫자를 반환

//내가 구현
const getDigit1 = (num, place) => {
  const numArray = num.toString().split("");
  const numIndex = numArray[numArray.length - place - 1];
  return numIndex;
};

//실제 솔루션
const getDigit = (num, i) => {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
};

//-----helper 2: digitCount------------
//입력한 수의 자릿수는 몇인가 ?

//내꺼
const digitCount1 = (num) => {
  let count = 0;
  let numM = num;
  while (-1 < num) {
    numM = num / Math.pow(10, count);
    if (numM > 10) {
      count++;
    }
    if (numM >= 0 && numM < 10) {
      count++;
      break;
    }
  }
  return count;
};

//solution
const digitCount = (num) => {
  if (num === 0) return1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

//-------helper3 : mostDigits------------
//arr 중 가장 큰수의 자릿수를 찾는 함수

//내꺼
const mostDigits = (arr) => {
  let most = -Infinity;
  //가장 큰수를 찾고,
  //그 수를 digitCount에  집어넣어서
  //가장 큰수의 자릿수를 return 하는 함수
  for (let i = 0; i < arr.length; i++) {
    if (most < arr[i]) {
      most = arr[i];
    }
  }
  return digitCount(most);
};

//solution
//각각 arr의 인수를 하나씩 집어넣어서
//가장 현재 수와 비교하여 가장 큰수를 return 하는 함수
const mostDigit = (arr) => {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
};

//---------실제 구현함수 : radix sort함수 ---------
//가장 큰수의 자릿수만큼 반복
//n번째 자릿수 자리에 순서대로 넣기
//concat하여 return
//어려움 ㅠㅠ 성공못함..

//solution
const radixSort = (arr) => {
  const mostDigit2 = mostDigit(arr);
  for (let i = 0; i < mostDigit2; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      //arr길이만큼 돌아가면서 bucket 맞는 자릿수에 넣음
      const digit = getDigit(arr[j], i); //10*i자리의 자릿수 구하기
      bucket[digit].push(arr[j]); //버킷의 자릿수 위치에 해당 인수를 추가
    }
    console.log(bucket);
    arr = [].concat(...bucket);
    //다되면 bucket을 모두 합하여 return
  }

  return arr;
};

console.log(getDigit1(1234567, 2));
console.log(digitCount1(0));
console.log(mostDigits([1234, 67, 8]));
console.log(radixSort([1234, 532532, 1231, 2515, 22, 52]));

//big O
//n은 정렬할 항목 수나 정수의 수
//k는 정렬할 수의 길이
//time Complexity :
//best O(nk) ~average O(nk)
//space Complexity: O(n+k)
