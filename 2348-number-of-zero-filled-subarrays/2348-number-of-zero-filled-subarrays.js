/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0, subArray = 0
    
    for (let num of nums) {
        if (num === 0) subArray++
        else subArray = 0
        count += subArray
    }
    return count
};
