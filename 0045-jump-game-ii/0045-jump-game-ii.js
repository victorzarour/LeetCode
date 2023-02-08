/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let min = 0, current = 0, farthest = 0
    
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i])
        
        if (i === current) {
            min++
            current = farthest
        }
    }
    return min
};