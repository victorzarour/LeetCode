/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins, i = 0, memo = {}) {
    const key = amount + ',' + i
    if (key in memo) return memo[key]
    if (amount === 0) return 1
 
    const coin = coins[i]
    let total = 0
    
    for (let qty = 0; qty * coin <= amount; qty++){
        const remainder = amount - (qty * coin)
        total += change(remainder, coins, i + 1, memo)    
    }
    
    return memo[key] = total    
};