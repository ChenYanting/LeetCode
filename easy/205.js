/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const s2t = new Map(), uniqueT = new Set();
    for (let i = 0; i < t.length; i++) {
        const c1 = s.charAt(i), c2 = t.charAt(i);
        if (s2t.has(c1)) {
            if (s2t.get(c1) !== c2) return false;
        } else {
            if (uniqueT.has(c2)) return false;
            s2t.set(c1, c2);
            uniqueT.add(c2);
        }
    }
    return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('ab', 'aa'));