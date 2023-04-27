##### priority queue

binary heap을 알아야 하는 이유 : priority queue에 사용하기 위해
priority queue란? : 각 요소가 그에 해당하는 우선순위를 가지는 데이터 구조
더 낮은 우선순위보다 높은 우선순위를 가진 요소가
더 먼저 처리됨
데이터 모음이 있는데, 각 노드, 또는 요소가 각각에 대한 우선순위 값을 가지고 있음.

리스트 또는 구조에서 한번에 하나씩 요소를 가지고 올 것.
한번에 하나씩 처리, 그리고 그다음 것 처리
priority queue는 힙과 별개

#### priority queue 예시

1. 응급실에서 위급한 환자가 먼저온 덜 위급한 환자보다 우선시 처치됨
2. 유닉스에서 나이스 라는 것이 우선순위 역할을 함

### 설명

각 노드의 값은 스트링 또는 숫자 모두 다 됨.
우선순위로 비교하기 때문
priority class 와 node클래스가 있음
각 node는 값과 우선순위를 가짐
우선순위를 사용해서 힙을 구성
삽입될 때도 우선순위로 비교
삭제할 때도 우선순위로 비교
enqueue와 dequeue로

## big O

insertion : O(log N)
Removal : O(log N)
Search: O(N) (모든 노드를 다 봐야 함 어디에 있을 줄 모름)
결과적으로 삽입과 삭제가 강함