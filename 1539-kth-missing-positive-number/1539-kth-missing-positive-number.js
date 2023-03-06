/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const array = [], set = new Set(arr)
    
    for (let i = 1; array.length < k; i++) {
        if (!set.has(i)) array.push(i)
    }
        
    return array[k - 1]
};