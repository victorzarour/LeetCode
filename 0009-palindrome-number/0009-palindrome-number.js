/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString()
    let middle = Math.floor(string.length/2)
    let left = string.slice(0, middle)
    let right = string.slice(middle)
    let rightIndex = right.length-1
    
    if (string.length === 1) return true
    
    for (let i = 0; i < left.length; i++){
        if (left[i] !== right[rightIndex]) return false
        else rightIndex -= 1
    }
    return true
    
};