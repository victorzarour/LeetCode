/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, r = 0, c = 0, memo = {}) {
  const pos = r + ',' + c
  
  if (pos in memo) return memo[pos]
  if (r === m || c === n) return 0
  if (r === m - 1 && c === n - 1) return 1
  
  return memo[pos] = uniquePaths(m, n, r + 1, c, memo) + uniquePaths(m, n, r, c + 1, memo);
};