/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const sChars = new Map();
    for (let c of s) {
        sChars.set(c, (sChars.get(c) || 0) + 1);
    }

    for (let c of t) {
        if (sChars.has(c)) {
            const freq = sChars.get(c);
            freq === 1 ? sChars.delete(c) : sChars.set(c, freq - 1);
        } else return false;
    }
    return sChars.size === 0;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));