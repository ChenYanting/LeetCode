/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    const map = new Map();
    for (let i = 0; i < S.length; i++) {
        map.set(S.charAt(i), i);
    }

    let pointer = 0;
    const answer = [];
    while (pointer < S.length) {
        const start = S.charAt(pointer);
        let end = map.get(start);
        for (let i = pointer; i <= end; i++) {
            const c = S.charAt(i);
            const cEnd = map.get(c);
            if (c === start || cEnd < end) continue;
            else end = cEnd;
        }
        answer.push(end - pointer + 1);
        pointer = end + 1;
    }
    return answer;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));