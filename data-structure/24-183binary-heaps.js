class MaxBinaryHeaps {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    console.log("bubbleup start");
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) {
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

  //내가 구현한것...
  // extractMaximumMy() {
  //   const lastIdx = this.values.length - 1;
  //   [this.values[lastIdx], this.values[0]] = [
  //     this.values[0],
  //     this.values[lastIdx],
  //   ];
  //   let removed = this.values.pop(this.values[lastIdx]);

  //   while (true) {
  //     let bubbleIdx = 0;
  //     let leftChildIdx = 2 * bubbleIdx + 1;
  //     let rightChildIdx = 2 * bubbleIdx + 2;
  //     //bubble이 가장 작거나 중간값이면
  //     if (
  //       (this.values[rightChildIdx] > this.values[leftChildIdx] &&
  //         this.values[leftChildIdx] > this.values[bubbleIdx]) ||
  //       (this.values[rightChildIdx] > this.values[leftChildIdx] &&
  //         this.values[bubbleIdx] > this.values[leftChildIdx])
  //     ) {
  //       let Idx = (rightChildIdx[
  //         (this.values[rightChildIdx], this.values[bubbleIdx])
  //       ] = [this.values[bubbleIdx], this.values[rightChildIdx]]);
  //       bubbleIdx = Idx;
  //     }
  //     //bubble이 가장 크면
  //     else if (
  //       this.values[bubbleIdx] > this.values[rightChildIdx] &&
  //       this.values[rightChildIdx] > this.values[leftChildIdx]
  //     ) {
  //       break; //멈춤
  //     }
  //   }
  //   return removed;
  // }
  extractMax() {
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      //rightChild를 찾았을때 유효하다면
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          //swap할 것이 없고  rightChild가 element보다, 더 크다면 바꿈
          (swap === null && rightChild > element) ||
          //swap할 것이 있는데  right가 left보다, 더 크다면 바꿈
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeaps();
heap.insert(55);
