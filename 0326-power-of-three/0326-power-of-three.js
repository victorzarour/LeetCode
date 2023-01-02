/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 0) return false
    while (n % 1 === 0 && n > 1){
        n /= 3
    }
    return (n === 1)
};