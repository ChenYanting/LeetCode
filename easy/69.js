/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    for (let i = 0; ; i++) {
        const square = i * i;
        if (square === x) return i;
        else if (square > x) return i - 1;
    }
};

console.log(mySqrt(4));
console.log(mySqrt(8));