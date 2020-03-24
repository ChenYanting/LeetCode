/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const parenthesesMap = new Map();
    parenthesesMap.set('(', 1);
    parenthesesMap.set('[', 2);
    parenthesesMap.set('{', 3);
    parenthesesMap.set(')', -1);
    parenthesesMap.set(']', -2);
    parenthesesMap.set('}', -3);

    const stack = [];
    for (const c of s) {
        if (stack.length === 0) {
            if (parenthesesMap.get(c) < 0) return false;
            else stack.push(c);
        } else {
            if (parenthesesMap.get(c) > 0) stack.push(c);
            else if (parenthesesMap.get(c) + parenthesesMap.get(stack[stack.length - 1]) === 0) stack.pop();
            else return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));