/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1, sum = 0
    for (let num of String(n)) {
        product *= Number(num)
        sum += Number(num)
    }
    return product - sum
};