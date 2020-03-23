/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    const array = [];
    while (x > 0) {
        array.push(x % 10);
        x = Math.floor(x / 10);
    }

    let l = 0, r = array.length - 1;
    while (l < r) {
        if (array[l++] !== array[r--]) return false;
    }
    return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));