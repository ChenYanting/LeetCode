/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (root == null) return [];

    const answer = [];
    const traversal = (node, level) => {
        if (node === null) return;
        if (!answer[level]) answer[level] = [node.val];
        else answer[level].push(node.val);
        traversal(node.left, level + 1);
        traversal(node.right, level + 1);
    };
    traversal(root, 0);
    return answer.reverse();
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(levelOrderBottom(root));