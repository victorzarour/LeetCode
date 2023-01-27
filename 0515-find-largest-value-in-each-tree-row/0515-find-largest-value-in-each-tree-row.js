/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return []
  const stack = [[ root, 0 ]], array = []
  let max
  
  while (stack.length) {
    const [ current, level ] = stack.pop()
    max = Math.max(array[level] || -Infinity, current.val)
    array[level] = max
        
    if (current.left) stack.push([ current.left, level + 1 ])
    if (current.right) stack.push([ current.right, level + 1])
  }
  return array
};