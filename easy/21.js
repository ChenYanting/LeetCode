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
var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null;
    else if (!l1 || !l2) return l1 || l2;
    else {
        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(4);
const head2 = new ListNode(1);
head2.next = new ListNode(3);
head2.next.next = new ListNode(4);
console.log(mergeTwoLists(head1, head2));