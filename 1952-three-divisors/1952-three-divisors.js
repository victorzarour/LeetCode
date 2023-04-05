/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let divisors = 0
    
    for (let i = 1; i <= n; i++) {
        if (divisors <= 3) {
            if (n % i === 0) divisors++
        } else return false
    }
    
    
    return divisors === 3
};