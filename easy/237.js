/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head1 = new ListNode(4);
head1.next = new ListNode(5);
head1.next.next = new ListNode(1);
head1.next.next.next = new ListNode(9);
deleteNode(head1.next);
console.log(head1);

let head2 = new ListNode(4);
head2.next = new ListNode(5);
head2.next.next = new ListNode(1);
head2.next.next.next = new ListNode(9);
deleteNode(head2.next.next);
console.log(head2);