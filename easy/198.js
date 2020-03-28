/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const map = new Map();

    let maxMoney = 0;
    const steal = (index) => {
        if (index > nums.length - 1) return 0;
        else if (index === nums.length - 1) return nums[index];
        else {
            let max = 0;
            for (let i = index; i < nums.length; i++) {
                if (!map.has(i + 2)) map.set(i + 2, steal(i + 2));
                max = Math.max(max, nums[i] + map.get(i + 2));
            }
            return max;
        }
    };

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(i + 2)) map.set(i + 2, steal(i + 2));
        maxMoney = Math.max(maxMoney, nums[i] + map.get(i + 2));
    }
    return maxMoney;
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));
console.log(rob([114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240]));