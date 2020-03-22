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
var bstToGst = function (root) {
    const array = [];
    const traversal = (node) => {
        if (node === null) return;

        if (node.right) traversal(node.right);

        if (array.length !== 0) node.val += array.pop().val;
        array.push(node);

        if (node.left) traversal(node.left);
    };
    traversal(root);
    return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(4)
root.left = new TreeNode(1);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(2);
root.left.right.right = new TreeNode(3);
root.right = new TreeNode(6);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);
root.right.right.right = new TreeNode(8);

console.log(bstToGst(root));