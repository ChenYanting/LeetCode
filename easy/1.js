/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const occurances = new Map();
    nums.forEach((num, index) => {
        if (occurances.has(num)) occurances.set(num, [...occurances.get(num), index]);
        else occurances.set(num, [index]);
    });

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (occurances.has(diff)) {
            if (nums[i] === diff) {
                if (occurances.get(diff).length === 2) return occurances.get(diff);
            } else return [i, occurances.get(diff)[0]];
        }
    }
};

console.log(twoSum([2, 7, 11, 2, 15], 4));