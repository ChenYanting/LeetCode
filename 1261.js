/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function (root) {
    const traversal = (node) => {
        if (node === null) return null;

        if (node.left) {
            node.left.val = node.val * 2 + 1;
            this.nodes.add(node.left.val);
            traversal(node.left);
        }

        if (node.right) {
            node.right.val = node.val * 2 + 2;
            this.nodes.add(node.right.val);
            traversal(node.right);
        }
    };

    root.val = 0;
    this.nodes = new Set();
    this.nodes.add(root.val);
    traversal(root);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return this.nodes.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root1 = new TreeNode(-1);
root1.right = new TreeNode(-1);
const recoveredTree1 = new FindElements(root1);
console.log(recoveredTree1.find(1));
console.log(recoveredTree1.find(2));

const root2 = new TreeNode(-1);
root2.left = new TreeNode(-1);
root2.left.left = new TreeNode(-1);
root2.left.right = new TreeNode(-1);
root2.right = new TreeNode(-1);
const recoveredTree2 = new FindElements(root2);
console.log(recoveredTree2.find(1));
console.log(recoveredTree2.find(3));
console.log(recoveredTree2.find(5));

const root3 = new TreeNode(-1);
root3.right = new TreeNode(-1);
root3.right.left = new TreeNode(-1);
root3.right.left.left = new TreeNode(-1);
const recoveredTree3 = new FindElements(root3);
console.log(recoveredTree3.find(2));
console.log(recoveredTree3.find(3));
console.log(recoveredTree3.find(4));
console.log(recoveredTree3.find(5));