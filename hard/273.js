/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num === 0) return 'Zero';

    const mapping = new Map();
    mapping.set(1, 'One');
    mapping.set(2, 'Two');
    mapping.set(3, 'Three');
    mapping.set(4, 'Four');
    mapping.set(5, 'Five');
    mapping.set(6, 'Six');
    mapping.set(7, 'Seven');
    mapping.set(8, 'Eight');
    mapping.set(9, 'Nine');
    mapping.set(10, 'Ten');
    mapping.set(11, 'Eleven');
    mapping.set(12, 'Twelve');
    mapping.set(13, 'Thirteen');
    mapping.set(14, 'Fourteen');
    mapping.set(15, 'Fifteen');
    mapping.set(16, 'Sixteen');
    mapping.set(17, 'Seventeen');
    mapping.set(18, 'Eighteen');
    mapping.set(19, 'Nineteen');
    mapping.set(20, 'Twenty');
    mapping.set(30, 'Thirty');
    mapping.set(40, 'Forty');
    mapping.set(50, 'Fifty');
    mapping.set(60, 'Sixty');
    mapping.set(70, 'Seventy');
    mapping.set(80, 'Eighty');
    mapping.set(90, 'Ninety');
    mapping.set(100, 'Hundred');
    mapping.set(1000, 'Thousand');
    mapping.set(1000000, 'Million');
    mapping.set(1000000000, 'Billion');

    const answer = [];
    const calculateDigits = (num) => Math.floor(Math.log10(num)) + 1;
    const buildNumberWithAtMostThreeDigits = (num) => {
        while (num > 0) {
            if (num <= 20) {
                answer.push(mapping.get(num));
                break;
            } else {
                let digits = calculateDigits(num);
                const unit = Math.pow(10, digits - 1);
                const number = Math.floor(num / unit);
                if (unit === 100) answer.push(mapping.get(number), mapping.get(unit));
                else answer.push(mapping.get(number * unit));
                digits--;
                num %= unit;
            }
        }
    };

    let digits = calculateDigits(num);
    while (digits > 3) {
        const unit = Math.pow(10, 3 * Math.ceil((digits - 3) / 3));
        buildNumberWithAtMostThreeDigits(Math.floor(num / unit))
        answer.push(mapping.get(unit));
        num %= unit;
        digits = calculateDigits(num);
    }
    buildNumberWithAtMostThreeDigits(num);
    return answer.join(' ');
};

console.log(numberToWords(0));
console.log(numberToWords(12345));
console.log(numberToWords(1234567));
console.log(numberToWords(1234567891));
console.log(numberToWords(100000000000));
console.log(numberToWords(10000000000));
console.log(numberToWords(1000000000));
console.log(numberToWords(100000000));
console.log(numberToWords(10000000));
console.log(numberToWords(1000000));
console.log(numberToWords(100000));
console.log(numberToWords(10000));
console.log(numberToWords(1000));
console.log(numberToWords(100));
console.log(numberToWords(10));
console.log(numberToWords(0));
console.log(numberToWords(1000010));