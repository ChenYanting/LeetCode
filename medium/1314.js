/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
    const sumUp = (i, j) => {
        let sum = 0;
        for (let r = i - K; r <= i + K; r++) {
            if (r < 0 || r >= mat.length) continue;
            for (let c = j - K; c <= j + K; c++) {
                if (c < 0 || c >= mat[r].length) continue;
                sum += mat[r][c];
            }
        };
        return sum;
    };

    const answer = [];
    for (let i = 0; i < mat.length; i++) {
        answer[i] = [];
        for (let j = 0; j < mat[i].length; j++) {
            answer[i].push(sumUp(i, j));
        }
    }
    return answer;
};

console.log(matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1));
console.log(matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2));