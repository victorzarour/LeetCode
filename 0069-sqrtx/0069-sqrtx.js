/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (!x) return x
    let sqrt
    
    for (let i = 1; i * i <= x; i++){
        sqrt = i
    }
    return sqrt 
};