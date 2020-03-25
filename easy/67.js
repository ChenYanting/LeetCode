/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const aLength = a.length, bLength = b.length;
    const diff = Math.abs(aLength - bLength);
    let carry = false, answer = '';
    for (let i = Math.max(aLength, bLength) - 1; i >= 0; i--) {
        const digitA = (aLength > bLength ? a.charAt(i) : a.charAt(i - diff)) || '0';
        const digitB = (aLength > bLength ? b.charAt(i - diff) : b.charAt(i)) || '0';
        if (digitA === '1' && digitB === '1') {
            answer = carry ? `1${answer}` : `0${answer}`;
            carry = true;
        } else if (digitA === '0' && digitB === '0') {
            answer = carry ? `1${answer}` : `0${answer}`;
            carry = false;
        } else answer = carry ? `0${answer}` : `1${answer}`;
    }
    return carry ? `1${answer}` : answer;
};

console.log(addBinary('1', '11'));
console.log(addBinary('1010', '1011'));
console.log(addBinary('100', '110010'));
console.log(addBinary('110010', '10111'));