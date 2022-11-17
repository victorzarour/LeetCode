/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const nums = [0, 1, 1]
    if (n < nums.length) return nums[n]
    
    for (let i = 3; i <= n; i++){
        nums[i] = nums[i - 1] + nums[i - 2]
    }
    
    return nums[nums.length - 1]
};