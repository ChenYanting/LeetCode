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
var deepestLeavesSum = function (root) {
    let deepest = 0;
    const leaves = new Map();
    const traversal = (node, level) => {
        if (node === null) return
        if (node.left === null && node.right === null) {
            if (level >= deepest) {
                deepest = Math.max(level, deepest);
                if (leaves.has(level)) leaves.set(level, [...leaves.get(level), node.val]);
                else leaves.set(level, [node.val]);
            }
            return;
        }

        traversal(node.left, level + 1);
        traversal(node.right, level + 1);
    }

    traversal(root, 1);
    return leaves.get(deepest).reduce((acc, cur) => acc + cur);
};