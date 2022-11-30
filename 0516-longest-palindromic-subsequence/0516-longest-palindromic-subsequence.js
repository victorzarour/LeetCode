/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(str, start = 0, end = str.length - 1, memo = {}) {
  const key = start + ',' + end
  
  if (key in memo) return memo[key]
  if (start === end) return 1;
  if (start > end) return 0;
  
  if (str[start] === str[end]){
    return memo[key] = 2 + longestPalindromeSubseq(str, start + 1, end - 1, memo)
  }
  else {
    let right = longestPalindromeSubseq(str, start, end - 1, memo)
    let left = longestPalindromeSubseq(str, start + 1, end, memo)
    return memo[key] = Math.max(right, left)
  }
};