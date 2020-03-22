/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    const list1 = [], list2 = [];
    const traversal = (node, list) => {
        if (node === null) return;
        traversal(node.left, list);
        list.push(node.val);
        traversal(node.right, list);
    };
    traversal(root1, list1);
    traversal(root2, list2);

    let pointer1 = 0, pointer2 = 0;
    const answer = [];
    while (pointer1 < list1.length && pointer2 < list2.length) {
        const num1 = list1[pointer1], num2 = list2[pointer2];
        if (num1 < num2) {
            answer.push(num1);
            pointer1++;
        } else {
            answer.push(num2);
            pointer2++;
        }
    }

    (pointer1 === list1.length ? list2.slice(pointer2) : list1.slice(pointer1)).forEach(num => answer.push(num));
    return answer;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(4);

const root2 = new TreeNode(1);
root2.left = new TreeNode(0);
root2.right = new TreeNode(3);

console.log(getAllElements(root1, root2));