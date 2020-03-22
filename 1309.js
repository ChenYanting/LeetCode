/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let answer = '';
    for (let i = s.length - 1; i >= 0;) {
        const c = s.charAt(i);
        if (c === '#') {
            answer = String.fromCharCode(Number(`${s.charAt(i - 2)}${s.charAt(i - 1)}`) + 96) + answer;
            i -= 3;
        } else {
            answer = String.fromCharCode(Number(c) + 96) + answer;
            i--;
        }
    }
    return answer;
};

console.log(freqAlphabets('10#11#12'));
console.log(freqAlphabets('1326#'));
console.log(freqAlphabets('25#'));
console.log(freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#'));