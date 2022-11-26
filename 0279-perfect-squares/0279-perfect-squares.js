/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n, memo = {}) {
  if (n === 0) return 0
  if (n in memo) return memo[n]
  
  let min = Infinity
  for (let i = 1; i <= Math.sqrt(n); i++){
    const square = i * i
    const numSq = 1 + numSquares(n - square, memo)
    min = Math.min(min, numSq)
  }  
  return memo[n] = min
};