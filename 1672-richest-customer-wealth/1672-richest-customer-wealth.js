/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = -Infinity
    
    for (let account of accounts) {
        let sum = 0
        for (let cash of account) {
            sum += cash
        }
        max = Math.max(max, sum)
    }
    return max
};