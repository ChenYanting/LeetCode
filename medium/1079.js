/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    const occurances = new Map();
    for (let tile of tiles) {
        if (occurances.has(tile)) occurances.set(tile, occurances.get(tile) + 1);
        else occurances.set(tile, 1);
    };
    const count = (map) => {
        let sum = 0;
        for (let [key, value] of map.entries()) {
            if (value === 0) continue;
            sum++;
            map.set(key, value - 1);
            sum += count(map);
            map.set(key, map.get(key) + 1);
        }
        return sum;
    };
    return count(occurances);
};

console.log(numTilePossibilities('AAB'));
console.log(numTilePossibilities('AAABBC'));

// inspired by https://leetcode.com/problems/letter-tile-possibilities/discuss/310304/JavaScript-solution