/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const nums1Length = nums1.length, nums2Length = nums2.length;
    const calculateMedian = (nums, length) => {
        return length % 2 === 0
            ? (nums[length / 2] + nums[length / 2 - 1]) / 2
            : nums[Math.floor(length / 2)];
    };

    if (nums1Length === 0) return calculateMedian(nums2, nums2Length);
    else if (nums2Length === 0) return calculateMedian(nums1, nums1Length);
    else {
        const totalLength = nums1Length + nums2Length, array = [];
        let p1 = 0, p2 = 0;
        while (array.length <= totalLength / 2) {
            if (p1 < nums1Length && p2 < nums2Length) {
                const num1 = nums1[p1], num2 = nums2[p2];
                if (num1 < num2) {
                    array.push(num1);
                    if (p1 < nums1Length) p1++;
                } else if (num1 > num2) {
                    array.push(num2);
                    if (p2 < nums2Length) p2++;
                } else {
                    array.push(num1, num2);
                    if (p1 < nums1Length) p1++;
                    if (p2 < nums2Length) p2++;
                }
            } else if (p1 === nums1Length) {
                array.push(nums2[p2]);
                if (p2 < nums2Length) p2++;
            } else {
                array.push(nums1[p1]);
                if (p1 < nums1Length) p1++;
            }
        }
        return calculateMedian(array, totalLength);
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 3], [2, 4]));
console.log(findMedianSortedArrays([1, 4], [2, 3]));
console.log(findMedianSortedArrays([2, 3], [1, 4]));
console.log(findMedianSortedArrays([2, 4], [1, 3]));
console.log(findMedianSortedArrays([3, 4], [1, 2]));
console.log(findMedianSortedArrays([], [1]));
console.log(findMedianSortedArrays([], [1, 3]));
console.log(findMedianSortedArrays([1], []));
console.log(findMedianSortedArrays([1, 2], [1, 2]));