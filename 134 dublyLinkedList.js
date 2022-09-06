class Node {
  constructor(val) {
    this.val = val
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
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail
      this.tail = newNode;
    }
    this.length++;
    return this;
  } 

  pop() {
    if (!this.head) return undefined;
    let removed = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = removed.prev;
      removed.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return removed
  }

  shift() {
    if (!this.head) return undefined;
    let shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }
    this.length--;
    return shifted;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.push(newNode); 
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    
    if (idx <= this.length / 2) {
      console.log("Working from start")
      let counter = 0;
      let cur = this.head;
      while (counter !== idx) {
        cur = cur.next;
        counter++
      }
      return cur;
    } else {
      console.log("Working from end")
      let counter = this.length -1 ;
      let cur = this.tail;
      while (counter !== idx) {
        cur = cur.prev;
        counter--
      }
      return cur;
    }
  } 

  set(idx, val) {
    let foundNode = this.get(idx)
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false
  } 

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let beforeNode = this.get(idx - 1);
    let afterNode = beforeNode.next
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;

  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return !!this.shift();
    if (idx === this.length - 1) return !!this.pop();
    let removed = this.get(idx);
    let prevNode = removed.prev
    let nextNode = removed.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    removed.prev = null;
    removed.next = null;
    return removed;
  }
}
