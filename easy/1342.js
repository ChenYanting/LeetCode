/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let steps = 0;
    while (num !== 0) {
        num = num & 1 ? num - 1 : num >> 1;
        steps++;
    }
    return steps;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
console.log(numberOfSteps(1000000));