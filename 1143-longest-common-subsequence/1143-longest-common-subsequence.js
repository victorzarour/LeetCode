/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const memo = Array.from({ length: m }, () => new Uint16Array(n));
    
    function find(i, j){
        if (i >= text1.length || j >= text2.length) return 0
        if (memo[i][j]) return memo[i][j]
        
        if (text1[i] === text2[j]) return memo[i][j] = 1 + find(i + 1, j + 1)
        else return memo[i][j] = Math.max(find(i + 1, j), find(i, j + 1))
    }
    
    return find(0, 0)
}
