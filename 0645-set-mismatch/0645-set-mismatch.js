/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let dup, missing
    
    const map = new Map()
    
    for (let num of nums) {
        if (!map.has(num)) map.set(num, 1)
        else dup = num
    }
    
    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) missing = i
    }
    
    return [dup, missing]
};