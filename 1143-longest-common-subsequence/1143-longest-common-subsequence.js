/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
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
};