//Stack이라는 클래스
//데이터 저장
//맨앞으로 추가하고 삭제함
//빅오측면에서 봤을때 그게 좋음
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return this.size++;
  }
  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      const temp = this.first;
      this.first = temp.next;
      temp.next = null;
    }
    this.size--;
    return temp.value;
  }
}

const stack = new Stack();
