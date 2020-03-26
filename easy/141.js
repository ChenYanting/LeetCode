/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let pointer = head;
    while (pointer) {
        if (pointer.val === null) return true;
        pointer.val = null;
        pointer = pointer.next;
    }
    return false;
};
