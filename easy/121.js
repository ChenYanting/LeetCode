/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) return 0;

    let lowest = 0, highest = 0, maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        if (price < prices[lowest]) {
            lowest = i;
            highest = -1; // forget the previous highest once new lowest is found
        }
        if (highest === -1 || price > prices[highest]) {
            highest = i;
            maxProfit = Math.max(maxProfit, prices[highest] - prices[lowest]);
        }
    }
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));