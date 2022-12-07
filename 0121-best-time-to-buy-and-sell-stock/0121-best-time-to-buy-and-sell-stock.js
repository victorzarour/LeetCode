/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowPrice = Infinity
    let profit = 0
    
    for (let price of prices){
        lowPrice = Math.min(lowPrice, price)
        profit = Math.max(profit, price - lowPrice)
    }
    return profit
};