class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let cur;
    if (this.head == this.tail) {
      cur = this.head;
      this.head = null;
      this.tail = null;
    } else {
      cur = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      cur.prev = null;
    }
    this.length--;
    return cur;
  }
  shift() {
    //this.head가 없으면 undefined
    if (!this.head) return undefined;
    let cur = this.head;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      cur.next = null;
    }
    this.length--;
    return cur;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.push(newNode);
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  get(index) {
    let cur;
    if (!this.head || index < 0 || index >= this.length) return null;

    const half = Math.floor(this.length / 2);
    if (half >= index) {
      cur = this.head;
      let count = 0;
      while (count !== index) {
        cur = cur.next;
        count++;
      }
    } else {
      cur = this.tail;
      let count = this.length - 1;
      while (count !== index) {
        cur = cur.prev;
        count--;
      }
    }
    return cur;
  }
  set(index, val) {
    let cur = this.get(index);
    if (cur) {
      cur.val = val;
      return true;
    } else {
      return false;
    }
  }
  insert(index, val) {
    let cur = this.get(index);
    let pre = cur.prev;
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    if (cur) {
      const newNode = new Node(val);
      newNode.next = cur;
      newNode.prev = pre;
      pre.next = newNode;
      cur.prev = newNode;
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const removed = this.get(index);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }
}

// const list = new DoublyLinkedList();
// list.push("A");
// list.push("B");
// list.push("C");
// list.push("D");
// list.push("E");
// list.push("F");
// list.push("G");
// list.push("H");
// list.push("I");
// list.push("J");
// list.push("K");
// list.push("L");

// list.get(4);
// list.set(4, "four");
// list;
