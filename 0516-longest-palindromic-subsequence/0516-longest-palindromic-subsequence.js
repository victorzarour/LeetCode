/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  
    const memo = [...Array(s.length)].map(() => Array());
    
    function find(start, end) {
      if (memo[start][end]) return memo[start][end]
      if (start === end) return 1;
      if (start > end) return 0;

      if (s[start] === s[end]) return memo[start][end] = 2 + find(start + 1, end - 1)
      else return memo[start][end] = Math.max(find(start + 1, end), find(start, end -1))
    }
    
    return find(0, s.length-1);
};