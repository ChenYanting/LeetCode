/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    const traversal = (node) => {
        if (node === null) return;
        if (node.left) {
            traversal(node.left);
            if (node.left.val === -1) node.left = null;
        }
        if (node.right) {
            traversal(node.right);
            if (node.right.val === -1) node.right = null;
        }
        if (node.left === null && node.right === null) {
            if (node.val === 0) return node.val = -1;
        }
    };
    traversal(root);
    if (root.left === null && root.right === null) {
        return root.val === -1 ? null : root;
    } else return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root1 = new TreeNode(1);
root1.right = new TreeNode(0);
root1.right.left = new TreeNode(0);
root1.right.right = new TreeNode(1);
console.log(pruneTree(root1));

const root2 = new TreeNode(1);
root2.left = new TreeNode(0);
root2.left.left = new TreeNode(0);
root2.left.right = new TreeNode(0);
root2.right = new TreeNode(1);
root2.right.left = new TreeNode(0);
root2.right.right = new TreeNode(1);
console.log(pruneTree(root2));

const root3 = new TreeNode(1);
root3.left = new TreeNode(1);
root3.left.left = new TreeNode(1);
root3.left.right = new TreeNode(1);
root3.left.left.left = new TreeNode(0);
root3.right = new TreeNode(0);
root3.right.left = new TreeNode(0);
root3.right.right = new TreeNode(1);
console.log(pruneTree(root3));