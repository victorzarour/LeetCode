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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    const set = new Set(), stack = [ root ]
    
    while (stack.length) {
        const current = stack.pop()
        set.add(current.val)
        
        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }
    if (set.size === 1) return -1
    return Array.from(set).sort((a, b) => a-b)[1]
};