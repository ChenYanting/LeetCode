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
var sumEvenGrandparent = function(root) {
    let answer = 0;
    const tarversal = (node, evenPath) => {
        if (node === null) return;
        if (evenPath.length >= 2 && evenPath[evenPath.length - 2] % 2 === 0) {
            answer += node.val;
        }
            
        evenPath.push(node.val);
        tarversal(node.left, [...evenPath]);
        tarversal(node.right, [...evenPath]);
    };
    tarversal(root, []);
    return answer;
};