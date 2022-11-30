/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  
    const memo = [...Array(s.length)].map(() => Array(s.length).fill(0));
    
    function run(start, end) {
      if (memo[start][end]) return memo[start][end]
      if (start === end) return 1;
      if (start > end) return 0;

      if (s[start] === s[end]) return memo[start][end] = 2 + run(start + 1, end - 1)
      else return memo[start][end] = Math.max(run(start + 1, end), run(start, end -1))
    }
    
    return run(0, s.length-1);
};