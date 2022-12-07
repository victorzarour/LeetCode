/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//   reverseString = s.split("").reverse().join("").toLowerCase()
//   return s.toLowerCase().replace(/[^0-9a-z]/gi, '')  == reverseString.replace(/[^0-9a-z]/gi, '')
// };

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[_\W]/g,'')
    let i = 0
    let j = s.length - 1
    
    while (i <= j) {
        if (s[i] !== s[j]) return false
        i++
        j--
    }
    return true
}