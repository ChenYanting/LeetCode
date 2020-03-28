/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 0 || n === 1) return !!n;
    else if (n < 0) return false;

    while (n > 0) {
        const num = Math.log2(n);
        if (num - Math.floor(num) !== 0) return false;
        n >>= 1;
    }
    return true;
};

console.log(isPowerOfTwo(-16));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));