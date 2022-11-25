/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     if (!nums.length) return 0
//     let prev1 = 0
//     let prev2 = 0
    
//     for (let num of nums){
//         const temp = prev1
//         prev1 = Math.max(prev2 + num, prev1)
//         prev2 = temp
//     }
//     return prev1
// };

var rob = function(nums, i = 0, memo = {}) {
    if (i >= nums.length) return 0
    if (i in memo) return memo[i]
    
    const include = nums[i] + rob(nums, i + 2, memo)
    const exclude = rob(nums, i + 1, memo)
    
    return memo[i] = Math.max(include, exclude)   
}

