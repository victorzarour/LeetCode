/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  
    let i = 0;
    let middle;
    let j = nums.length
    
    while (i <= j){
        middle = Math.floor((i + j) / 2);
        
        if (nums[middle] === target) {
            return middle
        } else if (nums[middle] < target) {
            i = middle + 1
        } else {
            j = middle - 1
        }
    }
    return i
    
};

// nums = [1,3,5,6]   7
                 // m 
                 //   i 
                 //   j