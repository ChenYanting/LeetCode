/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (nums.length <= 1) return;

    let lastAscending = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) lastAscending = i;
    }

    if (lastAscending === nums.length - 2) {
        // 1 [2] 3 -> 1 3 2
        [nums[lastAscending + 1], nums[lastAscending]] = [nums[lastAscending], nums[lastAscending + 1]];
    } else if (lastAscending === -1) {
        // 3 2 1
        let l = 0, r = nums.length - 1;
        while (l < r) {
            [nums[r], nums[l]] = [nums[l], nums[r]];
            l++;
            r--;
        }
    } else {
        // 1 [1] 4 3 2 -> 1 1 2 3 4
        const copy = nums.slice(lastAscending + 1).sort((a, b) => a - b);
        for (let i = 0; i < copy.length; i++) nums[lastAscending + 1 + i] = copy[i];
        // 1 [1] 2 3 4 -> 1 2 1 3 4
        for (let i = lastAscending + 1; i < nums.length; i++) {
            if (nums[i] > nums[lastAscending]) {
                [nums[i], nums[lastAscending]] = [nums[lastAscending], nums[i]];
                break;
            }
        }
    }
};

console.log(nextPermutation([1, 2, 3]));
console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1, 1, 5]));
console.log(nextPermutation([1, 2, 4, 3]));
console.log(nextPermutation([1, 1, 4, 3, 2]));
console.log(nextPermutation([5, 3, 6, 4, 1]));
console.log(nextPermutation([1, 3, 2]));