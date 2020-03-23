/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    const answers = [];
    for (let i = 0, prev = null; i < nums.length; i++) {
        let l = i + 1, r = nums.length - 1;
        const num1 = nums[i], target = 0 - num1;
        if (num1 === prev) continue;
        prev = num1; // avoid duplicate answer

        while (l < r) {
            const num2 = nums[l], num3 = nums[r];
            const sum = num2 + num3;
            if (sum === target) {
                answers.push([num1, num2, num3]);
                l++;
                r--;
                while (nums[l] === num2 && nums[r] === num3 && l < r) { // avoid duplicate answer
                    l++;
                    r--;
                }
            }
            else if (sum < target) l++;
            else r--;
        }
    }
    return answers;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([1, -1, -1, 0]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-2, 0, 1, 1, 2]));
console.log(threeSum([]));
console.log(threeSum([-2, 0, 0, 2, 2]));