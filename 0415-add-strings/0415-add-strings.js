/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // return String(BigInt(num1) + BigInt(num2))
    let i = num1.length - 1
    let j = num2.length - 1
    let sum = ""
    let carry = 0
    
    while (i >= 0 || j >= 0 || carry > 0) {
        const firstDigit = i >= 0 ? num1[i] - "0": 0
        const secondDigit = j >= 0 ? num2[j] - "0": 0
        const digitSum = firstDigit + secondDigit + carry
        
        sum = (digitSum >= 10 ? digitSum % 10 : digitSum) + sum
        carry = digitSum >= 10 ? 1 : 0
        
        i--
        j--
    }
    return sum
};

