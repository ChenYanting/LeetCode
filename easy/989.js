/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    const k = [];
    while (K > 0) {
        k.push(K % 10);
        K = Math.floor(K / 10);
    }
    k.reverse();

    let pointerA = A.length - 1, pointerK = k.length - 1;
    let carry = false;
    while (pointerA >= 0 && pointerK >= 0) {
        const digitA = A[pointerA], digitK = k[pointerK];
        const sum = digitA + digitK + carry;
        A[pointerA] = sum > 9 ? sum - 10 : sum;
        carry = sum > 9;
        pointerA--;
        pointerK--;
    }

    if (pointerA < 0) {
        while (pointerK >= 0) {
            const digitK = k[pointerK];
            const sum = digitK + carry;
            A.unshift(sum > 9 ? sum - 10 : sum);
            carry = sum > 9;
            pointerK--;
        }
    } else if (pointerK < 0) {
        while (pointerA >= 0) {
            const digitA = A[pointerA];
            const sum = digitA + carry;
            A[pointerA] = sum > 9 ? sum - 10 : sum;
            carry = sum > 9;
            pointerA--;
        }
    }
    return carry ? [1, ...A] : A;
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));
console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1));