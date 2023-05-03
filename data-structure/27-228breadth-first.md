###### breadth-first

주어진 노드 깊이의 인접점을 방문한 다음에
아래로 내려가거나 인접점의 인접점을 보게 됨.

#### psuedo code

데이터의 구조는 깊이우선탐색과 비슷하나,
데이터 구조를 큐(fifo)를 사용함.
push와 shift사용

starting vertex를 입력하는 함수를 만듦
큐를 만듦
큐에 starting vertext를 넣어줌
result배열을 만들어서 맨뒤에 순서대로 출력할 것을 저장
visited객체를 만들어서 방문한 노드를 저장
starting vertex를 방문한 것으로 표시
while loop
큐의 맨 앞에 있는 첫번째 정점을 shift

방문한 것들, 결과를 저장하고 있는 배열에 push
(첫번째 요소를 result에 push)
