/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    const pattern2Str = new Map(), strSet = new Set();
    const strings = str.split(' ');

    if (pattern.length !== strings.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        const c = pattern.charAt(i), string = strings[i];
        if (pattern2Str.has(c)) {
            if (pattern2Str.get(c) !== string) return false;
        } else {
            if (strSet.has(string)) return false;
            pattern2Str.set(c, string);
            strSet.add(string);
        }
    }
    return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog dog dog dog'));