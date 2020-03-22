/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
    return n % 2 === 1 ? new Array(n).fill('a').join('') : `a${new Array(n - 1).fill('b').join('')}`;
};

console.log(generateTheString(4));
console.log(generateTheString(2));
console.log(generateTheString(7));