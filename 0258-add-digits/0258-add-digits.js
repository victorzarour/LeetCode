/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = String(num)
    let sum
    
    while (num.length > 1) {
        sum = 0
        for (let digit of num) {
            sum += (digit - "0")
        }
        num = String(sum)
    }
    return Number(num)
};