/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    else if (strs.length === 1) return strs[0];

    let pointer = 0, isSame = true;
    while (isSame) {
        const c = strs[0].charAt(pointer);
        for (let i = 1; i < strs.length && isSame; i++) {
            isSame = pointer < strs[i].length && c === strs[i].charAt(pointer);
        }
        if (isSame) pointer++;
    }
    return strs[0].substring(0, pointer);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));