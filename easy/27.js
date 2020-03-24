/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const originalLength = nums.length;
    let counter = 0;
    while (counter < originalLength) {
        if (nums[0] === val) nums.shift();
        else nums.push(nums.shift());
        counter++;
    }
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));