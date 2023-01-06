/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs = costs.sort((a, b) => a-b)
    let max = 0
    for (let cost of costs) {
        if (coins < cost) break
        max++
        coins -= cost
    }
    return max
};
