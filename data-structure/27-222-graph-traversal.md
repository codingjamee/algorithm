###### graph traversal

한 정점에서 시작해서 어디로 갈지 결정해야 함
그래프의 한 노드에서 다른 노드로 갈 때에는
유일한 하나의 길만 있지는 않다.

#### graph traversal uses

웹크롤러,
추천하는 로직 (가장 가까운것 또는 정점이 가장 많이 겹치는 것을
순회하면서 찾게 됨)
페이스북 알만한 사람 추천
GPS네비게이션 (최단경로 찾기)

### 배울것

깊이 우선 탐색 (재귀형과 순환형)
너비 우선 탐색

### graph traversal 깊이 우선 탐색(dfs)

graph에서의 깊이우선 탐색은
루트와 멀어진다는 뜻.
인접점을 찾고 해당 인접점의 그 인접점을 또 찾음
(너비우선은
루트의 인접점들을 모두 보는 것이 먼저)
방문한 곳을 기억해야 함
막다른 길 (이미 방문한 인접점만 있는)경우
다시 돌아가서 방문하지 않은 인접점이 있는 곳으로 다시 가서
해당 인접점의 인접점을 방문함

graph의 adjacencyList

```javascript
{
  "A" : ["B", "C"],
  "B" : ["A", "D"],
  "C" : ["A", "E"],
  "D" : ["B", "E", "F"],
  "E" : ["C", "D", "F"],
  "F" : ["D", "E"]
}
```

A의 인접점 B 와 C 중 B를 방문하면
B와 C의 인접점 A를 방문한 것으로 표시.
B를 방문하면 모든 곳에 B 방문 표시
다음 D를 방문하면 모든 곳에 D 방문 표시
다음 E를 방문하면 모든 곳에 E 방문 표시
다음 E에서는 C 와 D가 이미 방문했으므로 F만 방문할 수 있음
F에서는 모든 곳을 방문하였으므로
순회가 끝남

### 구현해보기 : recursive version

DFS(vertex):
vertex가 비어있다면 return
그렇지 않으면 result list를 만들어 vertex를 추가
(방문한 정점)
해당 정점에 있는 인접점들을 보고
해당 인접점 방문하지 않았다면 재귀로 dfs 해당인접점 호출

```javascript
{
  "A" : ["B", "C"],
  "B" : ["A", "D"],
  "C" : ["A", "E"],
  "D" : ["B", "E", "F"],
  "E" : ["C", "D", "F"],
  "F" : ["D", "E"]
}
```

방문한 vertex object

```javascript
{
  "A" : true,
  "B" : true,
  "D" : true,
  "E" : true,
  "C" : true,
  "F" : true,
}
```

### pseudo code :recursive version

시작하는 노드를 받는 함수를 작성 (DepthFirstSearch)
end result를 저장하는 list를 작성하여 마지막에 return함
방문한 vertex를 저장하는 object를 만듦.
vertex를 받아들이는 helper 함수를 만듦 (DFS)
helper함수는 vertex가 비어있다면 return
받아들인 vertex를 visited객체에 push
result array에 해당 vertex를 넣음
해당 vertex의 모든 인접점에 대해 루프를 돌림
방문하지 않았다면 해당 정점에 대해 헬퍼 함수를 재귀방식으로 호출
시작 vertex에 대해 helper 함수를 호출

### 구현해보기 : Iterative version

S라는 이름의 스택을 만듦
시작 vertex를 스택 S에 추가
S가 비어있지 않는동안
vertex를 pop하고 그것을 vertex에 저장
vertex를 아직 방문하지 않았으면
discovered리스트에 추가
vertex의 인접점들에 대해 스택에 푸시해줌
스택을 사용해 본것들을 저장
돌아가야 하는 곳과 방문해야하는 인접점도 저장

### pseudo code : Iterative version

시작 노드를 받아들이는 함수
vertex들을 추적하는 stack을 만들어줌
result를 만들어 마지막에 return
방문한 vertex들을 저장할 object만들기
시작 vertex를 stack에 추가,
그리고 방문했다고 표시

S가 있는 한 while loop를 돌림
다음 vertex를 pop
해당 정점을 방문하지 않았다면
방문표시 후 result에 추가후
인접점들을 모두 스택에 push
