/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return nums;

    while (true) {
        if (nums[nums.length - 1] === nums[nums.length - 2]) nums.pop();
        else break;
    }

    let i = 0;
    const end = nums[nums.length - 1];
    while (nums[i] !== end) {
        if (nums[i] === nums[i + 1]) nums.shift();
        else nums.push(nums.shift());
    }
    nums.push(nums.shift());
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4]));