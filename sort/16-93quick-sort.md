###### quick sort

합병정렬과 같은 방식으로 작동
재귀를 통해 해결하기 가장 쉬운 방식 중 하나.
데이터를 분할하여 배열에 0개 또는 1개의 항목이 남을 때까지
분할하여 개별적으로 정렬되는 방식.

##### 설명

첫번째로 피벗포인트를 선택하는 것이 꽤 유용.
helper function이 pivot엘리먼트를 지정
배열의 요소들을 재정렬 해야 함.
피벗보다 작은 것은 왼쪽, 큰 것은 오른쪽
순서는 중요하지 않음
새 배열을 만들면 안되고 피벗 포인트의 올바른 인덱스를 반환해야 함

#### pseudo code

세개의 인수를 받음
어레이, start index, end index
피벗을 선택
마지막에 피벗과 바꿀 위치를 확인
끝까지 루프 수행
살펴보는 요소보다 피벗이 클 경우 피벗 인덱스 변수를 증가,
시작 피벗과 피벗 인덱스를 바꾸고 다음 피벗 인덱스를 반환

```javascript

```