/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    
    let depth = 0
    let maxDepth = 0
    
    for (let char of s){
        if (char === "(") depth++
        else if (char === ")") depth--
        
        maxDepth = Math.max(maxDepth, depth)
    }
    
    return maxDepth    
};