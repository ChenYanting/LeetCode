/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);

    let answer = 0;
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) { // anchor
        let l = 0, r = nums.length - 1; // two pointers
        l === i ? l++ : l; // skip anchor
        r === i ? r-- : r; // skip anchor
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === target) return sum;
            else {
                if (Math.abs(target - sum) < min) {
                    min = Math.abs(target - sum);
                    answer = sum;
                }
                if (sum > target) --r === i ? --r : r;
                else if (sum < target) ++l === i ? ++l : l;
            }
        }
    }
    return answer;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));