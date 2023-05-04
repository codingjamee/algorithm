###### dijkstra's algorithm

방향은 없으나 가중치는 있다.
그래프에 가중치를 부여
WeightedGraph 클래스를 만듦.
WeightedGraph adjacencyList의 모양
(vertex와 edges, weight를 저장해둠)

```javascript
{
  A :
  [
    {node: 'B', weight: 4},
    {node: 'C', weight: 2}
  ],
  B :
  [
    {node: 'A', weight: 4},
    {node: 'E', weight: 3}
  ],
  C :
  [
    {node: 'A', weight: 2},
    {node: 'D', weight: 2},
    {node: 'F', weight: 4}
  ],
  D :
  [
    {node: 'C', weight: 2},
    {node: 'E', weight: 3}
    {node: 'F', weight: 1}
  ],
  E :
  [
    {node: 'B', weight: 3},
    {node: 'D', weight: 3},
    {node: 'F', weight: 1}
  ],
  F :
  [
    {node: 'C', weight: 4},
    {node: 'D', weight: 1},
    {node: 'E', weight: 1}
  ]
}
```

#### 접근방법

작은 거리값을 가진 노드부터 선택하기
인접점을 보면서 각각에 대해 합을 내어 구할 것.
낸 값보다 더 작은 값이 나오면 파일을 최신화 해줌.
새로운 노드를 방문할 때마다
가장 작은 거리값을 가지는 곳을 방문
해당 노드에서 인접점을 확인

### 설명

A에서 모든 정점으로 가는 최단거리를 초기화
A에서 A까지는 0이고 나머지는 Infinity

shortest dist from A

```javascript
{
  A : 0,
  B : Infinity,
  C : Infinity,
  D : Infinity,
  E : Infinity,
  F : Infinity
}
```

새로운 노드를 방문할 때마다 가장 작은 거리를 가지는 노드에 먼저 방문
방문하면 방문목록에 추가
인접점들 아무거나 선택. (지금은 B)
A부터 B까지의 거리 확인하여 업데이트
shortest dist from A

```javascript
{
  A : 0,
  B : 4,
  C : Infinity,
  D : Infinity,
  E : Infinity,
  F : Infinity
}
```

previous에 B에 A를 추가

```javascript
{
  A : null,
  B : A,
  C : null,
  D : null,
  E : null,
  F : null
}
```

previous는 어디서 왔는지 함께 모아두는 역할
그리곤 다시 A로 돌아감
A에서 C로 감

```javascript
{
  A : 0,
  B : 4,
  C : 2,
  D : Infinity,
  E : Infinity,
  F : Infinity
}
```

C와의 거리를 보고 업데이트
C에 previous에 A를 추가
A의 인접점을 다 방문했으니
visited에 A를 추가하고,
A에서부터의 거리가 짧은 C부터 인접점을 방문.

C의 인접점 D를 방문
A-C-D까지 거리를더해 shortest dist from A에
업데이트

```javascript
{
  A : 0,
  B : 4,
  C : 2,
  D : 4,
  E : Infinity,
  F : Infinity
}
```

previous를 업데이트

```javascript
{
  A : null,
  B : A,
  C : A,
  D : C,
  E : null,
  F : C
}
```

### psuedo code

priorityQueue를 작성하여
queue에 vertex를 넣을 때마다 priority를 가지고
sort하여 저장해둠

start, end vertex를 받는 dijkstra함수 정의
distances 객체 작성
처음에는 시작점부터 거리가 infinity (시작점 제외 시작점은 0)
priorityQueue를 만들고 빈 상태로 설정
각 노드와 우선순위를 큐에 넣어줌
dequeue할 때마다 가장 작은 값으로 작업
previous 객체 작성 : 모든 vertex에 대해
키를 설정, 값은 null로 초기설정

priorityQueue에 무언가 있는 한 loop를 돌림
(dequeue함)
A에서 가장 가까운 값을 가지고 있는 것을 고를 수 있게 됨
끝에 도달했으면 끝.
그렇지 않으면 인접점들에 대해 루프

새로운 거리(새로운 합계)가 현재 값보다 작으면
작은 것으로 바꿔주고 distances를 바꿔줌
