/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    const stack = [];
    for (let s of S) {
        if (stack.length === 0 || s === '(') stack.push(s);
        else {
            const top = stack[stack.length - 1];
            if (top === '(') stack.pop();
            else stack.push(s);
        }
    }
    return stack.length;
};

console.log(minAddToMakeValid('())'));
console.log(minAddToMakeValid('((('));
console.log(minAddToMakeValid('()'));
console.log(minAddToMakeValid('()))(('));