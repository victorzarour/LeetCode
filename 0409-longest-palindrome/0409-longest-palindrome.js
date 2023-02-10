/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const set = new Set()
    let count = 0
    
    for (let letter of s) {
        if (set.has(letter)) {
            count += 2
            set.delete(letter)
        } else set.add(letter)
    }
    
    return count + (set.size > 0 ? 1 : 0)
};