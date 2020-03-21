/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const belongWhichGroup = new Map();
    groupSizes.forEach((group, index) => {
        if (belongWhichGroup.has(group)) belongWhichGroup.set(group, [...belongWhichGroup.get(group), index]);
        else belongWhichGroup.set(group, [index]);
    });

    const answer = [];
    for (let key of Array.from(belongWhichGroup.keys())) {
        const people = belongWhichGroup.get(key);
        let group = [];
        while (people.length > 0) {
            if (group.length < key) group.push(people.pop());
            else {
                answer.push([...group]);
                group = [];
            }
        }
        answer.push([...group]);
    }
    return answer;
};

console.log(groupThePeople([3,3,3,3,3,1,3]));
console.log(groupThePeople([2,1,3,3,3,2]));