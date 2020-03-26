/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) return true;

    const leftNodes = [], rightNodes = [];
    const traversal = (node, array, isLeft) => {
        if (node === null) {
            array.push(null);
            return;
        };

        array.push(node.val);

        if (node.left || node.right) {
            if (isLeft) {
                traversal(node.left, array, isLeft);
                node.right && traversal(node.right, array, isLeft);
            } else {
                traversal(node.right, array, isLeft);
                node.left && traversal(node.left, array, isLeft);
            }
        }
    };
    traversal(root.left, leftNodes, true);
    traversal(root.right, rightNodes, false);

    if (leftNodes.length !== rightNodes.length) return false;
    while (true) {
        if (leftNodes.pop() !== rightNodes.pop()) return false;
        if (leftNodes.length === 0) break;
    }
    return true;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(3);
root1.left.right = new TreeNode(4);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(4);
root1.right.right = new TreeNode(3);
console.log(isSymmetric(root1));

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.right = new TreeNode(3);
root2.right = new TreeNode(2);
root2.right.right = new TreeNode(3);
console.log(isSymmetric(root2));