/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const occurrences = new Map();
    for (let candidate of candidates) occurrences.set(candidate, (occurrences.get(candidate) || 0) + 1);

    const findCandidates = (array, target) => {
        if (target < 0) return;
        else if (target === 0) answer.push(array);
        else {
            const keys = Array.from(occurrences.keys());
            const lastCandidate = array[array.length - 1];
            for (let key of keys) {
                if (occurrences.get(key) === 0
                    || key > target
                    || key < lastCandidate) // avoid duplication combinations
                    continue;
                array.push(key);
                occurrences.set(key, occurrences.get(key) - 1);
                findCandidates([...array], target - key);
                array.pop();
                occurrences.set(key, occurrences.get(key) + 1);
            }
        }
    }
    const answer = [];
    findCandidates([], target);
    return answer;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));