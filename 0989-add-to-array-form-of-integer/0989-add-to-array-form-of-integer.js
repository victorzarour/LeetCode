/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    // return String(BigInt(num.join("")) + BigInt(k)).split("").map(num => Number(num)) 
    
    const sum = BigInt(num.join("")) + BigInt(k)
    
    const array = Array.from(String(sum), num => Number(num))
    
    return array
};