/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) return head;

    const nodes = [];
    let pointer = head;
    while (pointer) {
        nodes.push(pointer);
        pointer = pointer.next;
    }

    pointer = nodes[0];
    for (let i = 0; i < nodes.length; i++) {
        // 0 -> 1 -> 2 -> 3 => 1 -> 0 -> 3 -> 2
        // 0 -> 1 -> 2 => 1 -> 0 -> 2
        // 0 -> 1 => 1 -> 0
        if (i % 2 === 1) nodes[i].next = nodes[i - 1];
        else nodes[i].next = nodes[i + 3] || nodes[i + 2] || null;
    }
    return nodes[1];
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head = new ListNode(0);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
console.log(swapPairs(head));