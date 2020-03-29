/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let commonAncestor = null;
    const pValue = p.val, qValue = q.val;
    const findCommonAncestor = (node) => {
        if (node === null) return;

        const val = node.val;
        if (val === pValue || val === qValue) {
            commonAncestor = node;
            return;
        } else if (pValue < val && qValue > val) {
            commonAncestor = node;
            return;
        } else if (qValue < val && pValue > val) {
            commonAncestor = node;
            return;
        } else {
            findCommonAncestor(node.left);
            !commonAncestor && findCommonAncestor(node.right);
        }
    };

    findCommonAncestor(root);
    return commonAncestor;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(6);
root.left = new TreeNode(2);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right = new TreeNode(8);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
console.log(lowestCommonAncestor(root, root.left, root.right));
console.log(lowestCommonAncestor(root, root.left, root.left.right));