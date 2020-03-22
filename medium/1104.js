/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
    const answer = [label];
    for (let i = Math.floor(Math.log2(label)); i >= 1; i--) {
        const startOfCurrLevel = Math.pow(2, i);
        const startOfPrevLevel = Math.pow(2, i - 1);
        const positionOfCurrLevel = label - startOfCurrLevel + 1;
        const parent = i % 2 === 1
            ? startOfCurrLevel - Math.ceil(positionOfCurrLevel / 2)
            : startOfPrevLevel + Math.floor((startOfCurrLevel - positionOfCurrLevel) / 2);
        answer.push(parent);
        label = parent;
    }
    return answer.reverse();
};

console.log(pathInZigZagTree(14));
console.log(pathInZigZagTree(26));