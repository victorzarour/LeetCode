/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            break;
        } else if (i === 0) {
            digits[0] = 0
            digits = [1].concat(digits)
            break;
        } else {
            digits[i] = 0
        }
    }
    return digits
    
};