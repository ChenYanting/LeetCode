/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    let sum = 0;
    const traversal = (node) => {
        if (node === null) return;
        if (node.val >= L && node.val <= R) sum += node.val;
        if (node.val >= L) traversal(node.left);
        if (node.val <= R) traversal(node.right);
    };
    traversal(root);
    return sum;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right = new TreeNode(15);
root.right.right = new TreeNode(18);

console.log(rangeSumBST(root, 7, 15));