/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = false;
    digits[digits.length - 1]++;
    for (let i = digits.length - 1; i >= 0; i--) {
        const num = digits[i] + carry;
        digits[i] = num > 9 ? 0 : num;
        carry = num > 9;
        if (!carry) break;
    }
    return carry ? [1, ...digits] : digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([8, 9, 9, 9]));