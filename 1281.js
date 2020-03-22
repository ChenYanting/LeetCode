/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    const digits = [];
    while (n > 0) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }

    let sum = 0, product = 1;
    for (let digit of digits) {
        sum += digit;
        product *= digit;
    }
    return product - sum;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));