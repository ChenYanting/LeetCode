/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    const map = new Map();
    for (let c of t) {
        if (map.has(c)) map.set(c, map.get(c) + 1);
        else map.set(c, 1);
    }

    let answer = 0;
    for (let c of s) {
        if (map.get(c) > 0) map.set(c, map.get(c) - 1);
        else answer++;
    }
    return answer;
};

console.log(minSteps('bab', 'aba'));
console.log(minSteps('leetcode', 'practice'));
console.log(minSteps('anagram', 'mangaar'));
console.log(minSteps('xxyyzz', 'xxyyzz'));
console.log(minSteps('friend', 'family'));
console.log(minSteps('yplsbcvbuqjycfdgxdzfuvyxkceppqmtdmzfednkx', 'hjtiuoomfyeiencomvahzfsvqlqqumccburhadyua'));