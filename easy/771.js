/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    const jewels = new Set();
    for (let j of J) jewels.add(j);

    let count = 0;
    for (let s of S) {
        if (jewels.has(s)) count++;
    }
    return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));