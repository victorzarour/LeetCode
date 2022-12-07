/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let max = -Infinity
//     let count = 0

//     for (let i = 0; i < nums.length; i++){
//         for (let j = i; j < nums.length; j++){
//             count += nums[j]
//             max = Math.max(max, count)
//         }
//         count = 0
//     }
//     return max   
// };

var maxSubArray = function(nums) {
    let current = nums[0]
    let max = nums[0]
    
    for (let i = 1; i < nums.length; i++){
        let num = nums[i]
        current = Math.max(num, current + num)
        max = Math.max(max, current)
    }
    return max
};