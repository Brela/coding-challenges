class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

const myList = new List(4);
console.log(myList);
