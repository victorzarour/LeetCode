/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    
    let nums2 = []
    
    for (let i = 0; i < n; i++){
        nums2.push(nums[i])
        nums2.push(nums[i + n])
    }
    
    return nums2
};