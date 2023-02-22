/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    
  let low = Math.max(...weights);
  let high = weights.reduce((acc, cur) => acc + cur);
    
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

// function shipWithinDays(weights, days) {
//   let low = Math.max(...weights);
//   let high = weights.reduce((acc, cur) => acc + cur);

//   while (low < high) {
//     const mid = Math.floor((low + high) / 2);
//     let sum = 0;
//     let count = 1;

//     for (let i = 0; i < weights.length; i++) {
//       if (sum + weights[i] > mid) {
//         count++;
//         sum = weights[i];
//       } else {
//         sum += weights[i];
//       }
//     }

//     if (count > days) {
//       low = mid + 1;
//     } else {
//       high = mid;
//     }
//   }

//   return low;
// }
