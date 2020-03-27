/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let number = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        number += (s.charCodeAt(i) - 64) * Math.pow(26, s.length - 1 - i);
    }
    return number;
};

console.log(titleToNumber('A'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));