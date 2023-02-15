/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    return String(BigInt(num.join("")) + BigInt(k)).split("").map(num => Number(num)) 
    
//     const sum = BigInt(num.join("")) + BigInt(k)
    
//     const array = Array.from(String(sum), num => Number(num))
    
    // return array
//     let string = ""
    
//     for (let n of num) {
//         string += n
//     }
    
//     const sum = BigInt(string) + BigInt(k)
//     return Array.from(String(sum), num => Number(num))
};