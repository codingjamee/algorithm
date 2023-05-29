##### 자바스크립트 내장함수 sort

```javascript
function numberCompare(num1, num2) {
  return num1 - num2;
}
[6, 4, 15, 10].sort(numberCompare);

//[4, 6, 10, 15]
```

위와 같은 numberCompare함수를 sort메서드에 넣으면
오름차순으로 정렬되고,
num2-num1으로 변경하면 내림차순으로
길이로 정렬하고 싶다면 num1.length - num2.length로
정렬함

##### bubble sort 설명

배열을 가장 작은 숫자에서 큰 숫자순으로 정렬을 할 때,
더 큰 숫자가 한번에 하나씩 뒤로 이동
가장 큰 값이 맨 오른쪽으로 감
점차 맨끝부터 정렬되어감

#### 교환 방법

```javascript
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const swap2 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

### 구현방법

루프를 맨 뒤에서 시작해서 맨 앞에서 끝남
루프 안에는 0부터 i-1까지 실행
arr[j]와 arr[j+1]을 비교해 큰 수를 뒤로 보냄
