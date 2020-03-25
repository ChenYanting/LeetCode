/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
    const findLeftAndRight = (str, dashes) => {
        const answer = [];
        for (let i = 0, numOfDash = 0; i < str.length; i++) {
            const c = str.charAt(i);
            if (c === '-') numOfDash++;
            else {
                if (numOfDash === dashes) answer.push(i);
                numOfDash = 0;
            }
        }
        return answer;
    }
    const buildTree = (str, level) => {
        if (str.length === 0) return;

        const node = new TreeNode(parseInt(str));
        const [left, right] = findLeftAndRight(str, level + 1);
        if (left) node.left = buildTree(str.substring(left, right), level + 1);
        if (right) node.right = buildTree(str.substring(right), level + 1);
        return node;
    }
    return buildTree(S, 0);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(recoverFromPreorder('1-2--3--4-5--6--7'));
console.log(recoverFromPreorder('1-2--3---4-5--6---7'));
console.log(recoverFromPreorder('1-401--349---90--88'));