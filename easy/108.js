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
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null;

    const buildTree = (nums) => {
        if (nums.length === 0) return null;
        const middleIndex = Math.floor(nums.length / 2);
        const parent = new TreeNode(nums[middleIndex]);
        parent.left = buildTree(nums.slice(0, middleIndex));
        parent.right = buildTree(nums.slice(middleIndex + 1));
        return parent;
    };
    return buildTree(nums);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));