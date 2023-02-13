/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
//     let count = 0
    
//     for (let i = low; i <= high; i++) {
//         if (i % 2 === 1) count++
//     }
//     return count
    
    if (low % 2 === 0) low++   
    if (high % 2 === 0) high-- 
    
    return (high - low) / 2 + 1
};

