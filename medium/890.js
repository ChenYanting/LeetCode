/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    const answer = [];
    for (let word of words) {
        const wordMap = new Map(), patternMap = new Map();
        let isMatched = true;
        for (let i = 0; i < word.length && isMatched; i++) {
            const w = word.charAt(i), p = pattern.charAt(i);
            const hasW = wordMap.has(w), hasP = patternMap.has(p);
            if (hasW !== hasP) isMatched = false;
            else {
                if (!hasW) {
                    wordMap.set(w, i);
                    patternMap.set(p, i);
                } else if (wordMap.get(w) !== patternMap.get(p)) isMatched = false;
            }
        }
        if (isMatched) answer.push(word);
    }
    return answer;
};

console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"));