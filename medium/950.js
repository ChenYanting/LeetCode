/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck.sort((a, b) => b - a);

    let answer = [deck[0]];
    for (let num of deck.slice(1)) {
        answer = [num, answer.pop(), ...answer];
    }
    return answer;
};

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]));