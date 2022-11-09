/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let start=0, end=nums.length-1; 
    while (start <= end) {
        let mid=Math.floor((start + end)/2)
        if (nums[mid]===target) 
            return true
        else if (nums[mid] == nums[start] && nums[mid] == nums[end]) {
            start++
            end--
        }
        else if (nums[start] <= nums[mid])  {
            if (nums[start] <= target && nums[mid] > target) end = mid - 1
            else start = mid + 1
        }
        else {
            if (nums[mid] < target && nums[end] >= target) start = mid + 1
            else end = mid - 1
        }
    } 
    return false; 
};