/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    const topToBottom = [];
    const leftToRight = [];

    for (let row of grid) {
        leftToRight.push(Math.max(...row));
        for (let i = 0; i < row.length; i++) {
            const element = row[i];
            if (topToBottom[i] === undefined) topToBottom[i] = element;
            else topToBottom[i] = Math.max(topToBottom[i], element);
        }
    }

    let answer = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const element = grid[i][j];
            answer += Math.min(leftToRight[i] - element, topToBottom[j] - element);
        }
    }
    return answer;
};

console.log(maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]));