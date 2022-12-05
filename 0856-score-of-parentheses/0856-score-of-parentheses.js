/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  const stack = [0]
  
  for (let char of s){
    if (char === '(') stack.push(0)
    else {
      const popped = stack.pop()
      if (popped === 0) stack[stack.length - 1] += 1
      else stack[stack.length - 1] += 2 * popped
    }
  }
      
  return stack.pop()
};