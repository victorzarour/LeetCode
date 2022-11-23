/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function(n, memo = {}) {
//     if (n === 0) return 0
//     if (n === 1 || n === 2) return 1
//     if (n in memo) return memo[n]
    
//     memo[n] = tribonacci(n - 3, memo) + tribonacci(n - 2, memo) + tribonacci(n - 1, memo)
//     return memo[n]
// };

var tribonacci = function(n) {
    let arr = [0, 1, 1]
    
    for (let i = 3; i <= n; i++){
        arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1]
    }
    
    return arr[n]
};