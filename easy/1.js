/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const occurrences = new Map();
    nums.forEach((num, index) => {
        if (occurrences.has(num)) occurrences.set(num, [...occurrences.get(num), index]);
        else occurrences.set(num, [index]);
    });

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (occurrences.has(diff)) {
            if (nums[i] === diff) {
                if (occurrences.get(diff).length === 2) return occurrences.get(diff);
            } else return [i, occurrences.get(diff)[0]];
        }
    }
};

console.log(twoSum([2, 7, 11, 2, 15], 4));