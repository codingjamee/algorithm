function getDigit(num, i) { //i자릿수의 숫자 찾기 
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(number) { //자릿수 세기
  if (number === 0 )return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(nums) {//가장 큰 숫자의 자릿수 
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) { 
  let max = mostDigits(nums) //가장 큰 숫자의 자릿수 
  for (let i = 0; i < max; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++){
      let digit = getDigit(nums[j], i)
      digitBuckets[digit].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);

  }
  return
}

radixSort([23, 345, 5478, 12, 2345, 5689])