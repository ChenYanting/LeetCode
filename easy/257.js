/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const answer = [];
    const traversal = (node, path) => {
        if (node === null) return;

        path.push(`${node.val}`);
        if (!node.left && !node.right) {
            answer.push(path);
            return;
        }

        node.left && traversal(node.left, [...path]);
        node.right && traversal(node.right, [...path]);
    };

    traversal(root, []);
    return answer.map(path => path.join('->'));
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
console.log(binaryTreePaths(root));