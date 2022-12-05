/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  const stack = [0]
  
  for (let char of s){
    if (char === '(') stack.push(0)
    if (char === ')') {
      if (stack[stack.length - 1] === 0){
        stack.pop()
        stack.push(stack.pop() + 1)
      } 
      else stack.push((stack.pop() * 2) + stack.pop())
    }
  }
  return stack.pop()
};