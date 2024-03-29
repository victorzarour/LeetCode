/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, sum = "", carry = 0
    
    while (i >= 0 || j >= 0) {
        const first = i < 0 ? 0 : num1[i] - "0"
        const second = j < 0 ? 0 : num2[j] - "0"
        const tempSum = first + second + carry
        
        sum = (tempSum < 10 ? tempSum : tempSum % 10) + sum
        carry = tempSum < 10 ? 0 : 1
        
        i--
        j--
    }
    
    return carry === 0 ? sum : "1" + sum
};



