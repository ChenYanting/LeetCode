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
var balanceBST = function (root) {
    const nodes = [];
    const preorder = (node) => {
        if (node === null) return;
        preorder(node.left);
        nodes.push(node);
        preorder(node.right);
    };
    preorder(root);

    const buildTree = (nodes) => {
        if (nodes.length === 0) return null;

        const middle = Math.floor(nodes.length / 2);
        const node = nodes[middle];
        node.left = buildTree(nodes.slice(0, middle));
        node.right = buildTree(nodes.slice(middle + 1));
        return node;
    };
    return buildTree(nodes);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.right = new TreeNode(3);
root.right.right.right = new TreeNode(4);
console.log(balanceBST(root));