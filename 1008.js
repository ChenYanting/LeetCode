/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    const splitArray = (root, array) => {
        if (array.length === 1) return [[], []];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > root) return [array.slice(1, i), array.slice(i, array.length)];
        }
        return [array.slice(1, array.length), []];
    };
    const buildTree = (array) => {
        if (array.length === 0) return null;

        const root = new TreeNode(array[0]);
        const [leftArray, rightArray] = splitArray(array[0], array);
        root.left = buildTree(leftArray);
        root.right = buildTree(rightArray);
        return root;
    };
    return buildTree(preorder);
};

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
console.log(bstFromPreorder([4, 2]));