/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const find = (nums, target, isFirst) => {
        let left = 0, right = nums.length - 1
    
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            if (nums[mid] === target) {
                if (isFirst) {
                    if ( nums[mid - 1] !== target) return mid
                    right = mid - 1
                } else {
                    if (mid === right || nums[mid + 1] !== target) return mid
                    left = mid + 1
                }
            } 
            else if (nums[mid] > target) right = mid - 1
            else left = mid + 1 
        }
        return -1
    }
    
    let first = find(nums, target, true)
    
    if (first === -1) return [-1, -1]
    
    let last = find(nums, target, false)
    
    let left = 0, right = nums.length - 1
    
    return [first, last]
    
};


     