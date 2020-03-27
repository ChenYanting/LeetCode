/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits === '') return [];

    const phone = new Map();
    phone.set('2', ['a', 'b', 'c']);
    phone.set('3', ['d', 'e', 'f']);
    phone.set('4', ['g', 'h', 'i']);
    phone.set('5', ['j', 'k', 'l']);
    phone.set('6', ['m', 'n', 'o']);
    phone.set('7', ['p', 'q', 'r', 's']);
    phone.set('8', ['t', 'u', 'v']);
    phone.set('9', ['w', 'x', 'y', 'z']);

    const answer = [];
    const createCombinations = (str, combination) => {
        if (str.length === 0) {
            answer.push(combination);
            return;
        };
        for (let letter of phone.get(str.charAt(0))) {
            createCombinations(str.substring(1), `${combination}${letter}`);
        }
    };
    createCombinations(digits, '');
    return answer;
};

console.log(letterCombinations('23'));