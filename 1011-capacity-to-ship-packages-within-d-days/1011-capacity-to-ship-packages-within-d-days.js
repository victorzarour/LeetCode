/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let min = Math.max(...weights)
    let max = weights.reduce((sum, a) => sum + a)
    
    while (min < max) {
        let mid = Math.floor((max + min) / 2)
        let sum = 0, count = 1
        
        for (let weight of weights) {
            sum += weight
            if (sum > mid) {
                count++
                sum = weight
            }
        }

        if (count > days) min = mid + 1
        else max = mid        
    }
    return min
};
    
// 10 55
//   32

// 10 32
//   21

// 10 21
//   15

// 10 15
//   12

// 13 15
//   14

// 15 15
// return 1


