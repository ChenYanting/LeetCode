/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return '1';

    let answer = '';
    for (let i = 2, current = '1'; i <= n; i++) {
        answer = '';
        for (let j = 0; j < current.length;) {
            let pointer = j + 1;
            while (current.charAt(j) === current.charAt(pointer) && pointer < current.length) pointer++;
            answer = `${answer}${pointer - j}${current.charAt(j)}`;
            j = pointer;
        }
        current = answer;
    }
    return answer;
};

console.log(countAndSay(1));
console.log(countAndSay(4));