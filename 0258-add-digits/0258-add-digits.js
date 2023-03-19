/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = String(num)
    
    while (num.length > 1) {
        let sum = 0
        for (let digit of num) {
            sum += (digit - "0")
        }
        num = String(sum)
    }
    return Number(num)
};