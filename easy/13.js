/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanToInteger = new Map();
    romanToInteger.set('I', 1);
    romanToInteger.set('V', 5);
    romanToInteger.set('X', 10);
    romanToInteger.set('L', 50);
    romanToInteger.set('C', 100);
    romanToInteger.set('D', 500);
    romanToInteger.set('M', 1000);

    let integer = romanToInteger.get(s.charAt(s.length - 1));
    for (let i = s.length - 2, prev = romanToInteger.get(s.charAt(s.length - 1)); i >= 0; i--) {
        const curr = romanToInteger.get(s.charAt(i));
        if (curr < prev) integer -= curr;
        else integer += curr;
        prev = curr;
    }
    return integer;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));