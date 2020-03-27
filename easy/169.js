/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const times = Math.floor(nums.length / 2) + 1;
    const occurrences = new Map();
    for (let num of nums) {
        occurrences.set(num, (occurrences.get(num) || 0) + 1);
        if (occurrences.get(num) === times) return num;
    }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));