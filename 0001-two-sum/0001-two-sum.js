/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // for (let i = 0; i < nums.length; i++){
    //     for (let j = 1; j < nums.length && i !== j; j++){
    //         if (nums[i] + nums[j] === target) return [i, j]
    //     }
    // }
    
    let map = new Map()
    
    for (let i = 0; i < nums.length; i++){
        let needed = target - nums[i]
        if (map.has(needed)) return [map.get(needed), i]
        else (map.set(nums[i], i))
    }
};