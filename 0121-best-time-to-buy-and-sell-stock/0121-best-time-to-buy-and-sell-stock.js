/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let low = Infinity
    let profit = 0
    
    for (let price of prices){
        if (price < low) low = price
        if (price - low > profit) profit = price - low
    }

    return profit
    
};