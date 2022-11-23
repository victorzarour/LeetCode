/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//     const nums = [0, 1, 1]
//     if (n < nums.length) return nums[n]
    
//     for (let i = 3; i <= n; i++){
//         nums[i] = nums[i - 1] + nums[i - 2]
//     }
    
//     return nums[n]
// };

var fib = function(n) {
    const memo = {0: 0, 1: 1}

    if (n in memo) return memo[n]

    memo[n] = fib(n - 1) + fib(n - 2)

    return memo[n]
}