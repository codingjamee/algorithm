const findLongestSubstring = (string) => {
  let front = 0,
    back = 0,
    maxLength = 0;
  const map = {};

  for (; back < string.length; back++) {
    let cur = string[back];
    let exist = map[cur];
    if (exist !== undefined) {
      front = exist + 1;
    }
    map[cur] = back;
    maxLength = Math.max(maxLength, back - front + 1);
  }
  return maxLength;
};

//초깃값은 모두 0
//object에 해당 키가 없다면 계속 가고
//object에 해당 키가 있다면
//back을 해당 키의 값 +1로 변경
//object에 키를 저장, 값은 글자의 인덱스 저장
//maxLength 현재 front-back+1과 maxLength중 긴값 비교해서 저장
