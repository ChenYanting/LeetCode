var getTargetCopy = function(original, cloned, target) {
    let answer = null;
    const searchTarget = (node) => {
        if (node === null) return;
        else if (node.val === target.val) {
            answer = node;
            return;
        }
        
        if (answer === null) searchTarget(node.left);
        if (answer === null) searchTarget(node.right);
    }
    searchTarget(cloned);
    return answer;
}