/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// var shipWithinDays = function(weights, days) {
    
//     let minCapacity = weights[weights.length - 1]
//     let maxCapacity = weights.reduce((sum, a) => sum + a)
    
//     while (minCapacity < maxCapacity) {
//         let midCapacity = Math.floor((maxCapacity + minCapacity) / 2)
        
//         let sum = 0, count = 1
        
//         for (let weight of weights) {
//             if (sum + weight > midCapacity) {
//                 count++
//                 sum = weight
//             } else sum += weight
//         }
        
//         if (count > days) minCapacity = midCapacity + 1
//         else maxCapacity = midCapacity
//     }
//     return minCapacity
// };

function shipWithinDays(weights, days) {
  let low = Math.max(...weights);
  let high = weights.reduce((acc, cur) => acc + cur);

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    let sum = 0;
    let count = 1;

    for (let i = 0; i < weights.length; i++) {
      if (sum + weights[i] > mid) {
        count++;
        sum = weights[i];
      } else {
        sum += weights[i];
      }
    }

    if (count > days) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}
