/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const set = new Set(nums), array = []
    
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) array.push(i) 
    }
    
    return array
};