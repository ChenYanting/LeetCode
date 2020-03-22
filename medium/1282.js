/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    const groups = [];
    const answer = [];
    groupSizes.forEach((group, index) => {
        if (groups[group] === undefined) groups[group] = [index];
        else groups[group].push(index);

        if (groups[group].length === group) {
            answer.push([...groups[group]]);
            groups[group] = [];
        }
    });
    return answer;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
console.log(groupThePeople([2, 1, 3, 3, 3, 2]));