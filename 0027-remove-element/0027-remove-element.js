/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    let low = 0
    let high = nums.length - 1
    
    // if (nums.length === 1 && nums[0] !== val) return nums
    // if (nums.length === 1 && nums[0] == val) return []
    
    while (low <= high){
        if (nums[low] == val && nums[high] !== val){
            [nums[low], nums[high]] = [nums[high], nums[low]] 
            low++
            high--
        } 
        if (nums[low] !== val && nums[high] !== val) low++
        if (nums[low] == val && nums[high] == val) high--
        if (nums[low] !== val && nums[high] == val) high--
    }
    if (low === high) return nums
    else return low
    
};