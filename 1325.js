/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    const traversal = (node) => {
        if (node === null) return;
        if (node.left) {
            traversal(node.left);
            if (node.left.val === 0) node.left = null;
        }
        if (node.right) {
            traversal(node.right);
            if (node.right.val === 0) node.right = null;
        }
        if (node.left === null && node.right === null) {
            if (node.val === target) node.val = 0;
        }
    };

    traversal(root);
    if (root.left === null && root.right === null) {
        return root.val === 0 ? null : root;
    } else return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.right.left = new TreeNode(2);
root1.right.right = new TreeNode(4);
console.log(removeLeafNodes(root1, 2));

const root2 = new TreeNode(1);
root2.left = new TreeNode(3);
root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(2);
root2.right = new TreeNode(3);
console.log(removeLeafNodes(root2, 3));

const root3 = new TreeNode(1);
root3.left = new TreeNode(2);
root3.left.left = new TreeNode(2);
root3.left.left.left = new TreeNode(2);
console.log(removeLeafNodes(root3, 2));

const roo4 = new TreeNode(1);
roo4.left = new TreeNode(1);
roo4.right = new TreeNode(1);
console.log(removeLeafNodes(roo4, 1));

const root5 = new TreeNode(1);
root5.left = new TreeNode(2);
root5.right = new TreeNode(3);
console.log(removeLeafNodes(root5, 1));