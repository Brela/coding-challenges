/* 
https://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/783/
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1] */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    // Initialize the sum with the current carry (either 0 or 1)
    let sum = carry;

    // If the first list (l1) is not exhausted
    if (l1 !== null) {
      sum += l1.val; // Add the value of the current node in l1 to sum
      l1 = l1.next; // Move to the next node in l1
    }

    // If the second list (l2) is not exhausted
    if (l2 !== null) {
      sum += l2.val; // Add the value of the current node in l2 to sum
      l2 = l2.next; // Move to the next node in l2
    }

    // Update the carry for the next iteration
    // If sum is 10 or more, carry is set to 1, else it is 0
    carry = Math.floor(sum / 10);

    // Create a new node with the digit part of the sum (sum % 10) and append it to the result list
    current.next = new ListNode(sum % 10);

    // Move the current pointer to this new node
    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));

// example 2
/* let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))); */
