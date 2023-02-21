/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNonDuplicate = function(nums) {
    let lo = 0, hi = nums.length - 1
    
    while (lo < hi) {
        let mid = (hi + lo) / 2
        if (mid % 2 === 1) mid--
        if (nums[mid] === nums[mid + 1]) lo = mid + 2
        else hi = mid
    }
    return nums[lo]
}