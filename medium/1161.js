/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    const sumOfEachLevel = new Map();
    const traversal = (node, level) => {
        if (node === null) return;

        if (sumOfEachLevel.has(level)) sumOfEachLevel.set(level, sumOfEachLevel.get(level) + node.val);
        else sumOfEachLevel.set(level, node.val);

        traversal(node.left, level + 1);
        traversal(node.right, level + 1);
    };

    traversal(root, 1);

    let smallestLevelWithMaxSum = 1;
    const levels = Array.from(sumOfEachLevel.keys());
    for (let i = 0; i < levels.length; i++) {
        if (sumOfEachLevel.get(levels[i]) > sumOfEachLevel.get(smallestLevelWithMaxSum))
            smallestLevelWithMaxSum = levels[i];
    }
    return smallestLevelWithMaxSum;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(1);
root.left = new TreeNode(7);
root.right = new TreeNode(0);
root.left.left = new TreeNode(7);
root.left.right = new TreeNode(-8);

console.log(maxLevelSum(root));