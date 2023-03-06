/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
//     const array = [], set = new Set(arr)
    
//     for (let i = 1; array.length < k; i++) {
//         if (!set.has(i)) array.push(i)
//     }
        
//     return array[k - 1]
    
    let left = 0, right = arr.length - 1
    
    while (left <= right) {
        let pivot = Math.floor((right + left) / 2)
        
        if (arr[pivot] - pivot - 1 < k) left = pivot + 1
        else right = pivot - 1
    }
    
    return left + k
};