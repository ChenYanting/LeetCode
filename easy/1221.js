/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let diffBetweenLAndR = 0;
    let countOfBalancedStrings = 0;

    for (let c of s) {
        c === 'L' ? diffBetweenLAndR++ : diffBetweenLAndR--;
        if (diffBetweenLAndR === 0) countOfBalancedStrings++;
    }

    return countOfBalancedStrings;
};

console.log(balancedStringSplit('RLRRLLRLRL'));
console.log(balancedStringSplit('RLLLLRRRLR'));
console.log(balancedStringSplit('LLLLRRRR'));
console.log(balancedStringSplit('RLRRRLLRLL'));