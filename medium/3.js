/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let longest = 0;
    let characters = [];
    for (let c of s) {
        const index = characters.indexOf(c);
        if (index !== -1) {
            longest = Math.max(longest, characters.length);
            characters = index === characters.length - 1 ? [] : characters.slice(index + 1);
        }
        characters.push(c);
    }
    return Math.max(longest, characters.length);
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('dvdf'));