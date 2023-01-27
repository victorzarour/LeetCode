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
  const stack = [[ root, 0 ]], map = new Map()
  let max = -Infinity
  
  while (stack.length) {
    const [ current, level ] = stack.pop()
    max = Math.max(map.get(level) || current.val, current.val)
    map.set(level, max)
        
    if (current.left) stack.push([ current.left, level + 1 ])
    if (current.right) stack.push([ current.right, level + 1])
  }
  return [...map.values()]
};