/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let duplicate, missing
    
    const map = new Set()
    
    for (let num of nums) {
        if (!map.has(num)) map.add(num)
        else duplicate = num
    }
    
    console.log(map)
    
    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) missing = i
    }
    
    return [duplicate, missing]
};