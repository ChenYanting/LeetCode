/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) return null;
    let current = head, prevous = null, answer = head;
    while (current) {
        if (current.val === val) {
            if (current === answer) answer = answer.next;
            else prevous.next = current.next;
        } else prevous = current;
        current = current.next;
    }
    return answer;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next = new ListNode(6);

let node = removeElements(head, 6);
while (node) {
    console.log(node.val);
    node = node.next;
}