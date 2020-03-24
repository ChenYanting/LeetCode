/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const integerToRoman = new Map();
    integerToRoman.set(1, 'I');
    integerToRoman.set(5, 'V');
    integerToRoman.set(10, 'X');
    integerToRoman.set(50, 'L');
    integerToRoman.set(100, 'C');
    integerToRoman.set(500, 'D');
    integerToRoman.set(1000, 'M');

    let digits = Math.floor(Math.log10(num)) + 1;
    const answer = [];
    while (num > 0) {
        const power10 = Math.pow(10, digits - 1);
        const roman = integerToRoman.get(power10);
        const digit = Math.floor(num / power10);

        switch (digit) {
            case 1: case 2: case 3:
                for (let i = 1; i <= digit; i++) answer.push(roman);
                break;
            case 4:
                answer.push(roman, integerToRoman.get(power10 * 5));
                break;
            case 5: case 6: case 7: case 8:
                answer.push(integerToRoman.get(power10 * 5));
                for (let i = 6; i <= digit; i++) answer.push(roman);
                break;
            case 9:
                answer.push(roman, integerToRoman.get(power10 * 10));
                break;
        }
        num = num % power10;
        digits--;
    }
    return answer.join('');
};

console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));