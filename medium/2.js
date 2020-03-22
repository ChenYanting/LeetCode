/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const sum = l1.val + l2.val;
    const head = new ListNode(sum % 10);

    l1 = l1.next;
    l2 = l2.next;
    let p = head, carry = Math.floor(sum / 10);
    while (l1 || l2) {
        const digit1 = l1 ? l1.val : 0;
        const digit2 = l2 ? l2.val : 0;
        const sum = digit1 + digit2 + carry;

        const node = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        p.next = node;
        p = p.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry !== 0) p.next = new ListNode(carry);
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(addTwoNumbers(l1, l2));