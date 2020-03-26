/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let answer = [];
    for (let i = 0, row = []; i <= rowIndex; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) row.push(1);
            else row.push(answer[j - 1] + answer[j]);
        }
        answer = row;
        row = [];
    }
    return answer;
};

console.log(getRow(3));