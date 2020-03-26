/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    let answer = false;
    const traversal = (node, sum) => {
        if (node === null) return;
        if (!node.left && !node.right) {
            if (node.val === sum) answer = true;
        }

        if (!answer) {
            traversal(node.left, sum - node.val);
            traversal(node.right, sum - node.val);
        }
    };
    traversal(root, sum);
    return answer;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);
console.log(hasPathSum(root, 22));