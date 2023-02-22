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
    
//        let low = Math.max(...weights)
//     let high = weights.reduce((sum, a) => sum + a)
    
//     while (low < high) {
//         let mid = Math.floor((high + low) / 2)
//         let sum = 0, count = 1
        
//         for (let weight of weights) {
//             sum += weight
//             if (sum > mid) {
//                 count++
//                 sum = weight
//             }
//         }
        
//         if (count > days) low = mid + 1
//         else high = mid
//     }
//     return low


