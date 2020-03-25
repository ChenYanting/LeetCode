/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim();
    let answer = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) === ' ') break;
        else answer++;
    }
    return answer;
};

console.log(lengthOfLastWord('Hello World'));