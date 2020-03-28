/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const occurrences = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (occurrences.has(num)) {
            if (i - occurrences.get(num) <= k) return true;
            else occurrences.set(num, i);
        } else occurrences.set(num, i);
    }
    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));