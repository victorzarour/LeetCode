/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[(i + 1) % nums.length]) k++
        if (k > 1) return false
    }
    return true;
};