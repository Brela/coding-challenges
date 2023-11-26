class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = this.head;
	}

	findKthFromEnd(k) {
		if (k > this.length || k < 1 || !this.head) return null; // Fixed the condition
		if (k === this.length) return this.head;
		if (k === 1) return this.tail;

		let temp = [];
		let current = this.head;
		while (current) {
			temp.push(current);
			current = current.next;
		}

		return temp[temp.length - k];
	}
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
	console.log(kthNodeFromEnd.value);
} else {
	console.log("Not found");
}

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    2th node from the end:
    4
*/
