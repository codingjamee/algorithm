###### Graph structure

노드와 각 꼭지점의 연결 쌍의 집합.
연결선이 중요함 모양은 상관 없음
트리도 그래프의 일종
그래프에는 그러나 부모노드가 없음
시작점과 끝점도 없음

#### 사용예시

sns에서의 친구관계
지도(최단거리를 계산)
아마존에서 가장 많이 구매한 물건을 보여줌
비슷한 게임을 추천하는 것 (공통점이 많은 게임)

#### 종류

Vertex(정점) : 노드를 이르는 다른 말
Edge(간선) : 노드사이의 연결  
트리의 정의는 : 두개의 정점이 하나의 경로로 이어지는 그래프

Directed/Undirected(방향/무방향) :
무방향 그래프: 방향이나 양극 음극이 없음 양방향 연결이 있음 (페이스북)
방향그래프 : 방향을 의미하는 화살표로 표현됨 (인스타그램)
두개의 정점 사이에존재하는 연결(간선)에 방향이 있음
(트위터, 인스타그램등의 친구관계를 모형화)

Weighted/Unweighted(가중/비가중) :
비가중 : 노드 또는 정점 사이에 존재하는 연결인 간선에 부여된 값이 없음
가중 : 부여된 값이 있음

### 어떻게 저장할 것인가 : 그래프 정렬

인접행렬(Adjcency Matrix) : 간선들을 저장 1과 0으로 행렬방식으로 저장
서로 연결되어있는 부분에만 1로
빈 공간들을 0으로 남겨야 함
특정 간선이 존재하는 것을 확인하는 것이 List인접리스트보다 빠름 O(1)

인접리스트(Adjcency List) : 노드들 (정점들 vertex)이 숫자를 가져야 함
해당 숫자의 간선(연결 edge)을 보고 싶다면 배열의 인덱스로 가서
해당 인덱스의 배열을 확인함 그것이 간선임 엣지
실제 연결만 저장하면 됨
그래서 matrix보다 더 적은 공간을 차지함
모든 간선 (edge)을 순회하는 것이 Matrix행렬보다 더 빠름
{
0: [1, 5],
1: [0, 6]
}
노드들이 숫자를 가지지 않는다면 해시테이블 이용하면 됨
{
A : ["B", "F"],
B : ["A", "C"],
C : ["B", "D"]
}

### 인접리스트 (adjcency list) 구현해보기

기본클래스 graph

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
}
```

## addVertex 메서드

하나씩 정점 vertex를 추가해야 함 (간선을 추가하기 전)
지금은 undirected graph를 작업
(A-B가 있으면 B-A로도 연결)

1. addVertex라는 메서드를 만들기.
2. vertex의 이름을 입력받아서 adjacencyList에 추가
3. 정점의 이름으로 인접 리스트의 adjacency list에 키를 추가함.
4. 키의 값은 빈 리스트 (지금까지는 연결 없음 )
5. 만약 겹치는 키가 있을 경우, 덮어쓰지 않아야함

## add edge 메서드

간선을 추가해야 함 vertex1과 vertex2를 입력받음
adjency list에서 vertex1의 키를 찾아서
vertex2를 그 배열에 넣어줘야 함
vertex2도 똑같이 해줘야 함
vertex2의 키를 찾아서 vertex1를 그 배열에 넣어주기
(에러는 아직 걱정하지 말기)

초기 addVertex이후의 adjacency List의 모양

```javascript
{
 "Tokyo":[],
 "Dallas" : [],
 "Aspen" : []
}
```

addEdge를 한 뒤의 adjacency List의 모양
(Tokyo와 Dallas의 간선을 추가)
g.addEdge("Tokyo", "Dallas")

```javascript

{
 "Tokyo": ["Tokyo"],
 "Dallas" : ["Dallas"],
 "Aspen" : []
}
```

g.addEdge("Dallas", "Aspen")

```javascript

{
 "Tokyo": ["Dallas"],
 "Dallas" : ["Tokyo", "Aspen"],
 "Aspen" : ["Dallas"]
}
```

## remove edge 메서드

두 개의 인수를 제공
실제로 제거해야 하는 간선은
두 개의 다른 데이터를 제거해야 함

1. 리스트에 있는 두 개의 키를 입력받음
2. vertex1의 key를 vertex2를 포함하지않은 키를 다시 할당
3. vertex2의 key를 vertex1를 포함하지 않은 키를 다시 할당

```javascript

{
 "Tokyo": ["Dallas"],
 "Dallas" : ["Tokyo", "Aspen"],
 "Aspen" : ["Dallas"]
}
```

g.removeEdge("Tokyo", "Dallas")

```javascript

{
 "Tokyo": [],
 "Dallas" : ["Aspen"],
 "Aspen" : ["Dallas"]
}
```

## remove vertex 메서드

간선(edge)과 정점(vertex)을 모두 제거해야 함
