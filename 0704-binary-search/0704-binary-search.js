/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] === target) return i        
//     }
    
//     return -1
    
    let beginning = 0
    let end = nums.length - 1
    
    while (beginning <= end){
        let mid = Math.floor((end + beginning) / 2)
        if (nums[mid] === target) return mid
        if (target > nums[mid]) beginning = mid + 1
        if (target < nums[mid]) end = mid - 1
    }
    return -1    
};