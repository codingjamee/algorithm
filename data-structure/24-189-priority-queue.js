class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    console.log("bubbleup start");
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority <= parent.priority) {
        break;
      }
      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx],
      ];
      idx = parentIdx;
    }
    console.log(this.values);
  }
  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;

      //sink down method
      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      //rightChild를 찾았을때 유효하다면
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          //swap할 것이 없고  rightChild가 element보다, 더 크다면 바꿈
          (swap === null && rightChild.priority > element.priority) ||
          //swap할 것이 있는데  right가 left보다, 더 크다면 바꿈
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      //여기까지 오면 swap이 null이거나 left혹은 right
      //null이면 스왑할것이 없으므로 break
      if (swap === null) break;
      //현재 선택값에 바꿀값을 넣음
      this.values[idx] = this.values[swap];
      //바꿀값에 현재선택값(element에 할당)을 넣음
      this.values[swap] = element;
      //바꿀 인덱스에 바꾼 swap으로 할당
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
let queue = new PriorityQueue();
queue.insert();
