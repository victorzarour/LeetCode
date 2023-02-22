/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    
    let low = Math.max(...weights)
    let high = weights.reduce((sum, a) => sum + a)
    
    while (low < high) {
        let mid = Math.floor((high + low) / 2)
        let sum = 0, count = 1
        
        for (let weight of weights) {
            if (sum + weight > mid) {
                count++
                sum = weight
            } else sum += weight
        }
        
        if (count > days) low = mid + 1
        else high = mid
    }
    return low
};
