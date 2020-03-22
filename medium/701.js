/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (root === null) return new TreeNode(val);

    const insertValue = (node, val) => {
        if (node.val > val) {
            if (node.left) insertValue(node.left, val);
            else node.left = new TreeNode(val);
        } else {
            if (node.right) insertValue(node.right, val);
            else node.right = new TreeNode(val);
        }
    };

    insertValue(root, val);
    return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(4)
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(7);

console.log(insertIntoBST(root, 5));