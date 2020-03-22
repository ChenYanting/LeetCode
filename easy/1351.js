/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let countOfNegativeNumbers = 0, columnEnd = grid[0].length;
    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < columnEnd; column++) {
            if (grid[row][column] < 0) {
                countOfNegativeNumbers += (columnEnd - column) * (grid.length - row);
                columnEnd = column;
            }
        }
    }
    return countOfNegativeNumbers;
};

console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]));
console.log(countNegatives([[3, 2], [1, 0]]));
console.log(countNegatives([[1, -1], [-1, -1]]));
console.log(countNegatives([[-1]]));