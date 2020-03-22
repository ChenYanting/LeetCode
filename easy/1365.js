/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    const clone = [...nums].sort((a, b) => a - b);
    return nums.map(num => clone.indexOf(num));
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));