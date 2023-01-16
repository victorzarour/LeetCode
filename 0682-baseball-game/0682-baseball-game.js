/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = []
    
    for (let op of operations) {
        if (op === '+') stack.push(Number(stack[stack.length - 1]) + Number(stack[stack.length - 2]))
        else if (op === "D") stack.push((stack[stack.length - 1] * 2))
        else if (op === "C") stack.pop()
        else stack.push(Number(op))
    }
    
   return stack.reduce((partialSum, a) => partialSum + a, 0)
};