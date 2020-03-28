/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    // only a pair of 2 and 5 can generate 10 which means trailing zero
    // the number of 2 must be bigger then 5, just need to count the number of 5
    let answer = 0;
    while (n > 0) {
        // the first round, count the number of 5
        // the second round, count the number of 25...
        const num = Math.floor(n / 5);
        answer += num;
        n = num;
    }
    return answer;
};

console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
// 200 / 5 = 40, 40 / 5 = 8, 8 / 5 = 1
console.log(trailingZeroes(200));
console.log(trailingZeroes(1808548329));