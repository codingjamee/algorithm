class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
  }
  dijkstra(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.values.length) {
      //가중치 가장 작은 node부터 봄
      smallest = nodes.dequeue().val;
      if (smallest === end) {
        // return;
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        //adjacencyList의 해당 node의 인접점 보기
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          //neighbor는 숫자값임(for...in루프의 작동방식)
          //adjacencyList의 배열이 아래와 같으므로
          // {
          //   A :
          //   [
          //     {node: 'B', weight: 4},
          //     {node: 'C', weight: 2}
          //   ],

          //새로운 거리 계산(인접 노드까지의)
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          //현재 보고있는 노드 smallest 에다 인접노드 weight를 더한값과
          //smallest까지의 distances 중 적은 값을 distances[nextNode.node]에 저장
          if (candidate < distances[nextNeighbor]) {
            //distances업데이트(새로운 최단코스 거리 저장)
            distances[nextNeighbor] = candidate;
            //previous도 업데이트(새로운 최단코스 거치는 노드명저장)
            previous[nextNeighbor] = smallest;
            //priority queue에 새로운 우선순위 부여해서 추가 (enqueue)
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
