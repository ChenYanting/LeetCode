/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let pointer = headA;
    while (pointer) {
        pointer.x = null;
        pointer = pointer.next;
    }

    pointer = headB;
    while (pointer) {
        if (pointer.x === null) return pointer;
        pointer = pointer.next;
    }
    return null;
};