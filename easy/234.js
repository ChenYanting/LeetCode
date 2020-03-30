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
var isPalindrome = function (head) {
    if (head === null) return true;

    // iterative
    // const nodes = [];
    // let pointer = head;
    // while (pointer) {
    //     nodes.push(pointer.val);
    //     pointer = pointer.next;
    // }
    // let l = 0, r = nodes.length - 1;
    // while (l < r) {
    //     if (nodes[l++] !== nodes[r--]) return false;
    // }
    // return true;

    // recursive
    let answer = true;
    const traversal = (node, journey, index) => {
        if (node === null) return;

        journey[index] = node.val;
        traversal(node.next, journey, index + 1);
        if (answer && journey[journey.length - index - 1] !== node.val) answer = false;
    };
    traversal(head, [], 0);
    return answer;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head1 = new ListNode(1);
head1.next = new ListNode(2);
console.log(isPalindrome(head1));

const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(2);
head2.next.next.next = new ListNode(1);
console.log(isPalindrome(head2));