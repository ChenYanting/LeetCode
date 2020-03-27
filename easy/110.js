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
var isBalanced = function (root) {
    let answer = true;
    const compareHeight = (node, depth) => {
        if (node === null) return depth;
        const leftDepth = compareHeight(node.left, depth + 1);
        if (answer) {
            const rightDepth = compareHeight(node.right, depth + 1);
            if (Math.abs(leftDepth - rightDepth) > 1) answer = false;
            return Math.max(leftDepth, rightDepth);
        }
    };
    compareHeight(root, 0);
    return answer;
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
console.log(isBalanced(root));

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(3);
root2.left.left.left = new TreeNode(4);
root2.left.left.right = new TreeNode(4);
root2.right = new TreeNode(2);
console.log(isBalanced(root2));