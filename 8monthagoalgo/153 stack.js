class Node {
  constructor(val) {
    this.val = val;
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
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    if (this.size === 1) {
      this.last = null;
    }
    let removed = this.first;
    this.first = this.first.next;
    removed.next = null;
    this.size--;
    return removed;
  }
}