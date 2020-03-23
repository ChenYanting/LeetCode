/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0, r = height.length - 1;
    let maxArea = 0;
    while (l < r) {
        const left = height[l], right = height[r];
        const area = (r - l) * Math.min(left, right);
        maxArea = Math.max(area, maxArea);
        if (left < right) l++;
        else r--;
    }
    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));