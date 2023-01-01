/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let n = 1
    let i = 0
    let sum = 0
    
    while (i < nums.length) {
        if (i === 0) sum += n
        sum += nums[i]
        if (sum < 1) {
            n++
            sum = 0
            i = 0
        }
        else i++
    }
    return n
};