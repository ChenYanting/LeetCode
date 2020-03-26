/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null) return 0;

    let min = Number.POSITIVE_INFINITY;
    const traversal = (node, level) => {
        if (node === null) return;
        if (!node.left && !node.right) min = Math.min(min, level);
        traversal(node.left, level + 1);
        traversal(node.right, level + 1);
    };
    traversal(root, 1);
    return min;
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
console.log(minDepth(root));