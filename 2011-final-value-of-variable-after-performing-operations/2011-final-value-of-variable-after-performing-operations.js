/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {

    let x = 0
    
    for (op of operations){
        if (op[1] === "+") x++
        else x--
    }
    
    return x
    
};