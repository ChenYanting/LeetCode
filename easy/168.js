/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let c = n % 26 === 0 ? 26 : n % 26;
    let answer = `${String.fromCharCode(64 + c)}`, i = 0;
    n -= c * Math.pow(26, i++);
    while (n > 0) {
        c = Math.floor(n / Math.pow(26, i));
        c = c > 26 ? c % 26 : c;
        answer = `${String.fromCharCode(64 + c)}${answer}`;
        n -= c * Math.pow(26, i++);
    }
    return answer;
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(52));
console.log(convertToTitle(701));
console.log(convertToTitle(703));