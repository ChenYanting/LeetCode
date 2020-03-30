/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (true) {
        let number = 0;
        while (num > 0) {
            number += num % 10;
            num = Math.floor(num / 10);
        }

        if (Math.floor(number / 10) === 0) return number;
        else num = number;
    }
};

console.log(addDigits(38));