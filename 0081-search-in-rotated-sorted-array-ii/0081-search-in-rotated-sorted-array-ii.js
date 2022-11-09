/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
        for (let num of nums){
        if (num === target) return true
    }
    
    return false
};