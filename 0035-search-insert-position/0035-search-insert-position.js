/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let s = 0, m = Math.floor(nums.length / 2), l = nums.length - 1
    
    while (s <= l) {
        m = Math.floor((s + l) / 2)
        if (nums[m] === target) return m
        else if (nums[m] > target) l = m - 1
        else s = m + 1
    }
    return s
};

// [1, 3, 5, 6]
//     s     
//     m
//  l
