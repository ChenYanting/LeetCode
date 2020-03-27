/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head === null) return null;

    const nodes = [];
    let pointer = head;
    while (pointer) {
        nodes.push(pointer);
        pointer = pointer.next;
    }

    if (n === nodes.length) return nodes[1] || null;
    else if (n === 1) nodes[nodes.length - 2].next = null;
    else nodes[nodes.length - n - 1].next = nodes[nodes.length - n + 1];
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
console.log(removeNthFromEnd(head, 2));