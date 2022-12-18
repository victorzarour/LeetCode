/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function(s) {
    let i = 0
    let j = s.length - 1
    
    while (i <= j){
        if (s[i] !== s[j]) {
            return _validPalindrome(s, i, j - 1) || _validPalindrome(s, i + 1, j)
        }
        i++
        j--
    }
    return true
}

var _validPalindrome = function(s, i, j) {
    while (i <= j) {
        if (s[i] !== s[j]) return false
        i++
        j--
    }
    return true
};