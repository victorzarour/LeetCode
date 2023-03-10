/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let countNeg = 0, countPos = 0
    for (let num of nums) {
        if (num > 0) countPos++
        else if (num < 0) countNeg++
    }
    return Math.max(countNeg, countPos)
};