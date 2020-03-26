/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    const nodesP = [], nodesQ = [];
    const buildArray = (node, array) => {
        if (node === null) {
            array.push(null);
            return;
        }

        array.push(node.val);
        if (node.left || node.right) {
            buildArray(node.left, array);
            node.right && buildArray(node.right, array);
        }
    };
    buildArray(p, nodesP);
    buildArray(q, nodesQ);

    if (nodesP.length !== nodesQ.length) return false;
    while (true) {
        if (nodesP.pop() !== nodesQ.pop()) return false;
        if (nodesP.length === 0) return true;
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
console.log(isSameTree(root1, root2));

const root3 = new TreeNode(1);
root3.left = new TreeNode(2);
const root4 = new TreeNode(1);
root4.right = new TreeNode(2);
console.log(isSameTree(root3, root4));