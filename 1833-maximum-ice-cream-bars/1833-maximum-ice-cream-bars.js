/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs = costs.sort((a, b) => a-b)
    let max = 0
    console.log(costs)
    for (let cost of costs) {
        if (coins < 1 || coins < cost) break
        max++
        coins -= cost
    }
    return max
};