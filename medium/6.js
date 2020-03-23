/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;

    const zigzag = [];
    for (let i = 0; i < numRows; i++) zigzag.push([]);

    let row = 0, column = 0, down = true;
    for (const c of s) {
        zigzag[row][column] = c;
        if (down) {
            if (row + 1 === numRows) {
                row--;
                column++;
                down = false;
            } else row++;
        } else {
            if (row - 1 < 0) {
                row++;
                down = true;
            } else {
                row--;
                column++;
            }
        }
    }

    return zigzag.map(row => row.join('')).join('');
};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));