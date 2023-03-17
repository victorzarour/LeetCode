/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const n = nums.length / 2, map = new Map()
    
    for (let num of nums) {
        map.set(num, map.get(num) + 1 || 1)
    }
    
    for (let [ key, value ] of map) {
        if (value === n) return key
    }
};