class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    //길이가 0일 경우 null
    if (this.size === 0) return null;
    //길이가 1일경우는
    if (this.size === 1) {
      this.last = null;
    }

    let removed = this.first
    this.first = this.first.next;
    removed.next = null;
    this.size--;
    return removed;
  }
}