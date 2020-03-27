/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let l = 0, r = s.length - 1;
    while (l < r) {
        const c1 = s.charAt(l).toLowerCase().charCodeAt(0);
        const c2 = s.charAt(r).toLowerCase().charCodeAt(0);
        if (c1 < 48 || (c1 > 57 && c1 < 97) || c1 > 122) l++;
        else if (c2 < 48 || (c2 > 57 && c2 < 97) || c2 > 122) r--;
        else if (c1 !== c2) return false;
        else {
            l++;
            r--;
        }
    }
    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome('0P'));