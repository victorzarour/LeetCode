/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let min = 0, curEnd = 0, curFar = 0
    
    for (let i = 0; i < nums.length - 1; i++) {
        curFar = Math.max(curFar, i + nums[i])
        
        if (i === curEnd) {
            min++
            curEnd = curFar
        }
    }
    return min
};