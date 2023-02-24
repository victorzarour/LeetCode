/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let min = 1, max = n
    
    while (min < max) {
        let mid = Math.floor((max + min) / 2)
        if (guess(mid) === 0) return mid
        if (guess(mid) === 1) {
            min = mid + 1
        } else max = mid
    }
    return min
};

//   let r = n
//   let l = 1
//   let mid = 0
//     while(l <= r){
//       mid = Math.floor((l+r)/2)
//       let res = guess(mid)
//       if(res === 0){
//        return mid
//       }else if(res === 1){ /// higher
//         l = mid+1
//       }else{
//         r = mid-1;
//       }
//     }    
//   return mid
// };