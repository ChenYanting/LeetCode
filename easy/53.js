/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i + 1]);
    }
    return Math.max(...nums);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5]));