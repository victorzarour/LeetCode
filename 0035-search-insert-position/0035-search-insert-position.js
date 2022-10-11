/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  
   i = 0;
    let middle;
    j = nums.length
    while (i <= j ){
        middle = Math.floor((i+j)/2);
        if(nums[middle] === target){
            return middle
        }
        if(nums[middle] < target){
            i = middle + 1
        }
        else{
            j = middle - 1
        }
    }
    return i
    
};