/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    const findMaxNumber = (array) => {
        const max = Math.max(...array);
        return [max, array.indexOf(max)];
    };
    const buildTree = (array) => {
        if (array.length === 0) return null;

        const [max, index] = findMaxNumber(array);
        const root = new TreeNode(max);
        root.left = buildTree(array.slice(0, index));
        root.right = buildTree(array.slice(index + 1, array.length));
        return root;
    }
    return buildTree(nums);
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));