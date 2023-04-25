//head, tail, length를 가지고 있는것이 data structure

//linked list에 있는 한개의 node 구성요소
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//singly linked list에 있는 구성요소와 메서드
class SinglyLinkedList {
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
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //내가 한 코드
  // pop() {
  //   if (!this.head) return undefined;
  //   let newTail = this.head;
  //   while (newTail.next !== this.tail) {
  //     newTail = newTail.next;
  //   }
  //   const removed = newTail.next;
  //   newTail.next = null;
  //   this.tail = newTail;
  //   this.length--;
  //   return removed;
  // }

  //solution
  pop() {
    if (!this.head) return undefined;
    let cur = this.head;
    let newTail = cur;

    while (cur.next) {
      newTail = cur;
      cur = cur.next;
    }
    //newTail.next가 아닌 this.tail.next가 null이어야 함
    //(이건 상관없음 왜냐하면 같은 주소값을 가리키고 있을 것이기 때문?)
    //그리고 먼저 this.tail을 newTail로 바꾸고
    //그다음이 this.tail.next가 null이 되어야 함 why?
    //먼저 tail이 수정되어야
    //새로운 tail의 next의 연결고리를 끊음
    //먼저 this.tail.next로 바꾸는 것은 의미가 없음.
    //왜냐하면 this.tail.next는 현재는 원래부터 null이기 때문
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    }
    return cur;
  }

  //내가 한것
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //내가한 것
  // get(index) {
  //   if (index < 0 || this.length < index) return null;
  //   let counter = 0;
  //   let cur = this.head;
  //   while (counter <= index) {
  //     if (counter !== index) {
  //       //index에 도달하지 않았을 때
  //       //cur에 다음 노드를 할당
  //       cur = cur.next;
  //       counter++;
  //     }
  //     break;
  //   }

  //   return cur;
  // }

  //solution
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // //내가 한것
  // set(index, value) {
  //   let curVal = this.get(index);
  //   const newNode = new Node(value);
  //   if (!curVal) {
  //     return false;
  //   } else {
  //     newNode.next = curVal.next;
  //     if (curVal === this.head) {
  //       this.head = newNode;
  //     }
  //     if (curVal === this.tail) {
  //       this.tail = newNode;
  //     }
  //     curVal.val = newNode.val;
  //   }
  //   return curVal;
  // }

  //solution
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  //내가 빼먹은것 : return true or false
  //.val만 바꾸면 되었는데 새로운 노드를 생성해
  //복잡하게 만들었다.

  // insert(index, val) {
  //   if (index < 0 || this.length < index) {
  //     return false;
  //   } else {
  //     //처음부터 index 전까지 보기
  //     let place = 0;
  //     let cur = this.head;
  //     const newNode = new Node(val);
  //     while (place !== index) {
  //       //place가 index가 아닐때까지
  //       cur = cur.next;
  //       place++;
  //     }
  //     //새로운 노드의 next에 현재의 next를 할당
  //     //현재 노드의 다음은 새로운 노드
  //     newNode.next = cur.next;
  //     cur.next = newNode;
  //     return true;
  //   }
  // }

  //solution

  //부족했던점?!
  //첫번째와 마지막에 삽입할 때를 빠트림
  //해당 위치 이전의 노드를 찾기 위해 get메서드 사용하지 않음
  //그러나 temp라는 밸류없이 연결한 것은 잘 되었다.
  insert(index, val) {
    if (index < 0 || this.length < index) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
  }

  //내가 작성
  // remove(index) {
  //   //인덱스가 0보다 작거나 length 보다 클때는 return false
  //   if (index < 0 || this.length < index) return false;
  //   //현재 노드 cur 한개 이전의 노드 prev
  //   const cur = this.get(index);
  //   //인덱스가 0일때 shift
  //   if (index === 0) !!this.shift();

  //   const prev = this.get(index - 1);
  //   //인덱스가 마지막일때 pop
  //   if (index === this.length - 1) !!this.pop();
  //   if (index !== 0 && index !== this.length) {
  //     prev.next = cur.next;
  //     cur.next = null;
  //   }
  //   this.length--;
  //   return cur;
  // }

  //solution
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    removed.next = null;
    this.length--;
    return removed;
  }

  //내가 작성
  // reverse() {
  //   let count = 0;

  //   //head와 tail바꾸기
  //   let cur = this.head;
  //   this.head = this.tail;
  //   this.tail = cur;

  //   let nextNode;
  //   let prev;

  //   if (count === 0) {
  //     //처음 설정
  //     cur = this.tail;
  //     nextNode = this.tail.next;
  //     prev = cur;
  //     count++;
  //   }
  //   while (count < this.length - 1) {
  //     cur = nextNode.next;
  //     nextNode.next = prev;
  //     nextNode = cur;
  //     count++;
  //   }
  // }

  //solution
  reverse() {
    //head와 tail바꾸기
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();
list.push("Hello");
list.push("my");
list.push("name");
list.push("is");
list.push("jenner");

console.log(list.reverse());

console.log(list.print());
