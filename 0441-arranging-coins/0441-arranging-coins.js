/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let count = 0
    for (let i = 1; n > 0; i++){
        n -= i
        if (n >= 0) count++
    }
    return count
};