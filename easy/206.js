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
var reverseList = function (head) {
    if (head == null) return null;

    // iterative
    // const nodes = [];
    // let pointer = head;
    // while (pointer) {
    //     nodes.push(pointer);
    //     pointer = pointer.next;
    // }

    // for (let i = nodes.length - 1; i > 0; i--) {
    //     nodes[i].next = nodes[i - 1];
    // }
    // nodes[0].next = null;
    // return nodes[nodes.length - 1];

    // recursive
    let answer = null;
    const track = (node, next) => {
        if (next === null) {
            answer = node;
            return;
        };
        track(next, next.next);
        next.next = node;
    }
    track(head, head.next);
    head.next = null;
    return answer;
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
console.log(reverseList(head));