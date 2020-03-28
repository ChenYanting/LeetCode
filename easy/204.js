/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n <= 2) return 0;
    else if (n === 3) return 1;
    else if (n === 4) return 2;
    else {
        let answer = 2;
        const primes = [2, 3];
        for (let i = 5; i < n; i += 2) {
            let isPrime = true;
            for (let j = 0; primes[j] <= Math.sqrt(i) && isPrime; j++) {
                isPrime = i % primes[j] !== 0;
            }
            if (isPrime) {
                primes.push(i);
                answer++;
            }
        }
        return answer;
    }
};

console.log(countPrimes(100000000));