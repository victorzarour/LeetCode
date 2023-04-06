/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let substrings = [], count = 0
    for (let i = 0; i < s.length - 2; i++) {
        let substring = s[i] + s[i + 1] + s[i + 2]
        substrings.push(substring)
    }
    
    for (let substring of substrings) {
        if (substring[0] !== substring[1] && substring[1] !== substring[2] && substring[0] !== substring[2]) count++
    }
    return count
};