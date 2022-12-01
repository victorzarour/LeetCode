/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map()
    
    for (let num of nums){
        map.set(num, map.get(num) + 1|| 1)    
    }
    
    for (let [key, value] of map){
        if (value > nums.length / 2) return key
    }
};