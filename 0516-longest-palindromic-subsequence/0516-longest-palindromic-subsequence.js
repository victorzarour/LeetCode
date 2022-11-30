/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
 
    
    function run(i, j, memo = {}) {
        const key = i + ',' + j
        if(key in memo) return memo[key]
        if(i === j) return 1;
        if(i > j) return 0;
     
        if(s[i] === s[j]) memo[key] = run(i+1, j-1, memo) + 2;
        else memo[key] = Math.max(run(i+1, j, memo), run(i, j-1, memo));
        
        return memo[key]
    }
    return run(0, s.length-1);
};