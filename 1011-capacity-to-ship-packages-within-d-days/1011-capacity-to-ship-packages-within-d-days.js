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
            sum += weight
            if (sum > mid) {
                count++
                sum = weight
            }
        }
        
        if (count > days) low = mid + 1
        else high = mid
    }
    return low
};


//  weights = [1,2,3,4,5,6,7,8,9,10]
//  10, 55
