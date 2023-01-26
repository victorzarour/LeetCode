/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    num = num.toString().split("").sort();
    return (Number(num[0]+num[2]) + Number(num[1]+num[3]) )
//     num = String(num).split("")
//     const arrays = []
    
//     arrays.push(num[0] + num[1])
    
//     let min = Infinity
        
//     for (let [ 1, 2 ] of arrays) {
//         min = Math.min(1 + 2)
//     }
//     return min
};