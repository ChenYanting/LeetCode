/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    if (num < 1) return false;

    const primes = [2, 3, 5];
    let number = num;
    while (number > 1) {
        for (let i = 0; i < primes.length; i++) {
            const prime = primes[i];
            const result = number / prime;
            if (result === Math.floor(result)) {
                number = result;
                break;
            }
        }
        if (number === num) return false;
        else num = number;
    }
    return true;
};

console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(14));