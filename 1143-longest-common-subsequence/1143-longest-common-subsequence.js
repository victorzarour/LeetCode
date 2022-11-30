/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// var longestCommonSubsequence = function(text1, text2) {
//     const m = text1.length;
//     const memo = [...Array(m)].map(() => Array());
    
//     function find(i, j){
//         if (i >= text1.length || j >= text2.length) return 0
//         if (memo[i][j]) return memo[i][j]
        
//         if (text1[i] === text2[j]) return memo[i][j] = 1 + find(i + 1, j + 1)
//         else return memo[i][j] = Math.max(find(i + 1, j), find(i, j + 1))
//     }
    
//     return find(0, 0)
// }

var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const memo = Array.from({ length: m }, () => new Uint16Array(n));

    return recursion(m - 1, n - 1);
    
    function recursion(index1, index2) {
        if (index1 < 0 || index2 < 0) return 0;

        if (memo[index1][index2]) return memo[index1][index2];

        let result;

        if (text1[index1] === text2[index2]) {
            result = recursion(index1 - 1, index2 - 1) + 1;
        } else {
            result = Math.max(recursion(index1, index2 - 1), recursion(index1 - 1, index2));
        }

        memo[index1][index2] = result;
        return result;
    }
}