/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  
    const memo = [...Array(s.length)].map(() => Array(s.length).fill(0));
    
    function run(i, j) {
        if(i === j) return 1;
        if(i > j) return 0;
        if(memo[i][j]) return memo[i][j]
        
        if(s[i] === s[j]) return memo[i][j] = run(i+1, j-1) + 2;
        else return memo[i][j] = Math.max(run(i+1, j), run(i, j-1));

    }
    return run(0, s.length-1);
};