/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let duplicate, missing
    
    const set = new Set()
    
    for (let num of nums) {
        if (!set.has(num)) set.add(num)
        else duplicate = num
    }
    
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) missing = i
    }
    
    return [duplicate, missing]
};