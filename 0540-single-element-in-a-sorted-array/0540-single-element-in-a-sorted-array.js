/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let map = new Map()
    
    for (let num of nums) {
        map.set(num, map.get(num) + 1 || 1)
    }
    
    for (let [ key, value ] of map) {
        if (value !== 2) return key
    } 
};