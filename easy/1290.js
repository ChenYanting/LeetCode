/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let answer = 0;
    while (head) {
        answer <<= 1;
        answer += head.val;
        head = head.next;
    }
    return answer;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const root1 = new ListNode(1);
root1.next = new ListNode(0);
root1.next.next = new ListNode(1);
console.log(getDecimalValue(root1));

const root2 = new ListNode(0);
console.log(getDecimalValue(root2));

const root3 = new ListNode(1);
console.log(getDecimalValue(root3));

const root4 = new ListNode(1);
root4.next = new ListNode(0);
root4.next.next = new ListNode(0);
root4.next.next.next = new ListNode(1);
root4.next.next.next.next = new ListNode(0);
root4.next.next.next.next.next = new ListNode(0);
root4.next.next.next.next.next.next = new ListNode(1);
root4.next.next.next.next.next.next.next = new ListNode(1);
root4.next.next.next.next.next.next.next.next = new ListNode(1);
root4.next.next.next.next.next.next.next.next.next = new ListNode(0);
root4.next.next.next.next.next.next.next.next.next.next = new ListNode(0);
root4.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0);
root4.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0);
root4.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0);
root4.next.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(0);
console.log(getDecimalValue(root4));

const root5 = new ListNode(0);
root5.next = new ListNode(0);
console.log(getDecimalValue(root5));