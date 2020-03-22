/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    return Array.from(str).map(c => {
        const code = c.charCodeAt(0);
        return (code >= 65 && code <= 90) ? String.fromCharCode(code + 32) : c;
    }).join('');
};

console.log(toLowerCase('Hello'));
console.log(toLowerCase('here'));
console.log(toLowerCase('LOVELY'));