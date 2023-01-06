/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const array = []
    
    for (let i = 0, start = nums[0]; i < nums.length; i++) {
        if (nums[i + 1] !== nums[i] + 1) {
            array.push(start === nums[i] ? `${start}` : `${start}->${nums[i]}`)
            start = nums[i + 1]
        }
    }
    
    return array
};