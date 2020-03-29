/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let A = 0, B = 0;

    // calculate how many As and where the positions of A are
    const secretMap = new Map(), positionA = [];
    for (let i = 0; i < secret.length; i++) {
        const c = secret.charAt(i);
        if (c === guess.charAt(i)) {
            A++;
            positionA.push(i);
            continue;
        }
        if (secretMap.has(c)) secretMap.set(c, [...secretMap.get(c), i]);
        else secretMap.set(c, [i]);
    }

    // loop from tail to head because we can use pop which is more efficient than shift
    for (let i = guess.length - 1; i >= 0; i--) {
        // skip A
        if (positionA.indexOf(i) !== -1) continue;
        const c = guess.charAt(i);
        if (secretMap.has(c)) {
            B++;
            const indices = secretMap.get(c);
            indices.pop();
            if (indices.length === 0) secretMap.delete(c);
        }
    }
    return `${A}A${B}B`;
};

console.log(getHint('1807', '7810'));
console.log(getHint('1123', '0111'));
console.log(getHint('11', '10'));