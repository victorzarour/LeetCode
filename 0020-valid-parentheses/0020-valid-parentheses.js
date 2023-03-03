/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    const stack = []
    
    for (let char of s){
        if (brackets[char]) stack.push(brackets[char])
        else if (stack.pop() !== char) return false
    }
    
    return (stack.length === 0)
};