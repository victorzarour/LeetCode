/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
//     const sorted = nums.sort((a, b) => a-b)
    
//     for (let i = 0; i < sorted.length; i+= 2){
//         if (sorted[i] !== sorted[i+1]) return sorted[i]
//     }
    
    const map = new Map()
    
    for (let num of nums){
        map.set(num, map.get(num) + 1 || 1)
    }
    
    for (let [key, val] of map){
        if (val === 1) return key
    }
    
    
};