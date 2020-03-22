/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    const answer = [-1];
    for (let i = arr.length - 2, max = arr[arr.length - 1]; i >= 0; i--) {
        max = Math.max(max, arr[i + 1]);
        answer.push(max);
    }
    return answer.reverse();
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));