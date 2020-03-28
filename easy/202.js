/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const set = new Set();
    while (!set.has(n)) {
        set.add(n);

        let num = 0;
        while (n > 0) {
            num += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        if (num === 1) return true;
        else n = num;
    }
    return false;
};

console.log(isHappy(19));