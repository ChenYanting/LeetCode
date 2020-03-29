/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1, r = n;
        while (l < r) {
            const num = Math.floor((l + r) / 2);
            if (isBadVersion(num)) r = num;
            else l = num + 1;
        }
        return l;
    };
};

function isBadVersion(n) {
    const versions = [false, false, false, true, true, true];
    return versions[n];
}

console.log(solution(isBadVersion)(5));