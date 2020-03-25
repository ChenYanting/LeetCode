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
var deleteDuplicates = function (head) {
    let pointer = head;
    while (pointer) {
        if (!pointer.next) break;
        else {
            if (pointer.next.val === pointer.val) pointer.next = pointer.next.next;
            else pointer = pointer.next;
        }
    }
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head1 = new ListNode(1);
head1.next = new ListNode(1);
head1.next.next = new ListNode(2);
console.log(deleteDuplicates(head1));

const head2 = new ListNode(1);
head2.next = new ListNode(1);
head2.next.next = new ListNode(2);
head2.next.next.next = new ListNode(3);
head2.next.next.next.next = new ListNode(3);
console.log(deleteDuplicates(head2));