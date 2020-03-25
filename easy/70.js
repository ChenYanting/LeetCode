/**
 * @param {number} n
 * @return {number}
 */
const records = new Map();
var climbStairs = function (n) {
    if (n === 1) return 1;
    else if (n === 2) return 2;
    else {
        if (!records.has(n - 1)) records.set(n - 1, climbStairs(n - 1));
        if (!records.has(n - 2)) records.set(n - 2, climbStairs(n - 2));
        return records.get(n - 1) + records.get(n - 2);
    }
};

console.log(climbStairs(2));
console.log(climbStairs(3));