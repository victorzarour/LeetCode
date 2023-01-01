/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let dup, missing
    
    const map = {}
    
    for (let num of nums) {
        if (!(num in map)) map[num] = 1
        else dup = num
    }
    
    for (let i = 1; i <= nums.length; i++) {
        if (!(i in map)) missing = i
    }
    
    return [dup, missing]
};