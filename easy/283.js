/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let zero = 0, nonZero = 0;
    while (zero < nums.length && nonZero < nums.length) {
        while (zero < nums.length) {
            if (nums[zero] === 0) break;
            zero++;
        }
        while (nonZero < nums.length) {
            if (nums[nonZero] !== 0) break;
            nonZero++;
        }

        if (nonZero >= nums.length) break;

        if (nonZero > zero) {
            [nums[zero], nums[nonZero]] = [nums[nonZero], nums[zero]];
            zero++;
        }
        nonZero++;
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 0, 0, 0]));
console.log(moveZeroes([1, 1, 0, 0, 0]));