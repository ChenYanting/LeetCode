/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const map = new Map();
    map.set('(', n);
    map.set(')', n);

    const answer = [];
    const buildString = (str) => {
        if (str.length === n * 2) {
            answer.push(str);
            return;
        }
        for (let parenthesis of Array.from(map.keys())) {
            if (map.get(parenthesis) === 0) continue;
            // the number of ')' left in map should always be bigger than that of `(`
            if (parenthesis == ')' && map.get('(') >= map.get(')')) continue;
            map.set(parenthesis, map.get(parenthesis) - 1);
            buildString(`${str}${parenthesis}`);
            map.set(parenthesis, map.get(parenthesis) + 1);
        }
    };
    buildString('');
    return answer;
};

console.log(generateParenthesis(3));